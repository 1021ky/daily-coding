const assert = require("assert");
/* Set */
// 値が重複しないコレクション。順序は保証されない。
// 初期化
const set = new Set();
set.add(1);
assert.equal(set.size, 1);
set.add(1);
assert.equal(set.size, 1); //値が重複するから変わらない

// コンストラクタにIterableなオブジェクトを渡して初期化も可能
const set2 = new Set([1, 2, 3, 4, 5, 1, 2, 3]);
assert.equal(set2.size, 5)

// 値があるか確認
assert.equal(set.has(1), true)
assert.equal(set.has(5), false)
// 値の削除
set.delete(1);
assert.equal(set.size, 0);
set2.clear();
assert.equal(set2.size, 0);

[1, 2, 3, 4, 5].forEach(e => {
    set.add(e);
});
set.forEach((v) => { console.log(v); });
// iterableなので、spread構文も使える
console.log([...set].filter((e) => e > 2));

// 集合の演算もできる
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);

// 和集合 (A∪B): セットAとセットBのすべての要素を含む集合
const unionSet = setA.union(setB);
console.log([...unionSet]); // => [1, 2, 3, 4, 5, 6, 7]

// 積集合 (A∩B): セットAとセットBの両方に存在する要素のみの集合
const intersectionSet = setA.intersection(setB);
console.log([...intersectionSet]); // => [3, 4, 5]

// 差集合 (A-B): セットAからセットBに含まれる要素を除いた集合
const differenceSet = setA.difference(setB);
console.log([...differenceSet]); // => [1, 2]

// 対称差集合 (A△B): セットAとセットBのどちらか一方にのみ存在する要素の集合
const symmetricDifferenceSet = setA.symmetricDifference(setB);
console.log([...symmetricDifferenceSet]); // => [1, 2, 6, 7]