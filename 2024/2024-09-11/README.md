# rbenvとbundlerを使って初期化して、hello worldを出力する

* rbenvで使用するrubyを設定
* bundlerでgemを管理するための初期化をする
* hello worldを出力する on rails

```zsh
ksanchu@KeisukenoMacBook-Air 2024-09-11 % rbenv local 3.3.4
ksanchu@KeisukenoMacBook-Air 2024-09-11 % bundle init
Writing new Gemfile to /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-09-11/Gemfile
ksanchu@KeisukenoMacBook-Air 2024-09-11 % bundle add rails
Fetching gem metadata from https://rubygems.org/...........
Resolving dependencies...
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...

...

ksanchu@KeisukenoMacBook-Air 2024-09-11 % bundle exec rails new helloworld
      create
      create  README.md

...

      remove  config/initializers/new_framework_defaults_7_2.rb
         run  bundle install --quiet
         run  bundle lock --add-platform=x86_64-linux
Writing lockfile to /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-09-11/helloworld/Gemfile.lock
         run  bundle lock --add-platform=aarch64-linux
Writing lockfile to /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-09-11/helloworld/Gemfile.lock
         run  bundle binstubs bundler
       rails  importmap:install
/Users/ksanchu/.rbenv/versions/3.3.4/lib/ruby/3.3.0/bundled_gems.rb:74:in `require': cannot load such file -- bootsnap/setup (LoadError)
        from /Users/ksanchu/.rbenv/versions/3.3.4/lib/ruby/3.3.0/bundled_gems.rb:74:in `block (2 levels) in replace_require'
        from /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-09-11/helloworld/config/boot.rb:4:in `<top (required)>'
        from bin/rails:3:in `require_relative'
        from bin/rails:3:in `<main>'
       rails  turbo:install stimulus:install
/Users/ksanchu/.rbenv/versions/3.3.4/lib/ruby/3.3.0/bundled_gems.rb:74:in `require': cannot load such file -- bootsnap/setup (LoadError)
        from /Users/ksanchu/.rbenv/versions/3.3.4/lib/ruby/3.3.0/bundled_gems.rb:74:in `block (2 levels) in replace_require'
        from /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-09-11/helloworld/config/boot.rb:4:in `<top (required)>'
        from bin/rails:3:in `require_relative'
        from bin/rails:3:in `<main>'
ksanchu@KeisukenoMacBook-Air 2024-09-11 %
```

bootsnapとやらがない。
https://github.com/Shopify/bootsnap か。

```zsh
ksanchu@KeisukenoMacBook-Air 2024-09-11 % bundle add bootsnap
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
Fetching gem metadata from https://rubygems.org/.........
Resolving dependencies...
ksanchu@KeisukenoMacBook-Air 2024-09-11 %
```

リトライ。

```zsh
       rails  importmap:install
Unrecognized command "importmap:install" (Rails::Command::UnrecognizedCommandError)
       rails  turbo:install stimulus:install
Unrecognized command "turbo:install" (Rails::Command::UnrecognizedCommandError)
```

またエラー。

続きはあした。と思ってコミットしようとしたら

```zsh
ksanchu@KeisukenoMacBook-Air 2024-09-11 % git add .
error: '2024-09-11/helloworld/' does not have a commit checked out
fatal: adding files failed
ksanchu@KeisukenoMacBook-Air 2024-09-11 % rm
```

rails new {日付}でやるといいかも。