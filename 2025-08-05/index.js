/* Date 任意の時刻をインスタンス化 */

// ミリ秒値で指定
const date = new Date(1754402744390);
console.log(date);
// 文字列で指定
const dateUTCFromString = new Date("2012-01-02T15:04:05.999Z"); // Zがついていると、UTCであることになる。注意
console.log(dateUTCFromString.toISOString());
const dateFromString = new Date("2012-01-02T15:04:05.999"); // UTCではないので、Asia/Tokyoの環境だと9時間前に
console.log(dateFromString.toISOString());
// 年月日で指定
const dateYMD = new Date(2006, 0, 2, 15, 4, 5, 999); // タイムゾーンしていされないので、Asia/Tokyo環境だと9時間前に
console.log(dateYMD.toISOString());
// UTCメソッドならば、UTCに固定に
const msYMDUTC = Date.UTC(2006, 0, 2, 15, 4, 5, 999); // msで返る
console.log(new Date(msYMDUTC));

// 不正なインスタンスの場合
const invalid = new Date("");
console.log(invalid.getTime()); // => NaN
console.log(invalid.toString()); // => "Invalid Date"
// 不正なDateインスタンスかを判定
console.log(Number.isNaN(invalid.getTime())); // => true