from pydantic import BaseModel


class MovieBase(BaseModel):
    title: str
    year: int


class MovieCreate(MovieBase):
    pass


class MovieUpdate(BaseModel):
    score: float


class Movie(MovieBase):
    id: int
    score: float

    class Config:
        orm_mode = True
