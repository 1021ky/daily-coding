/// <summary>1から100のうち素数を出力するプログラム</summary>

let isPrime number =
    if number < 2 then
        false
    else
        let root = int(sqrt( float number))
        {2..root} |> Seq.exists(fun x -> number % x = 0) |> not


let numbers = [1..100]
numbers
|> List.filter(isPrime)
|> List.iter(fun x -> printfn $"{x}")
