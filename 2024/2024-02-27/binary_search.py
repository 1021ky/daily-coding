def binary_search(target: int, data: list) -> int | None:
    data.sort()
    low = 0
    high = len(data) - 1
    while low <= high:
        mid = (low + high) // 2
        if target < data[mid]:
            high = mid - 1
        elif target > data[mid]:
            low = mid + 1
        else:
            return mid
    return None
