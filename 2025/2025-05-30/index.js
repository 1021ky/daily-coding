/** primitive types **/
console.log("===各データタイプの確認===");
// boolean
console.log(typeof true);
console.log(typeof false);
// number
console.log(typeof 42);
console.log(typeof 0b01); // 2進数
console.log(typeof 0o644); // 8進数
console.log(typeof 0xFFFFFF); // 16進数
// bigint
console.log(typeof 9007199254740992n);
// string
console.log(typeof "JavaScript");
// symbol
console.log(typeof Symbol("シンボル"));
// undefined
console.log(typeof undefined);
// object(nullもobject)
console.log(typeof null);
/* object */
// object
console.log(typeof ["配列"]);
console.log(typeof { "key": "value" });
/* function */
// function
console.log(typeof function () {});
console.log(typeof (() => {}));
/* literal */
console.log(typeof "文字列リテラル");
console.log(typeof 123);

console.log("===リテラルの確認===");
// string literal
console.log("文字列リテラル");
// number literal
console.log("数値リテラル");
console.log(123);
console.log(123_456_789); // Numeric Separators ES2021から
console.log(0b01); // 2進数
console.log(0o644); // 8進数
console.log(0xFFFFFF); // 16進数
console.log("数値リテラルで安全に表せる最大の数値" + Number.MAX_SAFE_INTEGER);
// bigint literal
console.log("BigIntリテラル");
console.log(9007199254740992n); // ES2020
console.log(9_007_199_254_740_992n); // Numeric Separators ES2021から
// floating numeric literal
console.log(0.123);

// 文字列（String）
console.log("===文字列の確認===");
console.log("123" === '123') // シングルクォーテーションとダブルクォーテーションに差異はない
console.log("複数行\nの文字列は改行文字\nをいれることで表現できる");
// テンプレートリテラル
const str = "文字列";
console.log(`テンプレートリテラルで出力した${str}です`); // => "これは文字列です"。バッククォートで囲む

// nullリテラル
console.log(null)

// undefinedはリテラルではなく、グローバル変数
function fn() {
    const undefined = "独自の未定義値"; // undefinedという名前の変数をエラーなく定義できる
    console.log(undefined); // => "独自の未定義値"
    console.log(typeof undefined); // => "string" (変数の型)になる
}
console.log(typeof undefined);
fn();

// オブジェクトリテラル
const obj = {
    "key": "value" // プロパティ名はkeyであり、objはkeyというプロパティをもつということになる
};
// ドット記法
console.log(obj.key); // => "value"
// ブラケット記法
console.log(obj["key"]); // => "value"

// 配列リテラル
const array = ["index:0", "index:1", "index:2"];
// 0番目の要素を参照
console.log(array[0]);

// 正規表現リテラル
const numberRegExp = /\d+/; // 1文字以上の数字にマッチする正規表現
// `numberRegExp`の正規表現が文字列"123"にマッチするかをテストする
console.log(numberRegExp.test("123"));

// TODO: ラッパーオブジェクト
// プリミティブなものをオブジェクトのように扱えるようにしている