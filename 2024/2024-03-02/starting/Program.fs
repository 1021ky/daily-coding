// 利用する型やメソッドを定義
// ただし以降のコードでSystemの型やメソッドを使っていない
open System

// リストの定義
let names = ["apple";"cake";"sushi"]
// 引数foodで変数を埋め込んだ文字列を生成する関数declareFavoriteFoodを定義
let declareFavoriteFood food = $"i like {food}"
//　変数に対してパイプラインで処理をする
names
// 各要素に対して関数を実行
|> List.map declareFavoriteFood
// 前のパイプラインで処理された結果に対して無名関数（引数sayで引数を標準出力）
|> List.iter (fun say -> printfn $"{say}")
