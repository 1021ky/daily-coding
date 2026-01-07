"""PEP701のSyntactic formalization of f-stringをためす
"""


def run() -> None:
    # print('3.11までは: f"""{f'''{f"{1+1}"}'''}""" ')
    print(
        "3.11まではf-stringのネストはできたが、同じクォートをネストに使えなかった。"
        'f"""{f\'\'\'{f"{1+1}"}\'\'\'}"""'
    )
    print(f"""{f'''{f"{1+1}"}'''}""")
    print('3.12までできなかったf-stringの表記: f"{f"{f"{f"{1+3}"}"}"}" ')
    print(f"{f"{f"{f"{1+3}"}"}"}")


if __name__ == "__main__":
    run()
