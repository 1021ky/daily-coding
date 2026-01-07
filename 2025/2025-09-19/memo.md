# NextAuth（Auth.js）を試したときのメモ

## NextJSの手順どおり、アプリを作る

`pnpm create next-app@latest next-auth-sample --yes`
これでサンプルアプリができる。
pnpm devで起動できることを確認できる。
以降は作ったディレクトリで実行するために`cd next-auth-sample`を実行

## NextAuth（Auth.js）をインストール

<https://authjs.dev/getting-started/installation>に沿って。

`pnpm add next-auth@beta`
`npx auth secret`でシークレットを生成して、`.env.local`に設定する。

## NextAuthの設定

NextAuthは、認証用のエンドポイントをアプリケーションに作り、アプリケーション内ではそのエンドポイントを呼び出すことで認証を行う。
そのエンドポイントを作るために以下のようにファイルを作成する。

初期化処理をするauth.tsをsrc直下に作成する。
route.tsを`src/app/api/auth/[...nextauth]/route.ts`に作成する。

こうすることで、認証用のエンドポイントが`/api/auth/*`にできる。
ためしにpnpm devで起動して、ブラウザで`http://localhost:3000/api/auth/signin`にアクセスすると、サインイン画面が表示される。
(昨日一昨日試して期待通り動かなかったコードで同じことをすると、`Error: This action with HTTP GET is not supported by NextAuth.js`とサインインボタンを押下したときのエラーが表示された。そもそもエンドポイント作成に失敗していたようだ。）)

ちなみに他にもエンドポイントはあって、
<https://next-auth.js.org/getting-started/rest-api>
で確認できる。（v5beta版のは見つからなかったが、いずれ書かれるだろう）

セッションが切れたら自動でアップデートするように、`src/middleware.ts`で設定できる。

## 認証プロバイダの設定

auth.tsで認証プロバイダを設定する。
今回はGitHubを使う。

GitHubの場合は、事前にGitHubでGitHub Appsを作成して、Client IDとClient Secretを取得しておく。
callback URLはNextJSを使っているため、`http://localhost:3000/api/auth/callback/github`にする。
これは使うフレームワークによって値が変わるらしい。<https://authjs.dev/guides/configuring-github#creating-an-oauth-app-in-github>

## 認証用のUIを作成

UIからエンドポイントに認証処理をするには、signIn関数を使う。
サーバーサイドは、auth.tsで初期化したNextAuthオブジェクトのsignIn関数を使う。
クライアントサイドは、`next-auth/react`からimportして使う。

これを、今回は、メインページのヘッダーに設置した。

## middlewareで認証してなかったらリダイレクトする

middleware.tsで、認証してなかったらサインインページにリダイレクトするようにした。
ただし、そのままだとすべてのパスが適用範囲になり、認証処理のためのリダイレクト先にも遷移できなくなるため、`/api/auth/(.*)`は除外するようにした。
こういうときのためにconfigでmatcherが用意されているようだ。
