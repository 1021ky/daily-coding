def fizzbuzz(param: int) -> str:
    match (param % 3, param % 5):
        case (0, 0):
            result = "FizzBuzz"
        case (0, _):
            result = "Fizz"
        case (_, 0):
            result = "Buzz"
        case _:
            result = str(param)

    return result
