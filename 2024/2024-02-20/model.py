"""インフラストラクチャ層

データベースのテーブルを表すモデルを定義
"""

from sqlalchemy import Column, Integer, String, Float
from database import Base


class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    year = Column(Integer)
    score = Column(Float)
