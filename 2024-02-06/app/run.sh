#/bin/sh
cd app
gunicorn -k uvicorn.workers.UvicornWorker  main:app
