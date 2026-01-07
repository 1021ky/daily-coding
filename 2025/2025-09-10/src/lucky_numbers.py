"""Get a list of lucky numbers."""


def get_nth_lucky_number(n):
    b_str = _make_nth_binary_str(n)
    return _convert_bin_to_lucky_number(b_str)


def _make_nth_binary_str(n):
    return str(bin(n - 1))[2:].zfill(10)
    for i in range(n + 1):
        str(bin(i))


def _convert_bin_to_lucky_number(b_str):
    return b_str.replace("0", "4").replace("1", "7")
