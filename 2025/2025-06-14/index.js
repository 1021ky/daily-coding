const assert = require('assert');
// 関数 Rest Parameters

function greet(greeting, ...names) {
    assert(Array.isArray(names));
    return `${greeting}, ${names.join(' and ')}!`;
}
const message = greet('Hello', 'Alice', 'Bob', 'Charlie');
assert(message === 'Hello, Alice and Bob and Charlie!', 'Rest Parameters test failed');

// Spread Operator
function combineArrays(x, y, z) {
    return [].concat(x, y, z);
}
const paramArray = [1, 2, 3];
const combinedElements = combineArrays(...paramArray);
console.log(combinedElements);
const combinedArrays = combineArrays([4, 5], [6, 7], [8, 9]);
console.log(combinedArrays);
assert(Array.isArray(combinedElements), 'Spread Operator test failed');