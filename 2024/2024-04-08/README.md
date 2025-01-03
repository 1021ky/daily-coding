# 2024-04-08

* pydanticを使ってリクエストがバリデーションされるようにする
* BaseModelを継承したクラスでフィールドと型ヒントを定義
* BaseModelを継承したクラスをHTTPリクエストのペイロードの変数の型ヒントとして定義することで、リクエストのバリデーションを行うことができる
  * 違反しているリクエストがある場合はエラーメッセージが返される
* レスポンスの検証はルーティングを設定しているデコレータの引数にresponse_modelを指定することで行うことができる
  * レスポンスで指定されているフィールド以外にフィールドが含まれている場合は除外される
  * Schemaで定義されているもの以外は勝手に追加されないのは、意図しないレスポンスが実は返っていて参照されてしまうことがないのは、運用するときには安心できる
* `cd src && uvicorn orders.app:app --reload`で起動

## リクエストのバリデーション

curlで正常なリクエストを投げたとき

```
> curl -X 'POST' \
  'http://localhost:8000/orders' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "product": "string",
  "size": "small",
  "quantity": 1,
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "created": "2024-04-08T08:47:46.154Z",
  "status": "created"
}'
{"id":"ff0f1355-e821-4178-9567-550dec27a373","status":"deliverd","created":"2024-04-08T17:41:34.512680","order":[{"product":"cappuccino","size":"medium","quantity":1}]}
```

curlで不正なリクエストを投げたとき

```
> curl -X 'POST' \
  'http://localhost:8000/orders' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "product": "string",
  "size": "large",
  "quantity": 1,
  "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "created": "2024-04-08T08:47:46.154Z",
  "status": "created"
}'
{"detail":[{"type":"enum","loc":["body","size"],"msg":"Input should be 'small', 'medium' or 'big'","input":"large","ctx":{"expected":"'small', 'medium' or 'big'"}}]}%
```

エラーメッセージはデフォルトのメッセージが入る。