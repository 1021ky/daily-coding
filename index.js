const assert = require('assert');
/* 配列 */
// 作成
const emptyArray = [];// 空の配列
const numberArray = [1, 2, 3, 4, 5]; // 数値の配列
const matrixArray = [[1, 2], [3, 4], [5, 6]]; // 二次元配列

assert(numberArray[2] === 3);
assert(matrixArray.at(-1)[1] === 6); // 二次元配列の要素にアクセス
assert(emptyArray.length === 0);
assert(numberArray.length === 5);
assert(matrixArray.length === 3);
assert(matrixArray[1].length === 2);

// 存在しない場合はundefinedが返る
assert(numberArray[100] === undefined);
assert(numberArray.at(100) === undefined);

// 配列かどうかのチェック
assert(Array.isArray(emptyArray) === true);
assert(typeof (numberArray) === 'object');
assert(numberArray instanceof Array === true);

// 配列の要素の追加
numberArray[5] = 6; // 可変長なので、要素を追加できる
assert(numberArray.length === 6);
assert(numberArray[5] === 6);
numberArray[10] = 11; // 存在しないインデックスに追加しても可変長なので、長さは変わる。→疎な配列になる
assert(numberArray.length === 11);
assert(numberArray[9] === undefined);
assert(Object.hasOwn(numberArray, 9) === false); // 9番目のインデックスは存在しないため、hasOwnPropertyではfalseを返す。undefinedを持った密な配列ではないことがわかる。

// TypedArray
const typedArray = new Int32Array([1, 2, 3, 4, 5]); // 固定長の配列
assert(typedArray.length === 5);
assert(typedArray[2] === 3);
assert(Array.isArray(typedArray) === false); // TypedArrayはisArrayではfalseを返す
assert(typedArray instanceof Int32Array === true); // instanceofではわかる

typedArray[6] = 8; // TypedArrayは可変長ではないため、要素を追加できない
assert(typedArray.length === 5); // 追加したつもりでも長さは変わらない
assert(typedArray[6] === undefined); // 存在しないインデックスとして扱われる
