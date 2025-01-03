import * as fs from "fs";


function readFile(filePath: string): string{
  try {
    return fs.readFileSync(filePath, { encoding: "utf-8" });
  } catch (error) {
    console.error("Error reading file:", error);
    return "";
  }
}

// 関数を呼び出し、ファイルの内容を出力
const content = readFile("src/index.ts");
console.log(content)