import pytest
import stack


@pytest.fixture
def test_target() -> stack.Stack:
    return stack.Stack()


@pytest.fixture
def mock_is_empty_true(monkeypatch):
    def is_empty(self):
        return True

    monkeypatch.setattr(stack.Stack, "is_empty", is_empty)
    return stack.Stack()


@pytest.fixture
def mock_is_empty_false(monkeypatch):
    def is_empty(self):
        return False

    monkeypatch.setattr(stack.Stack, "is_empty", is_empty)
    return stack.Stack()


def test_pop_when_empty(mock_is_empty_true):
    """stackが空のときはpopでNoneが返る"""
    actual = mock_is_empty_true.pop()
    expected = None
    assert expected is actual


def test_pop_when_is_not_empty(test_target):
    """popは空でなければ最後に入ったものが返る"""
    test_target.push(1)
    test_target.push(2)
    actual = test_target.pop()
    expected = 2
    assert expected, actual
    actual = test_target.pop()
    expected = 1
    assert expected == actual


def test_push():
    """考え中"""
    pass


def test_top_when_empty(mock_is_empty_true):
    """stackが空のときはtopでNoneが返る"""
    actual = mock_is_empty_true.top()
    expected = None
    assert expected == actual


def test_top_when_is_not_empty(mock_is_empty_false):
    """topは空でなければ最後に入ったものが返る"""
    mock_is_empty_false.push(1)
    mock_is_empty_false.push(2)
    actual = mock_is_empty_false.top()
    expected = 2
    assert expected, actual
    actual = mock_is_empty_false.top()
    expected = 2
    assert expected == actual


def test_size():
    pass


def test_is_empty():
    pass
