import threading
from concurrent.futures import ThreadPoolExecutor
import unittest
import time


def sleep_sort(targets) -> list[int | float]:
    """対象の配列を昇順にソートして返す

    スリープソートを実装したもの。
    targets: ソート対象の配列
    return: 昇順にソートされた配列
    """
    result = []
    lock = threading.Lock()  # 3.14以降でGILなしでも安全にappendできるようにする

    def worker(n):
        """与えられた値の大きさ分だけスリープしてから結果に追加する"""

        time.sleep(n)
        with lock:
            result.append(n)

    with ThreadPoolExecutor() as executor:
        executor.map(worker, targets)
    return result


class TestSleepSort(unittest.TestCase):
    def test_sleep_sort(self):
        params = [
            {"params": [3, 1, 4, 1, 5, 9, 2, 6], "expected": [1, 1, 2, 3, 4, 5, 6, 9]},
            {"params": [0.1, 0.5, 0.2], "expected": [0.1, 0.2, 0.5]},
        ]
        # subTestでパラメータ化テスト。3.12で使えるようになったコンテキストマネージャも試す
        for p in params:
            with self.subTest(param=p):
                actual = sleep_sort(p["params"])
                self.assertEqual(p["expected"], actual)


if __name__ == "__main__":
    import unittest

    unittest.main()
