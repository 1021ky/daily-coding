import logging
import time
import timeit
from typing import Callable


def measure_time(func: Callable) -> Callable:
    """引数で指定された関数を実行し処理時間を計測してログに出力する"""

    def wrapper(*args, **kwargs):
        logger = logging.getLogger(func.__name__)
        logger.info("start")
        start_time = time.time()
        func(*args, **kwargs)
        elapsed_time = time.time() - start_time  # 経過時間
        logger.info(f"end in {elapsed_time} sec")

    return wrapper


if __name__ == "__main__":
    logging.basicConfig(filename=f"{__file__}.log", level=logging.INFO)
    logger = logging.getLogger()
    logger.addHandler(logging.StreamHandler())

    @measure_time
    def sleep2():
        time.sleep(2)

    sleep2()

    def sleep3() -> None:
        time.sleep(3)

    elapsed_time = timeit.timeit(sleep3, number=1)
    logger.info(f"Elapsed time: {elapsed_time} seconds")
