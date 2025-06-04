/* 比較演算子 */
// 厳密等価演算子 同じ型で同じ値ならばtrue
console.log(1 === 1);
console.log('1' === 1); // 型が違うのでfalse
// オブジェクト同士の場合は、参照が同じならばtrue
const a = {}
const b = {}
console.log(a === a);
console.log(a === b); // 別オブジェクトなので、false
