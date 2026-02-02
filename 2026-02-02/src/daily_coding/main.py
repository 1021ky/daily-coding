import time

def fib(n):
    """
    指定されたn番目のフィボナッチ数を返す

    :param n: パラメータ
    """
    if (n<=1):
        return n
    return fib(n-1) + fib(n-2)

def fast_fib(n: int) -> int:
    """
    指定されたn番目のフィボナッチ数を返す

    通常のフィボナッチ数を求める関数と違うのは、同じ計算が見つかったら結果をキャッシュしておくこと

    :param n: パラメータ
    """
    memo: dict[str, int] = {}
    def helper(n: int) -> int:
        key = str(n)
        if key in memo:
            return memo[key]
        if (n <=1):
            return n
        memo[key] = helper(n-1) + helper(n-2)
        return memo[key]

    return helper(n)


def main():
    start = time.perf_counter()
    print(fib(30))
    end = time.perf_counter()
    print(f"fib実行時間: {end - start:.4f}秒")

    start = time.perf_counter()
    print(fast_fib(30))
    end = time.perf_counter()
    print(f"fast_fib実行時間: {end - start:.4f}秒")

if __name__ == "__main__":
    main()