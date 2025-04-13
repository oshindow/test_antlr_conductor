import {
    rustParser,
    SimpleContext,
    MultiplyContext,
    AddContext,
    NumberContext,
    ParenExprContext,
    ExpressionContext,

  } from "./parser/rustParser.js";
  import { AbstractParseTreeVisitor } from "antlr4ng";
  import { rustVisitor } from "./parser/rustVisitor.js";

  export type Instruction =
    | { tag: "LDC"; val: number }
    | { tag: "BINOP"; sym: string }
    | { tag: "DONE" };
  
  export class CompileVisitor
    extends AbstractParseTreeVisitor<void>
    implements rustVisitor<void>
  {
    public instrs: Instruction[] = [];
  
    defaultResult(): void {}

    visitSimple(ctx: SimpleContext): void {
      const val = Number(ctx.number().NUMBER().getText());  
      this.instrs.push({ tag: "LDC", val }); // push it as LDC instruction
    }
    
    visitMultiply(ctx: MultiplyContext): void {
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      this.instrs.push({ tag: "BINOP", sym: op });
    }
    
  
    visitAdd(ctx: AddContext): void {
      console.log("Add");
      this.visit(ctx.expression(0));
      this.visit(ctx.expression(1));
      const op = ctx.getChild(1).getText();
      console.log("op", op);
      this.instrs.push({ tag: "BINOP", sym: op });
    }

    visitExpression(ctx: ExpressionContext): void {
      this.visitChildren(ctx);   
    }
  }
  