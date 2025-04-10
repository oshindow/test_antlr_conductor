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
import { env } from "process";


interface Variable {
    value: number;
    mutable: boolean;
    type?: string;
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

// struct-related
interface StructField {
    name: string;
    type?: string;
}

interface StructDef {
    fields: StructField[];
}

type StructInstance = Map<string, any>;

// interface EnumDef {
//     name: string;
//     variants: Set<string>;
// }

interface EnumVariant {
    name: string;
    fields?: string[];
}

interface EnumDef {
    name: string;
    variants: Map<string, EnumVariant>;
}

// concurrency

interface Thread {
    id: number;
    gen: Generator;
    sleepUntil: number;  // logical time (tick)
    done: boolean;
    env: Environment;
    // envStack: Environment[];
}


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
    
    private structDefs: Map<string, StructDef> = new Map();

    private enumDefs: Map<string, EnumDef> = new Map();

    private threads: Thread[] = [];
    private currentTick = 0;

    private runScheduler(): void {
        this.currentTick = 0;
    
        while (this.threads.some(t => !t.done)) {
            for (const thread of this.threads) {
                if (thread.done) continue;
                if (this.currentTick < thread.sleepUntil) continue;
    
                try {
                    const { value, done } = thread.gen.next();
                    if (done) {
                        thread.done = true;
                    }
                } catch (e) {
                    if (e.type === "sleep") {
                        thread.sleepUntil = this.currentTick + e.duration;
                    } else {
                        throw e;
                    }
                }
            }
    
            this.currentTick++;
        }
    }

    private buildGenerator = (block: any, params: string[] = [], newEnv: Map<string, Variable> = new Map()): Generator<any, void, void> => {
        const self = this;
        
        function* gen() {
            // const envStack = [newEnv]; 
            // const originalEnvStack = self.envStack;
            // self.envStack = envStack;     // swap in
            self.envStack.push(newEnv);
            console.log(self.envStack)
            for (const stmt of block.statement()) {
                yield; // simulate a single tick
                self.visit(stmt);
            }
            if (block.expression()) {
                yield;
                self.visit(block.expression());
            }
            self.envStack.pop()
            // self.envStack = originalEnvStack;
        }
        return gen();
    };
    
    
    public visitStart = (ctx: any): number => {
         
        for (let i = 0; i < ctx.statement().length; i++) {
            const stmt = ctx.statement(i);
            if (stmt.function_decl) {
                this.visit(stmt);   
            }
        }

         
        const mainFn = this.functions.get("main");
        if (!mainFn) throw new Error("No main() function found");
        
        const mainEnv = new Map<string, Variable>();
        const mainThread = {
            id: 0,
            gen: this.buildGenerator(mainFn.body, mainFn.params, mainEnv),
            sleepUntil: this.currentTick,
            done: false,
            // lastValue: undefined,
            env: mainEnv,
            envStack:[mainEnv], // each thread has its own env
        };
        this.threads.unshift(mainThread); 

        
        this.runScheduler();

        return 0;
    }


    public visitEqual = (ctx: any): boolean => {
        return this.visit(ctx.expression(0)) === this.visit(ctx.expression(1));
    };
    
    public visitNotEqual = (ctx: any): boolean => {
        return this.visit(ctx.expression(0)) !== this.visit(ctx.expression(1));
    };
    
    public visitLessThan = (ctx: any): boolean => {
        return this.visit(ctx.expression(0)) < this.visit(ctx.expression(1));
    };
    
    public visitLessEqual = (ctx: any): boolean => {
        return this.visit(ctx.expression(0)) <= this.visit(ctx.expression(1));
    };
    
    public visitGreaterThan = (ctx: any): boolean => {
        return this.visit(ctx.expression(0)) > this.visit(ctx.expression(1));
    };
    
    public visitGreaterEqual = (ctx: any): boolean => {
        return this.visit(ctx.expression(0)) >= this.visit(ctx.expression(1));
    };    

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

    public visitStringLiteral = (ctx: any): string => {
        const text = ctx.STRING().getText();
        return text.slice(1, -1); 
    };
    
    public visitBoolLiteral = (ctx: any): boolean => {
        return ctx.getText() === 'true';
    };
    

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
    public visitFunctionDecl = (ctx: any): null => {
        // console.log(ctx.identifier())
        const name = ctx.identifier(0).getText();   
        // console.log(name)
        const paramNodes = ctx.parameter_list()?.parameter() || [];
        const params = paramNodes.map((param: any) => {
            return param.identifier(0).getText(); 
        });
    
        const body = ctx.block();
    
        this.functions.set(name, { params, body });
    
        return null;
    };
    

