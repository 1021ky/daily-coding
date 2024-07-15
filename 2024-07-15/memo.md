# TypeScriptでTODOアプリを作ってみる

```zsh
npm init -y && \
 npm install --save-dev \
  typescript @types/node \
  ts-node nodemon \
  jest ts-jest @types/jest && \
 mkdir -p src/__tests__ lib && \
 npx tsc --init \
  --rootDir src \
  --outDir lib \
  --esModuleInterop \
  --resolveJsonModule \
  --lib es6,dom \
  --module commonjs
```

package.jsonに

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
を追記

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

tsconfig.configに以下を追記。

```typescript
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

ディレクトリ追加

```zsh
ksanchu@KeisukenoMacBook-Air test % mkdir -p application/{commands,services} domain/{entities,value-objects,services} infrastructure/{config,repositories,utils} interfaces/{cli,web}
ksanchu@KeisukenoMacBook-Air test %
```