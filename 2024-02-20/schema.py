"""プレゼンテーション層

HTTPリクエストとレスポンスの形状を定義
"""

from pydantic import BaseModel


class Movie(BaseModel):
    id: int
    title: str
    year: int
    score: float


class MovieResponse(BaseModel):
    movies: list[Movie]
    hit: int


class MovieRequest(BaseModel):
    title: str
    year: int
    score: float
