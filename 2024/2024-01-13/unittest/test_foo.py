from app.foo import foo

import unittest


class TestFoo(unittest.TestCase):
    def test_foo(self):
        expected = "foo"
        result = foo()
        self.assertEqual(expected, result)
