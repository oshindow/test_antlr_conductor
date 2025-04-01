import { CharStream, CommonTokenStream } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer";
import {
    rustParser, 
    type AddContext, type MultiplyContext, type SimpleContext, type ParenExprContext,
    type DivideContext, type SubtractContext, type ExpressionContext,
    type StartContext
} from "./parser/rustParser";
import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { rustVisitor } from "./parser/rustVisitor";
import { Trees } from 'antlr4ng';
// const input = "1 + 2 * 3";
// const inputStream = CharStream.fromString(input);
// const lexer = new rustLexer(inputStream);
// const tokenStream = new CommonTokenStream(lexer);
// const parser = new rustParser(tokenStream);
// const tree = parser.start();
function display(msg: string): void {
    alert(msg);
}

class MyVisitor extends rustVisitor<number> {
    // public visitAdd = (ctx: AddContext): number => {
    //     return this.visit(ctx.expression(0)!)! + this.visit(ctx.expression(1)!)!;
    // };

    // public visitMultiply = (ctx: MultiplyContext): number => {
    //     return this.visit(ctx.expression(0)!)! * this.visit(ctx.expression(1)!)!;
    // };

    // public visitDivide = (ctx: DivideContext): number => {
    //     if (this.visit(ctx.expression(1)!)! === 0) {
    //         throw new Error("Division by zero");
    //     }
    //     return this.visit(ctx.expression(0)!)! / this.visit(ctx.expression(1)!)!;
    // };

    // public visitSubtract = (ctx: SubtractContext): number => {
    //     return this.visit(ctx.expression(0)!)! - this.visit(ctx.expression(1)!)!;
    // };

    // public visitSimple = (ctx: SimpleContext): number => {
    //     return Number.parseInt(ctx.number().NUMBER().getText(), 10);
    // };

    // public visitParenExpr = (ctx: ParenExprContext): number => {
    //     return this.visit(ctx.getChild(1))!;
    // }
    visitStart = (ctx: StartContext): number => {
        display("call visitStart");
        return this.visit(ctx.expression());
    }
    
    public visitExpression(ctx: ExpressionContext): number {
        display("call visitExpression"); // prints "7"
        if (ctx.getChildCount() === 1) {
            // INT case
            return parseInt(ctx.getText());
        } else if (ctx.getChildCount() === 3) {
            if (ctx.getChild(0).getText() === '(' && ctx.getChild(2).getText() === ')') {
                // Parenthesized expression
                return this.visit(ctx.getChild(1) as ExpressionContext);
            } else {
                // Binary operation
                const left = this.visit(ctx.getChild(0) as ExpressionContext);
                const op = ctx.getChild(1).getText();
                const right = this.visit(ctx.getChild(2) as ExpressionContext);

                switch (op) {
                    case '+': return left + right;
                    case '-': return left - right;
                    case '*': return left * right;
                    case '/':
                        if (right === 0) {
                            throw new Error("Division by zero");
                        }
                        return left / right;
                    default:
                        throw new Error(`Unknown operator: ${op}`);
                }
            }
        }
        
        throw new Error(`Invalid expression: ${ctx.getText()}`);
    }

}
// const visitor = new MyVisitor();
// const result = visitor.visit(tree);
// console.log(result); // prints "7"

export class SimpleLangEvaluator extends BasicEvaluator {
    private executionCount: number;
    private visitor: MyVisitor;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.visitor = new MyVisitor();
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            this.conductor.sendOutput(`Create the lexer and parser`);
            const inputStream = CharStream.fromString(chunk);
            const lexer = new rustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new rustParser(tokenStream);
            
            // Parse the input
            this.conductor.sendOutput(`Parse the input`);
            const tree = parser.start();
            // this.conductorsendOutput("ruleNames:", rustParser.ruleNames); 
            const treeStr = Trees.toStringTree(tree, rustParser.ruleNames);
            this.conductor.sendOutput(`tree: ${treeStr}`);
            // Evaluate the parsed tree
            const result = this.visitor.visit(tree);
            
            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }
}