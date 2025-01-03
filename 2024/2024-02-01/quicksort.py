def partition(param, low, high) -> int:
    pivot = param[high]
    boundary_index = low - 1
    for current_index in range(low, high):
        if param[current_index] <= pivot:
            # pivotよりも小さい値があったらその分境界は後ろにして交換
            boundary_index += 1
            param[boundary_index], param[current_index] = (
                param[current_index],
                param[boundary_index],
            )
    # すべての値がピボット基準に並んでいる位置にする
    # ピボットの前にはピボットより小さい値で、後ろには大きい値
    param[boundary_index + 1], param[high] = (
        param[high],
        param[boundary_index + 1],
    )
    return boundary_index + 1


def quicksort(param: list) -> list:
    if len(param) <= 1:
        return param

    sort_range_stack = [(0, len(param) - 1)]
    while sort_range_stack:
        low, high = sort_range_stack.pop()
        if low < high:
            pivot_index = partition(param, low, high)
            sort_range_stack.append((low, pivot_index - 1))
            sort_range_stack.append((pivot_index + 1, high))
    return param
