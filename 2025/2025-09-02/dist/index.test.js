"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
test('main prints greeting', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => { });
    (0, index_1.main)();
    expect(spy).toHaveBeenCalledWith('hello from TypeScript on Docker');
    spy.mockRestore();
});
//# sourceMappingURL=index.test.js.map