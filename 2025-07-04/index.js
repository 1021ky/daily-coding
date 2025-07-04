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