import { main } from "./index.js";

describe("index.ts", () => {
    it("標準出力でメッセージを表示すること", () => {
        const logSpy = jest.spyOn(console, "log").mockImplementation();
        main();
        expect(logSpy).toHaveBeenCalledWith("Hello, World!");
        logSpy.mockRestore();
    });
});