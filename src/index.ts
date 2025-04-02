import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { MyVisitor } from "./SimpleLangEvaluator.js";
import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = "(3 - 2) * 5";
const inputStream = CharStream.fromString(input);
const lexer = new rustLexer(inputStream);
lexer.removeErrorListeners();
lexer.addErrorListener(new ThrowingErrorListener());

const tokenStream = new CommonTokenStream(lexer);
const parser = new rustParser(tokenStream);
parser.removeErrorListeners();
parser.addErrorListener(new ThrowingErrorListener());

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
