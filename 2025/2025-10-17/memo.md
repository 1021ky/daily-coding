# railsで郵便番号から住所を取得するAPIをつくる

## メモ

railsをバージョン指定でアプリを作る方法

使用したいバージョンのrailsをインストールしておく。
`gem install rails -v 'バージョン番号'`
以下ならば8.0.3と7.2.2.2の両方がインストールされている状態。

```zsh
❯ gem list

*** LOCAL GEMS ***

...

rails (8.0.3, 7.2.2.2)
rails-dom-testing (2.3.0)
rails-html-sanitizer (1.6.2)
railties (8.0.3, 7.2.2.2)
rainbow (3.1.1)

...
```

rails newするときにバージョンを指定する。

```zsh
rails _7.2.2.2_ new zip_lookup --api --database=sqlite3
```

確認

```zsh
daily-coding/2025-10-17 on  main [$?⇡] via 🐍 v3.13.7 (2025-09-10) via 💎 v3.4.7 on ☁️  (us-west-2) on ☁️  vaivailx@gmail.com
❯ cd zip_lookup

zip_lookup on  main [?] via 🐍 v3.13.7 (2025-09-10) via 💎 v3.4.7 on ☁️  (us-west-2) on ☁️  vaivailx@gmail.com
❯ rails s
=> Booting Puma
=> Rails 7.2.2.2 application starting in development
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 7.0.4 ("Romantic Warrior")
* Ruby version: ruby 3.4.7 (2025-10-08 revision 7a5688e2a2) +YJIT +PRISM [arm64-darwin25]
*  Min threads: 3
*  Max threads: 3
*  Environment: development
*          PID: 98758
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop

```

## sidekiqインストール

`bundle add sidekiq`
application.rbにsidekiqをJobのキューアダプタとして設定

```ruby
    class Application < Rails::Application
      ...
      config.active_job.queue_adapter = :sidekiq
    end
```
