from dataclasses import asdict
from fastapi import APIRouter
from pydantic import BaseModel
from fastapi import Depends


class MovieParameter(BaseModel):
    title: str
    year: int
    score: float


movie_router = APIRouter()


@movie_router.get("/movie")
async def get_movie(parameter: MovieParameter = Depends()):
    return dict(parameter)


@movie_router.post("/movie")
async def post_movie(parameter: MovieParameter):
    return {}
