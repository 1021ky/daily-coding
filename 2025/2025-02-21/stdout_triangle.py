"""asciiで三角形となる文字列を出力する
"""


# asciiで三角形となる文字列を返す
def ascii_triangle(size: int = 3) -> str:
    triangle = ""
    for i in range(1, size + 1):
        triangle += "*" * i + "\n"
    return triangle


if __name__ == "__main__":
    print(ascii_triangle(3))
