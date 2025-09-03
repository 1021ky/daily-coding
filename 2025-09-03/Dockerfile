# syntax=docker/dockerfile:1
# syntaxは https://docs.docker.jp/engine/reference/builder.html#builder-official-releases に`常にバージョン 1 構文syntax の最新 安定版stable リリースを示し、かつ、バージョン 1 のリリース・サイクルにおける「マイナー」と「パッチ」更新の両方も受け取れるから`とあるため、それに沿う

# common definition
ARG NODE_VERSION=22

# ベースイメージ
FROM node:${NODE_VERSION}-bookworm-slim AS base
ENV PNPM_HOME=/usr/local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@9.7.0 --activate
WORKDIR /app

# 実行に必要なパッケージを入れたイメージ
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --prod

# 開発で実行するとき用のイメージ
FROM base AS dev
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile
COPY . .
CMD ["pnpm","dev"]

# 本番のコードをビルドするイメージ
FROM dev AS build
RUN pnpm build
RUN find ./dist -type f -name '*.test.js' -delete

# コンパイルされたJavaScriptを実行するためだけのイメージ
FROM node:${NODE_VERSION}-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./
CMD ["node","dist/index.js"]