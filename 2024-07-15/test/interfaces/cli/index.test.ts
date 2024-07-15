import {main} from "@App/interfaces/cli"

describe("main関数のテスト", () => {
    // Arrange
    beforeEach(() => {
        // console.logのモックを設定
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    // Annihilate
    afterEach(() => {
        // モックをクリーンアップ
        jest.clearAllMocks();
    });

    it('should log "hello world"', () => {
        // Act
        main();
        // Assert
        expect(console.log).toHaveBeenCalledWith('hello world');
    });
})