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

type Environment = Map<string, Variable>;

interface FunctionDef {
    params: string[];
    body: any; // block AST node
}

class ReturnValue {
    constructor(public value: number) {}
}

class BreakSignal {}

export class MyVisitor extends rustVisitor<any> {
    private variables: Map<string, Variable> = new Map();
    private envStack: Environment[] = [new Map()];
    private functions: Map<string, FunctionDef> = new Map();

    private get currentEnv(): Environment {
        return this.envStack[this.envStack.length - 1];
    }
    
    private resolveVariable(name: string): Variable {
        for (let i = this.envStack.length - 1; i >= 0; i--) {
            const env = this.envStack[i];
            if (env.has(name)) return env.get(name)!;
        }
        throw new Error(`Variable '${name}' not found`);
    }
    
    public visitStart = (ctx: any): number => {
        let result = 0;
        for (let i = 0; i < ctx.statement().length; i++) {
            result = this.visit(ctx.statement(i));
        }
        return result;
    }

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

    public visitLet_stmt = (ctx: Let_stmtContext): number => {
        const name = ctx.identifier().IDENTIFIER().getText();
        const isMutable = ctx.MUT() !== undefined;
        const value = ctx.expression() ? this.visit(ctx.expression()) : 0;

        const currentEnv = this.envStack[this.envStack.length - 1];
        currentEnv.set(name, { value, mutable: isMutable });

        return value;
    };

    public visitVariableReference = (ctx: any): number => {
        const name = ctx.identifier().IDENTIFIER().getText();
        const variable = this.resolveVariable(name);

        if (!variable) {
            throw new Error(`Variable '${name}' is not defined`);
        }

        return variable.value;
    };

    // function related
    public visitFunction_decl = (ctx: any): null => {
        const name = ctx.identifier().IDENTIFIER().getText();
        // console.log(name)
        const paramList = ctx.parameter_list()?.identifier() || [];
        // console.log(paramList)
        const params = paramList.map((id: any) => id.IDENTIFIER().getText());
        // console.log(params)
        const body = ctx.block();
        this.functions.set(name, { params, body });
        return null;
    }

    public visitFunctionCall = (ctx: any): number => {
        const name = ctx.identifier().IDENTIFIER().getText();
        // console.log(name)
        const func = this.functions.get(name);
        if (!func) throw new Error(`Function '${name}' not found`);
    
        const args = ctx.argument_list()?.expression().map(e => this.visit(e)) || [];
        // console.log(args)
        if (args.length !== func.params.length) {
            throw new Error(`Function '${name}' expects ${func.params.length} arguments`);
        }
        
        const newEnv = new Map<string, Variable>();
        for (let i = 0; i < args.length; i++) {
            newEnv.set(func.params[i], { value: args[i], mutable: false });
        }
        // console.log(newEnv)
        this.envStack.push(newEnv);
        try {
            this.executeBlockWithEnv(func.body, newEnv);
        } catch (e) {
            if (e instanceof ReturnValue) {
                this.envStack.pop();
                return e.value;
            } else {
                this.envStack.pop();
                throw e;
            }
        }
    
        this.envStack.pop();
        return 0;  
    }
    private executeBlockWithEnv = (ctx: any, env: Map<string, Variable>): number => {
        // console.log(env)
        // console.log(this.envStack)
        this.envStack.push(env);
        // console.log(this.envStack)
        let result = 0;
        // console.log(ctx.statement())        
        for (let i = 0; i < ctx.statement().length; i++) {
            result = this.visit(ctx.statement(i));
            // console.log(result) 
        }
        // console.log(result)        
        if (ctx.expression()) {
            result = this.visit(ctx.expression());
        }
    
        this.envStack.pop();
        return result;
    }
    
    public visitFor_stmt = (ctx: any): number => {
        const varName = ctx.identifier().IDENTIFIER().getText();
        const start = this.visit(ctx.expression(0));
        const end = this.visit(ctx.expression(1));
        let result = 0;
    
        for (let i = start; i < end; i++) {
            const loopEnv = new Map<string, Variable>();
            loopEnv.set(varName, { value: i, mutable: true });
    
            this.envStack.push(loopEnv);
            result = this.visit(ctx.block());
            this.envStack.pop();
        }
    
        return result;
    };
    
    public visitAssign_stmt = (ctx: any): number => {
        const name = ctx.identifier().IDENTIFIER().getText();
        const value = this.visit(ctx.expression());
    
        for (let i = this.envStack.length - 1; i >= 0; i--) {
            const env = this.envStack[i];
            if (env.has(name)) {
                const variable = env.get(name)!;
                if (!variable.mutable) {
                    throw new Error(`Cannot assign to immutable variable '${name}'`);
                }
                variable.value = value;
                return value;
            }
        }
    
        throw new Error(`Variable '${name}' not found`);
    };

    public visitLoop_stmt = (ctx: any): number => {
        let result = 0;
    
        while (true) {
            try {
                result = this.visit(ctx.block());
            } catch (e) {
                if (e instanceof BreakSignal) {
                    break;
                } else {
                    throw e;
                }
            }
        }
    
        return result;
    };
    
    public visitBreak_stmt = (ctx: any): never => {
        throw new BreakSignal();
    };

    
    public visitReturn_stmt = (ctx: any): never => {
        const value = this.visit(ctx.expression());
        throw new ReturnValue(value);
    }
    
    

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