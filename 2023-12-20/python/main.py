from dataclasses import dataclass


@dataclass
class Text:
    prefix: str
    suffix: str
    content: str


class TextFormatter:
    def do(self, text: Text) -> str:
        return f"{text.prefix} {text.content} {text.suffix}"


class Input:
    CONTENT_TEXT_PROMPT = "please input text: "
    PREFIX_TEXT_PROMPT = "please input text which you want to add as prefix: "
    POSTFIX_TEXT_PROMPT = "please input text which you want to add as suffix: "

    def do(self):
        prefix = input(self.PREFIX_TEXT_PROMPT)
        content = input(self.CONTENT_TEXT_PROMPT)
        suffix = input(self.POSTFIX_TEXT_PROMPT)
        return Text(prefix=prefix, suffix=suffix, content=content)


class Output:
    def do(self, message: str):
        print(message)


class Main:
    """実行用クラス"""

    def __init__(self, input: Input, output: Output, formatter: TextFormatter) -> None:
        self._input = Input()
        self._formatter = TextFormatter()
        self._output = Output()

    def execute(self):
        text = self._input.do()
        content = self._formatter.do(text)
        self._output.do(content)


def main():
    # 関数バージョン
    # input_text = input("please input text: ")
    # input_prefix = input("please input text which you want to add as prefix: ")
    # output = input_prefix + input_text
    # print(output)
    # クラスバージョン
    Main(input=Input(), formatter=TextFormatter(), output=Output()).execute()


if __name__ == "__main__":
    """
    > python main.py
    > please input text which you want to add as prefix: ***
    > please input text: hello world
    > please input text which you want to add as suffix: !!!
    > *** hello world !!!

    """
    main()
