def shell_sort(target: list[int]):
    """シェルソートを行う

    中規模である要素の個数が6000くらいまでのリストでは比較的よい性能を示す。
    ビッグデータには適していない。
    """
    distance = (
        len(target) // 2
    )  # バブルソートと違って隣接した要素ではなく間を空けるための幅
    while distance > 0:
        # 間隔をあけて挿入ソートを行う。
        # 挿入ソートにしているのは部分的なソート状態を維持したいため。
        for i in range(distance, len(target)):
            insert_target = target[i]
            j = i
            # 比較して違いがあれば挿入する
            while j >= distance and target[j - distance] > insert_target:
                target[j] = target[j - distance]
                j -= distance
            target[j] = insert_target
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
    sorted_target = shell_sort(target)
    print("Sorted list:", sorted_target)
