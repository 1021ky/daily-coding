/* primitive type */
// String wrapper
const str = new String('ラッピングされる文字列リテラル');
console.log(typeof str); // -> objectと判定される。これはNumberやBigIntでも。判別しにくくなるため、基本はラッパーオブジェクトは使わない。
console.log(str.length); // => 3

// ラッパーオブジェクトを使わなくても、プリミティブ型のデータに対してもオブジェクトのように参照はできる
const primitiveStr = '文字列リテラル'
console.log(typeof primitiveStr); // -> string なのでラッパーオブジェクトと型は違う
console.log(primitiveStr.length);

// 以下は同じ意味。プリミティブ型のプロパティにアクセスするときに自動的にラッパーオブジェクトが呼ばれている
console.log(primitiveStr.toUpperCase());
console.log(new String(primitiveStr).toLowerCase());
