import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { ConcurrentEvaluator } from "./Evaluator.js";
import { CompileVisitor } from "./CompilerVisitor.js";
//import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = `
// operation precedence
// let mut a = (17 < 20 - 4 && 10 == 4 + 1);
// a; // Result: false

// 3 * (1 + 2);

// "adads ad ad a ";

// mutability errors
// let a = 1;
// a = a + 1 // Caught error: Cannot assign to immutable variable 'a'

// let mut a = 1;
// a = a + 1 // Result: 2

// const a: number = 1;
// a = a + 1 // Caught error: Cannot assign to immutable variable 'a'

// type errors
// const a: bool = 1; // Caught error: Type mismatch in const: expected bool, got number

// let a; // Caught error: Cannot infer type for let-binding without expression or annotation


// struct User {
//     username: String,
//     email: String,
//     sign_in_count: number,
//     active: bool,
// }

// let mut user1 = User {
//     username: "xintong",
//     email: "xintong@example.com",
//     sign_in_count: 1,
//     active: true,
// };
// let user2 = User {
//     username: "xintong2",
//     email: "xintong@example.com",
//     sign_in_count: 1,
//     active: true,
// };
// user1.username; // xintong

// user1.username = "xintong2"; // Caught error: Cannot assign to immutable variable 'user1.username'

// let mut a = 5;
// let mut b = 10;
// fn test(mut x: number) -> number {
//     // let mut x = 42;
//     x = x + 1;
//     // x
//     return x;
// }
// test(b);
// b;

// let mut x = 2;
// fn test() -> number {
//     let mut x = 1;
//     return x + 1;
// }
     
// test();
 
// fn returns_unit() {
//     // no return
// }
// returns_unit();

// fn returns_bool() -> bool {
//     true
// }
// returns_bool();


// fn takes_multiple(a: number, b: number) -> number {
//     a + b
// }
// takes_multiple(1,2);


// fn empty() {
//     // returns unit ()
// }

// fn returns_explicit_unit() -> () {
//     ()
// }

// fn takes_number(x: number) -> number {
//     x + 1
// }
// fn call_wrong_type() -> number {
//     takes_number(1)  
// }
// call_wrong_type(); // passed

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

// fn inferred_type(x: number) -> number {
//     let result = takes_number(x);  // type checks
//     return result;
// }
// inferred_type(5); // should return 6 passed

// if false { 5 } else { "hello" } // Caught error: Type mismatch in if branches: then -> number, else -> string
// if true { 5 } else { true } // Caught error: Type mismatch in if branches: then -> number, else -> bool
// if true { 5 } else { 10 }; // should return 5

// let mut counter = 0;
// while counter < 10 {
//     counter = counter + 1; // counter is of type "number"
// }
// counter; // should return 10 passed

// failed cases
// fn block_returns() -> number {
//     let x = {
//         let a = 3;
//         let b = 4;
//         a + b  // value of block
//     };
//     x
// }
// block_returns(); // should return 7 failed
// fn conditional(x: number) -> number {
//     if x > 0 {
//         x
//     } else {
//         -x
//     }
// }
// conditional(5); // should return 5 failed
// fn wrong_conditional(x: i32) -> i32 {
//     if x > 0 {
//         x
//     } else {
//         true  //  expected i32, found bool
//     }
// }

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

// println!("Hello, world!"); // should print "Hello, world!" failed

// let mut x = 0;
// for i in 0..5 { 
//    x = i;
// } 
// x; // Caught error: Unbound variable state: i

// enum Color {
//     Red,
//     Green,
//     Blue,
// }

// struct Point {
//     x: number,
//     y: number,
// }

// struct Rectangle {
//     top_left: Point,
//     width: number,
//     height: number,
// }

// let c = Color::Red; // Correct type annotation
// c; // Accessing field of struct
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