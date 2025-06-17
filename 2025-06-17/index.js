// 関数
/* Allow function */
const allowFunc = () => {
    console.log("Function is allowed");
}
const allowFuncWithArg = (arg) => {
    console.log("Function is allowed with argument:", arg);
}
// 引数が1つの場合は括弧を省略できる
const allowFuncWithArg2 = arg => {
    console.log("Function is allowed with argument:", arg);
}
allowFunc();
allowFuncWithArg("test");
allowFuncWithArg2("function arg has no parentheses");

// 処理が一行の場合はブロックも省略できて最後に実行された式の評価結果が返り値になる
const allowFuncOneLine = x => x * 2;
console.log("Function one line result:", allowFuncOneLine(5));

const names = ["Alice", "Bob", "Charlie"];
const greetNames = names.map(name => `Hello, ${name}!`);// const greetNames = names.map(function (name) { return `Hello, ${name}!`; });と同じ

console.log("Greeted names:", greetNames);

const functionFuncOneLine = function (x) { return x * 3; };

// functionで定義したものである関数式はオブジェクトなのでプロパティを持っていて、AllowFunctionで定義した関数はprototypeプロパティを持たない。
// Arrow Functionでは、人による解釈や実装の違いが生まれにくくなっているため、Arrow Functionで問題ない場合はArrow Functionで書く。
console.log(functionFuncOneLine.hasOwnProperty('prototype')); // true
console.log(allowFuncOneLine.hasOwnProperty('prototype')); // false

// 関数はファーストクラス（値として扱える）ため、コールバック関数として他の関数に渡すことができる
// forEachはコールバック関数を受け取るものの一例
names.forEach(name => {
    console.log(`forEach callback: ${name}`);
});

/* メソッド */
// JavaScriptにおいて関数とメソッドに機能的な違いはない
// JSPrimerではオブジェクトのプロパティをメソッドとしている。
// メソッドの定義方法はさまざま
const obj = {
    name: "Alice",
    age: 30,
    myName: function () { // プロパティの値として関数を定義
        return this.name;
    },
    greet() { // プロパティに関数を定義するときの短縮記法
        return `Hello, ${this.name}!`;
    },
    greetWithArrow: () => { // アロー関数でメソッドを定義
        return `Hello, ${obj.name}!`;
    },
};
obj.myAge = () => { return `Age: ${obj.age}`; } // 後からプロパティを追加して関数を定義
console.log(obj.myName()); // "Hello, Alice!"
console.log(obj.greet()); // "Hello, Alice!"
console.log(obj.greetWithArrow()); // "Hello, undefined!" (thisはグローバルオブジェクトを指すため、undefinedになる)
console.log(obj.myAge());