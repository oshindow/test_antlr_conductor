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
  PrintlnMacroContext
} from "./parser/rustParser.js";

import { AbstractParseTreeVisitor, ParseTree } from "antlr4ng";
import { rustVisitor } from "./parser/rustVisitor.js";
import { isFunction } from "util";

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
  | { tag: 'GETFIELD' } // New instruction for field access
  | { tag: 'PRINT' };


// type environment
type Type = "number" | "bool" | "undefined" | [Type[], Type];

const builtInTypes: Record<string, [Type[], Type]> = {
    "+": [["number", "number"], "number"],
    "-": [["number", "number"], "number"],
    "*": [["number", "number"], "number"],
    "/": [["number", "number"], "number"],
    "%": [["number", "number"], "number"],
  
    "==": [["number", "number"], "bool"],
    "!=": [["number", "number"], "bool"],
    "<": [["number", "number"], "bool"],
    ">": [["number", "number"], "bool"],
    "<=": [["number", "number"], "bool"],
    ">=": [["number", "number"], "bool"],
  
    "&&": [["bool", "bool"], "bool"],
    "||": [["bool", "bool"], "bool"],
    "!": [["bool"], "bool"],
    "-unary": [["number"], "number"],
  };
  
  
type TypeEnv = Record<string, Type>[];

// function equalType(t1: Type, t2: Type[]): boolean {
//     return JSON.stringify(t1) === JSON.stringify(t2);
//   }
  
function equalTypes(ts1: Type[], ts2: Type[]): boolean {
    return JSON.stringify(ts1) === JSON.stringify(ts2);
  }

