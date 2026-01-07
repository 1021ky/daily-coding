from lucky_numbers import get_nth_lucky_number

"""4, 7のみからなる
10 桁の整数をラッキー数と呼ぶとして、小さい方から数えてN 番目のラッキー数を標準出力する。

Nは標準入力で与えられる。

ref https://atcoder.jp/contests/tessoku-book/tasks/tessoku_book_fc
"""


def main() -> None:
    nth = int(input())
    if nth < 1 or nth > 1024:
        print("Invalid input")
        return
    print(get_nth_lucky_number(nth))


if __name__ == "__main__":
    main()
