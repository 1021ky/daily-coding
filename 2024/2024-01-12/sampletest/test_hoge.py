import unittest
import hoge


class TestHoge(unittest.TestCase):
    def test_hoge(self):
        expected = "hoge"
        actual = hoge.hoge()
        self.assertEqual(expected, actual)
