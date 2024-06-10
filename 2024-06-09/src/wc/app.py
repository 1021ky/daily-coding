from argparse import ArgumentParser, FileType
from sys import stdin

parser = ArgumentParser(prog="wc", description="word, line, character, and byte count")

parser.add_argument("-c")
parser.add_argument("-l")
parser.add_argument("infile", nargs="?", type=FileType("r"), default=stdin)
parsed_args = parser.parse_args()

filecontent = parsed_args.infile.read()
print(len(filecontent))
