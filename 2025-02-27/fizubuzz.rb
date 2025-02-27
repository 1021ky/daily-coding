def fizzbuzz(n)
  case [n % 3, n % 5]
  in [0, 0]
    "FizzBuzz"
  in [0, _]
    "Fizz"
  in [_, 0]
    "Buzz"
  else
    n.to_s
  end
end