﻿let number = 30
// 再帰関数はrecがいる
let rec fact x =
    if x = 0 then 1
        else x * fact(x-1)
System.Console.WriteLine(fact 5);;