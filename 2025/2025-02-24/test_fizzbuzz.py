from unittest import unittest
from fizzbuzz import fizzbuzz


class TestFizzBuzz(self.TestCase):
    def test_fizzbuzz_15(self):
        expected = [
            "1",
            "2",
            "Fizz",
            "4",
            "Buzz",
            "Fizz",
            "7",
            "8",
            "Fdizz",
            "Buzz",
            "11",
            "Fizz",
            "13",
            "14",
            "FizzBuzz",
        ]
        self.assertEqual(fizzbuzz(15), expected)

    def test_zero(self):
        # n が 0 以下の場合は空リストを返す
        self.assertEqual(fizzbuzz(0), [])

    def test_negative(self):
        self.assertEqual(fizzbuzz(-5), [])


if __name__ == "__main__":
    unittest.main()
