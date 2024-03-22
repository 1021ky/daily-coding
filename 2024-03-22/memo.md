# F#でテストコードを書く

参照 https://learn.microsoft.com/ja-jp/dotnet/core/testing/unit-testing-fsharp-with-dotnet-test

+ テストコードを置くディレクトリを作る(テスト対象ディレクトリ.Testとするのが一般的？)
  + mkdir Prime.Test
+ テストコード用のプロジェクトに移動する
+ `dotnet new xunit -lang "F#"` でテストコード用のプロジェクトを作る
+ テストコード用のプロジェクトが作られたら、テスト対象のプロジェクトを参照する
  + `dotnet add reference ../Prime/Prime.fsproj`
+ テストコードを書く（テスト対象のモジュールを参照するには、`open モジュール名` で参照する）
+ テストコードを実行する
  + `dotnet test`