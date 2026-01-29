import itertools

"""プログラミングコンテストチャレンジブックより

くじびき
"""

def judge(n:int, m:int, k: set[int]) -> bool:
    """
    Docstring for judge

    :param n: ひく回数
    :param m: 期待する総和
    :param k: 数字が書かれたカードのセット
    """
    sorted_k = sorted(k)
    for comb in itertools.product(sorted_k, repeat=n):
        if sum(comb) == m:
            return True
    return False


def run(n:int, m:int, k: set[int]) -> str:
    """
    Docstring for run

    :param n: ひく回数
    :param m: 期待する総和
    :param k: 数字が書かれたカードのセット
    """
    matches = judge(n, m, k)
    return "Yes" if matches else "No"

