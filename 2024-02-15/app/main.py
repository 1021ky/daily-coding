from fastapi import FastAPI
from movie.movie_endpoint import movie_router

app = FastAPI()

app.include_router(movie_router)
