const assert = require('assert');
/* async function*/
async function asyncFunc() {
    return 'Hello, World!';
}


// async functionの定義は逐次処理する関数と同じくいくつかある
async function fn() {} // 通常の関数定義
const asyncfn = async function () {}; // 変数に代入する形
const asyncAllowFn = async () => {}; // アロー関数
const asyncMethod = { async method() {} }; // メソッドの定義でも

// async functionの返り値は必ずPromiseオブジェクトになる
assert(asyncFunc() instanceof Promise);
asyncFunc().then(result => {
    console.log(result); // 'Hello, World!'
});
