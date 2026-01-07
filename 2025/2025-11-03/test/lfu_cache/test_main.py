import pytest
from lfu_cache.main import LFUCache

@pytest.mark.parametrize('param, expect', [
    ({'capacity': 5, 'data': {'a': 1,'b' : 2,'c': 3,'d': 4,'e': 5}, 'ref_keys': ['a', 'b', 'c', 'd', 'e','a', 'b', 'c', 'd']}, [1,2,3,4,6])
])
def test_pop(param, expect):
    capacity = param['capacity']
    data = param['data']
    ref_keys = param['ref_keys']
    cache = LFUCache(capacity)
    for k, v in data.items():
        cache.push(k, v)
    for ref_key in ref_keys:
        cache.pop(ref_key)
    cache.push('f', 6)
    assert cache.values() == expect