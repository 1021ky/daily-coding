import random
import unittest


def get_randint_list():
    return [random.randint(0, 99) for _ in range(100)]


def insert_sort(target: list[int]) -> list[int]:
    # 最初の要素はソート済みとして入れる
    result = [target[0]]
    # 前から順番にみていく
    for t in target[1:]:
        # ソート済みのものに対して前から見ていく
        for i, e in enumerate(result):
            if t > e:
                # もしソート済みの要素よりも大きいのならばソート済みの要素の次をみる
                if i == len(result) - 1:
                    # 最後まで見ても大きい要素がなかった
                    result.append(t)
                    break
                continue
            else:
                # ソート済みの要素よりも小さい場合いれてターゲットの次の要素をソートする
                result = result[0:i] + [t] + result[i:]
                break
    return result


class TestClass(unittest.TestCase):
    def test_insert_sort_no_change(self):
        param = [0, 1, 2, 3, 4]
        excepted = [0, 1, 2, 3, 4]
        actual = insert_sort(param)
        self.assertEqual(actual, excepted)

    def test_insert_sort_target_is_desc(self):
        param = [4, 3, 2, 1, 0]
        excepted = [0, 1, 2, 3, 4]
        actual = insert_sort(param)
        self.assertEqual(actual, excepted)

    def test_insert_sort_target_is_shuffled(self):
        param = [0, 2, 4, 1, 3]
        excepted = [0, 1, 2, 3, 4]
        actual = insert_sort(param)
        self.assertEqual(actual, excepted)

    def test_insert_sort_target_is_random(self):
        param = get_randint_list()
        expected = param[:]
        expected.sort()
        actual = insert_sort(param)
        self.assertEqual(actual, expected)


if __name__ == "__main__":
    unittest.main()
