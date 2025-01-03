テストも含めてTypeScript開発で必要なものを一式インストールするコマンド
```zsh
npm init -y && npm install typescript @types/node ts-node nodemon jest ts-jest @types/jest --save-dev && mkdir src lib tests & npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
```

package.jsonを編集
```json
"scripts": {
    "start": "npm run build:live",
    "build": "tsc -p .",
    "build:live": "nodemon --watch 'src/**/*.ts' --exec \"ts-node\" src/index.ts",
    "test": "jest"
  },
```

ts-jestの設定はtsconfig.jsonとは別にするために、package.jsonに追記。
TypeScriptはトランスパイル時にヘルパー関数を作るが、デフォルトではインラインで書く。
importHelpersをtrueにすることで、トランスパイル時にヘルパー関数をtslibからimportするようになる。これによってバンドルサイズが削減されて、パフォーマンスが向上する可能性があるとのこと。
一方でtslibのバージョンが変わると、ヘルパー関数の内容が変わる可能性があるため、バージョンの互換性を気にする必要が出てくる。

```
  "jest": {
    "globals": {
      "ts-jest": {
        "tsConfig": "tsconfig.test.json",
      }
    }
  }
```

```

// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@App/*": ["src/*"],
      "lib/*": ["common/*"]
    }
  }
}
```