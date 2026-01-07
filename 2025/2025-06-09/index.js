// 暗黙的な型変換はややこしい->明示的に型変換することが推奨される
// 例
const x = 1, y = "2", z = 3;
console.log(x + y + z); // => "123"
console.log(y + x + z); // => "213"
console.log(x + z + y); // => "42"

// 明示的な型変換
const boolValue = Boolean("string");
console.log(boolValue); // true
const numValue = Number("123");
console.log(numValue); // 123
const strValue = String(123);
console.log(strValue); // "123"