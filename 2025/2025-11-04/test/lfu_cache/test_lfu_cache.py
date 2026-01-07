import pytest
from lfu_cache.lfu_cache import LFUCache


@pytest.mark.parametrize(
    "param, expected",
    [
        (
            {
                "capacity": 5,
                "data": {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5},
                "ref_keys": ["a", "b", "c", "d", "e", "a", "b", "c", "d"],
            },
            {"get_values": [1, 2, 3, 4, 5, 1, 2, 3, 4], "values": [1, 2, 3, 4, 6]},
        )
    ],
)
def test_eviction(param, expected):
    """LFUの払い出しができているかテスト

    capacity以上のデータが入ったときに最小の参照回数のデータが払い出されていることを確認する
    """
    # arrange
    cache = LFUCache(param["capacity"])
    for k, v in param["data"].items():
        cache.push(k, v)
    for key, expected_value in zip(param["ref_keys"], expected["get_values"]):
        assert expected_value == cache.get(key)
    # act
    cache.push("e", 6)
    # assert
    assert cache.values == expected["values"]


@pytest.mark.parametrize(
    "param, expected",
    [
        (
            {
                "capacity": 5,
                "data": {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5},
            },
            -1,
        ),
        (
            {
                "capacity": 5,
                "data": {},
            },
            -1,
        ),
    ],
)
def test_empty_cache(param, expected):
    """該当しないキーで参照したときのテスト"""
    # arrange
    cache = LFUCache(param["capacity"])
    for k, v in param["data"].items():
        cache.push(k, v)
    # act
    actual = cache.get("fooo")
    # assert
    assert actual == expected
