import {
  rustParser,
  SimpleContext,
  // MultiplyContext,
  // AddContext,
  // NumberContext,
  // ParenExprContext,
  SimpleVariantContext,
  StructVariantContext,
  StructInitContext,
  Expression_stmtContext,
  Function_declContext,
  FunctionCallContext,
  Return_stmtContext,
  BlockContext,
  Let_stmtContext,
  Assign_stmtContext,
  StartContext,
  StatementContext,
  VariableReferenceContext,
  FieldAccessContext,
  Enum_declContext,
  EnumAccessContext,
  EnumStructInitContext,
  MatchExprContext,
  ExpressionContext,
  BoolLiteralContext,
  If_stmtContext,
  While_stmtContext,
  For_stmtContext,
  PrintlnMacroContext,
  // RefExprContext,
  // RefMutExprContext,
  // DereferenceContext,
  IdentLhsContext,
  DerefLhsContext,
  StringLiteralContext,
  Logical_or_exprContext,
  Logical_and_exprContext,
  Equality_exprContext,
  Relational_exprContext,
  Additive_exprContext,
  Multiplicative_exprContext,
  Unary_exprContext,
  Postfix_exprContext,
  Const_stmtContext,
  Struct_declContext
} from "./parser/rustParser.js";

import { AbstractParseTreeVisitor } from "antlr4ng";
import { rustVisitor } from "./parser/rustVisitor.js";
import { TypeChecker, Type, TypeEnv, extendTypeEnv, FnType, StructType, EnumType} from "./TypeChecker.js";
type ParamInfo = { name: string; mutable: boolean };

const typeChecker = new TypeChecker();

export type Instruction =
  | { tag: 'LDC'; val: any }
  | { tag: 'LD'; sym: string }
  | { tag: 'ASSIGN'; sym: string }
  | { tag: 'UNARY'; sym: string }
  | { tag: 'BINOP'; sym: string }
  | { tag: 'LDF'; prms: ParamInfo[]; addr: number }
  | { tag: 'CALL'; arity: number }
  | { tag: 'TAIL_CALL'; arity: number }
  | { tag: 'RESET' }
  | { tag: 'ENTER_SCOPE'; syms: string[] }
  | { tag: 'EXIT_SCOPE' }
  | { tag: 'GOTO'; addr: number }
  | { tag: 'JOF'; addr: number }
  | { tag: 'POP' }
  | { tag: 'DONE' } 
  | { tag: 'SPAWN' }         
  | { tag: 'YIELD' }          
  | { tag: 'JOIN' }
  | { tag: 'GETFIELD' }
  | { tag: 'PRINT' }
  | { tag: 'REF'; sym: string }
  | { tag: 'REFMUT'; sym: string }
  | { tag: 'DEREF' }
  | { tag: 'DEREF_ASSIGN' }
  | { tag: 'DECL'; sym: string, mutable: boolean }
  | { tag: 'SETFIELD' };

  function isType(t: any): boolean {
    if (t === undefined || typeof t === "string") return true;
  
    if (typeof t !== "object" || t === null) return false;
  
    switch (t.kind) {
      case "fn":
        return Array.isArray(t.params) && isType(t.return);
      case "ref":
        return typeof t.mutable === "boolean" &&
               typeof t.lifetime === "string" &&
               isType(t.base);
      case "array":
        return isType(t.element);
      case "enum":
      case "struct":
        return typeof t.name === "string" && typeof t.fields === "object";
      default:
        return false;
    }
  }
  
