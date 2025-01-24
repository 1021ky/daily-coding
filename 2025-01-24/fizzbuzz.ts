function fizzbuzz(n: number): string {
    let result = n.toString();
    if (n % 15 == 0) {
        result = 'fizzbuzz';
    } else if (n % 5 == 0) {
        result = 'buzz';
    } else if (n % 3 == 0) {
        result = 'fizz';
    }
    return result
}

function run() {
    for (let i = 1; i <= 100; i++) {
        console.log(fizzbuzz(i))
    }
}

if (require.main === module) {
    run();
}