/* 同期・非同期*/

// Promiseオブジェクトには３つの状態がある。ECMAScriptの仕様として決められている内部的な状態。
// pending: 処理中
// fulfilled: 処理が成功した
// rejected: 処理が失敗した
// fulfilledとrejectedは一度なったら不変であり、settledと呼ばれる。
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        reject(new Error("")); // resolveによってsettled状態になったので、ここには到達しない
    }, 1000);
});
promise.then(() => {
    console.log("Promiseが成功しました");
}).catch((error) => {
    console.error("Promiseが失敗しました:", error.message);
});

// 状態が変わるのは一度だけ
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("成功");
        resolve("2回目の成功"); // ここには到達しない
        reject(new Error("失敗")); // ここには到達しない
    }, 1000);
});
promise2.then((result) => {
    console.log("Promise2が成功しました:", result);
}).catch((error) => {
    console.error("Promise2が失敗しました:", error.message);
});

// fulfilledとなったインスタンスを作ることもできる
const fulfilledPromise = Promise.resolve("即座に成功");
fulfilledPromise.then((result) => {
    console.log("Fulfilled Promise:", result);
}).catch((error) => {
    console.error("Fulfilled Promiseが失敗しました:", error.message);
});
