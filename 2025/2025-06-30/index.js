const assert = require('assert');
/* 配列 */
// 配列の要素削除
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 4); // 削除を始めるインデックスと削除数を指定
assert(arr.length === 1);
assert(arr[0] === 1);
assert(arr[1] === undefined);
// 削除された要素の配列を返す
assert(removed.length === 4);
assert(removed[0] === 2);
assert(removed[1] === 3);
assert(removed[2] === 4);
assert(removed[3] === 5);
// spliceは追加もできる
const arr2 = [1, 2, 3];
const added = arr2.splice(0, 0, 4, 5);
console.log(arr2);
assert(arr2.length === 5);
assert(arr2[0] === 4);
assert(arr2[1] === 5);
assert(arr2[2] === 1);
assert(arr2[3] === 2);
assert(arr2[4] === 3);
assert(added.length === 0); // 追加は削除数を返すので、0が返る
arr2.splice(arr2.length + 10, 0, ...[6, 7, 8]); // 配列の末尾に追加
console.log(arr2);
arr2.length = 0; // 配列を空にする
assert(arr2.length === 0);
assert(arr2[0] === undefined);
let arr3 = [1, 2, 3, 4, 5];
arr3 = []; // 新しい空の配列を代入することで要素を削除
assert(arr3.length === 0);
assert(arr3[0] === undefined);

// spliceは破壊的なメソッドであるため、元の配列を変更するが、toSpliceは非破壊的なメソッドである
// このように破壊的なものと非破壊的なものを気をつける必要あり
const arr4 = [1, 2, 3, 4, 5];
const newArr = arr4.toSpliced(1, 3); // 新しい配列を返す
assert(arr4.length === 5); // 元の配列は変更されない
assert(newArr.length === 2); // 新しい配列の長さ
assert(newArr[0] === 1);
assert(newArr[1] === 5); // 新しい配列の要素