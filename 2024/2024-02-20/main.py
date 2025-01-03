"""フレームワークとドライバ層

アプリケーションを起動し、ルーティングを設定。
"""

from fastapi import FastAPI
from endpoint import router

app = FastAPI()

app.include_router(router)
