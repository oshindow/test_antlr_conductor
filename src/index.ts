import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { ConcurrentEvaluator } from "./Evaluator.js";
import { CompileVisitor } from "./CompilerVisitor.js";
//import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = `
// let x = -2;
// x = x + true;

// fn return_number() -> number {
//     let x = 42;
//     x = x + 1;
//     true
//     // return x;
// }
// return_number();

// fn return_number() -> undefined{
//     let x = 42;
//     x = x + 1;
// }
// return_number();

 
// fn returns_unit() {
//     // no return
// }
// returns_unit();

// fn returns_bool() -> bool {
//     true
// }
// returns_bool();

// takes_bool(true);
// fn takes_multiple(a: number, b: number) -> number {
//     a + b
// }
// takes_multiple(1,2);

// fn block_returns() -> i32 {
//     let x = {
//         let a = 3;
//         let b = 4;
//         a + b  // value of block
//     };
//     x
// }
// fn conditional(x: i32) -> i32 {
//     if x > 0 {
//         x
//     } else {
//         -x
//     }
// }
// fn wrong_conditional(x: i32) -> i32 {
//     if x > 0 {
//         x
//     } else {
//         true  //  expected i32, found bool
//     }
// }
// fn empty() {
//     // returns unit ()
// }

// fn returns_explicit_unit() -> () {
//     ()
// }
// fn wrong_type(x: i32) -> bool {
//     x  //  expected bool, found i32
// }

// fn call_wrong_type() {
//     takes_number(true);  //  expected i32, found bool
// }

// fn nested_blocks() -> i32 {
//     let x = 5;
//     let y = {
//         let x = 10; // shadowing
//         x + 1
//     };
//     y
// }

// fn takes_number(x: number) -> number {
//     return x + 1;
// }
 
// fn takes_bool(b: bool) -> bool {
//     return !b;
// }

// fn inferred_type(x: number) -> number {
//     let result = takes_number(x);  // type checks
//     return result;
// }
// // inferred_type(5); // Caught error: Type error in function 'inferred_type'; declared return type number, actual return type [object Object]

// let z = 100;
// let r1 = &z;
// let r2 = &mut z; // Caught error: Cannot mutably borrow value that has shared borrows: z

// let z = 100;
// let r1 = &mut z;
// let r2 = &z; // Caught error: Cannot immutably borrow value that is already mutably borrowed: z

// let x = 1;
// let r1 = &x;
// let r2 = &r1; // This is a reference to a reference
// **r2; // Should return 1

// let x = 5;
// let m = &mut x;
// let y = m; 
// *y; // Should return 5


// let x = 3;
// let r = &mut x;
// *r = 9;
// *r; // Should return 9

// if false { 5 } else { "hello" } // Caught error: Type mismatch in if branches: then -> number, else -> string
// if true { 5 } else { true } // Caught error: Type mismatch in if branches: then -> number, else -> bool
// if true { 5 } else { 10 }; // should return 5

// let mut counter = 0;
// while counter < 10 {
//     counter = counter + 1; // counter is of type "number"
// }
// counter; // should return 10

// println!("Hello, world!"); // should print "Hello, world!"

// let mut x = 0;
// for i in 0..5 {
//    x = i;
// } 
// x;


enum Book {
    Papery { index: u32 },
    Electronic { url: String },
}

let book = Book::Papery { index: 1001 };
let ebook = Book::Electronic { url: "url ..." };

match ebook {
    Book::Papery { index } => {
        println!(index);
    }
    Book::Electronic { url } => {
        println!(url);
    }
}
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