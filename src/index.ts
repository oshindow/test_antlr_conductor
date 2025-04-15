import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { ConcurrentEvaluator } from "./Evaluator.js";
import { CompileVisitor } from "./CompilerVisitor.js";
//import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = `
fn main() {
    let x = 10;
    let y = 5;
    if x > y {
        return x + y;
    } else {
        return x - y;
    }
}
main();

fn main2() {
    let x = 4;
    
    while x < 10 {
        x = x + 1;
    }

    return x;
}
//main2();

fn main3() {
    let x = 0;
    let sum = 0;

    while x < 10 {
        if x % 2 == 0 {
            sum = sum + x;
        }
        x = x + 1;
    }

    return sum;
}
//main3();

fn main4() {
    println!("Hello, world!");
}
main4();
`;

const inputStream = CharStream.fromString(input);
const lexer = new rustLexer(inputStream);
 
const tokenStream = new CommonTokenStream(lexer);
const parser = new rustParser(tokenStream);
 
try {

    const tree = parser.start();
    
    const compiler = new CompileVisitor();

    compiler.visit(tree);
    const treeStr = Trees.toStringTree(tree, rustParser.ruleNames);
    console.log("tree:", treeStr)
    compiler.instrs.push({ tag: "DONE" });
    console.log("Compiled instructions:");
    for (const [i, instr] of compiler.instrs.entries()) {
        console.log(`${i}:`, instr);
    }

    const evaluator = new ConcurrentEvaluator(compiler.instrs);
    const result = evaluator.run();
    console.log("Result:", result);
     
} catch (e) {
    console.error("Caught error:", (e as Error).message);
}
