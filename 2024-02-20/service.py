"""アプリケーション層

ビジネスロジックを実行し、データベースからデータを取得してレスポンスを作成する
"""

from usecase import get_all_movie
from database import SessionLocal
from schema import MovieResponse, Movie


def get_movie():
    with SessionLocal() as session:
        movies = get_all_movie(session)
    response_movie = [
        Movie(id=m.id, title=m.title, year=m.year, score=m.score) for m in movies
    ]
    return MovieResponse(movies=response_movie, hit=len(response_movie))
