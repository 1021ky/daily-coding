/// <summary>
/// 素数を出力するプログラム
/// </summray>
/// <remarks>
/// エラトステネスの篩 Sieve of Eratostheneを使って実装
/// <remarks>
open System.Diagnostics

let isPrime number =
    if number <= 1 then
        false
    else
        let root = int(sqrt(float number))
        seq {2..root} |> Seq.exists (fun e -> number % e = 0) |> not

// let stopwatch = Stopwatch.StartNew()
[1..1000000]
|> List.filter isPrime
|> List.iter (printfn "%d")
// stopwatch.Stop()
// let elapsed = stopwatch.Elapsed
// printfn "Time elapsed: %O" elapsed

// dotnet ./bin/Debug/net8.0/2024-03-09.dll  1.05s user 0.13s system 96% cpu 1.218 total
// python main.py  3.32s user 0.03s system 96% cpu 3.480 total