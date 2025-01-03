"""FastAPIアプリケーションとしてのエントリポイント"""

from fastapi import FastAPI

app = FastAPI(debug=True)

from order.api import api
