/* Promiseチェーン */
const promise1 = Promise.resolve(); // fulfilled状態のPromiseを作成する
promise1.then(() => {
    console.log('promise1');
    return Promise.resolve();
}).then(() => {
    console.log('promise2');
    return Promise.resolve();
});

// Promiseチェーンの中でエラーが発生した場合、catchで捕捉できる。
// thenが連続していて１つ目でエラーが発生した場合、次のthenは実行されない。
const rejectedPromise = Promise.reject(new Error("エラーが発生しました"));
rejectedPromise.then(() => {
    console.log('このメッセージは表示されません');
}).then(() => {
    console.log('このメッセージも表示されません');
}).catch((error) => {
    console.error("Promiseチェーンでのエラー:", error);
}).then(() => {
    // catchはfulfilled状態のPromiseのインスタンスを返すため、ここは実行される。
    // memo catchをthenの連続の間に書くのは、意図しない挙動になりそう。
    console.log('catchの後のthenは実行されます');
});