import { SimpleLangEvaluator } from "./dist/index.js";

// 模拟 conductor，拦截解析结果
const mockConductor = {
    sendOutput: console.log,  // 直接打印解析结果
};

// 初始化解析器
const evaluator = new SimpleLangEvaluator(mockConductor);

// 定义要测试的 Rust 表达式
const rustExpressions = [
    "3 + 5 * (2 - 1);",   // 8
    "let x = 10 - 3 * 2;", // Rust 变量赋值
    "(4 + 6) / 2;",        // 5
    "3 + (4 - 2) * 5;",    // 13
    "fn add(a: i32, b: i32) -> i32 { a + b }", // Rust 函数
];

// 依次解析 Rust 表达式
async function runTests() {
    for (const expr of rustExpressions) {
        console.log(`Testing: ${expr}`);
        await evaluator.evaluateChunk(expr);
    }
}

// 运行测试
runTests();
