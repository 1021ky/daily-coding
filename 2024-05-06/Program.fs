/// <symmary>fizzbuzz</summary>

let determine_fizz_buzz number =
    match number with
    | _ when number % 15 = 0 -> "FizzBuzz"
    | _ when number % 5 = 0 -> "Buzz"
    | _ when number % 3 = 0 -> "Fizz"
    | _ -> string number

[1..100]
|> List.map(determine_fizz_buzz) // mapなので新しいリストが返る
|> List.iter(printfn "%s") // iterなので結果は返さない
