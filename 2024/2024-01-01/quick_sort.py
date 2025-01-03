import math
import unittest


def _select_pivot(target: list[int]) -> int:
    """ピボットを選択してindexを返す"""
    return math.ceil(len(target) / 2) - 1


def _partition(target: list[int], pivot_index: int) -> tuple[list[int], int, list[int]]:
    """指定されたピボットで分割する"""
    less = []
    greater = []
    for t in target[0:pivot_index]:
        if t < target[pivot_index]:
            less.append(t)
        else:
            greater.append(t)
    for t in target[(pivot_index + 1) :]:
        if t < target[pivot_index]:
            less.append(t)
        else:
            greater.append(t)

    return less, target[pivot_index], greater


def _is_finished(target: list[int]) -> bool:
    """対象が終了条件に該当するか判定する"""
    if len(target) <= 1:
        return True
    return False


def quick_sort(target: list[int]) -> list[int]:
    if _is_finished(target):
        return target
    index = _select_pivot(target)
    left, pivot, right = _partition(target, index)
    return quick_sort(left) + [pivot] + quick_sort(right)


# memo github copilotが出した実装サンプル。短くてわかりやすい
# def quick_sort(arr):
#     if len(arr) <= 1:
#         return arr
#     else:
#         pivot = arr[0]
#         less = [x for x in arr[1:] if x <= pivot]
#         greater = [x for x in arr[1:] if x > pivot]
#         return quick_sort(less) + [pivot] + quick_sort(greater)


class TestClass(unittest.TestCase):
    def test_quick_sort(self):
        import copy

        param = [-1, 2, 3, -10, 0, 100, 2, 15]
        (expected := copy.deepcopy(param)).sort()
        actual = quick_sort(param)
        self.assertEqual(expected, actual)


if __name__ == "__main__":
    unittest.main()
