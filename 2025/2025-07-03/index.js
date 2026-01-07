const assert = require('assert');
/* 文字列とUnicode */
// 文字列からUnicodeのコードポイントを取得できる
assert.equal('あ'.codePointAt(0), 12354);

// コードポイントとコードユニット
// 文字列をCode Unit(16進数)の配列にして返す
function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
}
// 文字列をCode Point(16進数)の配列にして返す
function convertCodePoints(str) {
    return Array.from(str).map(char => {
        return char.codePointAt(0).toString(16);
    });
}

const str = "リンゴ🍎";
// code pointはcode unitを組み合わせて表現されるときがある。サロゲートペア。
const codeUnits = convertCodeUnits(str);
assert(codeUnits[0], "30ea");
assert(codeUnits[1], "30f3");
assert(codeUnits[2], "30b4");
assert(codeUnits[3], "d83c");
assert(codeUnits[4], "df4e"); // 🍎はサロゲートペアなので、2つのCode Unitに分かれる
const codePoints = convertCodePoints(str);
assert(codePoints[0], "30ea");
assert(codePoints[1], "30f3");
assert(codePoints[2], "30b4");
assert(codePoints[3], "1f34e");