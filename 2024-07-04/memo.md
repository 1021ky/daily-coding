https://typescript-jp.gitbook.io/deep-dive/nodejs

見ながら。

ディレクトリを作って

```
ksanchu@KeisukenoMacBook-Air 2024-07-04 % mkdir src
ksanchu@KeisukenoMacBook-Air 2024-07-04 % mv index.ts src
ksanchu@KeisukenoMacBook-Air 2024-07-04 % mkdir lib
```

ビルド
```

ksanchu@KeisukenoMacBook-Air 2024-07-04 % npm run build

> 2024-07-04@1.0.0 build
> tsc -p .

ksanchu@KeisukenoMacBook-Air 2024-07-04 %
```

実行
```
ksanchu@KeisukenoMacBook-Air 2024-07-04 % npm start

> 2024-07-04@1.0.0 start
> npm run build:live


> 2024-07-04@1.0.0 build:live
> nodemon --watch 'src/**/*.ts' --exec "ts-node" src/index.ts

[nodemon] 3.1.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*.ts
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node src/index.ts`
2 + 3 = 5
[nodemon] clean exit - waiting for changes before restart

^C
ksanchu@KeisukenoMacBook-Air 2024-07-04 %
```

トランスパイルされたファイルがlibにできている。

```
ksanchu@KeisukenoMacBook-Air 2024-07-04 % cat lib/index.js
"use strict";
function add_number(a, b) {
    return a + b;
}
console.log("2 + 3 = " + add_number(2, 3));
ksanchu@KeisukenoMacBook-Air 2024-07-04 %
```

