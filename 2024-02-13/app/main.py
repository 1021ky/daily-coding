from fastapi import FastAPI
import movie

app = FastAPI()


app.include_router(movie.router)
