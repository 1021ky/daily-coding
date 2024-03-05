// For more information see https://aka.ms/fsharp-console-apps
module HelloWorld =
    let isOdd x =
        if x % 2 = 0 then
            true
        else
            false
    printfn $"%b{isOdd 2}"
