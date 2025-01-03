"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require(".");
(0, globals_1.describe)('console.logの出力を確認', () => {
    it('console.logが正しく呼び出されるか', () => {
        // Arrange
        const logSpy = jest.spyOn(console, 'log');
        // Act
        (0, _1.output_log)();
        // Assert
        (0, globals_1.expect)(logSpy).toHaveBeenCalledWith('hello world!!');
        // clean up
        logSpy.mockRestore(); // スパイを復元
    });
});
