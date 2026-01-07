// 分割代入
const array = [1, 2];
const [a, b] = array;
console.log(a);
console.log(b);

// オブジェクトの分割代入
const obj = { x: 10, y: 20 };
const { x, y } = obj; // 変数名と同じキー名を持つプロパティを変数に代入
console.log('分割代入の結果x y:', x, y);
// キーに基づく代入。これは分割代入ではない。
const key_x = obj.x;
console.log(key_x);
const key_y = obj.y;
console.log(key_y);
// これはundefinedになる。存在しないプロパティにアクセスしているため。
const { key1, key2 } = obj;
console.log(key1);
console.log(key2);

// 論理演算子と短絡評価
true && console.log("このコンソールログは実行されます");
false && console.log("このコンソールログは実行されません");

console.log(0 || "");
console.log((0 || ""));
console.log(false || false)
console.log(false || 0);
console.log((false || 0) || (1 + 2));
console.log(null || (1 + 2));
console.log('Nullish ', null ?? 1); // Nullish合体演算子は、nullまたはundefinedの場合にのみ右側の値を返す。
console.log('Nullish ', undefined ?? (1 + 2));

// 3項演算子
console.log('3項演算子の例:', true ? '真' : '偽');

// カンマ演算子は、複数の式を評価し、最後の式の値を返す。
// memo: strict modeでないときは、indirect callという特殊な挙動を気をつける
console.log((1, 2, 3)); // 3