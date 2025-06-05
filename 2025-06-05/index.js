/* 等価演算子 */
console.log(1 == 1);
// 暗黙的な変換があるため、よく理解していない場合は、使わないほうがいい。
console.log(1 == '1'); // 暗黙的な変換をしてから比較
console.log(0 == false);// 暗黙的な変換をしてから比較
console.log(null == 0); // nullとの比較はfalse
console.log(null == null); // true
console.log(null == undefined); // null と undefinedはtrue
console.log(1 == undefined); // false
console.log({} == undefined); // false
console.log(undefined == undefined); // true

const value = undefined;
if (value === undefined || value === null) {
    console.log('===だと記述量が多くなる');
}
if (value == null) {
    console.log('==を使うとnull, undefinedどちらかであることを判定するときに記述量が少ない')
}

/* 不等価演算子 */
// 等価演算子と結果が逆になる

// 大なり演算子(これも暗黙的な型変換がある)
console.log(1 > 2);
console.log(3 > 2);
console.log('1' > 2);
console.log('3' > 2);