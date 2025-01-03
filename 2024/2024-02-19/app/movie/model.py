from sqlalchemy import FLOAT, Column, Integer, String
from app.database import Base


class Movie(Base):
    __tablename__ = "movies"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, unique=True, index=True)
    year = Column(Integer)
    score = Column(FLOAT, default=1.0)
