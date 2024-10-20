memo

```
 bundle exec rails new weblog
```
とapiモードじゃないとエラーになる。なんでだ？


```dotnetcli
         run  bundle lock --add-platform=x86_64-linux
Writing lockfile to /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-10-21/weblog/Gemfile.lock
         run  bundle lock --add-platform=aarch64-linux
Writing lockfile to /Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-10-21/weblog/Gemfile.lock
         run  bundle binstubs bundler
       rails  importmap:install
bin/rails aborted!
NoMethodError: undefined method `assets' for an instance of Rails::Application::Configuration (NoMethodError)
Did you mean?  asset_host
/Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-10-21/weblog/config/environments/development.rb:65:in `block in <main>'
/Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-10-21/weblog/config/environments/development.rb:3:in `<main>'
/Users/ksanchu/ghq/github.com/1021ky/daily-coding/2024-10-21/weblog/config/environment.rb:5:in `<main>'
Tasks: TOP => app:template => environment
(See full trace by running task with --trace)
       rails  turbo:install stimulus:install
Unrecognized command "turbo:install" (Rails::Command::UnrecognizedCommandError)
ksanchu@KeisukenoMacBook-Air 2024-10-21 %

```