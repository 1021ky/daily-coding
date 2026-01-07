import sys
import os

"""テスト実行時にsrcディレクトリをパスに追加する"""

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "../src")))
