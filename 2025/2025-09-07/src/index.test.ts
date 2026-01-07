import { main } from "./index";

describe("index", () => {
    it("標準出力でメッセージを表示する", () => {
        const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
        main();
        expect(spy).toHaveBeenCalledWith('Hello, world!');
        spy.mockRestore();
    });
});