# syntax=docker/dockerfile:1
FROM python:3.13.7-bookworm AS base
WORKDIR /app
COPY . .
RUN pip install --upgrade pip && pip install -r requirements.txt

FROM python:3.13.7-slim-bookworm AS prod
WORKDIR /app
COPY --from=base /app /app
COPY --from=base /usr/local/lib/python3.13/site-packages /usr/local/lib/python3.13/site-packages
CMD ["python3", "src/main.py"]