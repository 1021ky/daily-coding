import { App } from './src/App.js';

const app = new App();
app.mount(); // リスナーの設定はmountメソッドですることで、htmlにはonclick=xxxといったJSの記述をなくせる
