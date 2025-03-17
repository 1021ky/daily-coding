<https://guides.rubyonrails.org/getting_started.html>
を見ながら、rails new helloworld した。

具体的には、

```zsh
bundle exec rails new helloworld -G --database=sqlite3 --api
```

これだと、データベースはsqlite3なので、簡単に構築できる。

ActiveModelのerrorsにはいつ、データが入るのかわかっていなかった。
インスタンスを作っていて、saveを呼び出したときに、エラーが入るとわかった。
クラスインスタンスに入るわけではない。

```zsh
helloworld(dev)> product = Product.new
=> #<Product:0x00000001350194c0 id: nil, name: nil, created_at: nil, updated_at: nil>
helloworld(dev)> product.save
=> false
helloworld(dev)> product.errors
=> #<ActiveModel::Errors [#<ActiveModel::Error attribute=name, type=blank, options={}>]>
helloworld(dev)> product.full_messages
(helloworld):14:in `<main>': undefined method `full_messages' for an instance of Product (NoMethodError)
helloworld(dev)> product.errors.full_messages
=> ["Name can't be blank"]
helloworld(dev)>

```
