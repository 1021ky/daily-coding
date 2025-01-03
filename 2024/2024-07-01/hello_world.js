console.log("hello world");
var array = [1, 2, 3];
for (var index = 0; index < array.length; index++) {
    var element = array[index];
    console.log(element);
}
function increment(num) {
    return num + 1;
}
var num = 3;
console.log(increment(num));
// トランスパイラが検知 error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// const num_str = "4";
// console.log(increment(num_str));
