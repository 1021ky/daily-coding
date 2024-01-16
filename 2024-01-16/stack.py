from typing import Optional


class Stack:
    def __init__(self) -> None:
        self._data = []

    def is_empty(self) -> bool:
        return self.size() == 0

    def top(self) -> Optional[int]:
        if self.is_empty():
            return None
        return self._data[-1]

    def pop(self) -> Optional[int]:
        if self.is_empty():
            return None
        item = self.top()
        self._data = self._data[0:-1]
        return item

    def push(self, item):
        self._data.append(item)

    def size(self) -> int:
        return len(self._data)
