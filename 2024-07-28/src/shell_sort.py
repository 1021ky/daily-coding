def shell_sort(target: list):
    """対象のリストを昇順にソートする

    ソートはシェルソートで行う

    :param target: ソート対象
    :return: ソート済みのリスト
    """
    # 間隔を決める
    distance = len(target) // 2
    while distance > 0:
        # 間隔をあけて挿入ソートする
        for current_index in range(distance, len(target)):
            temp = target[current_index]
            insert_sort_index = current_index
            # 間隔をあけて順番に要素を見て挿入位置が見つかったら挿入する
            while (
                insert_sort_index >= distance
                and target[insert_sort_index - distance] > temp
            ):
                target[insert_sort_index] = target[insert_sort_index - distance]
                insert_sort_index -= distance
            target[insert_sort_index] = temp
        # 間隔をせばめて再度ソートする
        distance //= 2
    return target


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
    result = shell_sort(target)
    print(f"sorted: {result}")
