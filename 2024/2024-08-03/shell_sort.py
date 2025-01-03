def shell_sort(target: list):
    """シェルソートをする

    中程度 5000要素程度に有効
    """
    target_length = len(target)
    gap = (
        target_length // 2
    )  # バブルソートでは隣接していた要素を見ていたがこれを幅をあけて見ることで、大まかにソートする
    # おおまかにソートした後に間隔をせばめてからソートすると、要素の移動距離が少なくなり、移動回数が減る
    while gap > 0:
        # 挿入ソートする
        # 大まかにはソートされていて挿入ソートだと速いため
        for index in range(gap, target_length):
            insert_target = target[index]
            insert_index = index
            while insert_index >= gap and target[insert_index - gap] > insert_target:
                target[insert_index] = target[insert_index - gap]
                insert_index -= gap
            # 挿入先が見つかったため、挿入
            target[insert_index] = insert_target
        gap //= 2
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
