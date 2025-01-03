# TypeScriptでファイル読み込みをためす

https://typescript-jp.gitbook.io/deep-dive/nodejs
を再度見ながら

```zsh
npm init -y
npm install typescript --save-dev
npm install @types/node --save-dev
npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs
mkdir src lib
npm install ts-node --save-dev
npm install nodemon --save-dev
```

