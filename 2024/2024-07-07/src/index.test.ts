import {describe, expect, test} from '@jest/globals';
import {output_log} from '.';

describe('console.logの出力を確認', () => {
  it('console.logが正しく呼び出されるか', () => {
    // Arrange
    const logSpy = jest.spyOn(console, 'log');
    // Act
    output_log();
    // Assert
    expect(logSpy).toHaveBeenCalledWith('hello world!!');
    // clean up
    logSpy.mockRestore(); // スパイを復元
  });
});