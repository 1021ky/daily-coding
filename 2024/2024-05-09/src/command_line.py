from argparse import ArgumentParser


class CommandLineInterface:

    def __init__(self) -> None:
        # TODO ArgumentParserのインスタンスを受け取るようにすれば、テストはしやすくなるが、このクラスの責務は？
        self._parser = ArgumentParser(prog="counter like wc command")
        self._parser.add_argument(
            "--file", type=str, help="Input file path", required=True
        )

    def get_input(self) -> str:
        args = self._parser.parse_args()
        filepath = args.input
        return filepath

    def print(self, text: str) -> None:
        print(text)
