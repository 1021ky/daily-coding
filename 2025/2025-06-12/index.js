// 関数
function greet(arg) {
    return "Hello, " + arg + "!";
}

console.log(greet("World"));


function returnUndefinedImplicitly() {
    // returnの返り値が指定されていない場合は暗黙的にundefinedが返される
    return;
}

function returnUndefinedExplicitly() {
    return undefined;
}
console.log(returnUndefinedImplicitly()); // undefined
console.log(returnUndefinedExplicitly()); // undefined

console.log(greet()); // 仮引数にはundefinedが入る