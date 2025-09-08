# docker/dockerfile:1
# NodeJSを使ったTypeScriptアプリケーションの実行環境を構築するDockerfile

ARG NODE_VERSION=24.7

# 共通イメージ
FROM node:${NODE_VERSION}-bookworm AS base
ENV PNPM_HOME=/home/node/.local/share/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate
WORKDIR /app
RUN chown node:node /app
USER node
COPY package*.json pnpm-lock.yaml* ./
COPY --chown=node:node ./src ./src
COPY --chown=node:node ./tsconfig.json ./tsconfig.json

# ビルド用(本番とそれ以外で分ける)
FROM base AS deps-prod
RUN pnpm install --prod --frozen-lockfile

FROM base AS build
RUN pnpm install
RUN pnpm build

# 開発環境
FROM base AS dev
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
CMD ["pnpm", "dev"]

# テスト環境
FROM base AS test
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
CMD ["pnpm", "test"]


# 本番環境
FROM base AS prod
COPY --from=build /app/dist ./dist
COPY --from=deps-prod /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]