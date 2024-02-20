"""
プレゼンテーション層

HTTPエンドポイントを定義
"""

from fastapi import APIRouter
from schema import MovieResponse
from service import get_movie as get_movie_from_service

router = APIRouter()


@router.get("/movie", response_model=MovieResponse)
async def get_movie():
    return get_movie_from_service()
