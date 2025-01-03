いつものをインストール
```
npm init -y && npm install typescript @types/node ts-node nodemon --save-dev && mkdir src lib & npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```
npm startでトランスパイル、実行をするためにpackage.jsonを編集
```
"scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts"
  },
```


テストしたいので、jestをインストール
```
npm install jest ts-jest @types/jest --save-dev
```

`memo` --save-devは、開発時のみに必要なパッケージをインストールするオプション。

https://kulshekhar.github.io/ts-jest/docs/getting-started/installation
ts-jestの設定ファイルを作成をドキュメントを見ながら。

```
npx ts-jest config:init
```

`memo` npxは、ローカルにインストールされたパッケージを実行するためのコマンド。
ts-jestの設定ファイルが作成される。

```
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
```

ができていた。

まだ動かせられてはいない。configにいろいろと書くことがあるようだ