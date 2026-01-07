/* Promise all*/
// 複数のPromiseをまとめるall
function fetchResourceA() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resource A");
        }, 1000);
    });
}
function fetchResourceB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resource B");
        }, 2000);
    });
}
function fetchResourceC() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resource C");
        }, 3000);
    });
}

Promise.all([fetchResourceA(), fetchResourceB(), fetchResourceC()])
    .then((results) => {
        console.log("All resources fetched:", results);
    })
    .catch((error) => {
        console.error("Error fetching resources:", error);
    });

// もし1つでもrejectされたら、全体がrejectされる
function fetchResourceWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Failed to fetch resource"));
        }, 1500);
    });
}

Promise.all([fetchResourceA(), fetchResourceWithError(), fetchResourceC()])
    .then((results) => {
        console.log("All resources fetched:", results);
    })
    .catch((error) => {
        console.error("Error fetching resources:", error);
    });

// promise allの結果はthenの引数に配列で渡される
const fetchedPromise = Promise.all([fetchResourceA(), fetchResourceB(), fetchResourceC()]);
fetchedPromise.then((results) => {
    console.log("Fetched resources:", results);
}).catch((error) => {
    console.error("Error:", error);
});

