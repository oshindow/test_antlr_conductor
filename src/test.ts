import { CharStream, CommonTokenStream } from 'antlr4ng';
import { rustLexer } from './parser/rustLexer';
import { rustParser } from './parser/rustParser';

const input = `
    let mut x: i32 = 5;
    if x > 0 {
        x = x - 1;
    }
`;

const inputStream = CharStream.fromString(input);
const lexer = new rustLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new rustParser(tokenStream);

const tree = parser.program();
console.log(tree.toStringTree(parser));
