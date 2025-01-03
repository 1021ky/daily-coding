import sort

import pytest


@pytest.mark.parametrize(
    ["expected", "param"],
    [
        ([1, 2, 3], [2, 1, 3]),
        ([], []),
        ([1, 2, 3, 4, 5], [2, 1, 5, 3, 4]),
        [list(range(1, 10**2 + 1)), list(range(10**2, 0, -1))],
    ],
)
def test_search(expected, param):
    actual = sort.sort(param)
    assert expected == actual
