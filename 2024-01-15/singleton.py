class _HogeClass:
    def __init__(self) -> None:
        self.hoge = "123"


def get_instance(instance=_HogeClass()):
    return instance
