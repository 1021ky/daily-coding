/* Promiseチェーンを使った逐次処理 */
// Resourceを２つ逐次取得する(JSPrimerのサンプルコードまま)
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

const results = [];
// Resource Aを取得する
dummyFetch("/resource/A").then(response => {
    results.push(response.body);
    // Resource Bを取得する
    return dummyFetch("/resource/B");
}).then(response => {
    results.push(response.body);
}).then(() => {
    console.log(results); // => ["Response body of /resource/A", "Response body of /resource/B"]
});

// Resourceを２つ逐次取得する書き方ver2
// 同じ関数が連続して実行されていることが上だとわかりにくいと感じた
// 一方でこれだと、エラーハンドリングや値の受け渡しがしにくい。
const results2 = [];
function dummyFetchResource(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                results2.push(path);
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
dummyFetchResource('/resource/C')
    .then(() => { return dummyFetchResource('/resource/D') })
    .then(() => { console.log(results2) });

// Promiseチェーンでは、処理の流れを書くことに集中させる
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

// 副作用を持つ関数
function handleResult(results, response) {
    results.push(response.body);
    return results;
}

// 実行順序・データ受け渡し・エラー処理のみPromiseチェーンで記述するのを意識して書いてみた
const results3 = [];
dummyFetch("/resource/A")
    .then(response => handleResult(results3, response))
    .then(() => dummyFetch("/resource/B"))
    .then(response => handleResult(results3, response))
    .then(() => {
        console.log(results);
    })
    .catch(error => {
        console.error("エラー:", error.message);
    });


// さらにresultsとhandleResultは実際は密結合なのでクラスで表現する
class ResultsCollector {
    constructor() {
        this.results = [];
    }

    add(response) {
        this.results.push(response.body);
        return this;
    }

    print() {
        console.log(this.results);
    }

    printError(error) {
        console.error("エラー:", error.message);
        console.error("現在のresults:", this.results);
    }
}

function dummyFetch2(path) {
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

const collector = new ResultsCollector();

dummyFetch2("/resource/A")
    .then(response => collector.add(response))
    .then(() => dummyFetch2("/resource/B"))
    .then(response => collector.add(response))
    .then(() => {
        collector.print();
    })
    .catch(error => {
        collector.printError(error);
    });