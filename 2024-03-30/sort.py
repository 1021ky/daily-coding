import unittest


def insert_sort(target: list):
    """挿入ソート"""
    if len(target) == 1:
        return [target[0]]
    sorted = [target[0]]
    for t in target[1:]:
        for i in range(0, len(sorted)):
            if t < sorted[i]:
                sorted = sorted[0:i] + [t] + sorted[i:]
                break
        else:
            sorted.append(t)
    return sorted


def select_sort(target: list):
    """選択ソート"""
    if len(target) == 1:
        return [target[0]]
    sorted = []

    for i in range(0, len(target)):
        min_value = target[i]
        for j in range(i, len(target)):
            if min_value > target[j]:
                min_value, target[j] = target[j], min_value
        sorted.append(min_value)
    return sorted


class SortTest(unittest.TestCase):

    def test_insert_sort(self):
        test_case = [
            ([3, 2, 4, 1], [1, 2, 3, 4]),
            ([1], [1]),
            ([6, 6, 4, 4, 2, 7, 6, 4, 3], [2, 3, 4, 4, 4, 6, 6, 6, 7]),
            ([3, 3, 3], [3, 3, 3]),
        ]
        for param, expected in test_case:
            with self.subTest(param=param, expected=expected):
                actual = insert_sort(param)
                self.assertEqual(expected, actual)

    def test_select_sort(self):
        test_case = [
            ([3, 2, 4, 1], [1, 2, 3, 4]),
            ([1], [1]),
            ([6, 6, 4, 4, 2, 7, 6, 4, 3], [2, 3, 4, 4, 4, 6, 6, 6, 7]),
            ([3, 3, 3], [3, 3, 3]),
        ]
        for param, expected in test_case:
            with self.subTest(param=param, expected=expected):
                actual = select_sort(param)
                self.assertEqual(expected, actual)


if __name__ == "__main__":
    unittest.main()
