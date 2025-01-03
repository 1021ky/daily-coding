# F#でテストコードを書く

以下でプロジェクトを作成する。ディレクトリ作成しておかなくても、xunitも`-o`オプションで指定したディレクトリに作成される。

* `dotnet new console --language=F# -o Prime`
* `dotnet new xunit --language=F# -o Prime.Test`