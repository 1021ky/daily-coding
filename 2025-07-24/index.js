/* エラーファーストコールバック */
// 背景
// ES2022ではModuleのトップレベルでasync/awaitが使える
function fetchResource(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
const resources = ['/resource/1', '/resource/2', '/resource/3'];
for (const path of resources) {
    await fetchResource(path)
        .then((resolve) => { console.log(`success: ${resolve.body}`) })
        .catch((reject) => { console.error(`error: ${reject.message}`) }); // PromiseAPIがあるので例外処理ができる
}

// PromiseAPIがないときは、コールバック関数を渡して引数1つ目にエラーであることを示す情報が渡すように慣習化して、それで非同期処理のエラーハンドリングを実践
fs.readFile('./index.js', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
})