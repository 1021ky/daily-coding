from argparse import ArgumentParser, FileType, BooleanOptionalAction, Namespace
from dataclasses import dataclass
from io import FileIO
from sys import stdin
from typing import Any


@dataclass(frozen=True)
class InputFile:
    """入力となるファイル"""

    content: str


class ByteContent:
    """1バイトを長さの1単位として扱うファイルの内容"""

    def __init__(self, content: str) -> None:
        self._content = bytes(content, encoding="utf-8")

    def __len__(self) -> int:
        return len(self._content)


class CharacterContent:
    """1文字を長さの1単位として扱うファイルの内容"""

    def __init__(self, content: str) -> None:
        self._content = content

    def __len__(self) -> int:
        return len(self._content)


class WordContent:
    """1文字を長さの1単位として扱うファイルの内容"""

    def __init__(self, content: str) -> None:
        self._content = content.split()

    def __len__(self) -> int:
        return len(self._content)


class LineContent:
    """1行を長さの1単位として扱うファイルの内容"""

    def __init__(self, content: str) -> None:
        self._content = content.split("\n")

    def __len__(self) -> int:
        return len(self._content)


class WCArgument:
    counts_characters: bool
    counts_lines: bool
    counts_words: bool
    input_file: FileIO


class WCArgumentParser:
    """wcコマンド用の引数のパーサー"""

    def __init__(self, parser: ArgumentParser) -> None:
        self._parser = parser

    def _add_counts_characters_arg(self) -> None:
        self._parser.add_argument(
            "-c",
            help="The number of bytes in each input file is written to the standard output.",
            type=bool,
            dest="counts_characters",
            action=BooleanOptionalAction,
        )

    def _add_counts_lines_arg(self) -> None:
        self._parser.add_argument(
            "-l",
            help="The number of lines in each input file is written to the standard output.",
            type=bool,
            dest="counts_lines",
            action=BooleanOptionalAction,
        )

    def _add_counts_words_arg(self) -> None:
        self._parser.add_argument(
            "-w",
            help="The number of words in each input file is written to the standard output.",
            type=bool,
            dest="counts_words",
            action=BooleanOptionalAction,
        )

    def _add_input_file_arg(self) -> None:
        self._parser.add_argument("input_file", type=FileType("r"), default=stdin)

    @property
    def _added_args(self) -> ArgumentParser:
        self._add_counts_characters_arg()
        self._add_counts_words_arg()
        self._add_counts_lines_arg()
        self._add_input_file_arg()
        return self._parser

    def parse_args(self, namespace: Any) -> Namespace:
        return self._added_args.parse_args(namespace=namespace)


def make_parser():
    parser = WCArgumentParser(
        ArgumentParser(prog="wc", description="word, line, character, and byte count")
    )
    return parser


parser = make_parser()
argument = WCArgument()
parsed_args = parser.parse_args(argument)
file_content = argument.input_file.read()

print(len(file_content))
