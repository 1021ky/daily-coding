import fs from 'fs';
import path from 'path';

class FileLoader {
    private filePath: string;
    private _content: string;

    /**
     * コンストラクタ
     * @param filePath 読み込むファイルのパス
     */
    constructor(filePath: string){
        this.filePath = filePath;
        this._content = ""
    }
    /**
     *  contentのゲッター
     */
    get content(): string {
        return this._content;
    }
    /**
     * ファイルを読み込む
     * @returns ファイルの内容を含むPromiseオブジェクト
     */
    readFile(): Promise<string> {
        return new Promise((resolve, reject) => {
            fs.readFile(this.filePath, { encoding: 'utf-8' }, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
