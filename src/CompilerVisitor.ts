import {
  rustParser,
  SimpleContext,
  MultiplyContext,
  AddContext,
  NumberContext,
  ParenExprContext,
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
  EnumAccessContext,
  EnumStructInitContext,
  MatchExprContext,
  ExpressionContext,
  BoolLiteralContext,
  If_stmtContext,
  While_stmtContext,
  LogicalAndContext,
  LogicalOrContext,
  UnaryMinusContext,
  LogicalNotContext,
  SubtractContext,
  GreaterEqualContext,
  GreaterThanContext,
  LessEqualContext,
  LessThanContext,
  NotEqualContext,
  EqualContext,
  DivideContext,
  For_stmtContext,
  PrintlnMacroContext,
  RefExprContext,
  RefMutExprContext,
  DereferenceContext,
  IdentLhsContext,
  DerefLhsContext,
  StringLiteralContext
} from "./parser/rustParser.js";

import { AbstractParseTreeVisitor } from "antlr4ng";
import { rustVisitor } from "./parser/rustVisitor.js";
import { TypeChecker, Type, TypeEnv, extendTypeEnv, FnType} from "./TypeChecker.js";

const typeChecker = new TypeChecker();

export type Instruction =
  | { tag: 'LDC'; val: any }
  | { tag: 'LD'; sym: string }
  | { tag: 'ASSIGN'; sym: string }
  | { tag: 'UNARY'; sym: string }
  | { tag: 'BINOP'; sym: string }
  | { tag: 'LDF'; prms: string[]; addr: number }
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
  | { tag: 'DECL'; sym: string };
  
