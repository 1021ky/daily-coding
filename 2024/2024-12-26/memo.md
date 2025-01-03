gemを何もインストールしていないクリーンなrubyを使いたいときは、bundle initで新規にGemfileを作成してそのディレクトリで使うgemを明示的に指定する。
あとで知ったけど、rubyに`--disable-gems`オプションというのもあるらしい。

daily-codingでrubyを書くときは、常にbundle initとbundle config set path './vendor/bundle'をセットで実行すると良さそう。
