import * as util from "node:util";
import * as fs from "node:fs/promises";
import { md2html } from "./md2html.js";

const { values, positionals } = util.parseArgs({
    allowPositionals: true,
    options: {
        gfm: { // gfmフラグ設定
            type: "boolean",
            default: false,
        }
    }
});
const filePath = positionals[0];
console.log({ gfm: values.gfm })
// readFileの第2引数で読み込み方を指定できる
fs.readFile(filePath, { encoding: "utf8" }).then(file => {
    const html = md2html(file,
        { gfm: values.gfm });
    console.log(html);
}).catch(err => {
    console.error(err.message);
    process.exit(1);
})