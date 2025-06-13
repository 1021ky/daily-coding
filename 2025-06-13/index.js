const assert = require('assert');
// 関数 デフォルト引数
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

assert(greet() === "Hello, Guest!");
assert(greet("Alice") === "Hello, Alice!");

// 引数が多いときは無視される
assert(greet("Bob", "Extra") === "Hello, Bob!");