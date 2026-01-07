import { fizzBuzzStrings } from "./fizzbuzz";

export function main() {
    console.log(fizzBuzzStrings(20));
}

if (require.main === module) {
    main();
}