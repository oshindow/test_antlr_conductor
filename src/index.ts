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

struct User {
    username,
    email,
    sign_in_count,
    active
}

let user1 = User {
    username: "xintong",
    email: "email@example.com",
    sign_in_count: 1,
    active: true
} 

user1.username 
user1

enum IpAddrKind {
    V4,
    V6,
}

let four = IpAddrKind::V4 
// let six = IpAddrKind::V6

enum Coin {
    Penny,
    Nickel,
    Dime,
    Quarter,
}

fn value_in_cents(coin: Coin) -> u8 {
    match coin {
        Coin::Penny => 1,
        Coin::Nickel => 5,
        Coin::Dime => 10,
        Coin::Quarter => 25,
    }
}
let c = Coin::Dime 
value_in_cents(c)

let mut x = 0
while x < 3 {
    if x == 1 {
        x = x + 1
    } else {
        x = x + 2
    }
}
x


let mut y = 5
if y >= 5 {
    y = y + 1
}
y
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
