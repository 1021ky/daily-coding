"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = main;
function main() {
    console.log('Hello, world!');
}
if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
    main();
}
