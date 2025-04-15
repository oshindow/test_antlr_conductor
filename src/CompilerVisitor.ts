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

import { AbstractParseTreeVisitor } from "antlr4ng";
import { rustVisitor } from "./parser/rustVisitor.js";

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


export class CompileVisitor
  extends AbstractParseTreeVisitor<void>
  implements rustVisitor<void>
{
  public instrs: Instruction[] = [];

  defaultResult(): void {}

  visitSimple(ctx: SimpleContext): void {
      const val = Number(ctx.number().NUMBER().getText());
      this.instrs.push({ tag: "LDC", val });
  }

  visitMultiply(ctx: MultiplyContext): void {
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      this.instrs.push({ tag: "BINOP", sym: op });
  }

  visitAdd(ctx: AddContext): void {
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      this.instrs.push({ tag: "BINOP", sym: op });
  }

  visitSubtract(ctx: SubtractContext): void {
    this.visit(ctx.expression(0));  // Left operand
    this.visit(ctx.expression(1));  // Right operand
    this.instrs.push({ tag: 'BINOP', sym: '-' });
 }

 visitDivide(ctx: DivideContext): void {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.instrs.push({ tag: 'BINOP', sym: '/' });
}

visitMod(ctx: DivideContext): void {
    this.visit(ctx.expression(0)); 
    this.visit(ctx.expression(1)); 
    this.instrs.push({ tag: 'BINOP', sym: '%' });
}

visitEqual(ctx: EqualContext): void {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.instrs.push({ tag: 'BINOP', sym: '==' });
}

visitNotEqual(ctx: NotEqualContext): void {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.instrs.push({ tag: 'BINOP', sym: '!=' });
}

visitLessThan(ctx: LessThanContext): void {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.instrs.push({ tag: 'BINOP', sym: '<' });
}

visitLessEqual(ctx: LessEqualContext): void {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.instrs.push({ tag: 'BINOP', sym: '<=' });
}

visitGreaterThan(ctx: GreaterThanContext): void {
    this.visit(ctx.expression(0));
    this.visit(ctx.expression(1));
    this.instrs.push({ tag: 'BINOP', sym: '>' });
}

visitGreaterEqual(ctx: GreaterEqualContext): void {
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
      const funcAddr = this.instrs.length + 2

      this.instrs.push({ tag: 'LDF', prms: params, addr: funcAddr });

      const gotoPlaceholder: Instruction = { tag: 'GOTO', addr: -1 };
      this.instrs.push(gotoPlaceholder);

      this.visit(body);

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

      if (expr) {
          this.visit(expr);
      } else {
          this.instrs.push({ tag: 'LDC', val: undefined });
      }

      this.instrs.push({ tag: 'EXIT_SCOPE' });
  }

  visitLet_stmt(ctx: Let_stmtContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      if (ctx.expression()) {
          this.visit(ctx.expression());
          this.instrs.push({ tag: 'ASSIGN', sym: name });
      } else {
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
    const typeName = ctx.identifier().getText(); // User
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

    visitIfExpr(ctx: If_stmtContext): void {
        this.visit(ctx.expression());

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
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "&&" });
    }
    
    visitLogicalOr(ctx: LogicalOrContext): void {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "||" });
    }
    
    visitUnaryMinus(ctx: UnaryMinusContext): void {
        this.visit(ctx.expression());
        this.instrs.push({ tag: "UNARY", sym: "-" });
    }
    
    visitLogicalNot(ctx: LogicalNotContext): void {
        this.visit(ctx.expression());
        this.instrs.push({ tag: "UNARY", sym: "!" });
    }
    
}
