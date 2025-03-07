# メモ

## 実行

* `pnpm dev`

## フォント

### Why optimize fonts

<https://nextjs.org/learn/dashboard-app/optimizing-fonts-images>

フォントを適用するために、再度ロード処理が走り、文字の大きさや余白の変化、要素の移動が起こり得る。
nextjsでは、next/font moduleを使うと自動的に最適化してくれる。
ビルド時にフォントをダウンロードして他のアセットとともにホストされるようにすることで、追加でフォントダウンロードが発生しないようにする。

### Adding a primary font

実際にコードに適用してみる。
app/uiにfonts.tsを追加

どのsubsetを使うか、コードで指定する。subsetは利用するフォントの集合っぽい。

適用したいlayoutで適用する。/app/layout.tsx

### Practice: Adding a secondary font

組み込めるフォントは1つだけではなく、特定要素のために別のフォントを使えるようにすることができる。

フォントで指定できるオプションは、google fontのページでは、検索して、そのページで調べられる。
Lusitanaの場合、 <https://fonts.google.com/specimen/Lusitana?query=Lusitana>
RegularとBoldがある

Primary fontのときと同様に、fonts.tsに追加し、今回は、部分適用したいため、適用したいpage.tsxを修正する

ロゴもフォント指定ができる

```tsx
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p>
    </div>
  );
}

```

### Why optimize images?

Next.jsでは、静的コンテンツを返せる。
/publicディレクトリに置くと、そのままアクセスできるし、アプリケーション内でも参照できる。

素のHTMLならばimgタグで表示できるが、それだと画像表示のときのレイアウトシフトが発生する。デバイスごとの画像サイズ指定も必要になる。

ということで、Imageコンポーネントを使う。

Imageコンポーネントには、表示条件をclassNameで設定できる。
"hidden md:block"ならば、通常は非表示で、ミドルサイズ以上blockが適応→表示になる
"hidden md:hidden"ならば、通常は非表示で、ミドルサイズ以上だと、hiddenクラスが適応→非表示になる

## Chapter 4

### Nested routing

NextJSでコーディングするときは、コンポーネントはReact使う。
ルーティングはNextJSが管理する。

ルーティングは、ディレクトリの構成からパスごとにアクセスされるファイルが決まる。

### Creating the dashboard page

まずは、app/pages/dashboard/page.tsxを作成する。

```tsx
export default function Page() {
    return <p>Dashboard Page</p>;
}
```

これだけだと、<http://localhost:3000/dashboardにアクセスすると、Dashboard> Pageと表示されるのみ。
ただ、これで、page.tsxを表示させたいパスと一致するディレクトリにおけば表示されるようになることはわかった。

> By having a special name for page files, Next.js allows you to colocate UI components, test files, and other related code with your routes. Only the content inside the page file will be publicly accessible. For example, the /ui and /lib folders are colocated inside the /app folder along with your routes.

page.tsxとか特定の名前にすると、テストコードや関係するコードやテストコードもおける。ただし、公開されるのはpageファイルの中身だけ。

### Creating the dashboard layout

複数のページで共通のレイアウトを定義できる。

```dotnetcli
app/dashboard
├── layout.tsx
├── customers
├── invoices
└── page.tsx
```

このように定義していると、layout.tsxが、customers/page.tsxやinvoices/page.tsxに適用される。

<http://localhost:3000/dashboard> にアクセスするとサイドバーが表示された。

dashboard/customersでも同様にサイドバーが表示された。

> One benefit of using layouts in Next.js is that on navigation, only the page components update while the layout won't re-render. This is called partial rendering which preserves client-side React state in the layout when transitioning between pages.

Nextjsのレイアウト機能の強みとして、partial renderingがある。
これは、ページ全体の共通部分は1回だけ表示されて、それ以降は変わる部分だけ更新される。
これにより、ユーザーインターフェースの状態（入力や選択）が保持される。

Chapter3で修正した、app/layout.tsxはRoot Layoutと呼ばれる。アプリ全体で表示されるレイアウト。

> Any UI you add to the root layout will be shared across all pages in your application. You can use the root layout to modify your <html> and <body> tags, and add metadata (you'll learn more about metadata in a later chapter).

全体に適用したい、html bodyへの変更やメタデータの定義はここで行う。（Sentryとか、ログとか、Google Analyticsとか全体で使いたいものの初期化処理とかかな？）

### Navigating Between Pages

#### The <Link> component

ページ間リンクを作りたいとき、htmlならばaタグを使う。
そうすると、side menuでaタグを使ってリンクを書いて、メインの方のページ遷移をするときも、フルリフレッシュになる。

Linkコンポーネントを使うと、フルリフレッシュされなくなる。

#### Automatic code-splitting and prefetching

linkコンポーネントを使うと、自動的にコード分割とプリフェッチが行われる。
コード分割によって、ある部品でエラーが発生しても、他の部分は動作し続ける。
各ルート（例：/dashboardや/dashboard/invoices）のコードを個別に分割して読み込むため、初期ページロード時にアプリケーション全体のコードを読み込む必要がないのも、ReactのSPAとは異なる点。
プリフェッチは、ビューポート（画面上で見えている領域）に<Link>コンポーネントが現れると、そのリンク先のコードをバックグラウンドで自動的に読み込む機能。ページ遷移するためのクリックするときには読み込まれているので、ページ遷移がスムーズになる。

#### Pattern: Showing active links

import { usePathname } from 'next/navigation';

usePathname()で現在のパスを取得できる。
これは、アプリケーション内で表示されているページのパスを取得するために使う。
これがわかると、今表示されているページはサイドメニューの中ならばここだよ、ということがわかって、目的の操作や情報探索がしやすくなる。

今回はpath名をとって
import clsx from 'clsx';
をつかって、特定条件にあうところを、cssを操作するclsxを使って、表示を変えた。

#### local storage

<https://zenn.dev/hayato94087/books/94bf9a15a98684/viewer/g010rrcqqy7l5rh7#supabase-%E3%82%92%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E3%81%A7%E8%B5%B7%E5%8B%95> を参考にローカルでDBをたてていく。

チュートリアルには、Vercelのサービスを使っているが、今回はSupabaseを使う。

 4857  pnpm add supabase@latest
 4858  pnpm supabase start

を実行した
