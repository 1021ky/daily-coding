from typing import Protocol, Sequence, TypeVar, Any
import unittest


class Comparable(Protocol):
    """比較可能でindexで値を取得できることを表すプロトコル"""

    # 比較可能
    def __le__(self, other: Any) -> bool:
        ...

    def __ge__(self, other: Any) -> bool:
        ...

    def __gt__(self, other: Any) -> bool:
        ...

    def __lt__(self, other: Any) -> bool:
        ...

    def __eq__(self, other: Any) -> bool:
        ...


T = TypeVar("T", bound=Comparable)


def quick_sort(target: Sequence[T], reverse=False) -> Sequence[T]:
    """quick sortをする。デフォルトは昇順にならべる

    :param target: ソート対象
    :param reverse: Trueならば降順にする
    :return: ソート結果
    """
    pivot = target[0]
    if reverse:
        left = [e for e in target if e > pivot]
        right = [e for e in target if e < pivot]
    else:
        left = [e for e in target if e < pivot]
        right = [e for e in target if e > pivot]
    return left + [pivot] + right


class TestClass(unittest.TestCase):
    def test_quick_sort(self):
        param = [100, 1000, -4, 2, 1, 0, -9]
        (expected := param).sort()
        actual = quick_sort(param)
        self.assertEqual(expected, actual)

    def test_quick_sort_desc(self):
        param = [100, 1000, -4, 2, 1, 0, -9]
        (expected := param).sort(reverse=True)
        actual = quick_sort(param, reverse=True)
        self.assertEqual(expected, actual)


if __name__ == "__main__":
    unittest.main()
