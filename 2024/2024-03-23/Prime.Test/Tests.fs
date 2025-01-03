module Tests

open Prime
open System
open Xunit

[<Fact>]
let ``Test when number is prime`` () =
    [3; 5; 7; 11; 13; 17] |> List.forall isPrime |> Assert.True

[<Fact>]
let ``Test when number is not prime`` () =
    [1; 4; 6; 8; 9; 10] |> List.exists isPrime |> Assert.False

[<Fact>]
let ``Test isPrime with edge cases`` () =
    [0; 1; -1; -2] |>  List.exists isPrime |> Assert.False