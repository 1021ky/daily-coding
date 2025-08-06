const assert = require('assert');
/* Math */
// 数学的な定数と関数を提供するビルトインオブジェクト
// Mathはインスタンスを生成せず、スタティックなメソッド・プロパティを提供する
const rad90 = Math.PI * 90 / 180
console.log(`rad90: ${rad90}`);
const sin90 = Math.sin(rad90);
console.log(`sin90: ${sin90}`);

Array.from({ length: 5 }).forEach(() => {
    console.log(Math.random()); // 0以上1未満の範囲内で浮動小数点数を返す
})

// 0-9を出力するために、切り捨てをするfloorを使う
Array.from({ length: 5 }).forEach(() => {
    console.log(Math.floor(Math.random() * 10));
})
// 1-10を出力するために切り上げをするceilを使う
Array.from({ length: 5 }).forEach(() => {
    console.log(Math.floor(Math.random() * 10));
})

// 負数の場合は、挙動に注意
assert.equal(-2, Math.floor(-1.3)); // 床関数は引数として渡した数以下で最大の数
assert.equal(-1, Math.ceil(-1.3)); // 天井関数は引数として渡した数以上で最小の数
assert.equal(-1, Math.round(-1.3)); // 四捨五入
assert.equal(-1, Math.trunc(-1.3)); // 単純に小数点以下を切り落としたいときに使う