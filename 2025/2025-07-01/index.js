
/* 配列 */
// 繰り返し処理
const arr = [1, 2, 3, 4, 5];
// Array.prototype.forEach
arr.forEach((x) => {
    console.log(x);
})

// Array.prototype.map
// 各要素に対して処理を行い、新しい配列を返す
const mapArr = arr.map((value, index, array) => {
    return value * array[index]; // 二乗にして返す
})
console.log(mapArr);

// Array.prototype.filter
// 条件に合う要素だけを抽出して新しい配列を返す
const filteredArr = arr.filter((value) => {
    return value % 2 === 0; // 偶数だけを抽出
});
console.log(filteredArr);

// Array.prototype.reduce
// 配列の要素を累積的に処理して単一の値を返す
const reducedValue = arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // 合計を計算
}, 5);
console.log(reducedValue);
// Object.groupBy(ES2024の新機能なのでnode22.0.0以降で使用可能)
// 配列の要素を特定のキーでグループ化する
const grouped = Object.groupBy(arr, (item) => {
    return item % 2 === 0 ? 'even' : 'odd';
});
console.log(grouped);
console.log(grouped.even);
console.log(grouped.odd);
// Array-likeオブジェクト
// 配列のように扱えるが配列のインスタンスではないため、配列メソッドは使えないもの
function sampleFunc() {
    console.log(arguments.length); // 引数の数を表示
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]); // 各引数を表示
    }
    console.log(Object.hasOwn(arguments, 'forEach')); // argumentsは配列ではないので、forEachは存在しない
    console.log(Array.isArray(arguments)); // argumentsは配列ではないので、false
    const argumentsArray = Array.from(arguments); // argumentsを配列に変換
    console.log(Array.isArray(argumentsArray)); // true
    console.log('各引数を配列に変換したもの: ');
    argumentsArray.forEach((arg) => console.log(arg));

}
sampleFunc(1, 2, 3, 4, 5);

// メソッドチェーン
// 返り値のメソッドを連続して呼び出すことで、コードを簡潔にする

// 例: 配列の要素をフィルタリングして、さらにマッピングする
// ECMAScriptのバージョン名と発行年
const ECMAScriptVersions = [
    { name: "ECMAScript 1", year: 1997 },
    { name: "ECMAScript 2", year: 1998 },
    { name: "ECMAScript 3", year: 1999 },
    { name: "ECMAScript 5", year: 2009 },
    { name: "ECMAScript 5.1", year: 2011 },
    { name: "ECMAScript 2015", year: 2015 },
    { name: "ECMAScript 2016", year: 2016 },
    { name: "ECMAScript 2017", year: 2017 },
];
const versionNames = ECMAScriptVersions
    // 2000年以下のデータに絞り込み
    .filter(ECMAScript => ECMAScript.year <= 2000)
    // それぞれの要素から`name`プロパティを取り出す
    .map(ECMAScript => ECMAScript.name);
console.log(versionNames);