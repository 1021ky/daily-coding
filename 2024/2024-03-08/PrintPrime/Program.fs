// 1から100の中の素数を出力するプログラム

let isPrime number =
    if number <= 1 then
        false
    else
        let bound = int (sqrt (float number))
        // 平方根以下の値で割り切れる値が1つもなかったら素数
        seq {2..bound} |> Seq.exists (fun x -> number % x = 0) |> not

[1..100]
|> List.filter isPrime
|> List.iter (printfn "%d")

