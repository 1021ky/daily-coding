from sqlalchemy.orm import Session
from app.movie import model, schema


def create_movie(db: Session, movie: schema.MovieCreate):
    db_movie = model.Movie(**movie.dict())
    db.add(db_movie)
    db.commit()
    db.refresh(db_movie)
    return db_movie


def update_movie_score(db: Session, movie_id: int, score: float):
    db_movie = db.query(model.Movie).filter(model.Movie.id == movie_id).first()
    db_movie.score = score
    db.commit()
    db.refresh(db_movie)
    return db_movie
