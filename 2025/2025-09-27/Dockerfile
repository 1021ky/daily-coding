# syntax=docker/dockerfile:1
ARG NODE_VERSION=24.7.0

 FROM node:${NODE_VERSION}-bookworm AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm
RUN pnpm install

FROM builder AS build
WORKDIR /app
COPY . .
RUN pnpm build

FROM node:${NODE_VERSION}-bookworm AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./
CMD ["node", "-r", "module-alias/register", "dist/index.js"]