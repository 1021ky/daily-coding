module PrimeTests

open Xunit
open Program

[<Fact>]
let ``Test that 2 is prime``() =
    Assert.True(isPrime 2)

[<Fact>]
let ``Test that 4 is not prime``() =
    Assert.False(isPrime 4)

[<Fact>]
let ``Test that 13 is prime``() =
    Assert.True(isPrime 13)