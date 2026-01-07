# syntax=docker/dockerfile:1
# アプリケーションの実行環境となるイメージを定義する
## 設計メモ ##
# イメージの構成は以下の4段階に分ける
# 1. ベースイメージ
# 2. 依存関係のインストール
# 3. 開発環境の構築
# 4. 本番環境の構築
# マルチステージングビルドの分け方の方針
# - ベースイメージを共通化し、各ステージで必要なファイルのみをコピーする
# - 本番は不要なファイルは含めず、イメージサイズを最小限に抑えたいため、ビルド用のステージを分ける

ARG NODE_VERSION=24.7.0
ARG PNPM_VERSION=10.15.1

# ベースイメージ
FROM node:${NODE_VERSION}-bookworm AS base
RUN <<EOF
   useradd -s /bin/bash -m node
   getent group docker || groupadd docker
   usermod -aG docker node
EOF
ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
WORKDIR /app
RUN chown node:node /app
USER node
COPY package*.json pnpm-lock.yaml* ./
COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json .
RUN pnpm install --frozen-lockfile

# 本番環境で必要なパッケージを入れたイメージ
FROM base AS build
RUN pnpm build

FROM base AS deps
RUN pnpm install --frozen-lockfile --prod

# 開発環境
FROM base AS dev
CMD ["pnpm", "dev"]

# テスト実行環境
FROM base AS test
CMD ["pnpm", "test"]

# 本番実行環境
FROM node:${NODE_VERSION}-bookworm-slim AS prod
WORKDIR /app
COPY --chown=node:node --from=deps /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist
CMD ["node", "dist/index.js"]
