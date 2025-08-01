/* JSONのシリアライズ */
// JavaScript Object Notationという名ではあるが、
// JavaScriptではObjectとして成立してもシリアライズできないものはある
const target = {
    "OK": 'Serearizable',
    "NG_null": null,
    "NG_func": () => {}, // 変換されず、keyもない。
    "NG_array": [1, () => {}], // 配列に入っていれば変換されないものは、nullになる
    "NG_undefined": undefined,// 変換されず、keyもない。
    "NG_Symbol": Symbol("foo"),// 変換されず、keyもない。
    "NG_RegExp": RegExp("^start-end$"),
    "NG_Map": new Map([["a", 12], ["b", 34], ["c", 45]]),
    // "NG_BigInt": BigInt(9007199254740991), // 例外になるs
    "OK_HugeNumber": 10000000000000000000000000000000000000000 // 1e+..の形式になる,
}
const result = JSON.stringify(target);
console.log(result);

// オブジェクトがtoJSONメソッドを持っていたらJSON.stringfyはtoJSONの返り値を使うため、自作のクラスを特殊な形式でシリアライズするときに使う

const obj = {
    foo: "foo",
    toJSON() {
        return { "bar": "bar" };
        //memo return '{"bar": "bar"}'だと、"{\"bar\": \"bar\"}"と文字列がそのまま返ってしまう。
    }
};
console.log(JSON.stringify(obj));