    public visitFunctionCall = (ctx: any): number => {
        const name = ctx.identifier().IDENTIFIER().getText();
        // console.log(name)
        if (name === "spawn") {
            // console.log("spawn called")
            const arg = ctx.argument_list()?.expression(0);
            // console.log(arg)
            if (!arg) throw new Error(`spawn requires a function name`);
            
            const funcName = arg.getText();
            const func = this.functions.get(funcName);
            // console.log(funcName)
            // console.log(func)
            if (!func) throw new Error(`Function '${funcName}' not found`);
    
            // Wrap the function body in a generator
            const newEnv = new Map<string, Variable>(); 
            const generator = this.buildGenerator(func.body, func.params, newEnv);
    
            const threadId = this.threads.length;
            const thread = {
                id: threadId,
                gen: generator,
                sleepUntil: this.currentTick,
                done: false,
                // lastValue: undefined,
                env: newEnv, // each thread has its own env
                // envStack: [newEnv], // each thread has its own env

            };
    
            this.threads.push(thread);
            return threadId;
        }
        
        if (name === "sleep") {
            console.log("sleep called")
            const ms = Number(ctx.argument_list().expression(0).getText());
            console.log(`sleep for ${ms} ms`);
            throw { type: "sleep", duration: ms };
        }
        
        if (name === "println") {
            const args = ctx.argument_list()?.expression().map((e: any) => this.visit(e)) || [];
            console.log(...args);
            return 0;
        }
        
        const func = this.functions.get(name);
        if (!func) throw new Error(`Function '${name}' not found`);
    
        const args = ctx.argument_list()?.expression().map((e: any) => this.visit(e)) || [];
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

    public visitIf_stmt = (ctx: any): any => {
        const condition = this.visit(ctx.expression());
    
        if (condition) {
            return this.visit(ctx.block(0)); // then block
        } else if (ctx.KW_ELSE()) {
            const elseBlock = ctx.block(1);
            const elseIf = ctx.if_stmt();
    
            if (elseBlock) {
                return this.visit(elseBlock); // else block
            } else if (elseIf) {
                return this.visit(elseIf); // nested if
            }
        }
    
        return null;
    };

    public visitWhile_stmt = (ctx: any): any => {
        while (this.visit(ctx.expression())) {
            const result = this.visit(ctx.block());
    
            // Optional: support break with a `BreakSignal`
            if (result instanceof BreakSignal) {
                break;
            }
        }
    
        return null;
    };
    
    
    public visitStruct_decl = (ctx: any): null => {
        // console.log("stuct decl")
        const structName = ctx.identifier().IDENTIFIER().getText();
        const fields: StructField[] = [];
    
        if (ctx.field_list()) {
            
            const fieldDecls = ctx.field_list().field_decl();
            for (const decl of fieldDecls) {
                const name = decl.identifier().IDENTIFIER().getText();
                const type = decl.ty().getText();
                fields.push({ name, type });
            }
        }
    
        this.structDefs.set(structName, { fields });
        // console.log("finish struct decl")
        return null;
    };
    
    public visitStructInit = (ctx: any): StructInstance => {
        // console.log("struct init")
        const structName = ctx.identifier().IDENTIFIER().getText();
        const def = this.structDefs.get(structName);
        if (!def) throw new Error(`Struct '${structName}' is not defined`);
    
        const instance: StructInstance = new Map();
        
        if (ctx.field_init_list()) {
            const fieldInits = ctx.field_init_list().field_init();
            for (const init of fieldInits) {
                const fieldName = init.identifier().IDENTIFIER().getText();
                const value = this.visit(init.expression());
                instance.set(fieldName, value);
            }

        }
        // console.log("finish struct init")
        return instance;
    };
    
    public visitFieldAccess = (ctx: any): any => {
        const obj = this.visit(ctx.expression());  
        const field = ctx.identifier().IDENTIFIER().getText();
    
        if (!(obj instanceof Map)) {
            throw new Error("Trying to access field on non-struct");
        }
    
        if (!obj.has(field)) {
            throw new Error(`Field '${field}' does not exist`);
        }
    
        return obj.get(field);
    };

    public visitEnum_decl = (ctx: any): null => {
        const name = ctx.identifier().IDENTIFIER().getText();
        const variants = new Map<string, EnumVariant>();
    
        if (ctx.variant_list()) {
            const variantNodes = ctx.variant_list().variant();
            for (const v of variantNodes) {
                const variantName = v.identifier().IDENTIFIER().getText();

                const hasFieldList = typeof v.field_list === "function" && v.field_list() !== undefined;

                if (hasFieldList) {
                    // struct-like variant
                    const fieldNames: string[] = v.field_list().field_decl().map((fd: any) =>
                        fd.identifier().IDENTIFIER().getText()
                    );
                    variants.set(variantName, { name: variantName, fields: fieldNames });
                } else {
                    // simple variant
                    variants.set(variantName, { name: variantName });
                }
            }
        }
    
        this.enumDefs.set(name, { name, variants });
        return null;
    };
    
    
    

    public visitEnumAccess = (ctx: any): any => {
        const enumName = ctx.identifier(0).IDENTIFIER().getText();
        const variantName = ctx.identifier(1).IDENTIFIER().getText();
        
        const enumDef = this.enumDefs.get(enumName);
        if (!enumDef) throw new Error(`Enum '${enumName}' not found`);
        
        const variant = enumDef.variants.get(variantName);
        if (!variant) throw new Error(`Variant '${variantName}' not found in enum '${enumName}'`);
        
        const instance = new Map<string, any>();
        instance.set("__enum", enumName);
        instance.set("__variant", variantName);
        
        return instance;
    };
    
    public visitEnumStructInit = (ctx: any): any => {
        const enumName = ctx.identifier(0).IDENTIFIER().getText();
        const variantName = ctx.identifier(1).IDENTIFIER().getText();
    
        const enumDef = this.enumDefs.get(enumName);
        if (!enumDef) throw new Error(`Enum '${enumName}' not found`);
        const variant = enumDef.variants.get(variantName);
        if (!variant) throw new Error(`Variant '${variantName}' not found`);
    
        const instance = new Map<string, any>();
        instance.set("__enum", enumName);
        instance.set("__variant", variantName);
    
        if (ctx.field_init_list()) {
            const inits = ctx.field_init_list().field_init();
            for (const init of inits) {
                const key = init.identifier().IDENTIFIER().getText();
                const val = this.visit(init.expression());
                instance.set(key, val);
            }
        }
    
        return instance;
    };
    
    public visitMatchExpr = (ctx: any): any => {
        const value = this.visit(ctx.expression());  
        const arms = ctx.match_arm_list().match_arm();
    
        for (const arm of arms) {
            const pattern = arm.match_pattern();
    
            // wildcard
            if (pattern.getText() === '_') {
                return this.visit(arm.expression());
            }
    
            const patternValue = this.visit(pattern);
    
            if (typeof patternValue === "string") {
                // simpleEnumPattern
                if (value.get("__variant") === patternValue.split("::")[1]) {
                    return this.visit(arm.expression());
                }
            } else if (patternValue.tag === "enumStructPattern") {
                const { enumName, variant, bindings } = patternValue;
    
                if (
                    value.get("__enum") === enumName &&
                    value.get("__variant") === variant
                ) {
                     
                    const tempEnv = new Map<string, Variable>();
                    for (const name of bindings) {
                        tempEnv.set(name, {
                            value: value.get(name),
                            mutable: false,
                        });
                    }
    
                    this.envStack.push(tempEnv);
                    const result = this.visit(arm.expression());
                    this.envStack.pop();
                    return result;
                }
            }
        }
    
        throw new Error("No match arm matched");
    };
    
    
    public visitMatch_pattern = (ctx: any): any => {
        if (ctx.NUMBER()) return Number(ctx.NUMBER().getText());
        if (ctx.getText() === '_') return '_';
    
        if (ctx.identifier().length === 2 && ctx.pattern_list()) {
            // Book::Papery { index }
            const enumName = ctx.identifier(0).IDENTIFIER().getText();
            const variant = ctx.identifier(1).IDENTIFIER().getText();
            const bindings = ctx.pattern_list().identifier().map((id: any) =>
                id.IDENTIFIER().getText()
            );
            return {
                tag: "enumStructPattern",
                enumName,
                variant,
                bindings,
            };
        }
    
        if (ctx.identifier().length === 2 && !ctx.pattern_list()) {
            return `${ctx.identifier(0).getText()}::${ctx.identifier(1).getText()}`;
        }
    
        throw new Error(`Unsupported match pattern: ${ctx.getText()}`);
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