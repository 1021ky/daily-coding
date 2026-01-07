const assert = require("assert");
/*配列 */

const array = ["Java", "JavaScript", "Ruby", "JavaScript"];
// 要素が一致するインデックスを取得
const indexOfJava = array.indexOf("Java");
assert(indexOfJava === 0);
// 複数ある場合はindexOfは最初に見つかったインデックスを返す
const indexOfJS = array.indexOf("JavaScript");
assert(indexOfJS === 1);
// 末尾から探索して最初に見つかった"JavaScript"のインデックスを取得
const lastIndexOfJS = array.lastIndexOf("JavaScript");
assert(lastIndexOfJS === 3);
// 存在しない要素は `-1` を返す
const indexOfPython = array.indexOf("Python");
assert(indexOfPython === -1);

const aliceObject = { name: "Alice", age: 30 };
const objArray = [
    aliceObject,
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
    { name: "Alice", age: 30 },
]
// 引数で渡しているオブジェクトは新しく作成されたものなので、参照が異なるため、indexOfは見つからない
assert(objArray.indexOf({ name: "Alice", age: 30 }) === -1);
assert(objArray.indexOf(aliceObject) === 0); // 参照が同じなので見つかる
// 参照が違っても同じ内容のオブジェクトを見つけたい場合は、findIndexを使う
// コールバック関数で一致条件を定義する
const indexOfAlice = objArray.findIndex(obj => obj.name === "Alice" && obj.age === 30);
assert(indexOfAlice === 0);
assert(objArray.findLastIndex(obj => obj.name === "Bob" && obj.age === 25) === 3);

// findは要素を返す
assert(objArray.find(obj => obj.name === "Charlie" && obj.age === 35).name === "Charlie");
assert(objArray.findLast(obj => obj.name === "Charlie" && obj.age === 35));

// next 指定範囲の要素取得