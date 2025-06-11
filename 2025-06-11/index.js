// 空文字列判定. Boolean(str) === falseだけで判定すると、strが空文字列でなくとも、falseと判定されてしまう
function isEmptyString(str) {
    return typeof str === 'string' && str.length === 0;
}
console.log(isEmptyString('')); // true
console.log(isEmptyString(' ')); // false