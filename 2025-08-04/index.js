const assert = require('assert')
/* Date */

// 日付をあつかうビルトインオブジェクト

// 初期化(現在時刻で)
const date = new Date();
console.log(date); // そのままだと2025-08-04T... ISO　８６０１形式で今回は出たが、フォーマットは実行環境によるらしい。
console.log(date.getTime()); // 時刻値を取得
console.log(date.toISOString()); // 時刻をISO 8601形式の文字列で表示する
// new をつけず、Date()だと現在時刻を文字列で返す
const d = Date();
console.log(typeof d);
assert(typeof d === 'string');
// Date.nowで取得できるのは、時刻値のみで型もnumber
const now = Date.now();
assert(typeof now === "number");
console.log(now);

