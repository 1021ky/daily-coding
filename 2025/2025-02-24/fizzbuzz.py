def fizzbuzz(n: int):
    results = []
    for i in range(1, n):
        match (i % 3, i % 5):
            case (0, 0):
                results.append("FizzBuzz")
            case (0, _):
                results.append("Fizz")
            case (_, 0):
                results.append("Buzz")
            case _:
                results.append(str(i))d
    return results
