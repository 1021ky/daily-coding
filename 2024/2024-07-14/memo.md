# TypeScriptで単体テスト書ける環境を構築できるようにする

## 初期化

以前からやっていたコマンドをあらためて整理。

```zsh
npm init -y && \
 npm install --save-dev \
  typescript @types/node \
  ts-node nodemon \
  jest ts-jest @types/jest && \
  tsconfig-paths &&
 mkdir -p src/__tests__ lib && \
 npx tsc --init \
  --rootDir src \
  --outDir lib \
  --esModuleInterop \
  --resolveJsonModule \
  --lib es6,dom \
  --module commonjs
```

npm initで初期化。
今はデフォルト値でいいので、-yオプションをつけている。
次にnpm install --save-devで開発用のモジュールをインストール
typescriptとnodeモジュールの型情報をインストールするために@types/nodeをインストール
ts-nodeはTypeScriptをNode.jsで実行するためのモジュール
nodemonはファイルの変更を監視して自動で再実行してくれるモジュール

あとは、ソースを置くためのディレクトリを作成
srcがソースコードを置くディレクトリ
__tests__がテストコードを置くディレクトリ
libがコンパイル後のソースコードを置くディレクトリ

npxはローカルにインストールされたモジュールを実行するためのコマンド。
pythonで言うと、venvで作った仮想環境において、python -m モジュールを実行するような感じか。
tscはTypeScriptのコンパイラ。
--initオプションでtsconfig.jsonを作成する。
オプションで各項目を設定。
--rootDirでソースコードのディレクトリを指定。
--outDirでトランスパイル後のファイルを出力するディレクトリを指定。

```
--outDir
Specify an output folder for all emitted files.
--lib
Specify a set of bundled library declaration files that describe the target runtime environment.
--esModuleInterop
Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility.
type: boolean
default: false
--module, -m
Specify what module code is generated.
one of: none, commonjs, amd, umd, system, es6/es2015, es2020, es2022, esnext, node16, nodenext, preserve
default: undefined
```

resolveJsonModuleは https://www.typescriptlang.org/ja/tsconfig/#resolveJsonModule で説明されていた。
JSONファイルをimportできるようにするためのオプション。

## テストを実行できるように設定をする

package.jsonを編集

```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/interfaces/cli/index.ts",
    "test": "jest"
  },
  "ts-jest": {
    "tsConfig": "jest.config.ts"
  }
```

scriptsはnpm run で実行できるコマンドを定義する。
ts-jestはts-jestの設定は、jest.config.tsを参照するように設定。

ts-jestの設定ファイルを作成

```
module.exports = {
  "roots": [
    "."
  ],
  "testMatch": [
    "src/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "moduleNameMapper": {
    "^@App/(.*)$": "<rootDir>/src/$1"
  },
}
```



tsconfig.jsonも修正。実行するときの設定を追加。

```json
    "baseUrl": "./", /* Specify the base directory to resolve non-relative module names. */
    "paths": {
      "@App/*": [
        "src/*",
      ],
      "lib/*": [
        "common/*"
      ]
    },
```

baseUrlはモジュールのベースディレクトリを指定する。これを指定することで、設定したベースURLからの絶対パスを使用してモジュールを探す。
pathsはモジュールのエイリアスを設定する。これがあると、@Appと書くとsrcディレクトリを指定したことになる。

## npm run startで動かしてみる

```
program
  .command('do')
  .description('Execute the do command')
  .option('-n, --name <name>', 'Name to greet')
  .action((options) => {
    doSomething(options.name);
  });

program.parse(process.argv);
```

これをindex.tsにcopilotに出力されたがままに書いていたが、
これは実行時エラーを起こすものだった。

パスは直してnpm run startを実行できるようにはなった。
importもエラーにはならずに動いている。
