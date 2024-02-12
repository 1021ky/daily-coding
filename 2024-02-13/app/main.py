from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Movie(BaseModel):
    title: str
    year: int
    score: float


@app.get("/movie")
async def get_movie() -> Movie:
    return Movie(title="daily coding", year=2022, score=4.9)


@app.post("/movie")
async def post_movie(Movie):
    return Movie(title="daily coding", year=2022, score=4.9)
