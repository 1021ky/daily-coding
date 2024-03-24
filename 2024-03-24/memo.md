# F#でGUI

今回は Avaloiniauiを使ってF#でGUIを作ってみた。

https://funcui.avaloniaui.net/

最初はconsoleアプリケーションを作成して、その後にGUIを追加する。

```bash
dotnet new console --language=F#
```

以下のコマンドで必要なパッケージは入る。

```bash

dotnet add package Avalonia.Desktop --version 11.0.0
dotnet add package Avalonia.Themes.Fluent --version 11.0.0
dotnet add package Avalonia.FuncUI --version 1.0.0

```