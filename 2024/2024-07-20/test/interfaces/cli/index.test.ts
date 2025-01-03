import {main} from "@App/interfaces/cli/index";

import {describe, expect} from '@jest/globals';

describe('console.logの出力を確認', () => {
  it('console.logが正しく呼び出されるか', () => {
    // Arrange
    const logSpy = jest.spyOn(console, 'log');
    // Act
    main();
    // Assert
    expect(logSpy).toHaveBeenCalledWith('123');
    // clean up
    logSpy.mockRestore(); // スパイを復元
  });
});