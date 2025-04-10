import { CharStream, CommonTokenStream, Trees } from "antlr4ng";
import { rustLexer } from "./parser/rustLexer.js";
import { rustParser } from "./parser/rustParser.js";
import { MyVisitor } from "./SimpleLangEvaluator.js";
//import { ThrowingErrorListener } from "./ErrorListener.js";  


const input = `
struct User {
    username: String,
    email: String,
    sign_in_count: u32,
    active: bool,
}

let user1 = User {
    username: "xintong",
    email: "xintong@example.com",
    sign_in_count: 1,
    active: true,
};

user1.username

struct Group {
    user: User,
    group_name: String,
    group_id: u32,
    group_active: bool,
}

let group1 = Group {
    user: user1,   
    group_name: "team",
    group_id: 1,
    group_active: true,
};

group1.user

enum Book {
    Papery, Electronic
}

let book = Book::Papery;

book

fn main() {
    enum Book {
        Papery {index: u32},
        Electronic {url: String},
    }
    
    let book = Book::Papery{index: 1001};
    let ebook = Book::Electronic{url: "url..."};
    
    match ebook {
        Book::Papery { index } => {
            return index;
        },
        Book::Electronic { url } => {
            return url;
        }
    }
}

// main()

// fn spawn_function() {
//     for i in 0..5 {
//         println("spawned thread print", i);
//         // sleep(1);
//     }
// }

// fn main() {
//     spawn(spawn_function);
//     for i in 0..3 {
//         println("main thread print", i);
//         // sleep(1);
//     }
// }

// main()
fn print_a() {
    let x = 1;
    println("A", x); 
    x = x + 1;
    println("A", x); 
}
fn print_b() {
    let x = 2;
    println("B", x); 
    x = x + 2;
    println("B", x); 
}

fn main() {
    spawn(print_a);
    spawn(print_b);
}

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
