import pytest

from quicksort import quicksort


@pytest.mark.parametrize(
    "parameter, expected_result",
    [
        ([3, 2, 1], [1, 2, 3]),
        ([1, 1, 1], [1, 1, 1]),
        ([], []),
        ([5, 3, 2, 8, 6, 7, 1, 4], [1, 2, 3, 4, 5, 6, 7, 8]),
        ([9, 8, 7, 6, 5, 4, 3, 2, 1], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
        ([1], [1]),
        ([1, 2], [1, 2]),
        ([2, 1], [1, 2]),
        ([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
        ([9, 7, 5, 3, 1, 2, 4, 6, 8], [1, 2, 3, 4, 5, 6, 7, 8, 9]),
        (
            list(range(10**2, 0, -1)),
            list(range(1, 10**2 + 1)),
        ),
    ],
)
def test_quick_sort(parameter, expected_result):
    actual = quicksort(parameter)
    assert expected_result == actual


if __name__ == "__main__":
    pytest.main()
