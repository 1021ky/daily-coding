"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
function fizzbuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    }
    else if (n % 3 === 0) {
        return 'Fizz';
    }
    else if (n % 5 === 0) {
        return 'Buzz';
    }
    else {
        return n.toString();
    }
}
function main() {
    for (let i = 0; i < 30; i++)
        console.log(fizzbuzz(i));
}
if (require.main === module) {
    main();
}
//# sourceMappingURL=index.js.map