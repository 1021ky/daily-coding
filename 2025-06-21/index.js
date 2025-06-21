// 式と文

/* 式は値を生成して変数に代入できる*/
// 1という式の評価値を表示
console.log(1); // => 1
// 1 + 1という式の評価値を表示
console.log(1 + 1); // => 2
// 文字列の式の評価値を表示
console.log('Hello' + ' World'); // => Hello World
// 式の評価値を変数に代入
const total = 1 + 1;
// 関数式の評価値(関数オブジェクト)を変数に代入
const fn = function () {
    return 1;
};
// fn() という式の評価値を表示
console.log(fn()); // => 1

const fnReturnsUndefined = function () {
    // 何も返さないので、undefinedが返る
}
console.log(fnReturnsUndefined()); // => undefined

/* 文は値を生成しない */
// 以下は文の例。if文は文であり、値を生成しないため、変数に代入できない。
// const a = if (true) {
//     console.log("This is a statement, not an expression.");
// }