"""足し算をする関数を、hypotheesisを使ってプロパティテストをする
"""


def add(x: int, y: int) -> int:
    return x + y


if __name__ == "__main__":
    from hypothesis import given
    from hypothesis.strategies import integers
    import unittest

    class Test(unittest.TestCase):
        @given(x=integers(), y=integers())
        def test_add(self, x, y):
            print(x, y)
            self.assertEqual(add(x, y), x + y)

    unittest.main()
