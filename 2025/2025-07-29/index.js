/*Map*/
// MapがなかったときはObjectをマップとして使っていた
const objMap = Object.create(null); // prototypeプロパティが継承されないようにnullを渡す
objMap["foo"] = 123;
objMap["bar"] = 234;
console.log(objMap)

// すべてがMapで置き換えられるわけではない
// ネイティブAPI・外部ライブラリを問わず、多くの関数がマップとしてObjectを渡す設計になっている

// リテラル表現でさっと作成できるのはObjectの利点
const jString = JSON.stringify({ username: 'kei yama', 'taro': 'suzuki' });

/*WeekMap*/
// メモリリークを抑えるためのMap。ただし、Iterableオブジェクトではない。
// --expose-gc オプション付きで node を起動すること

// 以下、メモリ確保量を確認してみたが、期待通りの動きにはならなかった。ただ、WeakMapだとメモリ使用量が少ないのは確か
/**
 * ヒープメモリ使用量をMB単位で返す
 * @returns
 */
function getMemoryUsageMB() {
    return process.memoryUsage().heapUsed / 1024 / 1024;
}

global.gc && global.gc(); // GCを明示的に実行（--expose-gc必須）
console.log("初期メモリ:", getMemoryUsageMB(), "MB");

const map = new Map();
const weakMap = new WeakMap();
console.log("map, weakmap分確保したメモリ:", getMemoryUsageMB(), "MB");

(function () {
    const obj1 = {};
    const obj2 = {};
    map.set(obj1, "a".repeat(10 * 1024 * 1024)); // 10MBの文字列);
    weakMap.set(obj2, "b".repeat(10 * 1024 * 1024)); // 10MBの文字列);
    global.gc && global.gc();

    console.error(map.get(obj1)); // 実際に読み出さないとメモリ確保がされなかったため出力 2&>/dev/nullで非表示にする想定
    console.error(weakMap.get(obj2)); // なぜかweakMapではメモリ確保されず

    console.log("mapもweakmapも参照しているときのメモリ:", getMemoryUsageMB(), "MB");
    // obj1, obj2はこのスコープを抜けると参照がなくなる
})();

// mapの分だけメモリが使われたまま
global.gc && global.gc();

global.gc && global.gc();
console.log("GC後メモリ:", getMemoryUsageMB(), "MB"); // ここは期待通りmapで参照している分、メモリが確保されたまま。

map.clear();
console.log(map.size)

global.gc && global.gc();
console.log("mapを削除してからGC後メモリ:", getMemoryUsageMB(), "MB"); // ※メモリ開放されることが期待だったが、確認できず。

