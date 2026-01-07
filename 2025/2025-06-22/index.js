// 条件分岐
// if
if (true) {// ()内の評価結果がtrueならば、ブロック内は実行される
    console.log('true');
    if (undefined) { // ()内の評価結果がfalseならば、ブロック内は実行されない
        console.log('undefined');
    } else if (false) {
        console.log('false');
    } else {
        console.log('else');
    }
}
// switch
const value = 'ES2020';
switch (value) {
    case 'ES2020': // value==='ES2020'のときに実行される
        console.log('2020年のECMAScript');
    case 'ES2021':
        console.log('2021年のECMAScript'); // breakしていないためcase 'ES2020'のときも実行される
        break; // breakは文だが、セミコロンは慣習的につけることが多いらしい
    case 'ES2022':
        console.log('2022年のECMAScript');
        break;
    case 'ES2023':
        console.log('2023年のECMAScript');
        break;
    case 'ES2024':
        console.log('2024年のECMAScript');
        break;
    case 'ES2025':
        console.log('2025年のECMAScript');
        break;
    default:
        console.log('不明な年のECMAScript');
}

// 反復処理
// while(条件を間違うと無限ループに陥りやすいため、基本的には使わない)
while (true) {
    console.log('whileループ');
    break; // breakしないと無限ループ
}
// do-while(条件を間違うと無限ループに陥りやすいため、基本的には使わない)
do {
    console.log('do-whileループ');
} while (false); // 最初にブロックが実行されるため、falseでも1回は実行される
// for
for (let i = 0; i < 5; i++) { // iが0から4までの5回ループ
    console.log(`forループ: ${i}`);
}

// 配列に対する反復処理

// forEachメソッド（※Arrayに用意されているメソッドであり文ではない）
const numArray = [1, 2, 3, 4, 5];
numArray.forEach((num) => {
    console.log(`forEachループ: ${num}`);
});
// some(配列の要素のうち、1つでも条件を満たすものがあるかどうかをチェックするメソッド。条件を満たしたらその他の要素はチェックしない)
const someArray = [1, 2, 3, 4, 5];
const hasEven = someArray.some(num => num % 2 === 0);
console.log(`配列に偶数があるか: ${hasEven}`);
// every
const allEven = someArray.every(num => num % 2 === 0); // 配列のすべての要素が偶数かどうかをチェック
console.log(`配列のすべての要素が偶数か: ${allEven}`);

// 要素の変換
// map
const doubled = numArray.map(num => num * 2);
console.log(`配列の要素を2倍にした結果: ${doubled}`);

// filter
const filtered = numArray.filter(num => num % 2 === 0);
console.log(`配列の偶数要素: ${filtered}`);

// reduce
const sum = numArray.reduce((acc, num) => acc + num, 0);
console.log('reduceの返り値の型:', typeof sum); // 要素の型である数値型となる。
console.log(`配列の合計: ${sum}`);

// オブジェクトに対する反復処理
const obj = {
    a: 1,
    b: 2,
    c: 3
};
// Object.keysを使ってオブジェクトのキーを取得し、forEachで反復処理
Object.keys(obj).forEach(key => {
    console.log(`キー: ${key}, 値: ${obj[key]}`);
});
// for ...in文を使ってオブジェクトのキーを反復処理(注意: 親オブジェクトのプロパティも参照してしまうため、意図しない挙動になることがある)
for (const key in obj) {
    // for...in文を使ってオブジェクトのキーを反復処理
    console.log(`キー: ${key}, 値: ${obj[key]}`);
}
// for ... inで反復するとき、配列オブジェクトの場合は変数に文字列型のインデックス番号が入る(数値のインデックス番号ではなく)
for (const i in numArray) {
    console.log(`キー: ${i}, キーの型: ${typeof i}, 値: ${numArray[i]}`);
}

// iterableなオブジェクトに対する反復処理
// for ... of文を使って反復処理
for (const value of numArray) { // 配列以外にも、文字列やSet、Mapなどのiterableなオブジェクトに対しても使用できる
    console.log(`for...ofループ: ${value}`);
}

// まとめ
// 反復処理はforEachかfor...ofを使う。要素操作はmap、filter、reduceを使う。