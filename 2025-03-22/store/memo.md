
# getting_started

<https://guides.rubyonrails.org/getting_started.html>

## action text

以下のようにインストールすると、multimediaなコンテンツを扱うためのライブラリや、必要なDBテーブルも作ってくれる。

```zsh
❯ bin/rails action_text:install
Installing JavaScript dependencies
You must import the @rails/actiontext and trix JavaScript modules in your application entrypoint.
      create  app/assets/stylesheets/actiontext.css
      create  app/views/active_storage/blobs/_blob.html.erb
      create  app/views/layouts/action_text/contents/_content.html.erb
Ensure image_processing gem has been enabled so image uploads will work (remember to bundle!)
        gsub  Gemfile
       rails  railties:install:migrations FROM=active_storage,action_text
Copied migration 20250328001556_create_active_storage_tables.active_storage.rb from active_storage
Copied migration 20250328001557_create_action_text_tables.action_text.rb from action_text
      invoke  test_unit
      create    test/fixtures/action_text/rich_texts.yml
~/gh/g/1/daily-coding/2025-03-27/store main *3 !5 ?13
❯ bundle install
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
Fetching ffi 1.17.1 (arm64-darwin)
Fetching mini_magick 5.2.0
Installing mini_magick 5.2.0
Installing ffi 1.17.1 (arm64-darwin)
Fetching ruby-vips 2.2.3
Installing ruby-vips 2.2.3
Fetching image_processing 1.14.0
Installing image_processing 1.14.0
Bundle complete! 23 Gemfile dependencies, 122 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
1 installed gem you directly depend on is looking for funding.
  Run `bundle fund` for details
~/gh/g/1/daily-coding/2025-03-27/store main *3 !6 ?13
❯ bin/rails db:migrate
== 20250328001556 CreateActiveStorageTables: migrating ========================
-- create_table(:active_storage_blobs, {:id=>:primary_key})
   -> 0.0028s
-- create_table(:active_storage_attachments, {:id=>:primary_key})
   -> 0.0023s
-- create_table(:active_storage_variant_records, {:id=>:primary_key})
   -> 0.0027s
== 20250328001556 CreateActiveStorageTables: migrated (0.0079s) ===============

== 20250328001557 CreateActionTextTables: migrating ===========================
-- create_table(:action_text_rich_texts, {:id=>:primary_key})
   -> 0.0067s
== 20250328001557 CreateActionTextTables: migrated (0.0067s) ==================

~/gh/g/1/daily-coding/2025-03-27/store main *3 !7 ?13
❯
```

get statedだからかもしれないが、Product Modelにhas_rich_textってなんか違和感。
ProductTextみたいなモデルを作って、has_one :product_textみたいな感じにしないと、表示に関することがビジネスロジックも入るModelで記述されて、表示の変更にProductモデルを変更することになるのが、責務を分けるという観点からは良くないと思う。

## action textで追加でやったこと

get started通りにやったが、表示がおかしい。
chatgptいわく、このファイルがあるはずという。
 app/javascript/packs/application.js
しかし、ない。

どうやらそもそも必要なコマンドを叩けてないようだった。
webpackerかimportmapを使って設定が必要とのこと。
rails8はimportmapがデフォルトで入っているので、importmapを使うことにする。

```zsh
bin/rails importmap:install
bundle install --quiet
```

config/importmap.rbと、application.js作成されたため、修正。

せっかくなので、issueを立てた。
<https://github.com/rails/rails/issues/54831>

## その他

GitHub用のCIは.github以下で用意されている。
rubocop/brakemanで静的解析できるようできるようになっている。
kamalでデプロイもできる。
本当に開発で必要なものが揃っている。

## ActiveRecordBasics

<https://guides.rubyonrails.org/active_record_basics.html>

を見ながら。

ジェネレーターの基本コマンド。

```zsh
~/gh/g/1/daily-coding/2025-04-08/store main *7 !4 ?12
❯ bin/rails generate migration CreateBooks title:string author:string

      invoke  active_record
      create    db/migrate/20250408144753_create_books.rb
~/gh/g/1/daily-coding/2025-04-08/store main *7 !4 ?12
❯ bundle exec rails db:migrate
== 20250408144753 CreateBooks: migrating ======================================
-- create_table(:books)
   -> 0.0018s
== 20250408144753 CreateBooks: migrated (0.0018s) =============================

~/gh/g/1/daily-coding/2025-04-08/store main *7 !5 ?12
❯
```
