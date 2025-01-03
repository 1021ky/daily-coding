// 素数を出力するプログラム

// 関数定義
let isPrime n =
    if n <= 1 then false
    else
        let bound = int (sqrt (float n))
        // ２から平方根の値で、全部割り切れなかったら素数
        seq {2..bound} |> Seq.exists (fun x -> n % x = 0) |> not

[1..100]
|> List.filter isPrime
|> List.iter (printfn "%d")