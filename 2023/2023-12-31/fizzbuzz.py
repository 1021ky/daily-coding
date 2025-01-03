from unittest import TestCase
import unittest
from itertools import cycle


fizz_cycle = cycle(["", "", "Fizz"])
buzz_cycle = cycle(["", "", "", "", "Buzz"])


def fizzbuzz_generator(cycle_count: int):
    for i in range(1, cycle_count + 1):
        yield (next(fizz_cycle) + next(buzz_cycle)) or str(i)


def fizzbuzz(cycle_count: int):
    return [e for e in fizzbuzz_generator(cycle_count)]


class TestClass(TestCase):
    def test_fizzbuzz(self):
        param = 16
        expected = [
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz",
            "16",
        ]
        actual = fizzbuzz(param)
        self.assertEqual(expected, actual)


if __name__ == "__main__":
    unittest.main()
