def binary_search(target, data) -> int | None:
    left = 0
    right = len(data) - 1

    while left <= right:
        mid = (left + right) // 2
        guess = data[mid]
        if guess == target:
            return mid
        elif guess > target:
            right = mid - 1
        else:
            left = mid + 1
    return None
