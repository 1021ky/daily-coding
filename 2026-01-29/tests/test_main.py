import pytest

from src.main import run

@pytest.mark.parametrize(
    "input_value, expected",
    [
        ({"n": 3, "m": 10, "k": (1,3,5)}, "No"),
        ({"n": 3, "m": 9, "k": (1,3,5)}, "Yes"),
    ],
)
def test_example(input_value, expected):
    actual = run(**input_value)
    assert actual == expected