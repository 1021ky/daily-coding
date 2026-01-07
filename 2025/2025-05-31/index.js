// 正規表現リテラル
const numberRegExp = /^\d{4}-\d{2}-\d{2}$/;
console.log(numberRegExp.test('2025-05-31'));
console.log(numberRegExp.test('2025/05/31'));