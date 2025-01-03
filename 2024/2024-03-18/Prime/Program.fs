module Prime
/// <summary>素数を出力するプログラム</summary>

/// <summary>
/// 引数で渡された値が素数か判定する関数
/// </summary>
/// <param name="number">判定したい数</param>
/// <returns>素数ならばtrue、そうでなければfalse</returns>
/// <remarks>
/// エラトステネスの篩を使って判定する
/// </remarks>
let isPrime number =
    if number < 2 then
        false
    else
        let root = int (sqrt(float number))
        {2..root} |> Seq.exists(fun x -> number % x = 0) |> not

[1..100]
|> List.filter(isPrime)
|> List.iter(fun x -> printfn $"{x}")