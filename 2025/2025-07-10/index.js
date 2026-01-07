/* 例外処理 */
// 例外の取り方
{
    try {
        console.log("tryブロック内のコード");
        throw new Error("エラーが発生しました");
    } catch (error) {
        console.error("catchブロック内のコード:", error.message);
    } finally {
        console.log("finallyブロック内のコード");
    }

    // try catchが二重のとき
    try {
        console.log("外側のtryブロック");
        try {
            console.log("内側のtryブロック");
            throw new Error("内側のエラー");
        } catch (innerError) {
            console.error("内側のcatchブロック:", innerError.message);
            throw new Error("内側のエラーを再スロー", { cause: innerError }); // 第2引数にcauseプロパティの値に入れておくことでトレースに残る
        } finally {
            console.log("内側のfinallyブロック");
        }
        console.log("ここは通らない")
    } catch (outerError) {
        outerError.message = "外側のエラー: " + outerError.message;
        console.error("外側のcatchブロック:", outerError.message);
        console.error(outerError);
    } finally {
        console.log("外側のfinallyブロック");
    }
}
