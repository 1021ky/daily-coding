const assert = require('assert');
/* 文字列 */
// シングルクォート、ダブルクォート、バッククォートのいずれかで囲む
const single = '文字列';
const double = "文字列";
const template = `文字列`;

// 文字列リテラルなので、別々に宣言しても等価
assert(single === double);
assert(single === template);
assert(double === template);

const objA = {}
const objB = {};
assert(objA !== objB); // オブジェクトは参照型なので、別々のインスタンス

// 配列と同じ用にインデックスでアクセス可能
const str = '文字列';
assert(str[0] === '文');
assert(str[1] === '字');
assert(str[2] === '列');
assert(str[3] === undefined); // 存在しないインデックスはundefined
assert(str.at(0) === '文'); // atメソッドも使用可能
// あくまで文字列なので、配列のメソッドは使えない
assert(Object.hasOwn(str, 'forEach') === false);

// 文字列をUnicodeのコードポイントで扱う
const sampleStr = 'アオイ';
assert(sampleStr.codePointAt(0).toString(16) === '30a2');
// コードポイントから文字列を生成
const strFromCharCode = String.fromCharCode(
    0x30a2, // アのCode Unit
    0x30aa, // オのCode Unit
    0x30a4  // イのCode Unit
);
assert(strFromCharCode === 'アオイ');

// 分解と結合
const strRGB = '赤・緑・青'.split('・').join('、');
assert(strRGB === '赤、緑、青');

// splitは正規表現も使用可能
// 文字間に1つ以上のスペースがある
const strHasSpace = "a     b    c      d";
// 1つ以上のスペースにマッチして分解する
const strings = strHasSpace.split(/\s+/);
assert(strings[0] === "a");
assert(strings[1] === "b");
assert(strings[2] === "c");
assert(strings[3] === "d");

// 文字列の一部を取得
const sampleText = 'Hello,World!';
// sliceメソッドで部分文字列を取得
assert(sampleText.slice(0, 5) === 'Hello');
assert(sampleText.slice(sampleText.indexOf(',') + 1) === 'World!'); // カンマ以降の文字列を取得するというのがわかりやすいようにindexOfを使用