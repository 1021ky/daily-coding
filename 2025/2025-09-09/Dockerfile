# syntax=docker/dockerfile:1
# fizzbuzzアプリケーションの実行環境となるイメージを定義する

ARG PYTHON_VERSION=3.13.7

FROM python:${PYTHON_VERSION}-bookworm AS base
COPY . .
RUN pip install --upgrade pip && pip install -r requirements.txt

FROM base AS dev
CMD ["python3", "src/main.py"]

FROM base AS test
CMD ["pytest", "test/"]

FROM python:${PYTHON_VERSION}-slim-bookworm AS prod
COPY /src /src
CMD ["python3", "src/main.py"]