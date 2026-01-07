/* async functionとPromise APIを組み合わせる */

// async function内でPromise APIを使って処理する例。逐次処理となっているため、非同期にしているメリットは薄い
function dummyFetch(path) {
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
// 複数のリソースを順番に取得する
async function fetchResources(resources) {
    const results = [];
    for (const resource of resources) {
        // ループ内で非同期処理の完了をawaitで待っているため、逐次処理になる
        console.log(`Start: ${resource} at ${new Date().toISOString()}`);
        const response = await dummyFetch(resource);
        console.log(`End: ${resource} at ${new Date().toISOString()}`);
        results.push(response.body);
    }
    // 反復処理がすべて終わったら結果を返す(返り値となるPromiseを`results`でresolveする)
    return results;
}
// 取得したいリソースのパス配列
const resources = [
    "/resource/A",
    "/resource/B"
];
// リソースを取得して出力する
console.log('Fetching resources sequentially...');
fetchResources(resources).then((results) => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
});
console.log('Fetching resources sequentially completed.');

// Promise allで並列処理する例
console.log('Fetching resources in parallel...');
async function fetchResourcesParallel(resources) {
    console.log(`Start fetching resources at ${new Date().toISOString()}`);

    const promises = resources.map(resource => dummyFetch(resource));// この時点ではまだ非同期処理は始まっていない
    const responses = await Promise.all(promises);
    console.log(`End fetching resources at ${new Date().toISOString()}`);

    return responses.map(res => res.body);
}
fetchResourcesParallel(resources).then((results) => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
});
console.log('Fetching resources in parallel completed.');