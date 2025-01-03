# TypeScriptのプロジェクト初期化のおさらい

npm init + 必要なものインストール

```zsh
npm init -y && \
 npm install --save-dev \
  typescript @types/node \
  ts-node nodemon \
  tsconfig-paths \
  jest ts-jest @types/jest && \
 mkdir -p test lib && \
 npx tsc --init \
  --rootDir src \
  --outDir lib \
  --esModuleInterop \
  --resolveJsonModule \
  --lib es6,dom \
  --module commonjs
```

package.jsonに以下を追加して、npmのサブコマンドで実行できるようにする

```json
  "scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/interfaces/cli/index.ts",
    "test": "jest"
  },
```

package.jsonには以下も追加して、jestの設定ファイルへの参照を追加する
```json
  "ts-jest": {
    "tsConfig": "jest.config.ts"
  }
```

jest.config.tsには以下を書いてtest実行時にどのディレクトリをテスト対象とするかということと、テストコード内でのパスのエイリアスを設定する。


```typescript
jest.config.tsを作成

```typescript
module.exports = {
  "roots": [
    "."
  ],
  "testMatch": [
    "test/**/*.+(ts|tsx|js)",
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

tsconfig.configにはトランスパイル時のパスのエイリアス設定と、baseUrlを設定する。baseUrlは、モジュール名が相対パスでない場合にどこから探すかを指定するもの。

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

package.jsonではnodemon経由で実行するようにしているため、nodemonの設定をnodemon.jsonで行う。
どのディレクトリをwatchするのか、どの拡張子のファイルをwatchするのか、どのファイルをどんなコマンドで実行するのかを指定する。

```json
{
  "watch": ["src"],
  "ext": "ts",
  "exec": "ts-node src/interfaces/cli/index.ts"
}
```

ファイルを置くディレクトリは、以下のコマンドで作成する。

```zsh
ksanchu@KeisukenoMacBook-Air 2024-07-20 % mkdir -p src/application/{commands,services} src/domain/{entities,value-objects,services} src/infrastructure/{config,repositories,utils} src/interfaces/{cli,web}
ksanchu@KeisukenoMacBook-Air 2024-07-20 %
```
testディレクトリも作成しておく。

```zsh
ksanchu@KeisukenoMacBook-Air 2024-07-20 % mkdir -p test/application/{commands,services} test/domain/{entities,value-objects,services} test/infrastructure/{config,repositories,utils} test/interfaces/{cli,web}
```