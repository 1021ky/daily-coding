from binary_search import binary_search
import pytest


@pytest.mark.parametrize(
    ("expected", "target", "data"),
    [
        (4, 5, [1, 2, 3, 4, 5, 6, 7]),
        (0, 4, [4]),
        (None, 9, [1, 2, 3, 4, 5, 6, 7]),
    ],
)
def test_binary_search(expected, target, data):
    result = binary_search(target, data)
    if expected is None:
        assert result is None
    else:
        assert result == expected
