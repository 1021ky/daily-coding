from sample.app import message
import pytest

@pytest.mark.parametrize('param, expect', [
    ("Taro", 'Hello, Taro!'),
    ("", 'Hello'),
    (None, 'Hello'),
])
def test_message(param, expect):
    assert message(param) == expect