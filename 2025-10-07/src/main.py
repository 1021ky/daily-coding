from urllib.parse import urlparse, parse_qs
from unittest import TestCase


def parse_callback(s: str) -> dict:
    """
    s: 入力（URL 文字列 or HTML 断片）
    return: { key: value, ... }
    """
    parsed = urlparse(s)
    query = parse_qs(parsed.query)
    return {k: v[0] for k, v in query.items()}


if __name__ == "__main__":
    # テストケース
    test_cases = [
        ("https://example.com/callback?code=12345&state=xyz", {"code": "12345", "state": "xyz"}),
    ]

    for s, expected in test_cases:
        result = parse_callback(s)
        TestCase().assertEqual(result, expected, f"Test failed for input: {s}. Expected: {expected}, Got: {result}")
