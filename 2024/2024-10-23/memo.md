apiモードでrails newするならばbootstrapは不要だった。
railsが依存関係に設定しているライブラリは最小限の構成のときに必要なものだから、bootstrapは不要だったのだろう。

bundleでgroup指定は、bundle config set withで指定してからやる。
developmentは推奨になったようなので。

```zsh
ksanchu@KeisukenoMacBook-Air weblog % bundle install --with development
[DEPRECATED] The `--with` flag is deprecated because it relies on being remembered across bundler invocations, which bundler will no longer do in future versions. Instead please use `bundle config set with 'development'`, and stop using this flag
Bundle complete! 8 Gemfile dependencies, 81 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
ksanchu@KeisukenoMacBook-Air weblog % bundle config set with development
```

controller model作成
```zsh
ksanchu@KeisukenoMacBook-Air weblog % ./bin/rails generate model Entry title:string content:string user:references
      invoke  active_record
      create    db/migrate/20241022235530_create_entries.rb
      create    app/models/entry.rb
      invoke    test_unit
      create      test/models/entry_test.rb
      create      test/fixtures/entries.yml
ksanchu@KeisukenoMacBook-Air weblog % ./bin/rails generate model User name:string password:string is_enbaled:boolean
      invoke  active_record
      create    db/migrate/20241022235610_create_users.rb
      create    app/models/user.rb
      invoke    test_unit
      create      test/models/user_test.rb
      create      test/fixtures/users.yml
ksanchu@KeisukenoMacBook-Air weblog % ./bin/rails generate controller "user"
      create  app/controllers/user_controller.rb
      invoke  test_unit
      create    test/controllers/user_controller_test.rb
ksanchu@KeisukenoMacBook-Air weblog %
```