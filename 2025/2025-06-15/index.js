const assert = require('assert');
// 関数
// オブジェクトもわたせる
function greet(user) {
    // プロパティを参照
    return `Hello, ${user.name}!`;
};
const user = {
    name: "Alice",
    age: 30
};
const message = greet(user);
assert(message === "Hello, Alice!", 'Object parameter test failed');

// 引数でオブジェクトのプロパティを参照
function greetWithProperty({ name }) {
    return `Hello, ${name}!`;
}
const userWithProperty = {
    name: "Bob",
    age: 25
};
const robot = {
    name: "Marcus",
    id: 40
};
const messageWithProperty = greetWithProperty(userWithProperty);
assert(messageWithProperty === "Hello, Bob!", 'Object property test failed');
// プロパティが一致していれば構造が異なってもよい
const messageWithRobot = greetWithProperty(robot);
assert(messageWithRobot === "Hello, Marcus!", 'Object property with robot test failed');
const objHasNoName = {
    age: 20
};
const messageWithNoName = greetWithProperty(objHasNoName);
// プロパティがないため、nameはundefined
assert(messageWithNoName === "Hello, undefined!", 'Object property with no name test failed');

// 配列も分割して関数に渡せる
function greetArray([name1, name2]) {
    return `Hello, ${name1} and ${name2}!`;
}
const namesArray = ["Charlie", "Dave"];
const messageWithArray = greetArray(namesArray);
assert(messageWithArray === "Hello, Charlie and Dave!", 'Array parameter test failed');