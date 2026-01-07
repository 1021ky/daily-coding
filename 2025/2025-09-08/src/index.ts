export function main() {
    console.log('Hello, world!');
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
    main();
}