/* Map Set */
const assert = require("assert");
const { isArray } = require("util");
// Map ビルトインオブジェクト。キーと値の組み合わせからなる抽象データ型

// 初期化
const emptyMap = new Map();
const filledMap = new Map([["key1", "value1"], ["key2", "value2"]]); // 初期値として渡せる配列はエントリー。エントリーは、[キー, 値]という形式の配列のこと

// 使えるメソッド
// size
assert.equal(emptyMap.size, 0);
assert.equal(filledMap.size, 2);
// set 追加する
filledMap.set("key3", "foo");
filledMap.set("key3", "value3"); // 同じキーの場合は値が上書きされる
assert.equal(filledMap.size, 3);
// get 取得する
assert.equal(filledMap.get("key"), undefined);// 存在しないキーの場合はundefined
assert.equal(filledMap.get("key1"), "value1");
assert.equal(filledMap.get("key2"), "value2");
assert.equal(filledMap.get("key3"), "value3");
// has 存在確認
assert.equal(filledMap.has("key"), false);
assert.equal(filledMap.has("key1"), true);
// 要素列挙 (Iteratorで返る)
assert.equal(Symbol.iterator in filledMap.keys(), true);
assert.equal(Symbol.iterator in filledMap.values(), true);
assert.equal(Symbol.iterator in filledMap.entries(), true);
// delete 要素の削除
assert.equal(filledMap.delete("key1"), true); // 消せたらtrueが返る
assert.equal(filledMap.delete("key1"), false); // 存在しないキーの場合はfalse
assert.equal(filledMap.size, 2);
// clear 全要素削除
assert.equal(filledMap.size, 2);
assert.equal(filledMap.clear(), undefined); // 返り値はvoid
assert.equal(filledMap.size, 0);

// 列挙
const favoriteFoods = new Map([["Bob", "Chicken Steak"], ["Tom", "Apple"], ["Nancy", "Ham"]]);
favoriteFoods.forEach((value, key) => {
    console.log(`${key} likes ${value} very much`);
})
// entriesでエントリーの配列を取得できる
for (const [k, v] of favoriteFoods.entries()) {
    console.log(`${k}'s favorite food is ${v}`);
}
// map自体もiterableなので、for...ofが使える
for (const [k, v] of favoriteFoods) {
    console.log(`${k}'s loves ${v}`);
}
// iterableなのでSpread構文も使える
const members = [...favoriteFoods.keys()];
console.log(`members:${members}`)
const foods = [...favoriteFoods.values()];
console.log(`foods:${foods}`)

const favoriteFoodData = new Map([
    ["Bob", "Chicken Steak"],
    ["Tom", "Apple"],
    ["Nancy", "Ham"],
    ["Alice", "Apple"],
    ["John", "Chicken Steak"],
    ["Emma", "Ham"],
    ["Mike", "Apple"],
    ["Sara", "Chicken Steak"]
]);
const groupedMap = Map.groupBy(favoriteFoodData.entries(), ([k, v]) => v)
console.log(groupedMap.get("Apple"))
assert(Array.isArray(groupedMap.get("Apple"))); // getで取り出したものは、Array