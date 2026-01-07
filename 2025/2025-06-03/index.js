/*operator 演算子 */
// 二項演算子。オペランドが2つ
console.log(1 + 2);
// これは単項演算子でオペランドは1つ
let num = 1;
console.log(num++);
console.log(1 + 3);
console.log("文字列1" + "文字列2");
console.log(1 - 1);
console.log(2 * 8);
console.log(3 / 1);
console.log(3 / 2); // 小数になる
console.log(109 / 0); // Infinity 無限を表す
console.log(isFinite(109 / 0)); // Infinityだとfalse
console.log(isNaN(109 / 0)); // InfinityはNumber型ではある
console.log(0 / 109);
console.log(- "文字列"); // 暗黙的なキャストをするため、NaNになる
console.log(3 % 2);
console.log(2 ** 20);
console.log(Math.pow(2, 20)) // 演算子と同じ動作をする静的メソッド
// 単項演算子
console.log(+"文字列") // NaN
console.log(isNaN(+"文字列"));
// 比較演算子