export class CompileVisitor
  extends AbstractParseTreeVisitor<void>
  implements rustVisitor<void>
{
  public instrs: Instruction[] = [];
  public typeEnv: TypeEnv = [{}];
  public structDefs: Record<string, StructType> = {};
  public enumDefs: Record<string, EnumType> = {};


  defaultResult(): void {}

  visitSimple(ctx: SimpleContext): void {
    const type = this.inferType(ctx, this.typeEnv);
      const val = Number(ctx.number().NUMBER().getText());
      this.instrs.push({ tag: "LDC", val });
  }
  visitBoolLiteral(ctx: BoolLiteralContext): void {
    const type = this.inferType(ctx, this.typeEnv);
      const val = ctx.BOOL().getText() === "true";
      this.instrs.push({ tag: "LDC", val });
  }

  visitStringLiteral(ctx: StringLiteralContext): void {
    const type = this.inferType(ctx, this.typeEnv);
    const text = ctx.getText(); // includes quotes
    const value = text.slice(1, -1); // strip quotes
    this.instrs.push({ tag: 'LDC', val: value });
  }  

  visitFunctionDecl(ctx: Function_declContext): void {
    const name = ctx.identifier().IDENTIFIER().getText();
    const paramInfos: ParamInfo[] = ctx.parameter_list()
    ? ctx.parameter_list().parameter().map(p => ({
        name: p.identifier().IDENTIFIER().getText(),
        mutable: p.MUT() != null  
      }))
    : [];
    const params = paramInfos.map(p => p.name);
    const body = ctx.block();

    // Infer parameter types and validate them
    const paramTypes: Type[] = ctx.parameter_list()
        ? ctx.parameter_list().parameter().map(p => {
            const t = p.ty()?.getText();
            if (!isType(t)) {
                throw new Error(`Unsupported param type: ${t}`);
            }
            return t as Type;
        })
        : [];

    // Get the return type or default to "undefined"
    const returnType: Type = ctx.ty() ? ctx.ty().getText() as Type : "undefined";

    const fnType: FnType = {
        kind: "fn",
        params: paramTypes,
        return: returnType
    };

    // console.log("FnType:", fnType, "params:", params, "name:", name);

    this.assignType(this.typeEnv, name, fnType);
    // console.log("typeEnv:", this.typeEnv);
    // Extend type environment with parameter bindings
    const extendedEnv = extendTypeEnv(params, paramTypes, this.typeEnv);
    //console.log("extendedEnv:", extendedEnv);

    // Infer function body return type and compare
    let bodyRetType = this.inferFunctionBodyType(body, extendedEnv);
    // console.log("bodyRetType", bodyRetType)
    if (!bodyRetType) {
        bodyRetType = "undefined";
    }

    if (bodyRetType !== returnType) {
        throw new Error(`Type error in function '${name}'; declared return type ${returnType}, actual return type ${bodyRetType}`);
    }

    // Code generation
    const funcAddr = this.instrs.length + 2;
    this.instrs.push({ tag: 'LDF', prms: paramInfos, addr: funcAddr });

    const gotoPlaceholder: Instruction = { tag: 'GOTO', addr: -1 };
     
    this.instrs.push(gotoPlaceholder);

    // Save and restore type environment around visiting function body
    const prevEnv = this.typeEnv;
    this.typeEnv = extendedEnv;
    this.visitFunBlock(body);
    this.typeEnv = prevEnv;
    
    gotoPlaceholder.addr = this.instrs.length;
 
    this.instrs.push({ tag: 'ASSIGN', sym: name });
  }


    visitPrintlnMacro(ctx: PrintlnMacroContext): void {
      const args = ctx.argument_list()?.expression() ?? [];

      for (const expr of args) {
          this.visit(expr); // Push values to stack
      }

      // You could also support printing multiple values
      for (let i = 0; i < args.length; i++) {
          this.instrs.push({ tag: 'PRINT' });
      }

      this.instrs.push({ tag: 'POP' }); // Clean up last expression result if needed
  }

  // visitFunctionCall(ctx: FunctionCallContext): void {
  //     const type = this.inferType(ctx as unknown as ExpressionContext, this.typeEnv);
  //     const name = ctx.identifier().IDENTIFIER().getText();
  //     const args = ctx.argument_list()?.expression() ?? [];
  //     // Special case: spawn(f)
  //     if (name === "spawn") {
  //         this.visit(args[0]); // Compile the function expression
  //         this.instrs.push({ tag: 'SPAWN' });
  //         return;
  //     }
    
  //     this.instrs.push({ tag: 'LD', sym: name });
  //     for (const expr of args) {
  //         this.visit(expr);
  //     }
      
  //     this.instrs.push({ tag: 'CALL', arity: args.length });
  // }

  visitReturn_stmt(ctx: Return_stmtContext): void {
      this.visit(ctx.expression());
      this.instrs.push({ tag: 'RESET' });
  }

  visitBlock(ctx: BlockContext): void {
      const statements = ctx.statement();
      const expr = ctx.expression();
      const localVars: string[] = [];
    //   console.log("statements", statements)

      for (const stmt of statements) {
          const letStmt = stmt.let_stmt?.();
          if (letStmt) {
              const name = letStmt.identifier().IDENTIFIER().getText();
              localVars.push(name);
          }
      }

      this.instrs.push({ tag: 'ENTER_SCOPE', syms: localVars });

      for (const stmt of statements) {
          this.visit(stmt);
          if (!stmt.return_stmt()) {
              this.instrs.push({ tag: 'POP' });
          }
      }
    //   console.log("expr", expr)
      if (expr) {
          this.visit(expr);
           
      }   else {
          this.instrs.push({ tag: 'LDC', val: undefined });
      }

      this.instrs.push({ tag: 'EXIT_SCOPE' });
  }

  visitFunBlock(ctx: BlockContext): void {
    const statements = ctx.statement();
    const expr = ctx.expression();
    const localVars: string[] = [];
  //   console.log("statements", statements)

    for (const stmt of statements) {
        const letStmt = stmt.let_stmt?.();
        if (letStmt) {
            const name = letStmt.identifier().IDENTIFIER().getText();
            localVars.push(name);
        }
    }

    this.instrs.push({ tag: 'ENTER_SCOPE', syms: localVars });

    for (const stmt of statements) {
        this.visit(stmt);
        if (!stmt.return_stmt()) {
            this.instrs.push({ tag: 'POP' });
        }
    }
  //   console.log("expr", expr)
    if (expr) {
        this.visit(expr);
         
        this.instrs.push({ tag: 'RESET' });
        
    }  else {
        this.instrs.push({ tag: 'LDC', val: undefined });
        this.instrs.push({ tag: 'RESET' });
    }

    this.instrs.push({ tag: 'EXIT_SCOPE' });
}
 
visitLet_stmt(ctx: Let_stmtContext): void {
    const isMut = !!ctx.MUT();
 
    const name = ctx.identifier().IDENTIFIER().getText();
    let declaredType: Type | undefined;

    if (ctx.ty()) {
        declaredType = ctx.ty().getText() as Type;
    }

    if (ctx.expression()) {
      console.log("start inferType")
        const inferredType = this.inferType(ctx.expression(), this.typeEnv);
        console.log("inferredType", inferredType)
        if (declaredType && declaredType !== inferredType) {
            throw new Error(`Type mismatch in let: expected ${declaredType}, got ${inferredType}`);
        }
        this.assignType(this.typeEnv, name, inferredType);
        // console.log("end inferType")
        this.visit(ctx.expression());
        // console.log("end visitLet_stmt")
        // this.instrs.push({ tag: 'ASSIGN', sym: name });
    } else {
        if (!declaredType) throw new Error(`Cannot infer type for let-binding without expression or annotation`);
        this.assignType(this.typeEnv, name, declaredType);
        this.instrs.push({ tag: 'LDC', val: undefined });
        // this.instrs.push({ tag: 'ASSIGN', sym: name });
    }
    // console.log("mutable", isMut)
    this.instrs.push({ tag: 'DECL', sym: name, mutable: isMut });
    this.instrs.push({ tag: 'ASSIGN', sym: name });
}

visitConst_stmt(ctx: Const_stmtContext): void {
    const name = ctx.identifier().IDENTIFIER().getText();
    const declaredType = ctx.ty()?.getText() as Type;

    if (!declaredType) {
      throw new Error(`Const '${name}' must have a type annotation`);
    }

    
    const inferredType = this.inferType(ctx.expression(), this.typeEnv);
      if (declaredType && declaredType !== inferredType) {
          throw new Error(`Type mismatch in const: expected ${declaredType}, got ${inferredType}`);
      }
      this.assignType(this.typeEnv, name, inferredType);
      // console.log("end inferType")

      this.visit(ctx.expression());
      this.instrs.push({ tag: "DECL", sym: name, mutable: false });
      this.instrs.push({ tag: "ASSIGN", sym: name });
}

visitAssign_stmt(ctx: Assign_stmtContext): any {
    this.visit(ctx.expression());

    if (ctx.lhs() instanceof IdentLhsContext) {
        const lhs = ctx.lhs() as IdentLhsContext;
        const name = lhs.identifier().getText();
        this.instrs.push({ tag: 'ASSIGN', sym: name });
    } else if (ctx.lhs() instanceof DerefLhsContext) {
        // compile the expression that evaluates to the reference
        this.visit((ctx.lhs() as DerefLhsContext).expression());
        // emit special instruction for deref-assign
        this.instrs.push({ tag: 'DEREF_ASSIGN' });
    }
}

  visitExpression_stmt(ctx: Expression_stmtContext): void {
      this.visit(ctx.expression());
  }
  visitExpression(ctx: ExpressionContext): void {
    this.visit(ctx.logical_or_expr());
}

  visitStatement(ctx: StatementContext): void {
      if (ctx.return_stmt()) {
          this.visitReturn_stmt(ctx.return_stmt()!);
      } else if (ctx.const_stmt()) {
        this.visitConst_stmt(ctx.const_stmt()!);
      } else if (ctx.let_stmt()) {
          this.visitLet_stmt(ctx.let_stmt()!);
      } else if (ctx.assign_stmt()) {
          this.visitAssign_stmt(ctx.assign_stmt()!);
      } else if (ctx.expression_stmt()) {
          this.visitExpression_stmt(ctx.expression_stmt()!);
      } else if (ctx.function_decl()) {
          this.visitFunctionDecl(ctx.function_decl()!);
      } else if (ctx.block()) {
          this.visitBlock(ctx.block()!);
      } else if (ctx.if_stmt()) {
        this.visitIfExpr(ctx.if_stmt());
      } else if (ctx.while_stmt()) {
        this.visitWhileExpr(ctx.while_stmt()!);
      } else if (ctx.for_stmt()) {
        this.visitForExpr(ctx.for_stmt()!);
      } else if (ctx.struct_decl()){
        this.visitStructDecl(ctx.struct_decl()!);
      } else if (ctx.enum_decl()){
        this.visitEnumDecl(ctx.enum_decl()!);
      }
  }

  visitVariableReference(ctx: VariableReferenceContext): void {
    console.log("call visitVariableReference")
      const type = this.inferType(ctx, this.typeEnv);
      const name = ctx.identifier().IDENTIFIER().getText();
      this.instrs.push({ tag: 'LD', sym: name });
      // console.log("finsh visitVariableReference")
  }

//   visitRefExpr(ctx: RefExprContext): void {
//     const expr = ctx.expression();

//     // For now, only allow referencing variables directly (not complex expressions)
//     if (!(expr instanceof VariableReferenceContext)) {
//         throw new Error("Only variables can be borrowed in this simplified model.");
//     }

//     const name = expr.identifier().IDENTIFIER().getText();
//     this.instrs.push({ tag: 'REF', sym: name });
// }

// visitRefMutExpr(ctx: RefMutExprContext): void {
//   const expr = ctx.expression();

//   if (!(expr instanceof VariableReferenceContext)) {
//       throw new Error("Only variables can be mutably borrowed in this simplified model.");
//   }

//   const name = expr.identifier().IDENTIFIER().getText();
//   this.instrs.push({ tag: 'REFMUT', sym: name });
// }

// visitDereference(ctx: DereferenceContext): void {
//   // First, visit the expression inside dereference (e.g., *x).
//   const expr = ctx.expression();
//   this.visit(expr);
//   this.instrs.push({ tag: 'DEREF' });
//   }
  visitStructDecl(ctx: Struct_declContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      const fields = ctx.field_list()?.field_decl() ?? [];
      const fieldTypes: Record<string, Type> = {};
      for (const field of fields) {
          const fieldName = field.identifier().getText();
          const fieldType = field.ty()?.getText() as Type;
          fieldTypes[fieldName] = fieldType;
      }
      this.structDefs[name] = {
        kind: "struct",
        name,
        fields: fieldTypes 
      };
      // console.log("structDefs", this.structDefs)
      this.registerStruct(this.typeEnv, name, fieldTypes);  // <- type check and env update

  }
  visitStructInit(ctx: StructInitContext): void {

    const typeName = ctx.identifier().getText();  
    const fields = ctx.field_init_list()?.field_init() ?? [];
    
    const obj: Record<string, any> = { __struct: typeName };
    this.instrs.push({ tag: 'LDC', val: obj });

    for (const field of fields) {
 
      const fieldName = field.identifier().getText();
       
      if (!(fieldName in this.structDefs[typeName].fields)) {
        throw new Error(`Unknown field '${fieldName}' in struct '${typeName}'`);
      }
  
      this.instrs.push({ tag: 'LDC', val: fieldName });
      this.visit(field.expression());
      this.instrs.push({ tag: 'SETFIELD' });
    }
    
  }
  
  visitEnumDecl(ctx: Enum_declContext): void {
    // console.log("call visitEnumDecl")
    const name = ctx.identifier().IDENTIFIER().getText();
    const variants: Record<string, Type | null> = {};
  
    const variantList = ctx.variant_list()?.variant() ?? [];
  
    for (const variant of variantList) {
      if (variant instanceof SimpleVariantContext) {
        const variantName = variant.identifier().getText();
        variants[variantName] = null; // no associated data
  
      } else if (variant instanceof StructVariantContext) {
        const variantName = variant.identifier().getText();
        const fieldTypes: Record<string, Type> = {};
  
        const fields = variant.field_list()?.field_decl() ?? [];
        for (const field of fields) {
          const fieldName = field.identifier().getText();
          const fieldType = this.structDefs[variantName].fields[fieldName];
          fieldTypes[fieldName] = fieldType;
        }
  
        const structType: StructType = {
          kind: "struct",
          name: `${name}::${variantName}`,
          fields: fieldTypes
        };
        variants[variantName] = structType;
      }
    }
  
    const enumType: EnumType = {
      kind: "enum",
      name,
      variants
    };
  
    this.enumDefs[name] = enumType;
    this.assignType(this.typeEnv, name, enumType);
    this.registerEnum(this.typeEnv, name, variants); // <- type check and env update
    console.log("enumDefs:", this.enumDefs);
  }
  
  // visitEnumAccess(ctx: EnumAccessContext): void {
  //   const enumName = ctx.identifier(0).getText(); // Book
  //   const variant = ctx.identifier(1).getText();  // Papery
  //   this.instrs.push({ tag: 'LDC', val: { __enum: enumName, tag: variant } });
  // }
  
  // visitEnumStructInit(ctx: EnumStructInitContext): void {
  //   const enumName = ctx.identifier(0).getText();
  //   const variant = ctx.identifier(1).getText();
  //   const fields = ctx.field_init_list()?.field_init() ?? [];
  //   const val: any = { __enum: enumName, tag: variant };
  
  //   for (const field of fields) {
  //     const key = field.identifier().getText();
  //     this.visit(field.expression());
  //     this.instrs.push({ tag: 'ASSIGN', sym: key });
  //     this.instrs.push({ tag: 'POP' });
  //   }
  
  //   this.instrs.push({ tag: 'LDC', val });
  // }

  lookupType(env: TypeEnv, sym: string): Type {
    return typeChecker.lookupType(env, sym);
  }
  
  assignType(env: TypeEnv, sym: string, ty: Type): void {
    typeChecker.assignType(env, sym, ty);
  }

  inferType(expr: any, env: TypeEnv): Type {
    // Delegate all type inference to the external TypeChecker
    return typeChecker.inferType(expr, env);
  }
  registerStruct(env: TypeEnv, name: string, fieldTypes: any): void {
    // Delegate struct registration to the external TypeChecker
    typeChecker.registerStruct(env, name, fieldTypes);
  }
  registerEnum(env: TypeEnv, name: string, fieldTypes: any): void {
    // Delegate struct registration to the external TypeChecker
    typeChecker.registerEnum(env, name, fieldTypes);
  }
  inferFunctionBodyType(body: BlockContext, env: TypeEnv): Type {
    // Delegate function body type inference to the external TypeChecker
    return typeChecker.inferFunctionBodyType(body, env);
  }
  
    visitIfExpr(ctx: If_stmtContext): void {
        this.visit(ctx.expression());
        
        // Check the types of the branches

        const thenType = this.inferType(ctx.block(0), this.typeEnv);
        const elseType = ctx.block().length > 1
        ? this.inferType(ctx.block(1), this.typeEnv)
        : "undefined";

        if (thenType !== elseType) {
        throw new Error(`Type mismatch in if branches: then -> ${thenType}, else -> ${elseType}`);
        }
        // end of type checking

        // Emit a JOF (jump on false) with placeholder
        const jofInstr: Instruction = { tag: 'JOF', addr: -1 };
        this.instrs.push(jofInstr);
        

        // Compile the 'then' block
        this.visit(ctx.block(0));

        const gotoAfterThen: Instruction = { tag: 'GOTO', addr: -1 };
        this.instrs.push(gotoAfterThen);

        // Fix the JOF to jump here if condition is false
        jofInstr.addr = this.instrs.length;

        if (ctx.block().length > 1) {
            this.visit(ctx.block(1));
        } else {
            // If there's no else, push undefined as result
            this.instrs.push({ tag: 'LDC', val: undefined });
        }
        // Fix the GOTO to skip over else
        gotoAfterThen.addr = this.instrs.length;

    }

    visitWhileExpr(ctx: While_stmtContext): void {
        const startAddr = this.instrs.length;
    
        // Compile the condition
        this.visit(ctx.expression());
    
        // Insert conditional jump (JOF) with placeholder
        const jofInstr: Instruction = { tag: 'JOF', addr: -1 };
        this.instrs.push(jofInstr);
    
        // Compile the body
        this.visit(ctx.block());
    
        // Jump back to the start to re-evaluate the condition
        this.instrs.push({ tag: 'GOTO', addr: startAddr });
    
        // Update JOF to jump past the loop if condition fails
        jofInstr.addr = this.instrs.length;
    }

    visitForExpr(ctx: For_stmtContext): void {
        const identifier = ctx.identifier().IDENTIFIER().getText();
    
        // Evaluate and store start and end expressions
        this.visit(ctx.expression()[1]); // End expression first for _tmp_end
        this.instrs.push({ tag: 'ASSIGN', sym: '_tmp_end' });
    
        this.visit(ctx.expression()[0]); // Start expression
        this.instrs.push({ tag: 'ASSIGN', sym: identifier }); // Assign start to loop variable
    
        // Enter loop scope
        this.instrs.push({ tag: 'ENTER_SCOPE', syms: [identifier] });
    
        // Save the position of the loop condition
        const loopConditionPos = this.instrs.length;
    
        // Load current loop variable
        this.instrs.push({ tag: 'LD', sym: identifier });
    
        // Load end value
        this.instrs.push({ tag: 'LD', sym: '_tmp_end' });
    
        // Compare: current <= end
        this.instrs.push({ tag: 'BINOP', sym: '<=' });
    
        // Conditional jump (exit loop if false)
        const conditionalJumpPos = this.instrs.length;
        this.instrs.push({ tag: 'JOF', addr: -1 }); // To be patched
    
        // Visit the loop body
        this.visit(ctx.block());
    
        // Increment loop variable
        this.instrs.push({ tag: 'LD', sym: identifier });
        this.instrs.push({ tag: 'LDC', val: 1 });
        this.instrs.push({ tag: 'BINOP', sym: '+' });
        this.instrs.push({ tag: 'ASSIGN', sym: identifier });
    
        // Jump back to loop condition
        this.instrs.push({ tag: 'GOTO', addr: loopConditionPos });
    
        // Patch jump address to instruction after the loop
        (this.instrs[conditionalJumpPos] as { tag: 'JOF', addr: number }).addr = this.instrs.length;
    
        // Exit the loop scope
        this.instrs.push({ tag: 'EXIT_SCOPE' });
    }
    
    visitLogical_or_expr(ctx: Logical_or_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      this.visit(ctx.logical_and_expr(0));
      for (let i = 1; i < ctx.logical_and_expr().length; i++) {
          this.visit(ctx.logical_and_expr(i));
          this.instrs.push({ tag: "BINOP", sym: "||" });
      }
    }
    visitLogical_and_expr(ctx: Logical_and_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      this.visit(ctx.equality_expr(0));
      for (let i = 1; i < ctx.equality_expr().length; i++) {
          this.visit(ctx.equality_expr(i));
          this.instrs.push({ tag: "BINOP", sym: "&&" });
      }
    }
    visitEquality_expr(ctx: Equality_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      this.visit(ctx.relational_expr(0));
      for (let i = 1; i < ctx.relational_expr().length; i++) {
          this.visit(ctx.relational_expr(i));
          const op = ctx.getChild(2 * i - 1).getText(); // '==' or '!='
          this.instrs.push({ tag: "BINOP", sym: op });
      }
    }
    visitRelational_expr(ctx: Relational_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      this.visit(ctx.additive_expr(0));
      for (let i = 1; i < ctx.additive_expr().length; i++) {
          this.visit(ctx.additive_expr(i));
          const op = ctx.getChild(2 * i - 1).getText(); // '<', '<=', '>', '>='
          this.instrs.push({ tag: "BINOP", sym: op });
      }
    }
    visitAdditive_expr(ctx: Additive_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      this.visit(ctx.multiplicative_expr(0));
      for (let i = 1; i < ctx.multiplicative_expr().length; i++) {
          this.visit(ctx.multiplicative_expr(i));
          const op = ctx.getChild(2 * i - 1).getText(); // '+' or '-'
          this.instrs.push({ tag: "BINOP", sym: op });
      }
    }
    visitMultiplicative_expr(ctx: Multiplicative_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      this.visit(ctx.unary_expr(0));
      for (let i = 1; i < ctx.unary_expr().length; i++) {
          this.visit(ctx.unary_expr(i));
          const op = ctx.getChild(2 * i - 1).getText(); // '*', '/', '%'
          this.instrs.push({ tag: "BINOP", sym: op });
      }
    } 
    visitUnary_expr(ctx: Unary_exprContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      if (ctx.unary_expr()) {
          const op = ctx.getChild(0).getText();  // Get the operator: '&', '&mut', '*', '!', '-'
          const operand = ctx.unary_expr();
  
          // Recursively compile the operand first
          this.visit(operand);
  
          if (op === '&') {
              // Ensure operand is a variable reference
              if (!(operand instanceof VariableReferenceContext)) {
                  throw new Error("Only variables can be borrowed in this simplified model.");
              }
              const name = operand.identifier().IDENTIFIER().getText();
              this.instrs.push({ tag: 'REF', sym: name });
  
          } else if (op === '&mut') {
              if (!(operand instanceof VariableReferenceContext)) {
                  throw new Error("Only variables can be mutably borrowed in this simplified model.");
              }
              const name = operand.identifier().IDENTIFIER().getText();
              this.instrs.push({ tag: 'REFMUT', sym: name });
  
          } else if (op === '*') {
              this.instrs.push({ tag: 'DEREF' });
  
          } else if (op === '!') {
              this.instrs.push({ tag: 'UNARY', sym: '!' });
  
          } else if (op === '-') {
              this.instrs.push({ tag: 'UNARY', sym: '-unary' });
  
          } else {
              throw new Error(`Unknown unary operator: ${op}`);
          }
  
      } else {
          this.visit(ctx.postfix_expr());
      }
  }
  visitPostfix_expr(ctx: Postfix_exprContext): void {
    // Step 1: compile base expression
    const type = this.inferType(ctx, this.typeEnv);
    const name = ctx.primary_expr().getText();
    this.visit(ctx.primary_expr());

    // Step 2: process postfix operations
    for (const op of ctx.postfix_op()) {
        if (op instanceof FieldAccessContext) {
            // a.b
            const fieldName = op.identifier().getText();
            this.instrs.push({ tag: 'LDC', val: fieldName });
            this.instrs.push({ tag: 'GETFIELD' });

        } else if (op instanceof EnumAccessContext) {
            // a::B
            console.log("call visitEnumAccess")
            const variant = op.identifier().getText();   // e.g., B
            this.instrs.push({ tag: 'LDC', val: { __enum: name, tag: variant } });

        } else if (op instanceof FunctionCallContext) {
            // a(...)
            this.inferType(ctx, this.typeEnv); 

            const args = op.argument_list()?.expression() ?? [];
             
            for (const expr of args) {
                this.visit(expr);
            }

            // Call function — assumes the function is already on top of the stack
            this.instrs.push({ tag: 'CALL', arity: args.length });

        } else if (op instanceof EnumStructInitContext) {
            // a::B { field1: val1, field2: val2 }
            console.log("call visitEnumStructInit")
            const variant = op.identifier().getText();
            const fields = op.field_init_list()?.field_init() ?? [];

            const val: any = { __enum: name, tag: variant };
            for (const field of fields) {
                const key = field.identifier().getText();
                this.visit(field.expression());
                this.instrs.push({ tag: 'ASSIGN', sym: key });
                this.instrs.push({ tag: 'POP' });
            }

            this.instrs.push({ tag: 'LDC', val });
        }
    }
}
  
}
