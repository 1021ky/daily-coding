from datetime import datetime, timedelta
from time import sleep


def get_time_str(time=datetime.now()):
    return str(time)


if __name__ == "__main__":
    print(f"{get_time_str()}")
    print(f"{get_time_str(datetime.now() - timedelta(days=1))}")
    print(f"{get_time_str(datetime.now() - timedelta(days=2))}")
    sleep(3)
    print(
        f"{get_time_str()}"
    )  # -> 最初に呼び出したときと同じ。関数が評価されたときに値も評価されて、その一回のみ
