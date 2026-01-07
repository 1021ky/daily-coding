// export import
import { foo, bar } from './named-export.js';
import { default as default_foo } from './default-export.js'; // defaultエクスポートされたものをエイリアスつけるときは、default as xxx
import { barFunc } from './export-function.js'
import './side-effect.js' // 副作用があるインポート。 何かを参照するわけではない。

console.log(`foo: ${foo}`);
console.log(`bar: ${bar}`);
console.log(`default_foo: ${default_foo}`);
barFunc();

// memo
// その他 Dynamic Import、インポート属性などがある
// Dynamic Importは後方互換性を持たすためにインポートするモジュールを特定の状況だけ変えたいときに使いそう。