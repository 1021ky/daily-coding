from typing import Literal, Union


def partition(array: list, start_index: int, end_index: int) -> int:
    """ソートする範囲に分けるpivotのindexを返す

    :param array: 分割対象
    :param start_index: 分割対象の最初のindex値
    :param end_index: 分割対象の最後のindex値
    :return: pivotとなる点
    """
    pivot_value = array[end_index]
    boundary_index = start_index - 1
    for current_index in range(start_index, end_index):
        if array[current_index] <= pivot_value:
            # pivotよりも小さい値があったらその分境界は後ろにして交換
            boundary_index += 1
            array[boundary_index], array[current_index] = (
                array[current_index],
                array[boundary_index],
            )
    # すべての値がピボット基準に並んでいる位置にする
    # ピボットの前にはピボットより小さい値で、後ろには大きい値
    array[boundary_index + 1], array[end_index] = (
        array[end_index],
        array[boundary_index + 1],
    )
    return boundary_index + 1


def quicksort(param: list) -> list:
    if len(param) <= 1:
        return param

    # 並び替え範囲をスタックに積んでいく
    stack: list[tuple[Union[Literal[0], int], int]] = [(0, len(param) - 1)]
    while stack:
        low_index, high_index = stack.pop()
        if low_index < high_index:
            # 並び替え対象があったら、pivotは並び替え済みとして、
            # その他は並び替え対象としてスタックに積む
            pivot_index = partition(param, low_index, high_index)
            stack.append((low_index, pivot_index - 1))
            stack.append((pivot_index + 1, high_index))
    return param
