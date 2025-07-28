/* Map/Set */
// groupBy
const votes = [
    { id: 1, vote: "yes" },
    { id: 2, vote: "no" },
    { id: 3, vote: "yes" },
    { id: 4, vote: "yes" },
    { id: 5, vote: "no" },
];

const groupedVotes = Map.groupBy(votes, (v) => v.vote); // 第2引数の関数の返り値がキーになったMapが返る
console.log(Array.isArray(groupedVotes.get("yes"))); //
console.log(groupedVotes);
console.log(groupedVotes.get("yes"));

const groupedVotes2 = Map.groupBy(votes, ({ vote }) => vote); // 第2引数の関数の返り値がキーになったMapが返る。引数への代入のやり方が違って分割代入になっているだけで、結果は変わらない。
console.log(Array.isArray(groupedVotes2.get("yes"))); //
console.log(groupedVotes2);
console.log(groupedVotes2.get("yes"));
