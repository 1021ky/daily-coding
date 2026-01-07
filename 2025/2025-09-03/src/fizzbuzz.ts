export function fizzBuzzStrings(n: number): string {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        result.push(fizzBuzz(i));
    }
    return result.join(", ");
}

export function fizzBuzz(i: number): string {
    if (i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz";
    } else if (i % 3 === 0) {
        return "Fizz";
    } else if (i % 5 === 0) {
        return "Buzz";
    }
    return i.toString();
}