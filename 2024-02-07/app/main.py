from fastapi import FastAPI
from pydantic import BaseModel
import db

app = FastAPI()


DBNAME = "20240207.db"


@app.get("/")
async def root():
    return {"hello": "world"}


@app.get("/movie")
async def get_movie():
    connector = db.SQLiteConnector("DBNAME")
    table = db.MovieTable(connector.connection)
    return {"movies": table.select_all()}


class Movie(BaseModel):
    title: str
    year: int
    score: float


@app.post("/movie")
async def post_movie(movie: Movie):
    connector = db.SQLiteConnector("DBNAME")
    table = db.MovieTable(connector.connection)
    table.insert(year=movie.year, title=movie.title, score=movie.score)
    return {}
