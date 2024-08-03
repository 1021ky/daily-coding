from operator import indexOf


def search_linearly(key: int, search_list) -> int | None:
    """線形に探索する

    :param key: 検索キー
    :param search_list: 検索対象のリスト
    :return: 見つかったインデックス、存在しなかったらNone
    """
    for i, value in enumerate(search_list):
        if value == key:
            return i
    return None


if __name__ == "__main__":
    target = [
        29,
        10,
        14,
        37,
        13,
        25,
        19,
        17,
        23,
        5,
        7,
        31,
        11,
        3,
        2,
        8,
        6,
        4,
        1,
        9,
        12,
        15,
        16,
        18,
        20,
        21,
        22,
        24,
        26,
        27,
    ]
    result = search_linearly(14, target)
    assert result == 2
    print(f"14 is in {result}")

    result = indexOf(target, 14)
    assert result == 2
    print(f"14 is in {result}")
