"use strict";
const assert = require('assert');
/* アロー関数と通常の関数でのthisの違い */

// 通常の関数定義
const normalFnObj = {
    a: 1,
    foo: function () {
        return this.a;
    }
}
assert(normalFnObj.foo() === 1);
const fn = normalFnObj.foo;
assert.throws(() => fn(), TypeError); // ベースオブジェクトがないと、thisはグローバルのスコープを参照して、変数aがないためTypeErrorが発生する

// call apply bindを使えば、thisを明示的に設定できる。
assert(fn.call({ a: 2 }) === 2);
// メソッドを1度関数にしてから、あらためてthisを設定するのは、わかりにくいコードになるため、あまり使われない。

// アロー関数の場合
this.a = 10;
const arrowFnObj = {
    a: 1,
    foo: () => {
        return this.a;
    }
}
assert(arrowFnObj.foo() === 10); // アロー関数は定義された時点のthisを参照するため、グローバルのthisを参照する

// これを利用してコールバック関数が呼び出し元のthisを参照することができる。
const obj = {
    a: 5,
    method: function () {
        setTimeout(() => {
            console.log(this.a); // 5
        }, 3000);
    }
}
obj.method();

const obj2 = {
    a: 5,
    method: () => { // アロー関数にアロー関数を使っているため、thisはグローバルのthisを参照する
        setTimeout(() => {
            console.log(this.a);
        }, 3000);
    }
}

obj2.method(); // 10
