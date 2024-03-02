/// <summary>
/// fizzbuzzを標準出力する
/// </summary>
open System

let startNumber = 1
let endNumber = 30
let numbers = [for i in startNumber..endNumber -> i]

let kiriri3 =  "( ｰ`дｰ´)"
let kiriri5 =  "(๑•̀ㅁ•́๑)✧"
let hogee = "_(:3」∠)_"

let judgeFizzBuzz number =
    match number with
    | _ when number % 3 = 0 && number % 5 = 0 -> hogee + "<\t"+ string number + "〜〜"
    | _ when number % 3 = 0  -> kiriri3 + "  <\t" + string number + "!!"
    | _ when number % 5 = 0  ->  kiriri5 +  "  <\t" + string number + "!!!!"
    | _ -> "(-_-)  <\t" + string number

numbers
|> List.map(judgeFizzBuzz)
|> List.iter(fun x -> printfn $"{x}")
