# goで基本構文を書く

## まずインストール

もともとbrewでインストールしていた。
複数バージョンのgoをインストールするときは、既存のgoでinstallコマンドを使ってインストールできた。by 公式doc https://go.dev/doc/manage-install#Installing%20multiple%20Go%20versions

```zsh
go install golang.org/dl/go1.21.5@latest
```
で、インストール後でダウンロードが必要なようで
```zsh
go1.21.5 download
```
とすると、go1.21.5が見つからない。

GOPATHを設定していなかったので、インストール先が`$HOME/go`になっていた。
`$HOME/go/bin`にパスを通して、`go1.21.5`コマンドが使えるようにした。

