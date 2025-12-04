# daily-coding

## TypeScript プロジェクト初期化（ESLint + Airbnb 対応）

以下のワンライナーで、TypeScript・pnpm・nodenv 固定、Vitest、ESLint（TypeScript + Airbnb Base）までセットアップし、`pnpm build`/`pnpm run`/`pnpm test`/`pnpm lint` を使えるようにします。

```zsh
nodenv local 24.9.0 && \
pnpm init --init-package-manager --init-type=module && \
pnpm add -D typescript @types/node vitest && \
pnpm add -D eslint @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript-eslint eslint-plugin-import eslint-config-airbnb-base eslint-import-resolver-typescript && \
pnpm pkg set scripts.build="tsc -p tsconfig.json" scripts.run="pnpm build && node out/index.js" scripts.test="vitest" scripts.lint="eslint --ext .ts,.tsx,.js src" && \
mkdir -p src && \
printf 'console.log("Hello TypeScript")\n' > src/index.ts && \
printf '%s\n' \
'{' \
'  "compilerOptions": {' \
'    "target": "ES2022",' \
'    "module": "nodenext",' \
'    "moduleResolution": "nodenext",' \
'    "strict": true,' \
'    "esModuleInterop": true,' \
'    "skipLibCheck": true,' \
'    "resolveJsonModule": true,' \
'    "rootDir": "src",' \
'    "outDir": "out",' \
'    "types": ["vitest", "node"]' \
'  },' \
'  "include": ["src", "**/*.test.ts", "**/*.spec.ts"]' \
'}' > tsconfig.json && \
printf '%s\n' \
"// ESLint flat config for TypeScript + Airbnb Base" \
"import js from '@eslint/js';" \
"import { FlatCompat } from '@eslint/eslintrc';" \
"import tseslint from 'typescript-eslint';" \
"const compat = new FlatCompat({ baseDirectory: import.meta.dirname });" \
"export default [" \
"  js.configs.recommended," \
"  ...tseslint.configs.recommended," \
"  ...compat.config({ extends: ['airbnb-base'] })," \
"  {" \
"    languageOptions: {" \
"      parser: tseslint.parser," \
"      parserOptions: { tsconfigRootDir: import.meta.dirname, project: ['./tsconfig.json'] }," \
"    }," \
"    settings: { 'import/resolver': { typescript: true } }," \
"    rules: {}," \
"  }," \
"]" \
> eslint.config.js
```

### 使い方
- コンパイル: `pnpm build`
- 実行: `pnpm run`
- テスト: `pnpm test`
- Lint: `pnpm lint`
## テンプレートからの初期化（リポジトリ内テンプレート）

毎日の作業ディレクトリで以下を実行すると、テンプレートが展開されます。

```zsh
cd 2025-12-04
cp -R ../templates/typescript/* .
nodenv local $(cat .node-version)
pnpm install
pnpm build && pnpm test && pnpm lint && pnpm run
```

テンプレート構成（`templates/typescript/`）
- `package.json`: scripts（build/run/test/lint/typecheck）、`engines.node`は`.node-version`と一致（例: 24.9.0）
- `tsconfig.json`: `rootDir: src`、`outDir: out`、`types: ["vitest","node"]`
- `eslint.config.js`: FlatConfig + TypeScript + Airbnb Base（FlatCompat）、`import/resolver`にTypeScript
- `.node-version`: nodenvで固定するNodeバージョン（例: 24.9.0）
- `.npmrc`: `engine-strict=true`と`package-manager=pnpm`
- `.gitignore`: `out/`と`node_modules/`を除外
- `src/index.ts`: エントリポイント
- `test/example.test.ts`: Vitestのサンプル

これで`cp -R`→`pnpm install`の流れだけで、`pnpm build/run/test/lint`がそのまま使えます。

Vitest の型は `tsconfig.json` の `types` に追加済みなので、テストでも型補完が効きます。Airbnb Base のルールは FlatCompat 経由で適用しています（`eslint-import-resolver-typescript` により TypeScript の import 解決もサポート）。

練習帳

## やること候補

### 言語

* Rust
* C#
* Golang
* C++
* Python
* Java
* JavaScript
* TypeScript
* Ruby
* PHP
* Kotlin
* Clojure
* Scala
* Erlang

### 実装

* hello world
* stack
* queue
* linked list
* insert sort
* merge sort
* quick sort
* binary search
* hash table
* depth first search
* width first search
* binary tree
* cat
* fizzbuzz
* sort
* uniq
* wc

### プロジェクト作成時のワンライナーメモ

TypeScript

```
nodenv local 24.9.0 && \
pnpm init --init-package-manager --init-type=module && \
pnpm add -D typescript @types/node vitest eslint prettier && \
pnpm pkg set scripts.build="tsc -p tsconfig.json" scripts.start="pnpm build && node dist/index.js" scripts.test="vitest" scripts.lint="pnpm exec eslint --fix && pnpm exec prettier -w src" && \
mkdir -p src && \
printf 'console.log("Hello TypeScript")\n' > src/index.ts && \
printf '%s\n' \
'{' \
'  "compilerOptions": {' \
'    "target": "ES2022",' \
'    "module": "nodenext",' \
'    "moduleResolution": "nodenext",' \
'    "strict": true,' \
'    "esModuleInterop": true,' \
'    "skipLibCheck": true,' \
'    "resolveJsonModule": true,' \
'    "rootDir": "src",' \
'    "outDir": "dist",' \
'    "types": ["vitest", "node"]' \
'  },' \
'  "include": ["src", "**/*.test.ts", "**/*.spec.ts"]' \
'}' > tsconfig.json &&
printf '%s\n' \
'dist/*' > .gitignore
```