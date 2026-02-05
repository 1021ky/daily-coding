"""
プログラミングコンテストチャレンジブック
大きさがN×Mの庭があります。そこに雨が降り、水溜りができました。水溜りは8近傍で隣接している場
合につながっているとみなします。全部でいくつの水溜りがあるでしょうか？（8近傍とは、次のWに対す
る*の部分を指します）
"""


def fill_in(field, width, height, x, y):
    set_cell(field, x, y, ".")

    x_targets = set([x - 1 if x - 1 >= 0 else x, x, x + 1 if x + 1 < width else x])
    y_targets = set([y - 1 if y - 1 >= 0 else y, y, y + 1 if y + 1 < height else y])
    for x_target in x_targets:
        for y_target in y_targets:
            if get_cell(field, x_target, y_target) == "W":
                fill_in(field, width, height, x_target, y_target)


def solve(field, width, height):
    count = 0
    # 全要素見て、水があったら塗りつぶす。塗りつぶした回数が水たまりの数
    for x_pos in range(width):
        for y_pos in range(height):
            if get_cell(x=x_pos, y=y_pos, field=field) == "W":
                # 塗りつぶして重複カウントしないようにする
                fill_in(field=field, width=width, height=height, x=x_pos, y=y_pos)
                count += 1
    return count


## fieldへのアクセスはどちらが1次元目と2次元目のどちらがx, yかややこしくなりがちなので、アクセサを作っておく


def get_cell(field, x, y):
    assert x >= 0 and x < len(field[0]) and y < len(field) and y >= 0
    return field[y][x]


def set_cell(field, x, y, value):
    assert x >= 0 and x < len(field[0]) and y < len(field) and y >= 0
    field[y][x] = value


def run(n, m, field):
    answer = solve(field=field, width=m, height=n)
    print(f"answer: {answer}")


if __name__ == "__main__":
    run(
        n=10,  # 縦幅
        m=12,  # 横幅
        field=[
            list("W........WW."),
            list(".WWW.....WWW"),
            list("....WW...WW."),
            list(".........WW."),
            list(".........W.."),
            list("..W......W.."),
            list(".W.W.....WW."),
            list("W.W.W.....W."),
            list(".W.W......W."),
            list("..W.......W."),
        ],
    )
