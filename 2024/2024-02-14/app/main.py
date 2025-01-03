from fastapi import FastAPI
from movie.movie_endpoint import router

app = FastAPI()

app.include_router(router)
