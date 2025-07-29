/*Map*/
// MapがなかったときはObjectをマップとして使っていた
const objMap = Object.create(null); // prototypeプロパティが継承されないようにnullを渡す
objMap["foo"] = 123;
objMap["bar"] = 234;
console.log(objMap)

// すべてがMapで置き換えられるわけではない
// ネイティブAPI・外部ライブラリを問わず、多くの関数がマップとしてObjectを渡す設計になっている

// リテラル表現でさっと作成できるのはObjectの利点
const jString = JSON.stringify({ username: 'kei yama', 'taro': 'suzuki' });

