class LFUCache:

    def __init__(self, capacity: int):
        self._capacity = capacity
        self._data_list = {}
        self._counter = {}

    def push(self, key, value):
        if len(self._data_list) >= self._capacity:
            self._remove_least_frequency_data()
        self._data_list[key] = value
        self._counter[key] = 1

    def pop(self, key):
        if (value := self._data_list.get(key)) != None:
            self._counter[key] += 1
            return value
        else:
            return -1

    def values(self):
        return list(self._data_list.values())

    def _remove_least_frequency_data(self):
        least_frequent_key = min(self._counter, key=self._counter.get)
        del self._data_list[least_frequent_key]
        del self._counter[least_frequent_key]