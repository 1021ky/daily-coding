const assert = require('assert');
/* 配列 */
// 配列を指定した範囲で取得
const arr = ["a", "b", "c", "d", "e"];

function isEqualArray(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
assert(isEqualArray(['b', 'c', 'd'], arr.slice(1, 4)));
// nodeのassertで配列の比較もできる
assert(isEqualArray(['b', 'c', 'd'], arr.slice(1, 4)));

// 指定した値が配列に含まれているか
assert.equal(arr.includes('b'), true);

// 配列の要素の編集
arr.push('f');
assert(isEqualArray(['a', 'b', 'c', 'd', 'e', 'f'], arr));
arr.pop();
assert(isEqualArray(['a', 'b', 'c', 'd', 'e'], arr));
const newArr = arr.concat(['f', 'g']);
assert(isEqualArray(['a', 'b', 'c', 'd', 'e', 'f', 'g'], newArr));
// concatでも配列を結合できる。単一の値も結合できる
const newArr2 = newArr.concat('h');
assert(isEqualArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], newArr2));
// 単一要素の配列であっても、concatは配列を結合する
const newArr3 = newArr2.concat(['i']);
assert(isEqualArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], newArr3));
// ...（スプレッド構文）を使って配列を展開することができる
assert(isEqualArray([1, 2, 3, 4, 5], [1, 2, ...[3, 4, 5]]));

// 平坦化
const array = [[["A"], "B"], "C"];
// 引数なしは1を指定した場合と同じ
assert(isEqualArray(array.flat(), [["A"], "B", "C"]));
assert(isEqualArray(array.flat(1), [["A"], "B", "C"]));
assert(isEqualArray(array.flat(2), ["A", "B", "C"]));
// すべてをフラット化するにはInfinityを渡す
assert(isEqualArray(array.flat(Infinity), ["A", "B", "C"]));