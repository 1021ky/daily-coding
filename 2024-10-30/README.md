# README

`bundle exec rails new . -n xclone -G -d postgresql` で初期化した。

rspecを使うには

```gemfile
  gem 'rspec-rails'
  gem 'factory_bot_rails'
```
を追記する

```zsh
ksanchu@KeisukenoMacBook-Air 2024-10-30 % bundle install
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...

...

Installing rspec-rails 7.0.1
Bundle complete! 21 Gemfile dependencies, 108 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
ksanchu@KeisukenoMacBook-Air 2024-10-30 % rails g rspec:install
      create  .rspec
      create  spec
      create  spec/spec_helper.rb
      create  spec/rails_helper.rb
ksanchu@KeisukenoMacBook-Air 2024-10-30 %
```

Controller作成でrspecファイルが生成された

```zsh
ksanchu@KeisukenoMacBook-Air 2024-10-30 % rails g controller User new
      create  app/controllers/user_controller.rb
       route  get "user/new"
      invoke  erb
      create    app/views/user
      create    app/views/user/new.html.erb
      invoke  rspec
      create    spec/requests/user_spec.rb
      create    spec/views/user
      create    spec/views/user/new.html.erb_spec.rb
      invoke  helper
      create    app/helpers/user_helper.rb
      invoke    rspec
      create      spec/helpers/user_helper_spec.rb
ksanchu@KeisukenoMacBook-Air 2024-10-30 %
```

Modelファイル作成

```zsh
ksanchu@KeisukenoMacBook-Air 2024-10-30 % rails g model User name:string email:string password_digest:string
      invoke  active_record
      create    db/migrate/20241029235152_create_users.rb
      create    app/models/user.rb
      invoke    rspec
      create      spec/models/user_spec.rb
      invoke      factory_bot
      create        spec/factories/users.rb
ksanchu@KeisukenoMacBook-Air 2024-10-30 %
```