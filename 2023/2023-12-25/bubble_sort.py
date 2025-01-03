import random
import logging
from performance_measure import measure_time


def get_randint_list():
    return [random.randint(0, 99) for _ in range(100)]


@measure_time
def bubblesort(target: list[int]) -> list[int]:
    for i in range(len(target) - 1):
        for j in range(i, len(target) - 1):
            if target[i] > target[j]:
                tmp = target[i]
                target[i] = target[j]
                target[j] = tmp
    return target


# TODO 引数副作用無しでするには？
# TODO イテレータ使ってやると？


def main():
    logging.basicConfig(filename=f"{__file__}.log", level=logging.INFO)
    logger = logging.getLogger()
    logger.addHandler(logging.StreamHandler())

    target = get_randint_list()
    print(f"before: {target}")
    result = bubblesort(target)
    print(f"after: {result}")


if __name__ == "__main__":
    main()
