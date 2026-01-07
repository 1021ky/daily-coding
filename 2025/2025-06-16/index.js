const assert = require('assert');
// 関数はオブジェクト
function add(x, y) {
    return x + y;
};
const myFunc = add;
const result = myFunc(2, 3);
assert(result === 5, 'Function as Object test failed');

// 関数は無名関数で定義して変数に代入できる
const myFunc2 = function (x, y) {
    // 関数を呼び出したときの処理
    return x + y;
};
const result2 = myFunc2(3, 4);
assert(result2 === 7, 'Anonymous Function test failed');

// factorialは関数の外から呼び出せる名前
// innerFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
    if (n === 0) {
        return 1;
    }
    // innerFactを再帰的に呼び出している
    // innerFactは関数の外からは呼び出せないが、factorialの中からは呼び出せる
    return n * innerFact(n - 1);
};
const result3 = factorial(3);
assert(result3 === 6, 'Named Function test failed');
