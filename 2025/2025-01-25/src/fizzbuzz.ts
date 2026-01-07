export function fizzbuzz(n: number): string {
    if (n % 15 == 0)
        return n.toString()
    else if (n % 3 == 0) {
        return 'fizz'
    } else if (n % 5 == 0) {
        return 'buzz'
    }
    return n.toString()
}