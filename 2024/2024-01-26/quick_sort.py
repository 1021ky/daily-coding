def quick_sort(target: list) -> list:
    if len(target) <= 1:
        return target
    pivot = target[0]
    left = [t for t in target[1:] if t <= pivot]
    right = [t for t in target[1:] if t > pivot]
    # TODO 10**3以上でもRecursionError: maximum recursion depth exceededが起きないように再起をなくしたい
    return quick_sort(left) + [pivot] + quick_sort(right)
