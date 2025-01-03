from binary_search import binary_search
import pytest


@pytest.mark.parametrize(
    ("expected", "target", "data"),
    (
        [
            (3, 4, [1, 2, 3, 4, 5, 6]),
            (3, 27, [13, 20, 22, 27, 30, 50, 234]),
            (
                3,
                27,
                [
                    20,
                    13,
                    27,
                    22,
                    50,
                    234,
                    30,
                ],
            ),
            (None, 3, [13, 20, 22, 27, 30, 50, 234]),
        ]
    ),
)
def test_binary_search(expected, target, data):
    actual = binary_search(target, data)
    if expected is None:
        assert actual is expected
    else:
        assert actual == expected
