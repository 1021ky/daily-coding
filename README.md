# daily-coding

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
pnpm add -D typescript @types/node vitest && \
pnpm pkg set scripts.build="tsc -p tsconfig.json" scripts.start="pnpm build && node out/index.js" scripts.test="vitest" && \
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
'}' > tsconfig.json &&
printf '%s\n' \
'out/*' > .gitignore
```