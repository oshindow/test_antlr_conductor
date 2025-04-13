import {
  rustParser,
  SimpleContext,
  MultiplyContext,
  AddContext,
  NumberContext,
  ParenExprContext,
  Expression_stmtContext,
  Function_declContext,
  FunctionCallContext,
  Return_stmtContext,
  BlockContext,
  Let_stmtContext,
  Assign_stmtContext,
  StartContext,
  StatementContext,
  VariableReferenceContext
} from "./parser/rustParser.js";

import { AbstractParseTreeVisitor } from "antlr4ng";
import { rustVisitor } from "./parser/rustVisitor.js";

export type Instruction =
  | { tag: 'LDC'; val: number }
  | { tag: 'LD'; sym: string }
  | { tag: 'ASSIGN'; sym: string }
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
  | { tag: 'DONE' };

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

  visitFunctionCall(ctx: FunctionCallContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      this.instrs.push({ tag: 'LD', sym: name });
      const args = ctx.argument_list()?.expression() ?? [];
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
      }
  }

  visitVariableReference(ctx: VariableReferenceContext): void {
      const name = ctx.identifier().IDENTIFIER().getText();
      this.instrs.push({ tag: 'LD', sym: name });
  }

}
