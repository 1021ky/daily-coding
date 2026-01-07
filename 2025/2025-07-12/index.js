/* 非同期処理 */
// 非同期処理の例外処理
try {
    setTimeout(() => {
        try {
            throw new Error("非同期処理でエラーが発生しました");
        } catch (error) {
            console.error("エラー:", error.message);
        }
    }, 100);
} catch (error) {
    console.error("エラー:", error.message); // ここには到達しない
}

// Promiseを使った非同期処理
function asyncPromiseTask() {
    return new Promise((resolve, reject) => {
        if (Math.random() > 0.5) {
            resolve("成功しました");
        } else {
            reject(new Error("失敗しました"));
        }
    });
}

asyncPromiseTask().then(() => { // thenの中は成功時の処理
    console.log("Promiseが成功しました");
}).catch((error) => { // catchの中は失敗時の処理
    console.error("Promiseが失敗しました:", error.message);
});