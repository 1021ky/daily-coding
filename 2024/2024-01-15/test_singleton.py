import unittest


class TestSingleton(unittest.TestCase):
    def setUp(self) -> None:
        import singleton

        self._target = singleton.get_instance()
        return super().setUp()

    def tearDown(self) -> None:
        self._target = None
        return super().tearDown()

    def test_is_instance_unique(self):
        """singletonなのでインスタンスidは同じ"""
        import singleton

        another_instance = singleton.get_instance()
        expected = id(self._target)
        actual = id(another_instance)
        self.assertEqual(expected, actual)

        # インスタンス変数だが同一インスタンスを指しているはずなので値は同じ
        self._target.hoge = "333"
        expected = "333"
        actual = another_instance.hoge
        self.assertEqual(expected, actual)

    def test_is_instance_menber_unique(self):
        """インスタンス変数だが同一インスタンスを指しているはずなので値は同じ"""
        import singleton

        another_instance = singleton.get_instance()
        self._target.hoge = "333"
        expected = "333"
        actual = another_instance.hoge
        self.assertEqual(expected, actual)

    def test_not_unique_instance(self):
        """普通のクラスだとidが異なることを確認"""

        class Sample:
            ...

        a = Sample()
        b = Sample()
        self.assertNotEqual(id(a), id(b))
