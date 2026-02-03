import pytest

from daily_coding.main import run

@pytest.mark.parametrize(
    "input_value, expected",
    [
        ({"n": 4, "a": (1,2,4,7), "k": 13}, "Yes"),
        ({"n": 4, "a": (1,2,4,7), "k": 15}, "No"),
    ],
)
def test_example(input_value, expected):
    actual = run(**input_value)
    assert actual == expected