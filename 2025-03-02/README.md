<https://go.dev/doc/tutorial/getting-started>

を見ながらGoを復習。

go モジュール初期化
`go mod init github.com/{ユーザー名}/{リポジトリ名}/{ディレクトリ名}`

参照したいライブラリがあるときは、
go mod tidy。

ソースコードで参照したいライブラリを書いて、
`go mod tidy`を実行すると、
`go.mod`と`go.sum`が更新される。
