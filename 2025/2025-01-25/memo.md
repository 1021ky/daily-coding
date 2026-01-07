# TypeScript環境セットアップ

```zsh
nodenv local 22.13.1
npm install pnpm
pnpm add typescript
pnpm add --save-dev @types/node
pnpm tsc --init
pnpm add --save-dev jest
pnpm create jest # jestの設定ファイル
pnpm add --save-dev ts-jest # TypeScript用のJestプリセット
pnpm add --save-dev @jest/globals # TypeScript用の型
pnpm add ts-node --save-dev # Jestのテスト実行時にTypeScriptを実行するため
```
