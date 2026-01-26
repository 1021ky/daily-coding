import itertools

"""プログラミングコンテストチャレンジブックより

Lは棒の長さcm
nはアリの数
xはアリの位置を表します。
毎秒1cmでアリは移動します。
すべてのアリが棒から落ちるまでにかかる時間の最小値と最大値を求めてください。
アリは、ぶつかりあったら反対の方向に進みます。

"""

def get_max(L, n, x):
    """
    全アリが

    :param L: Description
    :param n: Description
    :param x: Description
    """
    goal_ranges = []
    for position in x:
        goal_ranges.append(max(L-position, position))
    return max(goal_ranges)

def get_min(L, n, x):
    """
    全アリが一番近い端に向かうときを最短とする
    """
    # 一番遠いやつが落ちるまでの時間が最短時間
    goal_ranges = []
    for position in x:
        goal_ranges.append(min(L-position, position))
    return max(goal_ranges)



def run(L, n, x):
    最短 = get_min(L, n, x)
    最長 = get_max(L, n, x)
    return {"min": 最短, "max": 最長}
