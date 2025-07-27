/* Set */
const assert = require("assert")
// 集合を表すのコレクションを扱うビルトインオブジェクト
// 順序保証はされない
// 初期化
const emptySet = new Set();
assert.equal(emptySet.size, 0);
const filledSet = new Set(["v1", "v2", "v2"])
assert.equal(filledSet.size, 2)
// 追加
const valSet = emptySet.add("foo")// 返り値
// 確認
assert.equal(valSet.has("foo"), true);
assert.equal(emptySet.has("foo"), true);
assert.equal(valSet, emptySet); // 返り値と同じ
// 削除
emptySet.delete("foo");
assert.equal(emptySet.size, 0)