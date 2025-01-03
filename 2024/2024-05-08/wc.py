import argparse


class WordCounterService:

    def count(self, target_words: str):
        return len(target_words)


class WordCounterUsecase:
    def __init__(self, service: WordCounterService) -> None:
        self._service = service

    def execute(self, target_file_path: str) -> int:
        words = ""
        with open(target_file_path) as f:
            words = "".join([line for line in f.readlines()])
        return self._service.count(words)


class WCCommandLineInterface:

    def __init__(self) -> None:
        self._parser = argparse.ArgumentParser(description="word counter")
        self._parser.add_argument("--input", type=str, help="Input file name")

    def run(self) -> str:
        args = self._parser.parse_args()
        return args.input

    def apply(self, message: str):
        print(message)


class WordCounterApp:
    def __init__(
        self, usecase: WordCounterUsecase, interface: WCCommandLineInterface
    ) -> None:
        self._usecase = usecase
        self._interface = interface

    def execute(self):
        input_data = self._interface.run()
        result = self._usecase.execute(input_data)
        self._interface.apply(str(result))


def main():
    cli = WCCommandLineInterface()
    service = WordCounterService()
    usecase = WordCounterUsecase(service)
    app = WordCounterApp(usecase=usecase, interface=cli)
    app.execute()


if __name__ == "__main__":
    main()
