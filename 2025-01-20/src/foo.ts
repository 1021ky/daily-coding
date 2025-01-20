export const sum
    = (...a: number[]) =>
        a.reduce((acc, val) => acc + val, 0);

if (require.main === module) {
    console.log(sum(1, 2, 3));
}