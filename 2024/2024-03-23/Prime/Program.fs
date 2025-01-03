module Prime
/// <summary>素数を標準出力するプログラム</summary>

let isPrime number =
    if number < 2 then
        false
    else
        let root = int(sqrt(float number))
        {2..root} |> Seq.forall(fun x -> not (number % x = 0))

[1..1000]
|> List.filter(isPrime)
|> List.iter(fun x -> printfn $"{x}")