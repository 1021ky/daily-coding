# NextAuthを試したときのメモ

## NextAuthとは

認証用ライブラリ。
SSOの実装が楽になる。他にもOAuth2.0やメール認証などもサポートしている。
NextJSを使うことが前提の作り。

ドキュメントは、<https://next-auth.js.org/>

## 概要

ライブラリで設定できること

- 認証プロバイダ（GitHub/Google/Facebook/Twitter など）
- セッション管理方式（JWT/DB）
  - JWTの場合は、クライアント側でセッション情報を保持
  - DBの場合は、サーバー側でセッション情報を保持
- コールバック（JWT/Session/SignIn/Redirect など）

認証フロー(SSOで、JWTセッションの場合)

1. ユーザがサインインページにアクセス
2. 認証プロバイダを選択して認証
3. 認証プロバイダからアクセストークンを取得
4. NextAuthがアクセストークンを使ってユーザ情報を取得

認証情報の取得方法

- クライアント側
  - useSession() フックでセッション情報を取得
  - signIn() / signOut() 関数でログイン/ログアウト操作
- サーバー側
  - getServerSession(authOptions) 関数でセッション情報を取得

拡張できること

- コールバック: 認証フロー中に処理を追加できる
  - JWT: JWTトークンに独自情報を追加できる
  - Session: セッションオブジェクトに独自情報を追加できる
  - SignIn: サインイン時に処理を追加できる
  - Redirect: サインイン後のリダイレクト先を制御でき
- イベント: 認証処理後に発生するもので、イベント発生時に処理を追加できる
  - signIn: サインイン成功時
  - signOut: サインアウト時
  - createUser: ユーザ作成時
  - updateUser: ユーザ情報更新時
  - linkAccount: アカウント連携時
  - session: セッション更新時
- アダプタ:  ユーザー/アカウント/セッション/検証トークンをDBに永続化する層

## 実装

AppRouterを使い、SSO + JWTセッションで実装したときの一例

修正箇所

- 初期設定
  -　.env.local: 環境変数設定
  -　package.json: next-auth追加
- 初期処理
  - クライアント側
    -　app/layout.tsx: SessionProviderタグを追加して、全ページで認証情報を取得できるようにする
    -　app/page.tsx: signIn/signOut追加して、認証状態に応じた表示をする
  - サーバー側
    - app/api/auth/[...nextauth]/route.ts: 全ページで認証設定するときに修正
    - middleware.ts: 特定のパスでアクセスされたときの処理を追加する（ルート保護）
- 認証情報取得
  - クライアント側
    - app/protected/page.tsx: useSession()フックで認証情報を取得
  - サーバー側
    - app/api/protected/route.ts: getServerSession()関数で認証情報を取得
