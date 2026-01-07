const assert = require('assert');
/* ラッパーオブジェクト
※基本的にはプリミティブ型を使う。自動的な変換があるのと、ラッパーオブジェクトは型がObject型で扱いがややこしくなるため。
裏にはこういう仕組みがあるとわかっていればよさそう。
*/

const strWrapper = new String('Hello, World!');
const strPrimitive = 'Hello, World!';
// どちらもStringのメソッドを呼べる
assert(strWrapper.toUpperCase() === 'HELLO, WORLD!');
assert(strPrimitive.toUpperCase() === 'HELLO, WORLD!');

// ラッパーオブジェクトはプリミティブ型に変換できる
assert(strWrapper.valueOf() === strPrimitive);
// ラッパーオブジェクトとプリミティブ型は等価ではない。ラッパーオブジェクトはObject型なので。
assert(strWrapper !== strPrimitive);

/* スコープ */
// 3種のスコープ
// 1. グローバルスコープ
// 2. 関数スコープ
// 3. ブロックスコープ

const hoge = 'グローバル変数';
const foo = () => {
    const hoge = '関数スコープの変数';
    assert(hoge === '関数スコープの変数');
}
foo();
{
    const hoge = 'ブロックスコープの変数(outer)';
    assert(hoge === 'ブロックスコープの変数(outer)');

    {
        const hoge = 'ブロックスコープの変数(inner)';
        assert(hoge === 'ブロックスコープの変数(inner)');

    }
}

assert(hoge === 'グローバル変数');

// varとfunctionはどちらも宣言がホイスティングされる（スコープの先頭に移動する）

assert(hoistedFunction() === 'ホイスティングされた関数'); // ホイスティングされているので、関数宣言の前に呼び出してもエラーにならない
function hoistedFunction() {
    return 'ホイスティングされた関数';
}
assert(hoistedVar === undefined)
hoistedVar = 'ホイスティングされた変数'; // varは宣言がホイスティングされるが、初期化はされない
var hoistedVar;

// クロージャー
const closureFunction = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }// 返り値の型は関数
}
const counter = closureFunction();
assert(counter() === 1);
assert(counter() === 2);
assert(counter() === 3);
assert(closureFunction()() === 1); // 新しいクロージャーを作成して呼び出すと、別オブジェクトのcountを参照するので、1から始まる