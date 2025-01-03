import nose2
from nose2 import loader
from nose2 import runner


def main():
    session = nose2.main.sessionClass()
    tl = loader.PluggableTestLoader(session)
    result = tl.discover(start_dir="unittest", pattern="test_*")
    result.wasSuccessful()


if __name__ == "__main__":
    main()
