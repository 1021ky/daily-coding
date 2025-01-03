module FizzBuzz =
    let startNumber = 1
    let endNumber = 100
    let numbers = [for i in startNumber..endNumber -> i]

    let fizz = "fizz"
    let buzz = "buzz"
    let fizzbuzz = "fizzbuzz"

    let judgeFizzBuzz number =
        match number with
        | _ when number % 3 = 0 && number % 5 = 0 -> fizzbuzz
        | _ when number % 3 = 0 -> fizz
        | _ when number % 5 = 0 -> buzz
        | _ -> string number

    numbers
    |> List.map(judgeFizzBuzz)
    |> List.iter(fun x -> printfn $"%s{x}")
