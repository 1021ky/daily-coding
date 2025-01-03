import random
import unittest


def get_randint_list():
    random.randint(1, 100)


def selection_sort(target: list[int]) -> list[int]:
    result = target[:]
    for i in range(len(result)):
        for k in range(i + 1, len(result)):
            # 小さい値が見つかったら交換
            if result[i] > result[k]:
                tmp = result[k]
                result[k] = result[i]
                result[i] = tmp
    return result


class Test(unittest.TestCase):
    def test_selection_sort(self):
        param = [9, -1, 2, 18, 12, 6]
        (expected := param[:]).sort()
        actual = selection_sort(param)
        self.assertEqual(expected, actual)


if __name__ == "__main__":
    unittest.main()
