# JavaScript Primer

<https://jsprimer.net/basic/introduction/>を読んだときのメモ。

## 一部

JavaScriptとは

* 仕様はECMAScriptで定義されている
* JavaScriptはECMAScriptの実装
* ECMAScript2015から大きく変わった
* JavaScriptの特徴
  * 大文字小文字は区別される
  * 予約後を持つ
  * 文はセミコロンで区切る
  * strict modeがある
    * `use strict` を先頭に書くと古い書き方をしている部分はエラーになる
    * 基本的にはstrict modeで書くことを推奨
    * "Module"の実行コンテキストでは、このstrict modeがデフォルト
  * ModuleとScriptの実行コンテキストがある
    * グローバル変数や関数の扱いが異なる
      * Scriptではグローバルに定義されるが、Moduleではファイル内だけのスコープになる
    * Moduleは常にstrict mode
    * 他のファイルの値や関数を使いたい場合はModuleを使う
    * thisはScriptではグローバルオブジェクトを指すが、Moduleではundefined
    * Moduleは、ブラウザであれば、`<script type="module">`で読み込む。指定しなければScript
    * Node.jsでは、package.jsonで`"type": "module"`を指定するか、.mjs`拡張子をつける
* ECMAScriptでは後方互換性が慎重に取り扱われる。HTMLコメントもその1つ。

変数と宣言

* 変数名の名前（識別子）のルール
  * 半角のアルファベット、_（アンダースコア）、$（ダラー）、数字を組み合わせた名前にする
  * 変数名は数字から開始できない
  * 予約語と被る名前は利用できない
* constをつけて値がプリミティブであったら実質的に定数と言える。プリミティブな値はイミュータブルなので。オブジェクトの場合は、constをつけてもプロパティの変更は可能。
