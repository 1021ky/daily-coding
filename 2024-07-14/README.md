# TypeScriptでDDD

## ディレクトリ構成



```
.
├── src/
│   ├── application/       # アプリケーション層: ユースケースやサービスを定義
│   │   ├── commands/      # CLIコマンドの実装
│   │   └── services/      # アプリケーションサービス
│   │
│   ├── domain/            # ドメイン層: エンティティや値オブジェクト、ドメインサービスを定義
│   │   ├── entities/      # エンティティ
│   │   ├── value-objects/ # 値オブジェクト
│   │   └── services/      # ドメインサービス
│   │
│   ├── infrastructure/    # インフラストラクチャ層: 外部との通信やデータの永続化を扱う
│   │   ├── config/        # 設定ファイル
│   │   ├── repositories/  # リポジトリの実装
│   │   └── utils/         # ユーティリティ関数やクラス
│   │
│   └── interfaces/        # インターフェース層: ユーザーインターフェースや外部APIのインターフェースを定義
│       ├── cli/           # CLI固有のコード
│       └── web/           # Web APIなどのインターフェース
│
├── test/                 # テストコード
│   ├── unit/              # 単体テスト
│   └── integration/       # 統合テスト
│
├── package.json
└── tsconfig.json
```