"""アプリケーション層

データベースから映画を取得する具体的な操作を定義
"""

from model import Movie
from sqlalchemy.orm import Session


def get_all_movie(db: Session):
    movies = db.query(Movie).all()
    return movies
