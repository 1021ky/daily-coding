from unittest import TestCase
from typing import TypeVar, Any, Protocol, Sequence
import unittest


class Comparable(Protocol):
    """比較可能を表すプロトコル"""

    def __eq__(self, __value: Any) -> bool:
        ...

    def __lt__(self, __value: Any) -> bool:
        ...

    def __le__(self, __value: Any) -> bool:
        ...

    def __gt__(self, __value: Any) -> bool:
        ...

    def __ge__(self, __value: Any) -> bool:
        ...


T = TypeVar("T", bound=Comparable)


def bubble_sort(target: Sequence[T]) -> list[T]:
    result = list(target)
    size = len(result)
    for i in range(size):
        for k in range(i + 1, size):
            if result[i] > result[k]:
                tmp = result[i]
                result[i] = result[k]
                result[k] = tmp
    return result


class TestClass(TestCase):
    def test_bubble_sort(self):
        param = [-1, 2, 10, 3, -23, 3]
        expected = [-23, -1, 2, 3, 3, 10]
        actual = bubble_sort(param)
        self.assertEqual(expected, actual)

    def test_bubble_sort_str(self):
        param = ["d", "b", "c", "a", "e"]
        expected = ["a", "b", "c", "d", "e"]
        actual = bubble_sort(param)
        self.assertEqual(expected, actual)

    def test_bubble_sort_tuple(self):
        param = (1, "a", 3)
        with self.assertRaises(TypeError):
            bubble_sort(param)


if __name__ == "__main__":
    unittest.main()
