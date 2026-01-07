# memo

uvを使った初期化方法は複数ある。
その中で、srcレイアウトにしたい場合は、`uv init --package`か`uv init --lib`を使う。
今回はpackageを使った。

pytestを久しぶりにセットアップする。
testsディレクトリを作成し、その中にテストコードを置く。
src/project_name/配下に実装コードを置いている場合は、tests以下に実装コードを置く。
importはpyproject.tomlの`[tool.pytest.ini_options]`で`addopts = ["--import-mode=importlib"]`を指定すると、テストコードでsrcディレクトリ以下のコードをimportできる。
これが推奨されていた。
<https://docs.pytest.org/en/stable/explanation/goodpractices.html#test-discovery>
