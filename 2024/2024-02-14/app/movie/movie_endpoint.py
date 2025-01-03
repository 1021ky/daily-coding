from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class Movie(BaseModel):
    title: str
    year: int
    score: float


@router.get("/movie")
async def get_movie() -> Movie:
    return Movie(title="daily coding", year=2024, score=5.0)


@router.post("/movie")
async def post_movie() -> Movie:
    return Movie(title="daily coding", year=2024, score=5.0)
