import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { Evaluator } from "./Evaluator.js";
import { CompileVisitor } from "./CompilerVisitor.js";
//import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = `
1+2
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

    const evaluator = new Evaluator();
    const result = evaluator.run(compiler.instrs);
    console.log("Result:", result);
     
} catch (e) {
    console.error("Caught error:", (e as Error).message);
}
