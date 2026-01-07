const assert = require('assert');

/* オブジェクト */
// https://jsprimer.net/basic/object/

// オブジェクトはプロパティの集合。プロパティはキーと値が対になったもの
// 配列も関数もオブジェクトの一種
assert(Object.prototype.isPrototypeOf([1, 2]));
assert(Object.prototype.isPrototypeOf(() => {}));

// 宣言の仕方
const greeting = 'Hello, World!';
const obj = {
    'name': 'Alice', // キーはクォートを除いてもよい
    age: 30,
    'my-prop': 'value', // ハイフンを含んだり変数名として使えない文字列をキーにする場合はクォートで囲む必要がある
    greeting // キーと値に指定する変数の名前が同じ場合は、キーを省略できる
}

// 以下はどちらもObjectのインスタンスオブジェクトを作成している
const emptyObj1 = new Object();
const emptyObj2 = {};

// プロパティへのアクセス
assert(obj.name === 'Alice'); // ドット記法
assert(obj['name'] === 'Alice'); // ブラケット記法

// ブラケット記法ならばキーに変数を指定できる
const languages = {
    ja: "日本語",
    en: "英語"
};
const myLang = "ja";
assert(languages[myLang] === "日本語");

// 分割代入（プロパティを変数として取り出す）
const { name, age } = obj;
assert(name === 'Alice');
assert(age === 30);

// プロパティの追加・更新(追加はあまりしないほうがいい。オブジェクトは定義した時点でプロパティを決めておくのが望ましい。どこで変更したかわからなくなるため)
languages['fr'] = 'フランス語'; // 新しいプロパティの追加
assert(languages.fr === 'フランス語');
languages.ja = 'Japanese'; // 既存のプロパティの更新
assert(languages.ja === 'Japanese');

// computed property names
const key = 'greeting';
const dynamicObj = {
    [key]: 'Hello, Dynamic World!' // キーを変数で指定(もしカッコをつけずkeyにしてしまうと、キーは文字列の'key'になってしまう)
};
assert(dynamicObj.greeting === 'Hello, Dynamic World!');

// プロパティの削除
delete dynamicObj.greeting; // プロパティの削除
assert(dynamicObj.greeting === undefined); // 削除されたのでundefined

// プロパティの存在チェック
const checkTargetObj = {
    name: 'Bob',
    age: 25,
    'my-prop': undefined // プロパティは存在するが値がundefined
};
assert('name' in checkTargetObj); // 'name'プロパティが存在するかチェック
// 値がundefinedであるかで判別すると、プロパティが存在しない場合と区別がつかないため注意
assert(checkTargetObj['my-prop'] === undefined); // 'my-prop'プロパティは存在するが値がundefined
assert(checkTargetObj['non-existent'] === undefined); // 存在しないプロパティはundefinedを返す
// in演算子、hasOwnPropertyメソッド、hasOwnメソッドを使ってプロパティの存在をチェックできるが、プロトタイプチェーン上のプロパティも含めてチェックするかどうかで使い分ける
assert('my-prop' in checkTargetObj); // in演算子でプロパティの存在をチェック
assert('toString' in checkTargetObj); // in演算子でプロパティの存在をチェック
assert(checkTargetObj.hasOwnProperty('my-prop')); // hasOwnPropertyメソッドでオブジェクト自身のプロパティをチェック
assert(!checkTargetObj.hasOwnProperty('toString')); // toStringはObjectのプロトタイプチェーン上のメソッドなのでfalse
assert(Object.hasOwn(checkTargetObj, 'my-prop'));
assert(!Object.hasOwn(checkTargetObj, 'toString')); // toStringはObjectのプロトタイプチェーン上のメソッドなのでfalse

// ?.演算子を使ったプロパティの安全なアクセス
const safeObj = {
    name: 'Charlie',
    address: {
        city: 'Tokyo',
        country: 'Japan'
    }
};
assert(safeObj.address?.city === 'Tokyo'); // addressが存在する場合のみcityにアクセス
assert(safeObj.address?.zipCode === undefined); // addressが存在しない
assert(safeObj.nonExistent?.property === undefined); // 存在しないプロパティにアクセスしてもエラーにならない

// 静的メソッド: インスタンスオブジェクトではなく、オブジェクトから呼び出すメソッド
const obj123 = {
    "one": 1,
    "two": 2,
    "three": 3
};
assert(Object.keys(obj123).length === 3); // オブジェクトのキーを取得
Object.entries(obj123).forEach(([key, value]) => {
    console.log(`キー: ${key}, 値: ${value}`);
});

const obj456 = {
    "four": 4,
    "five": 5,
    "six": 6
};
const mergedObj = Object.assign({}, obj123, obj456); // オブジェクトの結合 第一引数のオブジェクトに第二引数以降のオブジェクトのプロパティを追加される
Object.entries(mergedObj).forEach(([key, value]) => {
    console.log(`結合後のキー: ${key}, 値: ${value}`);
});
// assignするときは、第一引数に空ではないオブジェクトは基本的に指定しないこと。既存のオブジェクトには影響を与えないようにするため。
// Object.assignは浅いコピーであるため、ネストされたオブジェクトは参照が共有される
const nestedObj1 = {
    a: {
        b: 1
    }
};
const nestedObj2 = Object.assign({}, nestedObj1);
nestedObj2.a.b = 2; // nestedObj1のa.bも変更される
assert(nestedObj1.a.b === 2); // nestedObj1のa.bも変更されている
// 深いコピーを行いたい場合は、JSON.parse(JSON.stringify(obj))や、ライブラリを使う必要がある
// stringifyとparseを使った深いコピー
const deepCopiedObj = JSON.parse(JSON.stringify(nestedObj1));
deepCopiedObj.a.b = 3; // deepCopiedObjのa.bを変更
assert(nestedObj1.a.b === 2); // nestedObj1のa.bは変更されていない
assert(deepCopiedObj.a.b === 3); // deepCopiedObjのa.bは変更されている

// スプレッド構文を使うと、より簡潔にオブジェクトを結合できる
const spreadMergedObj = { ...obj123, ...obj456 };
Object.entries(spreadMergedObj).forEach(([key, value]) => {
    console.log(`スプレッド構文で結合後のキー: ${key}, 値: ${value}`);
});


// オブジェクトの複製はassignで行う（浅いコピー）
const shallowCopiedObj = Object.assign({}, obj123);
assert(shallowCopiedObj !== obj123); // 新しいオブジェクトが作成されている