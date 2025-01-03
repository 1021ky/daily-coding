from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


class Movie(BaseModel):
    title: str
    year: int
    score: float


@router.get("/movie")
async def get_movie() -> Movie:
    return Movie(title="daily coding", year=2022, score=4.9)


@router.post("/movie")
async def post_movie(Movie):
    return Movie(title="daily coding", year=2022, score=4.9)
