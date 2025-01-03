from fastapi import Depends, FastAPI
from sqlalchemy.orm import Session
from app.movie import model, schema, service
from app import database

model.Base.metadata.create_all(bind=database.engine)

app = FastAPI()


def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.post("/movies/", response_model=schema.Movie)
def create_movie(movie: schema.MovieCreate, db: Session = Depends(get_db)):
    return service.create_movie_service(db=db, movie=movie)


@app.get("/movies/", response_model=list[schema.Movie])
def read_movies(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    movies = service.get_movies(db)
    return movies


@app.put("/movies/{movie_id}", response_model=schema.Movie)
def update_movie(
    movie_id: int, movie: schema.MovieUpdate, db: Session = Depends(get_db)
):
    return service.update_movie_score_service(
        db=db, movie_id=movie_id, score=movie.score
    )
