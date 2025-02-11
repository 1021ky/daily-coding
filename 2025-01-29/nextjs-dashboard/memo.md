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
