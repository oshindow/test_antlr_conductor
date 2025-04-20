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

// fn takes_number(x: number) -> number {
//     x + 1
// }
 

// fn takes_bool(b: bool) -> bool {
//     !b
// }

// takes_bool(true);
// fn takes_multiple(a: number, b: number) -> number {
//     a + b
// }
// takes_multiple(1,2);

// fn inferred_type(x) -> number {
//     let result = takes_number(x);  // type checks
//     return result;
// }
// inferred_type(1);

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

// Test case for ownership and borrow checking in a Rust sublanguage VM.
//
// The purpose of this test is to verify that the VM's compile-time borrow checker
// correctly identifies and rejects code that violates Rust's ownership and
// borrowing rules.  This test focuses on several key aspects:
//
// 1.  No dangling pointers: The VM should prevent the creation of dangling
//     pointers by ensuring that a value is not used after it has been moved.
//
// 2.  Mutable borrow exclusivity: The VM should enforce that there can only be
//     one mutable borrow of a value at any given time.
//
// 3.  Shared borrow rules: The VM should allow multiple shared borrows of a
//     value, but disallow mutation while shared borrows exist.
//
// 4.  Lifetime variance: The VM should handle cases where lifetimes are involved
//     (even if this sublanguage has simplified lifetimes).
//
// The test cases are designed to be self-contained and clearly indicate
// whether they should compile successfully or result in a compile-time error.
//
// Each test case is annotated with "PASS" or "COMPILE_ERROR" to indicate the
// expected behavior.

fn main() {
    // Test case 1: Basic ownership and move.
    // Expected: COMPILE_ERROR (use of moved value)
    {
        let v = vec![1, 2, 3];
        let _w = v; // v is moved here
        //println!("{:?}", v); // Error: use of moved value: v
    }

    // Test case 2: Borrowing and shared references.
    // Expected: PASS
    {
        let v = vec![1, 2, 3];
        let ref1 = &v;
        let ref2 = &v;
        println!("{:?} {:?} {:?}", v, ref1, ref2); // OK: multiple shared borrows
    }

    // Test case 3: Mutable borrow.
    // Expected: PASS
    {
        let mut v = vec![1, 2, 3];
        let ref1 = &mut v;
        ref1.push(4);
        println!("{:?}", v); // OK: mutable borrow, then use of original
    }

     // Test case 4: Multiple mutable borrows.
    // Expected: COMPILE_ERROR
    {
        let mut v = vec![1, 2, 3];
        let _ref1 = &mut v;
        //let _ref2 = &mut v; // Error: cannot borrow v as mutable more than once at a time
    }

    // Test case 5: Mutable and shared borrows.
    // Expected: COMPILE_ERROR
    {
        let mut v = vec![1, 2, 3];
        let _shared_ref = &v;
        //let _mut_ref = &mut v; // Error: cannot borrow v as mutable because it is also borrowed as immutable
    }

    // Test case 6: Shared borrow then mutable
    // Expected: COMPILE_ERROR
    {
        let mut v = vec![1, 2, 3];
        let _shared_ref = &v;
        //let _mut_ref = &mut v; // Error:  cannot borrow v as mutable because it is also borrowed as immutable
    }

    // Test case 7:  Move and then borrow
    // Expected: COMPILE_ERROR
    {
        let v = vec![1, 2, 3];
        let _moved = v;
        //let _ref = &v; // Error:  borrow of moved value
    }

     // Test case 8:  Move and then mutable borrow
    // Expected: COMPILE_ERROR
    {
        let mut v = vec![1, 2, 3];
        let _moved = v;
        //let _ref = &mut v; // Error:  mutable borrow of moved value
    }

    // Test case 9: Borrow within a scope
    // Expected: PASS
    {
        let mut v = vec![1, 2, 3];
        {
            let ref1 = &mut v;
            ref1.push(4);
        } // ref1 goes out of scope
        v.push(5); // OK: can use v again
        println!("{:?}", v);
    }

    // Test case 10: Returning a reference (simplified lifetime)
    // Expected: COMPILE_ERROR (dangling pointer in this simplified case)
    {
       // In a full Rust, this would require lifetime annotations.  For this
       // sublanguage test, we *assume* no lifetime annotations, and thus
       // the return of a reference to a local variable is an error.
        fn return_ref() -> &i32 {
            let x = 10;
            &x // Returns a reference to a local variable
        }
        //let _r = return_ref(); // Error: returning reference to local variable
    }

    // Test case 11:  Borrowing part of a struct
    // Expected: PASS
    {
        struct Data {
            a: i32,
            b: i32,
        }
        let mut data = Data { a: 1, b: 2 };
        let ref_a = &data.a;
        let ref_b = &mut data.b;
        println!("a: {}, b: {}", ref_a, ref_b);
        *ref_b = 5;
        println!("data: {:?}", data);
    }

    // Test case 12:  Borrowing part of a vector
    // Expected: PASS
    {
        let mut v = vec![1, 2, 3];
        let item1 = &v[0];
        println!("{}", item1);
        let item2 = &mut v[1];
        *item2 = 10;
        println!("{:?}", v);
    }

    // Test case 13:  For loop and ownership
    // Expected: PASS
    {
        let v = vec![1, 2, 3];
        for i in &v {
            println!("{}", i);
        }
        println!("{:?}", v); // v is still valid
    }

    // Test case 14:  While loop and ownership
    // Expected: PASS
    {
        let mut v = vec![1, 2, 3];
        let mut iter = v.iter();
        while let Some(i) = iter.next() {
            println!("{}", i);
        }
        println!("{:?}", v); // v is still valid because iter is created with v.iter()
    }
}

main();
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
