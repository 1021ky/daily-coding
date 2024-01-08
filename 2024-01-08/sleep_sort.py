import threading
import time
import unittest


def wait_sleeping(target: int, result: list[int]):
    wait_duration = (
        1.0 / -target if target < 0 else target
    ) / 1000  # millisecond単位でスリープする
    time.sleep(wait_duration)
    result.append(target)


def sleep_sort(sort_param: list[int]) -> list[int]:
    thread_list = []
    result = []  # スレッド内での結果を入れるリスト
    for item in sort_param:
        thread_list.append(threading.Thread(target=wait_sleeping, args=(item, result)))
    for t in thread_list:
        t.start()
    for t in thread_list:
        t.join()
    return result


class Test(unittest.TestCase):
    def test_sleep_sort(self):
        param = [-1, 3, -10, 2, 40, 30]
        expected = [-10, -1, 2, 3, 30, 40]
        actual = sleep_sort(param)
        self.assertEqual(expected, actual)


if __name__ == "__main__":
    unittest.main()
