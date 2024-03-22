module Prime
/// 素数を出力する

let isPrime number =
    if number < 2 then
        false
    else
        let root = int(sqrt(float number))
        {2..root} |> Seq.exists(fun x -> number % x = 0) |> not

[1..100]
|> List.filter(isPrime)
|> List.iter(fun x -> printfn $"{x}")
