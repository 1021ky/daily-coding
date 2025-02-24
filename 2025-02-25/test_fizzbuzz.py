import unittest
from fizzbuzz import fizzbuzz


class FizzBuzzTest(unittest.TestCase):
    def test_fizzbuzz(self):
        contexts = [
            {
                "description": "3でも5でもわりきれないときは渡された数値の文字列",
                "param": 1,
                "expected": "1",
            },
            {"description": "3でわりきれるときはFizz", "param": 3, "expected": "Fizz"},
            {"description": "5でわりきれるときはBuzz", "param": 5, "expected": "Buzz"},
            {
                "description": "15でわりきれるとき",
                "param": 15,
                "expected": "FizzBuzz",
            },
        ]
        for context in contexts:
            actual = fizzbuzz(context["param"])
            self.assertEqual(context["expected"], actual)


if __name__ == "__main__":
    unittest.main()
