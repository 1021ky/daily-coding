# C# hello world

## setup

```zsh
export DOTNET_FILE=dotnet-sdk-8.0.100-osx-x64.tar.gz
export DOTNET_ROOT=$(pwd)/.dotnet

mkdir -p "$DOTNET_ROOT" && tar zxf "$DOTNET_FILE" -C "$DOTNET_ROOT"

export PATH=$PATH:$DOTNET_ROOT
```
I refferd to https://learn.microsoft.com/ja-jp/dotnet/core/install/macos

download

```
curl https://download.visualstudio.microsoft.com/download/pr/ef083c06-7aee-4a4f-b18b-50c9a8990753/e206864e7910e81bbd9cb7e674ff1b4c/dotnet-sdk-8.0.101-osx-arm64.tar.gz -o ./dotnet-sdk-8.0.101-osx-x64.tar.gz
```

i run following command

```zsh
dotnet new console
```

then Program.cs is created.

```charp
Console.WriteLine("Hello, World!");
```

```
dotnet run
```
