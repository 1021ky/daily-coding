def has_partial_sum(
    number: int, elements: tuple[int], partial_sum: int, current_index=0, current_sum=0
) -> bool:
    # 深さ4つの部分和木をつくる
    if current_sum == partial_sum:
        return True
    # 探索の限界まできていたら部分和はないということ
    if current_index >= number:
        return False
    if has_partial_sum(
        number=number,
        elements=elements,
        partial_sum=partial_sum,
        current_index=current_index + 1,
        current_sum=current_sum,
    ):
        return True
    if has_partial_sum(
        number=number,
        elements=elements,
        partial_sum=partial_sum,
        current_index=current_index + 1,
        current_sum=current_sum + elements[current_index],
    ):
        return True
    return False


def run(n, a, k):
    if has_partial_sum(number=n, elements=a, partial_sum=k):
        return "Yes"
    else:
        return "No"


if __name__ == "__main__":
    print(run(4, (1, 2, 4, 7), 13))
