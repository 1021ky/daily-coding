console.log("hello world");

const array = [1,2,3]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}

function increment(num: number){
    return num + 1;
}
const num = 3;
console.log(increment(num));

// トランスパイラが検知 error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// const num_str = "4";
// console.log(increment(num_str));