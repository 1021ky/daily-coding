function fizzbuzz(n: number): string {
    if (n % 3 === 0 && n % 5 === 0) {
        return 'FizzBuzz';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    } else {
        return n.toString();
    }
}

export function main() {
    for (let i = 1; i < 30; i++) console.log(fizzbuzz(i));
}

if (require.main === module) {
    main();
}