function extendTypeEnv(vars: string[], types: Type[], env: TypeEnv): TypeEnv {
    if (vars.length !== types.length) {
      throw new Error(
        vars.length > types.length
          ? "too few parameters in function declaration"
          : "too many parameters in function declaration"
      );
    }
  
    const frame: Record<string, Type> = {};
    for (let i = 0; i < vars.length; i++) {
      frame[vars[i]] = types[i];
    }
    return [frame, ...env];
  }
  
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

  visitMultiply(ctx: MultiplyContext): void {
    const type = this.inferType(ctx, this.typeEnv);
      
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      this.instrs.push({ tag: "BINOP", sym: op });
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
      
      // check function declaration errors: number of params mismatch | return type mismatch
      const paramTypes: Type[] = ctx.parameter_list()
        ? ctx.parameter_list().parameter().map(p => {
            const t = p.ty()?.getText();
            if (t !== "number" && t !== "bool") throw new Error(`Unsupported param type: ${t}`);
            return t as Type;
            })
        : [];
        
        const returnType: Type = ctx.ty() ? ctx.ty().getText() as Type : "undefined";

        console.log("paramTypes", paramTypes, "returnType", returnType, "params", params, name) 
        this.assignType(this.typeEnv, name, [paramTypes, returnType]);

        
        const extendedEnv = extendTypeEnv(params, paramTypes, this.typeEnv);
        console.log("extendedEnv", extendedEnv)
        let bodyRetType = this.inferFunctionBodyType(ctx.block(), extendedEnv);
        if (!bodyRetType) {
            bodyRetType = "undefined";
        }
        // console.log("bodyRetType", bodyRetType, returnType)
        if (bodyRetType !== returnType) {
            throw new Error(`Type error in function '${name}'; declared return type ${returnType}, actual return type ${bodyRetType}`);
        }

        // end of type checking
        
      
      const funcAddr = this.instrs.length + 2

      this.instrs.push({ tag: 'LDF', prms: params, addr: funcAddr });

      const gotoPlaceholder: Instruction = { tag: 'GOTO', addr: -1 };
      this.instrs.push(gotoPlaceholder);
      
      // restore the current type environment
        // and extend it with the function parameters
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


  visitAssign_stmt(ctx: Assign_stmtContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      this.visit(ctx.expression());
      this.instrs.push({ tag: 'ASSIGN', sym: name });
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
    }
  }

  visitVariableReference(ctx: VariableReferenceContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      this.instrs.push({ tag: 'LD', sym: name });
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

  lookupType(env: TypeEnv, sym: string): Type {
    for (const frame of env) {
      if (sym in frame) return frame[sym];
    }
    throw new Error(`Unbound variable: ${sym}`);
  }
  
  assignType(env: TypeEnv, sym: string, ty: Type): void {
    env[0][sym] = ty;
  }

  inferType(expr: ExpressionContext, env: TypeEnv): Type {
    if (expr instanceof SimpleContext) {
      return "number";
    }
  
    if (expr instanceof BoolLiteralContext) {
      return "bool";
    }
  
    if (expr instanceof VariableReferenceContext) {
      const name = expr.identifier().IDENTIFIER().getText();
      console.log("type env", env, name)
      return this.lookupType(env, name);
    }
  
    const bin = (op: string, left: ExpressionContext, right: ExpressionContext): Type => {
      const sig = builtInTypes[op];
      if (!sig) throw new Error(`Unknown operator ${op}`);
      const [expectedArgs, returnType] = sig;
      const leftType = this.inferType(left, env);
      const rightType = this.inferType(right, env);
    //   console.log("leftType", leftType, rightType, expectedArgs)
      if (!equalTypes([leftType, rightType], expectedArgs)) {
        throw new Error(`Operator ${op} expects ${expectedArgs.join(", ")}, got ${leftType}, ${rightType}`);
      }
      return returnType;
     
    };
  
    const un = (op: string, operand: ExpressionContext): Type => {
      const sig = builtInTypes[op];
      if (!sig) throw new Error(`Unknown operator ${op}`);
      const [expectedArgs, returnType] = sig;
      const argType = this.inferType(operand, env);
    //   console.log("leftType", expectedArgs)
      if (!equalTypes([argType], expectedArgs)) {
        throw new Error(`Operator ${op} expects ${expectedArgs}, got ${argType}`);
      }
      return returnType;
    };
  
    if (expr instanceof AddContext) return bin("+", expr.expression(0), expr.expression(1));
    if (expr instanceof SubtractContext) return bin("-", expr.expression(0), expr.expression(1));
    if (expr instanceof MultiplyContext) return bin("*", expr.expression(0), expr.expression(1));
    if (expr instanceof DivideContext) return bin("/", expr.expression(0), expr.expression(1));
    if (expr instanceof EqualContext) return bin("==", expr.expression(0), expr.expression(1));
    if (expr instanceof NotEqualContext) return bin("!=", expr.expression(0), expr.expression(1));
    if (expr instanceof LessThanContext) return bin("<", expr.expression(0), expr.expression(1));
    if (expr instanceof GreaterThanContext) return bin(">", expr.expression(0), expr.expression(1));
    if (expr instanceof LessEqualContext) return bin("<=", expr.expression(0), expr.expression(1));
    if (expr instanceof GreaterEqualContext) return bin(">=", expr.expression(0), expr.expression(1));
    if (expr instanceof LogicalAndContext) return bin("&&", expr.expression(0), expr.expression(1));
    if (expr instanceof LogicalOrContext) return bin("||", expr.expression(0), expr.expression(1));
    if (expr instanceof LogicalNotContext) return un("!", expr.expression());
    if (expr instanceof UnaryMinusContext) return un("-unary", expr.expression());

    if (expr instanceof FunctionCallContext) {
      const name = expr.identifier().IDENTIFIER().getText();
      console.log("name", name)
      const funType = builtInTypes[name] ?? this.lookupType(env, name);
      console.log("funType", funType)
      if (!Array.isArray(funType)) throw new Error(`${name} is not callable`);
    //   console.log("")
      const [expectedArgs, returnType] = funType;
      const actualArgTypes = (expr.argument_list()?.expression() ?? []).map(e => this.inferType(e, env));
      console.log("actualArgTypes", actualArgTypes, expectedArgs)
      if (actualArgTypes.length !== expectedArgs.length) {
        throw new Error(`Function application error: ${name} expects ${expectedArgs.length} argument(s), got ${actualArgTypes.length}`);
      }
      
      if (!equalTypes(actualArgTypes, expectedArgs)) {
        throw new Error(`Function ${name} expects (${expectedArgs.join(", ")}), got (${actualArgTypes.join(", ")})`);
      }
      return returnType;
    }
    
    if (expr instanceof If_stmtContext) {
        const condType = this.inferType(expr.expression(), env);
        if (condType !== "bool") {
          throw new Error(`Expected predicate type: bool, actual predicate type: ${condType}`);
        }
      
        const thenType = this.inferType(expr.block(0), env);
        let elseType: Type = "undefined";
        if (expr.block().length > 1) {
          elseType = this.inferType(expr.block(1), env);
        }
      
        if (!equalTypes([thenType], [elseType])) {
          throw new Error(`Types of branches not matching; consequent type: ${thenType}, alternative type: ${elseType}`);
        }
      
        return thenType;
      }
      
      

    throw new Error(`Unsupported expression type: ${expr.constructor.name}`);
      
  }
  inferFunctionBodyType(body: BlockContext, env: TypeEnv): Type {
    const statements = body.statement();
    const returnTypes: Type[] = [];
  
    for (const stmt of statements) {
        // console.log("stmt", stmt)
        const letStmt = stmt.let_stmt?.();
        if (letStmt) {
          const name = letStmt.identifier().IDENTIFIER().getText();
          let inferred: Type;
      
          if (letStmt.ty()) {
            inferred = letStmt.ty().getText() as Type;
          } else if (letStmt.expression()) {
            inferred = this.inferType(letStmt.expression(), env);
          } else {
            throw new Error(`Cannot infer type for variable '${name}'`);
          }
      
          this.assignType(env, name, inferred);
        }

      const ret = stmt.return_stmt?.();
      if (ret) {
        const retExpr = ret.expression();
        returnTypes.push(this.inferType(retExpr, env));
        break; // exit loop on first return
      }
    }
  
    if (returnTypes.length === 0) {
      const trailingExpr = body.expression();
    //   console.log("trailingExpr", trailingExpr)
      if (trailingExpr) {
        // const expr = trailingExpr.expression();
        // console.log("")
        returnTypes.push(this.inferType(trailingExpr, env));
        console.log("returnTypes", returnTypes, env)
     //   return trailingExpr ? this.inferType(trailingExpr, env) : "undefined";
        }
    }
  
    // Check all return types are consistent
    const first = returnTypes[0];
    for (const t of returnTypes) {
      if (t !== first) {
        throw new Error(`return type mismatch in function body`);
      }
    }
    console.log("first", first)
    return first;
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
        this.visit(ctx.expression(0));  

        const loopStart = this.instrs.length;
    
        // Visit the condition (guard)
        this.visit(ctx.expression(1));  
        const conditionAddr = this.instrs.length;  
    
        this.instrs.push({ tag: 'JOF', addr: -1 });
    
        // Visit the body (statements inside the loop)
        this.visit(ctx.block());  // Visit the loop's body statements
    
        // Visit the update (increment, decrement, or modification)
        this.visit(ctx.expression(2));  // The third expression is the update, e.g., `i = i + 1`
    
        // Jump back to the condition to check again
        this.instrs.push({ tag: 'GOTO', addr: loopStart });

        const condJumpInstr = this.instrs[conditionAddr];
        if (condJumpInstr.tag === 'JOF') {
            condJumpInstr.addr = this.instrs.length;
        } else {
            throw new Error('Expected JOF instruction at condition jump address');
        }
        
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
