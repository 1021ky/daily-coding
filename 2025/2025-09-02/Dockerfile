# syntax=docker/dockerfile:1

ARG NODE_VERSION=22
# ベースイメージ
FROM node:${NODE_VERSION}-bookworm-slim AS base
ENV PNPM_HOME=/usr/local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@9.7.0 --activate
WORKDIR /app

# 本番環境用に最適化されるイメージ
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile --prod

# テスト実行用のイメージ
FROM base AS dev
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile
COPY . .
CMD ["pnpm","dev"]

# TypeScriptをコンパイルするイメージ
FROM dev AS build
RUN pnpm build

# コンパイルされたJavaScriptを実行するためだけのイメージ
FROM node:${NODE_VERSION}-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json ./
CMD ["node","dist/index.js"]