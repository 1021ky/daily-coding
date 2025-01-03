def hello_world():
    return "hello world"


def test_helloworld():
    expected = "hello world"
    actual = hello_world()
    assert expected == actual
