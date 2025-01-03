# memo

macでjavaを使うときのメモ

## javaのインストール

https://formulae.brew.sh/formula/openjdk を参考にした

```
brew install openjdk
```

ただインストールするだけでは、javacコマンドを実行しても

```
> java
The operation couldn’t be completed. Unable to locate a Java Runtime.
Please visit http://www.java.com for information on installing Java.
```

となった。公式サイトのとおり、以下のコマンドを実行することで解決した。

```
sudo ln -sfn $HOMEBREW_PREFIX/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```