import { CharStream, CommonTokenStream } from 'antlr4ng';
import { SimpleLangLexer } from './parser/src/SimpleLangLexer';
import { SimpleLangParser } from './parser/src/SimpleLangParser';

const input = `
    let mut x: i32 = 5;
    if x > 0 {
        x = x - 1;
    }
`;

const inputStream = CharStream.fromString(input);
const lexer = new SimpleLangLexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new SimpleLangParser(tokenStream);

const tree = parser.program();
console.log(tree.toStringTree(parser));
