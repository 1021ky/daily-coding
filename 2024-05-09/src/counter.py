from enum import Enum


class WordCounter:
    """単語数を数えるためのクラス"""

    def __init__(self, text: str) -> None:
        self._text = text

    def count(self) -> int:
        words = self._text.split()
        return len(words)


class LineCounter:
    """行数を数えるためのクラス"""

    def __init__(self, text: str) -> None:
        self._text = text

    def count(self) -> int:
        lines = self._text.split("\n")
        return len(lines)


class CharacterCounter:
    """文字数を数えるためのクラス"""

    def __init__(self, text: str) -> None:
        self._text = text

    def count(self) -> int:
        return len(self._text)


class CounterType(Enum):
    Word = 1
    Line = 2
    Character = 3


def create_counter(
    counter_type: CounterType, text: str
) -> WordCounter | LineCounter | CharacterCounter:
    match counter_type:
        case CounterType.Word:
            return WordCounter(text)
        case CounterType.Line:
            return LineCounter(text)
        case CounterType.Character:
            return CharacterCounter(text)
