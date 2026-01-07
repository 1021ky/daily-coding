pythonの練習

GitHub Copilotです。

以下はあなたのリポジトリで遭遇した状況（待機ページに出る & や二重エンコード）をベースにした、短時間（〜30分）で解ける少しレベルアップした Python 問題です。

問題

HTML の断片または URL 文字列から、コールバック URL に含まれるクエリパラメータを堅牢に抽出する関数を実装してください。
入力文字列には次のような雑多な状態が混在します：
HTML エンティティとして &amp; が混入している（例: ...&amp;oauth_verifier=...）。
クエリ値が URL エンコードされている、あるいは二重にエンコードされている（例: %253A = : の二重エンコード）。
クエリキーが誤って amp; プレフィックス付きで解析されている（例: amp;oauth_verifier）。
入力がそのままコールバック URL（例: http://.../zaim/oauth/access_token?oauth_token=...&amp;oauth_verifier=...）であるか、あるいは HTML の中の <div class="callback">...URL...</div> のような断片である場合がある。
要件

関数 parse_callback(input: str) -> Dict[str,str] を実装する。
動作：
入力からコールバック対象の URL を取り出す（直接 URL が渡されればそのまま扱う）。
&amp; を適切に復元して & として扱う。
クエリキーに先頭 amp; が付いている場合は取り除く。
値は可能な限りデコードする（URL デコードを繰り返して二重エンコードを解消する。ただし無限ループにならないよう上限回数を設ける）。
最終的にキー→値の辞書を返す。
出力として最低限 oauth_token と oauth_verifier を取得できること。
制約

Python 3.8+
標準ライブラリのみ（urllib.parse, html などを使ってよい）
二重デコードは最大2回まで試す
例1（入力は URL）

期待される戻り値（一例）

例2（入力は HTML 断片）

例3（二重エンコード）

期待挙動：oauth_callback の値は一段デコードして <http://localhost:3000/zaim/access_token> に戻す（最大2段まで）。

実装ヒント

html モードの場合は簡単に正規表現で <div class="callback">([^<]+) を探すか、html.unescape を使う。
URL の query 部分は urllib.parse.urlparse / parse_qsl を使うと便利。
二重デコードはループで前回と変化がなくなるか上限回数に達するまで urllib.parse.unquote を繰り返す。
問題用スケルトン

時間は 30 分を想定。解答を出す場合は関数実装と簡単なテストケース（上の例）を添えてください。
