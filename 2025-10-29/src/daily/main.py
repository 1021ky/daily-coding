import itertools

class LRUCache:
    """
    LRU (Least Recently Used) キャッシュの実装
    """
    def __init__(self, limit=5):
        self._limit = limit
        self._data = {}
        self._order_list = []

    def put(self, key, value):
        if key in self._order_list:
            self._order_list.remove(key)
            self._order_list.append(key)
            self._data[key] = value
        elif len(self._order_list) < self._limit:
            self._order_list.append(key)
            self._data[key] = value
        else:
            # limitいっぱいに入っていて、新しいkeyがきたとき
            remove_key = self._order_list[0]
            self._order_list = self._order_list[1:]
            self._order_list.append(key)
            del self._data[remove_key]
            self._data[key] = value

    def get(self, key):
        if not (key in self._order_list):
            return -1
        else:
            self._order_list.remove(key)
            self._order_list.append(key)
            return self._data[key]

def main():
    cache = LRUCache()
    cache.put('a', '123')
    cache.get('a')
    cache.put('b', '123')
    cache.get('b')
    cache.put('c', '123')
    cache.get('c')
    cache.put('d', '123')
    cache.get('d')
    cache.put('e', '123')

    cache.put('f', '123')
    assert cache.get('a') == -1
    assert cache.get('b') == '123'
    cache.put('g', '123')
    assert cache.get('c') == -1
    cache.put('h', '123')
    print(cache._data)


if __name__ == "__main__":
    main()