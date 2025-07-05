"use strict";
const assert = require("assert");
/* this */

// 実行コンテキストによってthisの値は変わる

console.log(this);
// Node.jsで　の、グローバルオブジェクトはglobal
console.log(global);
// ブラウザでのグローバルオブジェクトはwindow
//console.log(window);
// どの環境でもグローバルオブジェクトを参照するためのglobalThis
console.log(globalThis);

// functionを使った関数は関数宣言でも変数に代入してもthisはグローバルオブジェクトはundefined
function fn1() {
    return this;
}
const fn2 = function () {
    return this;
};
assert(fn1() === undefined);
assert(fn2() === undefined);

// メソッドにおけるthis
const obj = {
    name: 'オブジェクト',
    method: function () {
        return this.name;
    }
};
assert(obj.method() === 'オブジェクト');


// TODO アロー関数が出てきた背景と、アロー関数でのthisの扱い