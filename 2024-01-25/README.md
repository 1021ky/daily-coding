# pytest praywright tests

https://zenn.dev/yusukeiwaki/articles/8e2b159a8d90bf を参考にさせていただく

praywright installしないといけない。


allureとpytestの連携では、allure-pytestのインストールと、allureのインストールが必要。

allureのインストールは、
https://allurereport.org/docs/gettingstarted-installation/

```
brew install allure
```

テスト実行

実行時に--alluredir=hogeをつけると、hogeディレクトリにレポートが出力される。

```
pytest --alluredir=hoge
```

レポート表示


```
allure serve hoge
```