import pytest


from lucky_numbers import get_nth_lucky_number


@pytest.mark.parametrize("args, expect", [(1, "4444444444"), (1024, "7777777777")])
def test_get_nth_number(args, expect):
    assert get_nth_lucky_number(args) == expect
