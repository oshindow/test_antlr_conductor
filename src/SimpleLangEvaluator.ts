import { CharStream, CommonTokenStream } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import {
    rustParser, 
    type AddContext, type MultiplyContext, type SimpleContext, type ParenExprContext,
    type DivideContext, type SubtractContext, type Let_stmtContext,
} from "./parser/rustParser.js";
import { BasicEvaluator } from "conductor/dist/conductor/runner/index.js";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types/index.js";
import { rustVisitor } from "./parser/rustVisitor.js";
import { Trees } from 'antlr4ng';

interface Variable {
    value: number;
    mutable: boolean;
}

export class MyVisitor extends rustVisitor<any> {
    private variables: Map<string, Variable> = new Map();

    public visitAdd = (ctx: AddContext): number => {
        return this.visit(ctx.expression(0)!)! + this.visit(ctx.expression(1)!)!;
    };

    public visitMultiply = (ctx: MultiplyContext): number => {
        return this.visit(ctx.expression(0)!)! * this.visit(ctx.expression(1)!)!;
    };

    public visitDivide = (ctx: DivideContext): number => {
        if (this.visit(ctx.expression(1)!)! === 0) {
            throw new Error("Division by zero");
        }
        return this.visit(ctx.expression(0)!)! / this.visit(ctx.expression(1)!)!;
    };

    public visitSubtract = (ctx: SubtractContext): number => {
        return this.visit(ctx.expression(0)!)! - this.visit(ctx.expression(1)!)!;
    };

    public visitSimple = (ctx: SimpleContext): number => {
        return Number.parseInt(ctx.number().NUMBER().getText(), 10);
    };

    public visitParenExpr = (ctx: ParenExprContext): number => {
        return this.visit(ctx.getChild(1)!);
    }

    public visitLetStatement = (ctx: Let_stmtContext): number => {
        const identifier = ctx.identifier().getText();
        const isMutable = ctx.MUT() !== undefined;
        const initializer = ctx.expression() ? this.visit(ctx.expression()!) : 0;

        if (this.variables.has(identifier)) {
            if (!this.variables.get(identifier)!.mutable) {
                throw new Error(`Cannot reassign immutable variable '${identifier}'`);
            }
        }

        this.variables.set(identifier, { value: initializer, mutable: isMutable });
        return initializer;
    };

    public visitVariableReference = (ctx: any): number => {
        const identifier = ctx.IDENTIFIER().getText();
        const variable = this.variables.get(identifier);

        if (!variable) {
            throw new Error(`Variable '${identifier}' is not defined`);
        }

        return variable.value;
    };

}


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