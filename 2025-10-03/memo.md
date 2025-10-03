# Laravelをためす

<https://laravel.com/docs/12.xを見ながら。>

/bin/bash -c "$(curl -fsSL <https://php.new/install/mac/8.4>)"
でインストール

以降は、あわせてインストールされるcomposerでLaravelをインストールできるようだ。

laravel new example-appでプロジェクト作成。
フロントエンドに、react, vue, livewireを選べた。
NextJSはなかったから、合わせたいならば自分で設定する必要がありそう。
ユニットテストもPHPUnit, Pestから選べた。
PestはJestの派生で、BDDスタイルで書けるらしい。

今回はフロントエンドにReactを、ユニットテストはPHPUnitを選択。
package.jsonを見ると、フロントエンドのビルドツールにViteが使われていて、TypeScriptも使えるようになっている。

npm run buildでフロントエンドはビルドできた。
composer run devでサーバーが立ち上がる。
viteとLaravelのサーバーが立ち上がるようだ。
localhost:5173がviteのサーバー、localhost:8000がLaravelのサーバー。

<https://laravel.com/docs/12.x/lifecycle> で、リクエストのライフサイクルがわかる。こういうのは気になるから助かる。

php artisan route:list
でルーティングの一覧が見られる。

```zsh


❯ php artisan route:list

  GET|HEAD       / .................................. home
  GET|HEAD       storage/{path} ............ storage.local
  GET|HEAD       up ......................................

                                        Showing [3] routes

~/gh/g/1/daily-coding/2025-1/example-app main *8 ?3
❯

```

<http://localhost:8000/up> にアクセスすると、どうやらヘルスチェック用のエンドポイントらしい。

apiならば、railsのscaffoldみたいなやり方で作れるみたい。

```zsh
❯ php artisan install:api
sh: line 0: exec: composer: not found

   INFO  Published API routes file.

 One new database migration has been published. Would you like to run all pending database migrations? (yes/no) [yes]:
 > yes

   INFO  Nothing to migrate.

   INFO  API scaffolding installed. Please add the [Laravel\Sanctum\HasApiTokens] trait to your User model.

~/gh/g/1/daily-coding/2025-1/example-app main *8 ?3
❯
```

DBマイグレーションもするか聞かれる。

routes/api.phpにルーティングが追加される。

```zsh
❯ bat routes/api.php
───────┬────────────────────────────────────────────────────
       │ File: routes/api.php
───────┼────────────────────────────────────────────────────
   1   │ <?php
   2   │
   3   │ use Illuminate\Http\Request;
   4   │ use Illuminate\Support\Facades\Route;
   5   │
   6   │ Route::get('/user', function (Request $request) {
   7   │     return $request->user();
   8   │ })->middleware('auth:sanctum');
───────┴────────────────────────────────────────────────────
~/gh/g/1/daily-coding/2025-1/example-app main *8 ?3
❯
```

middleware('auth:sanctum')
とついているから、localhost:8000/api/userにアクセスしてもエラーになった。
