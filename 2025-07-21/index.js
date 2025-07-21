/* await */
const asyncFn = async () => {
    return 'Hello, World!';
}
const asyncFnError = async function () {
    throw new Error('This is an error'); // エラーを投げたらrejectされた Promiseが返る
}

await asyncFn().then(result => {
    console.log(`no error: ${result}`);
}).catch(error => {
    console.error(`error: ${error.message}`);
});

await asyncFnError().then(result => {
    console.log(`no error: ${result}`);
}).catch(error => {
    console.error(`error: ${error.message}`);
});