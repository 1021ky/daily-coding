import pytest

from src.main import run

@pytest.mark.parametrize(
    "input_value, expected",
    [
        ({"L": 10, "n": 3, "x": (2,6,7)}, {"min": 4, "max": 8}),
    ],
)
def test_example(input_value, expected):
    actual = run(**input_value)
    assert actual["min"] == expected["min"]
    assert actual["max"] == expected["max"]