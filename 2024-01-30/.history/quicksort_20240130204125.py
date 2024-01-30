from typing import Literal, Union


def partition(arr: list, min_index: int, max_index: int) -> int:
    """ソートする範囲に分けるpivotのindexを返す

    :param arr: 分割対象
    :param min_index: 分割対象の最小のindex値
    :param max_index: 分割対象の最大のindex値
    :return: pivotとなる点
    """
    pivot = arr[max_index]  # 分割基準値
    # pivotを基準に指定された範囲でpivotより小さい値は前に、大きい値は後ろに入れ替える
    divided = (
        [item for item in arr[min_index:max_index] if item <= pivot]
        + [pivot]
        + [item for item in arr[min_index:max_index] if item > pivot]
    )
    for i in range(min_index, max_index + 1):
        arr[i] = divided[i - min_index]
    return arr.index(pivot) + 1


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
