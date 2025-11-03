class LFUCache:
    """Least Frequency Usage Cache"""

    def __init__(self, capacity: int) -> None:
        self._capacity = capacity
        self._data: dict[str, int] = {}
        self._counter: dict[str, int] = {}

    def push(self, key, value):
        if (v := self._data.get(key)) is not None:
            if v == value:
                self._counter[key] += 1
                return
            # 新しい値が入ったときは、別物として扱うため既存のものは消す
            del self._data[key]
            del self._counter[key]

        if len(self._data) >= self._capacity:
            i = min(self._counter, key=self._counter.get)
            del self._data[i]
            del self._counter[i]
        self._data[key] = value
        self._counter[key] = 1

    def get(self, key):
        if (v := self._data.get(key)) != None:
            self._counter[key] += 1
            return self._data[key]
        return -1

    @property
    def values(self):
        return list(self._data.values())
