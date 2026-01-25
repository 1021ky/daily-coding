import itertools

"""プログラミングコンテストチャレンジブックより

n回の整数a1,a2,...,anが与えられます。
これらの中から3つの整数を選び、三角形を作ることができるとき、
その周囲の長さの最大値を求めてください。
三角形を作ることができないときは0を出力してください。

"""

cases = [
        {
            "param": {
                "n": 5,
                "a": (2, 3,4,5,10)
            },
            "expected": 12
        },
        {
            "param": {
                "n": 4,
                "a": (4, 5,10, 20)
            },
            "expected": 0
        },
    ]

def is_triangle(a, b, c):
    if ((a + b) <= c) or ((b + c) <= a) or ((a + c) <= b):
        return False
    return True

def calc_surroundings(a, b, c):
    return a + b + c


def get_max_surroundings(n, a):
    results = []
    for i in range(n):
        for target in itertools.combinations(a, 3):
            result = calc_surroundings(*target) if is_triangle(*target) else 0
            results.append(result)
    return max(results)

def main():
    for case in cases:
        actual = get_max_surroundings(case["param"]["n"], case["param"]["a"])
        assert case["expected"] == actual


if __name__ == "__main__":
    main()
