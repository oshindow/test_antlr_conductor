import { CharStream, CommonTokenStream } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer";
import {
    rustParser, type AddContext, type MultiplyContext, type SimpleContext
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

class MyVisitor extends rustVisitor<number> {
    public visitAdd = (ctx: AddContext): number => {
        return this.visit(ctx.expression(0)!)! + this.visit(ctx.expression(1)!)!;
    };

    public visitMultiply = (ctx: MultiplyContext): number => {
        return this.visit(ctx.expression(0)!)! * this.visit(ctx.expression(1)!)!;
    };

    public visitSimple = (ctx: SimpleContext): number => {
        return Number.parseInt(ctx.number().NUMBER().getText(), 10);
    };
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