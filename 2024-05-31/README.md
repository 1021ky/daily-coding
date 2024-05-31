# Hatchをためす

参考 https://gihyo.jp/article/2024/05/monthly-python-2405

## インストール

インストールは紹介されている通りでできた。

curl -Lo hatch-universal.pkg https://github.com/pypa/hatch/releases/latest/download/hatch-universal.pkg
$ sudo installer -pkg hatch-universal.pkg -target /


```zsh
ksanchu@KeisukenoMacBook-Air 2024-05-31 % hatch --version
Hatch, version 1.12.0
ksanchu@KeisukenoMacBook-Air 2024-05-31 %
```

バージョンを表示しようとすると、ダウンロード処理が少し走って表示された。

記事では1.11.1だったがバージョンは1.12.0になっていた。


## プロジェクトを作る

```zsh
ksanchu@KeisukenoMacBook-Air 2024-05-31 % hatch new
Missing required argument for the project name, use the -i/--interactive flag.
ksanchu@KeisukenoMacBook-Air 2024-05-31 % hatch new -i
Project name: hello-hatch
Description []: try hatch

hello-hatch
├── src
│   └── hello_hatch
│       ├── __about__.py
│       └── __init__.py
├── tests
│   └── __init__.py
├── LICENSE.txt
├── README.md
└── pyproject.toml
ksanchu@KeisukenoMacBook-Air 2024-05-31 %

```

`hatch new -i`でインタラクティブモードでプロジェクトを作成できた。

## hatchの機能

> Python環境をpyenvや公式のインストーラーなどで管理する必要がなく、Hatchだけで完結できます。

記事にあるとおりで

```zsh
ksanchu@KeisukenoMacBook-Air hello-hatch % hatch python
Usage: hatch python [OPTIONS] COMMAND [ARGS]...

Options:
  -h, --help  Show this message and exit.

Commands:
  find     Locate Python binaries
  install  Install Python distributions
  remove   Remove Python distributions
  show     Show the available Python distributions
  update   Update Python distributions
ksanchu@KeisukenoMacBook-Air hello-hatch % hatch python show
      Available
┏━━━━━━━━━━┳━━━━━━━━━┓
┃ Name     ┃ Version ┃
┡━━━━━━━━━━╇━━━━━━━━━┩
│ 3.8      │ 3.8.19  │
├──────────┼─────────┤
│ 3.9      │ 3.9.19  │
├──────────┼─────────┤
│ 3.10     │ 3.10.14 │
├──────────┼─────────┤
│ 3.11     │ 3.11.9  │
├──────────┼─────────┤
│ 3.12     │ 3.12.3  │
├──────────┼─────────┤
│ pypy2.7  │ 7.3.15  │
├──────────┼─────────┤
│ pypy3.9  │ 7.3.15  │
├──────────┼─────────┤
│ pypy3.10 │ 7.3.15  │
└──────────┴─────────┘
ksanchu@KeisukenoMacBook-Air hello-hatch %
```

こんな感じでインタプリタのインストールができる。
pyenvに比べると、jythonやanacondaのインストールはできないようだ。
けど、あまり困らないかもしれない。


```zsh
ksanchu@KeisukenoMacBook-Air hello-hatch % hatch test -c
======================================== test session starts =========================================
platform darwin -- Python 3.12.3, pytest-8.2.1, pluggy-1.5.0
rootdir: /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-05-31/hello-hatch
configfile: pyproject.toml
plugins: rerunfailures-14.0, mock-3.14.0, xdist-3.6.1
collected 1 item

tests/hello_hatch/test_sample.py .                                                             [100%]

========================================= 1 passed in 0.03s ==========================================
/Users/ksanchu/Library/Application Support/hatch/env/virtual/hello-hatch/afnmsgVl/hatch-test.py3.12/lib/python3.12/site-packages/coverage/inorout.py:503: CoverageWarning: Module hello_hatch was never imported. (module-not-imported)
  self.warn(f"Module {pkg} was never imported.", slug="module-not-imported")
Combined data file .coverage.KeisukenoMacBook-Air.local.22458.XtFAvYCx
Name                               Stmts   Miss Branch BrPart  Cover
--------------------------------------------------------------------
tests/__init__.py                      0      0      0      0   100%
tests/hello_hatch/__init__.py          0      0      0      0   100%
tests/hello_hatch/test_sample.py       5      0      0      0   100%
--------------------------------------------------------------------
TOTAL                                  5      0      0      0   100%
ksanchu@KeisukenoMacBook-Air hello-hatch %
```

pytestでテストも実行できる。
カバレッジもオプションつければ取ってくれる。

いいなあ。

フォーマッターはruff, 型ヒントチェックにmypyと基本、最初に用意したいことも入っている。

デファクトスタンダードとなっているライブラリを用意している感じがする。

## まとめ

hatchはプロジェクトの作成からテストまで一通りのことができる。
ディレクトリ構成も統一されるため、マイクロサービス化が進むときに皆が使っていると、ディレクトリ構成が統一されていいかもしれない。
あとは既存のプロジェクトをどれだけ移植しやすいかかな。
