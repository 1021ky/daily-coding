import { App } from "./src/App.js";
const app = new App();
app.mount();

// ライフサイクル管理
// ページのロードが完了したときのイベント
window.addEventListener("load", () => {
    app.mount();
});
// ページがアンロードされたときのイベント
window.addEventListener("unload", () => {
    app.unmount();
});