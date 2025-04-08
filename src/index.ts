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

main()

// enum IpAddrKind {
//     V4,
//     V6,
//     user1,
// }

// let four = IpAddrKind::V4 
// let six = IpAddrKind::V6
// let user = IpAddrKind::user1

// user
// enum Coin {
//     Penny,
//     Nickel,
//     Dime,
//     Quarter,
// }

// fn value_in_cents(coin: Coin) -> u8 {
//     match coin {
//         Coin::Penny => 1,
//         Coin::Nickel => 5,
//         Coin::Dime => 10,
//         Coin::Quarter => 25,
//     }
// }
// let c = Coin::Dime 
// value_in_cents(c)

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
