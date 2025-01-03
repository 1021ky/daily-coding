/// <summary>
/// fizzbuzzを標準出力する
/// </summary>

let number = 3

let fizzbuzz number =
    match number with
    | _ when number % 3 = 0 && number % 5 = 0 -> "fizzbuzz"
    | _ when number % 3 = 0 -> "fizz"
    | _ when number % 5 = 0 -> "buzz"
    | _ -> string number

let numbers = [for i in 1..30 -> i]
numbers
|> List.map fizzbuzz
|> List.iter (fun x  -> printfn $"{x}")