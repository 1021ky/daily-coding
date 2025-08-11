console.log("App.js: loaded");
export class App {
    constructor() {
        console.log("App initialized");
    }

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        formElement.addEventListener("submit", (event) => {
            event.preventDefault(); // デフォルトの動作、ここでは押下したら別のページに遷移する、を止める
            console.log(`入力欄の値: ${inputElement.value}`);
        });
    }
}