# 2024-04-02

rye でpyproject.tomlを参照して、仮想環境を再構築。

rye sync -f をやってみるとエラー。

README.mdがなくてエラーになっていた。

README.mdファイルは必須らしい。
touch でREADME.mdを作成して再度 rye sync -f を実行すると、成功した。
