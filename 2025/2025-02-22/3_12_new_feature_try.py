"""3.12の新機能をためすコード
"""

"""変数の値を標準出力する
"""


def print_throgh_fstring(x) -> None:
    # f"{変数名=}"と記述すると、変数名とその値が出力される
    print(f"{x=}")


if __name__ == "__main__":
    hoge = "hoge"
    print_throgh_fstring(
        hoge
    )  # この書き方だと関数内では変数名はxなので x='hoge'となってしまうので注意
    x = "foo"
    print_throgh_fstring(x)
