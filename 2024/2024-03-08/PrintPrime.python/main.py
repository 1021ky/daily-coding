"""素数を出力する
"""

import math


def is_prime(number: int) -> bool:
    if number <= 1:
        return False
    if number == 2:
        return True
    for i in range(
        2, int(math.ceil(math.sqrt(number))) + 1
    ):  # Modify the range to include the upper limit
        if number % i == 0:
            return False
    else:
        return True


numbers = list(range(1, 100 + 1))
primes = [n for n in numbers if is_prime(n)]
print(primes)
