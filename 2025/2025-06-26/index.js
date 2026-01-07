const assert = require("assert");
/*　プロトタイプオブジェクト */
// プロトタイプオブジェクトで定義されているメソッドと同名のメソッドをオブジェクトのインスタンスに定義
const customObject = {
    toString() {
        return "custom value";
    }
};
// プロトタイプオブジェクトのメソッドを上書きしているため、Object.prototype.toString()は呼び出されない
assert(customObject.toString() === "custom value");
assert(customObject.toString !== Object.prototype.toString); // プロトタイプオブジェクトのメソッドを上書きしているため、異なるメソッドとなる

// プロトタイプオブジェクトは基本的に継承される
// 以下はどちらも継承
const obj = Object.create(Object.prototype);
const obj2 = {};
assert(Object.prototype.isPrototypeOf(obj));
assert(Object.prototype.isPrototypeOf(obj2));

// 継承しない
const objHasNoPrototype = Object.create(null);
assert(!Object.prototype.isPrototypeOf(objHasNoPrototype));

// プロトタイプオブジェクトがないオブジェクトに対して、特定のプロパティが存在するかどうかをチェックできるようにObject.hasOwn()を使う
assert(!Object.hasOwn(objHasNoPrototype, 'toString'));

/*配列*/
// 宣言
const arr = [1, 2, 3, 4, 5];
const sparseArr = [1, , 3, 4, 5]; // 疎な配列
assert(arr.length === 5); // 配列の長さは5
assert(sparseArr.length === 5); // 疎な配列も長さは5
assert(sparseArr[1] === undefined); // 疎な配列の要素はundefinedになる。エラーにはならない。キーのないプロパティにアクセスしているだけなので。
// 配列の要素にアクセス
assert(arr[0] === 1); // 最初の要素は1
assert(arr.at(1) === 2); // 2番目の要素は2
assert(arr.at(-1) === 5); // 最後の要素は5。atで相対的なインデックスを指定できる

// 配列はオブジェクトでもあるので、判定にはArray.isArray()を使う
assert(Array.isArray(arr)); // arrは配列
assert(!Array.isArray({})); // 空のオブジェクトは配列ではない
assert(!Array.isArray(null)); // nullは配列ではない
