from sqlalchemy.orm import Session
from app.movie import model, usecase, schema


def get_movies(db: Session):
    return db.query(model.Movie).all()


def create_movie_service(db: Session, movie: schema.MovieCreate):
    return usecase.create_movie(db=db, movie=movie)


def update_movie_score_service(db: Session, movie_id: int, score: float):
    return usecase.update_movie_score(db=db, movie_id=movie_id, score=score)
