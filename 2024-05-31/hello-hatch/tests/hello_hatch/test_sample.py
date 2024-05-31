from src.hello_hatch.sample import sample


def test_sample():
    actual = sample()
    expected = [1, 2, 3]
    assert expected == actual