export class CompileVisitor
  extends AbstractParseTreeVisitor<void>
  implements rustVisitor<void>
{
  public instrs: Instruction[] = [];
  public typeEnv: TypeEnv = [{}];

  defaultResult(): void {}

  visitSimple(ctx: SimpleContext): void {
      const val = Number(ctx.number().NUMBER().getText());
      this.instrs.push({ tag: "LDC", val });
  }
  visitBoolLiteral(ctx: BoolLiteralContext): void {
      const val = ctx.BOOL().getText() === "true";
      this.instrs.push({ tag: "LDC", val });
  }

  visitStringLiteral(ctx: StringLiteralContext): void {
    const text = ctx.getText(); // includes quotes
    const value = text.slice(1, -1); // strip quotes
    this.instrs.push({ tag: 'LDC', val: value });
  }  

  visitMultiply(ctx: MultiplyContext): void {
    const type = this.inferType(ctx, this.typeEnv);
      
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      this.instrs.push({ tag: "BINOP", sym: op });
  }

  visitNumber(ctx: NumberContext): void {
        const val = Number(ctx.NUMBER().getText());
        this.instrs.push({ tag: "LDC", val });
    }

visitStart (ctx: StartContext) {
    const statements = ctx.statement();
    for (const stmt of statements) {
        this.visit(stmt);
        if (!stmt.return_stmt()) {
            this.instrs.push({ tag: 'POP' });
        }
    }
    this.instrs.push({ tag: "DONE" });
    // this.instrs.push({ tag: "LDC", val: undefined });
    // this.instrs.push({ tag: "RETURN" });
    // this.instrs.push({ tag: "DONE" });
}

  visitAdd(ctx: AddContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      this.instrs.push({ tag: "BINOP", sym: op });
  }

  visitSubtract(ctx: SubtractContext): void {
    const type = this.inferType(ctx, this.typeEnv);
      
    this.visit(ctx.expression(0));  // Left operand
    this.visit(ctx.expression(1));  // Right operand
    this.instrs.push({ tag: 'BINOP', sym: '-' });
  }

  visitDivide(ctx: DivideContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '/' });
  }

  visitMod(ctx: DivideContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0)); 
      this.visit(ctx.expression(1)); 
      this.instrs.push({ tag: 'BINOP', sym: '%' });
  }

  visitEqual(ctx: EqualContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '==' });
  }

  visitNotEqual(ctx: NotEqualContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '!=' });
  }

  visitLessThan(ctx: LessThanContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '<' });
  }

  visitLessEqual(ctx: LessEqualContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '<=' });
  }

  visitGreaterThan(ctx: GreaterThanContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '>' });
  }

  visitGreaterEqual(ctx: GreaterEqualContext): void {
      const type = this.inferType(ctx, this.typeEnv);
        
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      this.instrs.push({ tag: 'BINOP', sym: '>=' });
  }

  visitFunctionDecl(ctx: Function_declContext): void {
    const name = ctx.identifier().IDENTIFIER().getText();
    const params = ctx.parameter_list()
        ? ctx.parameter_list().parameter().map(p => p.identifier().IDENTIFIER().getText())
        : [];
    const body = ctx.block();

    // Infer parameter types and validate them
    const paramTypes: Type[] = ctx.parameter_list()
        ? ctx.parameter_list().parameter().map(p => {
            const t = p.ty()?.getText();
            if (t !== "number" && t !== "bool") {
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

    //console.log("FnType:", fnType, "params:", params, "name:", name);

    this.assignType(this.typeEnv, name, fnType);

    // Extend type environment with parameter bindings
    const extendedEnv = extendTypeEnv(params, paramTypes, this.typeEnv);
    //console.log("extendedEnv:", extendedEnv);

    // Infer function body return type and compare
    let bodyRetType = this.inferFunctionBodyType(body, extendedEnv);
    if (!bodyRetType) {
        bodyRetType = "undefined";
    }

    if (bodyRetType !== returnType) {
        throw new Error(`Type error in function '${name}'; declared return type ${returnType}, actual return type ${bodyRetType}`);
    }

    // Code generation
    const funcAddr = this.instrs.length + 2;
    this.instrs.push({ tag: 'LDF', prms: params, addr: funcAddr });

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

  visitFunctionCall(ctx: FunctionCallContext): void {
      const type = this.inferType(ctx, this.typeEnv);
      const name = ctx.identifier().IDENTIFIER().getText();
      const args = ctx.argument_list()?.expression() ?? [];
      // Special case: spawn(f)
      if (name === "spawn") {
          this.visit(args[0]); // Compile the function expression
          this.instrs.push({ tag: 'SPAWN' });
          return;
      }
    
      this.instrs.push({ tag: 'LD', sym: name });
      for (const expr of args) {
          this.visit(expr);
      }
      
      this.instrs.push({ tag: 'CALL', arity: args.length });
  }

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
//   visitLet_stmt(ctx: Let_stmtContext): void {
//       const name = ctx.identifier().IDENTIFIER().getText();
//       if (ctx.expression()) {
//           this.visit(ctx.expression());
//           this.instrs.push({ tag: 'ASSIGN', sym: name });
//       } else {
//           this.instrs.push({ tag: 'LDC', val: undefined });
//           this.instrs.push({ tag: 'ASSIGN', sym: name });
//       }
//   }
visitLet_stmt(ctx: Let_stmtContext): void {
    const name = ctx.identifier().IDENTIFIER().getText();
    let declaredType: Type | undefined;

    if (ctx.ty()) {
        declaredType = ctx.ty().getText() as Type;
    }

    if (ctx.expression()) {
        const inferredType = this.inferType(ctx.expression(), this.typeEnv);
        if (declaredType && declaredType !== inferredType) {
            throw new Error(`Type mismatch in let: expected ${declaredType}, got ${inferredType}`);
        }
        this.assignType(this.typeEnv, name, inferredType);
        this.visit(ctx.expression());
        this.instrs.push({ tag: 'ASSIGN', sym: name });
    } else {
        if (!declaredType) throw new Error(`Cannot infer type for let-binding without expression or annotation`);
        this.assignType(this.typeEnv, name, declaredType);
        this.instrs.push({ tag: 'LDC', val: undefined });
        this.instrs.push({ tag: 'ASSIGN', sym: name });
    }
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

  visitStatement(ctx: StatementContext): void {
      if (ctx.return_stmt()) {
          this.visitReturn_stmt(ctx.return_stmt()!);
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
      }
  }

  visitVariableReference(ctx: VariableReferenceContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      this.instrs.push({ tag: 'LD', sym: name });
  }

  visitRefExpr(ctx: RefExprContext): void {
    const expr = ctx.expression();

    // For now, only allow referencing variables directly (not complex expressions)
    if (!(expr instanceof VariableReferenceContext)) {
        throw new Error("Only variables can be borrowed in this simplified model.");
    }

    const name = expr.identifier().IDENTIFIER().getText();
    this.instrs.push({ tag: 'REF', sym: name });
}

visitRefMutExpr(ctx: RefMutExprContext): void {
  const expr = ctx.expression();

  if (!(expr instanceof VariableReferenceContext)) {
      throw new Error("Only variables can be mutably borrowed in this simplified model.");
  }

  const name = expr.identifier().IDENTIFIER().getText();
  this.instrs.push({ tag: 'REFMUT', sym: name });
}

visitDereference(ctx: DereferenceContext): void {
  // First, visit the expression inside dereference (e.g., *x).
  const expr = ctx.expression();
  this.visit(expr);
  this.instrs.push({ tag: 'DEREF' });
  }

  visitStructInit(ctx: StructInitContext): void {
    const typeName = ctx.identifier().getText();  
    const fields = ctx.field_init_list()?.field_init() ?? [];
  
    const obj: Record<string, any> = { __struct: typeName };
  
    for (const field of fields) {
      const key = field.identifier().getText();
      const expr = field.expression();
      this.visit(expr);  // compile value expression
      this.instrs.push({ tag: 'ASSIGN', sym: key });
      this.instrs.push({ tag: 'POP' });
    }
  
    this.instrs.push({ tag: 'LDC', val: obj }); // push struct shell
  }
  
  visitFieldAccess(ctx: FieldAccessContext): void {
    this.visit(ctx.expression()); // compile the left-hand expression
    const fieldName = ctx.identifier().getText();
    this.instrs.push({ tag: 'LDC', val: fieldName });
    this.instrs.push({ tag: 'GETFIELD' });
  }
  
  visitEnumAccess(ctx: EnumAccessContext): void {
    const enumName = ctx.identifier(0).getText(); // Book
    const variant = ctx.identifier(1).getText();  // Papery
    this.instrs.push({ tag: 'LDC', val: { __enum: enumName, tag: variant } });
  }
  
  visitEnumStructInit(ctx: EnumStructInitContext): void {
    const enumName = ctx.identifier(0).getText();
    const variant = ctx.identifier(1).getText();
    const fields = ctx.field_init_list()?.field_init() ?? [];
    const val: any = { __enum: enumName, tag: variant };
  
    for (const field of fields) {
      const key = field.identifier().getText();
      this.visit(field.expression());
      this.instrs.push({ tag: 'ASSIGN', sym: key });
      this.instrs.push({ tag: 'POP' });
    }
  
    this.instrs.push({ tag: 'LDC', val });
  }

  visitMatchExpr(ctx: MatchExprContext) {
    this.visit(ctx.expression()); // compile the value to match against
    const arms = ctx.match_arm_list()?.match_arm() ?? [];
    const endJumps: Instruction[] = [];
  
    for (const arm of arms) {
      const pattern = arm.children?.[0];
      
      this.instrs.push({ tag: 'ENTER_SCOPE', syms: [] });
  
      // Duplicate the value to match so we can compare without consuming it
      this.instrs.push({ tag: 'LD', sym: '__match_val' }); // Pseudo: assumes value is in `__match_val`
      this.visitPattern(pattern); // pattern will push value to match against
  
      const jofInstr: Instruction = { tag: 'JOF', addr: -1 }; // skip if not matching
      this.instrs.push(jofInstr);
  
      // Match succeeded
      this.visit(arm.expression()); // compile the arm body
      const gotoEnd: Instruction = { tag: 'GOTO', addr: -1 }; // skip other arms
      this.instrs.push(gotoEnd);
      endJumps.push(gotoEnd);
  
      jofInstr.addr = this.instrs.length; // if no match, jump here
  
      this.instrs.push({ tag: 'EXIT_SCOPE' });
    }
  
    for (const jmp of endJumps) {
      if (jmp.tag === 'GOTO' || jmp.tag === 'JOF') {
          jmp.addr = this.instrs.length;
      }
    }
    this.instrs.push({ tag: 'POP' }); // pop the matched value
  }
  

  visitPattern(pattern: any) {
    if (pattern instanceof VariableReferenceContext) {
      const name = pattern.identifier().getText();
      // Save the matched value into the variable
      this.instrs.push({ tag: 'ASSIGN', sym: name });
      this.instrs.push({ tag: 'LDC', val: true }); // Always match
    } else if (pattern instanceof EnumAccessContext) {
      const enumName = pattern.identifier(0).getText();
      const variantName = pattern.identifier(1).getText();
  
      // Compare the enum tag
      this.instrs.push({ tag: 'LDC', val: { __enum: enumName, tag: variantName } });
      this.instrs.push({ tag: 'BINOP', sym: '==' }); // Check if it matches
    } else if (pattern instanceof FieldAccessContext) {
      const fieldName = pattern.identifier().getText();
      this.instrs.push({ tag: 'LDC', val: fieldName });
      this.instrs.push({ tag: 'GETFIELD' });
      this.instrs.push({ tag: 'LDC', val: true }); // Assume field always exists
    } else {
      throw new Error("Unsupported pattern type");
    }
  }
    
  visitParenExpr(ctx: ParenExprContext): void {
        this.visit(ctx.expression());
 }  

  lookupType(env: TypeEnv, sym: string): Type {
    return typeChecker.lookupType(env, sym);
  }
  
  assignType(env: TypeEnv, sym: string, ty: Type): void {
    typeChecker.assignType(env, sym, ty);
  }

  inferType(expr: ExpressionContext, env: TypeEnv): Type {
    // Delegate all type inference to the external TypeChecker
    return typeChecker.inferType(expr, env);
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
    
    
    visitLogicalAnd(ctx: LogicalAndContext): void {
        const type = this.inferType(ctx, this.typeEnv);
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "&&" });
    }
    
    visitLogicalOr(ctx: LogicalOrContext): void {
        const type = this.inferType(ctx, this.typeEnv);
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "||" });
    }
    
    visitUnaryMinus(ctx: UnaryMinusContext): void {
        const type = this.inferType(ctx, this.typeEnv);
        this.visit(ctx.expression());
        this.instrs.push({ tag: "UNARY", sym: "-unary" });
    }
    
    visitLogicalNot(ctx: LogicalNotContext): void {
        const type = this.inferType(ctx, this.typeEnv);
        this.visit(ctx.expression());
        this.instrs.push({ tag: "UNARY", sym: "!" });
    }
    
}
