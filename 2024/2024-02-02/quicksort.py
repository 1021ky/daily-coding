def partition(param: list[int], low: int, high: int) -> int:
    pivot_value: int = param[high]
    boundary_index: int = low - 1
    for current_index in range(low, high):
        if param[current_index] <= pivot_value:
            boundary_index += 1
            param[current_index], param[boundary_index] = (
                param[boundary_index],
                param[current_index],
            )
    param[boundary_index + 1], param[high] = (
        param[high],
        param[boundary_index + 1],
    )
    return boundary_index + 1


def quicksort(param: list[int]) -> list[int]:
    if len(param) <= 1:
        return param
    # ソート対象の両端からソートしていく
    # 左端と右端を指すインデックスがソート範囲でスタックに積んでいく
    # 左端と右端を指すインデックスが交差したらソート完了とする
    left: int = int(0)
    right: int = len(param) - 1
    stack = [(left, right)]
    while stack:
        left_index, right_index = stack.pop()
        if left_index < right_index:
            pivot_index: int = partition(param, left_index, right_index)
            stack.append((left_index, pivot_index - 1))
            stack.append((pivot_index + 1, right_index))
    return param
