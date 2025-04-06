import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { MyVisitor } from "./SimpleLangEvaluator.js";
//import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = `
fn add(a, b) {
    return a + b  
}

let sum = 0
for i in 1..5 {    
    sum = add(i, sum)
}
sum

let mut counter = 0 
loop {
    counter = counter + 1 
    if counter == 10 {
        break 
    }
}
counter 

`;
const inputStream = CharStream.fromString(input);
const lexer = new rustLexer(inputStream);
// lexer.removeErrorListeners();
// lexer.addErrorListener(new ThrowingErrorListener());

const tokenStream = new CommonTokenStream(lexer);
const parser = new rustParser(tokenStream);
// parser.removeErrorListeners();
// parser.addErrorListener(new ThrowingErrorListener());
try {

    const tree = parser.start();

    const visitor = new MyVisitor();

    const result = visitor.visit(tree);
    const treeStr = Trees.toStringTree(tree, rustParser.ruleNames);
    console.log("tree:", treeStr)
    console.log("Result:", result);
} catch (e) {
    console.error("Caught error:", (e as Error).message);
}
