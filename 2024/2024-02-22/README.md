# やったことメモ

GraphQLというものが存在しか知らなかったので、OpenなAPIのクライアントを作り、コールしてみた。

まず、 curlでスキーマを確認することができるらしい by copilot ので、それをやった。

```
 ~/gh/g/1/daily-coding/2024-02-22 | main ?3
> curl -s -X POST -H "Content-Type: application/json" --data '{ "query": "{ __schema { types { name } } }" }' https://countries.trevorblades.com | jq
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "Boolean"
        },
        {
          "name": "Continent"
        },

...

        {
          "name": "__Type"
        },
        {
          "name": "__TypeKind"
        }
      ]
    }
  }
}
 ~/gh/g/1/daily-coding/2024-02-22 | main ?3
>
```

対象は国の情報を返すAPI。

```
'{ "query": "{ __schema { types { name } } }" }'
```

このクエリを投げると、スキーマが返ってきた。

読み方

```
{
  "data": {
    "__schema": {
      "types": [
        {
          "name": "Boolean"
        },
```

rootのkeyは必ず`data`で、その中にクエリの結果が入っている。
__schemaはGraphQLでは特別なフィールドであり、APIの定義を返す。

typesは、定義の中のすべての型を一覧にして返す。

その後は、GraphQLでビルトインの型であるBooleanやID、Intなどと、APIで定義された型が返ってくる。
今回APIで定義された型は、Continentというものがあったというわけだ。

Inputと末尾についているのは、入力の引数として使用される。

さきほどの定義では"name": "StringQueryOperatorInput"とだけ定義されて具体的なパラメーターがわからなかったが、それを調べたい場合は、以下のようにクエリを投げる。

```
{
  __type(name: "CountryFilterInput") {
    name
    inputFields {
      name
      type {
        name
        kind
        ofType {
          name
          kind
        }
      }
    }
  }
}
```
typeフィールドはさらにname（型の名前）、kind（型の種類）、ofType（リストまたは非nullの場合の元の型）を持つようだ。

今日はいったんここまで。