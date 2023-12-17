from functools import partialmethod


class Input:
    def __init__(self, description: str = "") -> None:
        self._description = description

    def do(self):
        return partialmethod(input, self._description)
