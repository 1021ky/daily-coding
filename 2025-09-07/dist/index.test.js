"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("index", () => {
    it("標準出力でメッセージを表示する", () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => { });
        (0, index_1.main)();
        expect(spy).toHaveBeenCalledWith('Hello, world!');
        spy.mockRestore();
    });
});
