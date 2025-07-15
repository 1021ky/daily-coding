/* Promiseチェーン */
// 値を返すPromise
const promise = new Promise((resolve, reject) => {
    // 1回間違えたが、ここでresolveやrejectを呼んでいないと、thenやcatchは呼ばれない。
    const value = Math.random();
    value > 0.5 ? resolve(value) : reject(new Error(value));
}).then((value) => {
    console.log(`あたり！: ${value}`);
}).catch((error) => {
    console.log(`はずれ: ${error.message}`);
});

// 上と一緒
Promise.resolve(Math.random()).then((value) => {
    if (value > 0.5) {
        return value; // ここで値を返すと、次のthenに渡される
    } else {
        throw new Error(value);
    }
}).then(value => {
    console.log(`あたり！: ${value}`);
}).catch(error => {
    console.log(`はずれ: ${error.message}`);
});