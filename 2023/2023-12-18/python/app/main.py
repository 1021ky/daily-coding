from hello_world import HelloWorld
from output import Output


class Main:
    def __init__(self, content: HelloWorld, output: Output) -> None:
        self._content = content
        self._output = output

    def exec(self):
        content = self._content.formatted_value()
        self._output.do(content=content)


def main():
    content = HelloWorld(postfix="!")
    output = Output()
    m = Main(content=content, output=output)
    m.exec()


if __name__ == "__main__":
    main()
