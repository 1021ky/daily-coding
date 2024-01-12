import unittest


def main():
    import sys

    sys.path.append(".")
    loader = unittest.TestLoader()
    suite = loader.discover("sampletest")
    runner = unittest.runner.TextTestRunner()
    runner.verbosity = 2
    runner.run(suite)


if __name__ == "__main__":
    main()
