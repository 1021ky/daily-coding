from typing import List, Tuple, Union, Literal


def quicksort(param: List[int]) -> List[int]:
    """quicksortで昇順にソートする

    :param param: ソート対象のリスト
    :return: ソート済みのリスト
    """
    # sort対象が並べ替える要素数ないならば、なにもしない
    if len(param) <= 1:
        return param

    # ソートする対象を積むスタック
    stack: List[Tuple[Union[Literal[0], int], int]] = [(0, len(param) - 1)]
    # ソートする範囲がなくなるまで並び替える
    while stack:
        low, high = stack.pop()
        # lowからhighの範囲には少なくとも low と high の2つの要素が存在するならば並び替える
        # 1要素しかないならば、並び替えはしないでいいから、スタックからpopして次を見るだけ
        if low < high:
            pivot_index = partition(param, low, high)
            stack.append((low, pivot_index - 1))
            stack.append((pivot_index + 1, high))
    return param


def partition(arr, low, high) -> int:
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
