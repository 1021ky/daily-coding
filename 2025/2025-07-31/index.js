/* JSON */
// JavaScript Object Notationの略
// JavaScriptのオブジェクトリテラルをベースに作られた軽量なデータフォーマット
// JSONの仕様はECMA-404として標準化されている

const json = '{ "id": 1, "name": "js-primer" }';
const obj = JSON.parse(json); // JSONを扱うときはJSONオブジェクトを使う
console.log(obj.id);
console.log(obj.name);
const jsonstr = JSON.stringify(obj); // obj -> 文字列
console.log(jsonstr);

const objHasNull = { id: 1, name: "js-primer", bio: null };
const replacer = (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
};
console.log(JSON.stringify(obj, replacer)); // 第2引数には変換をするための関数を渡せる

const jsonstrHasTab = JSON.stringify(obj, null, '\t'); // 第3引数には変換後のインデントに使う文字列を設定できる。space引数とも呼ばれる
console.log(jsonstrHasTab);

// TODO: JSONにシリアライズできないオブジェクト