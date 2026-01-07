from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class ItemBase(BaseModel):
    name: str = Field(..., max_length=100)
    description: str | None = Field(default=None, max_length=1000)


class ItemCreate(ItemBase):
    pass


class ItemRead(ItemBase):
    id: int
    retrieved_at: datetime

    model_config = ConfigDict(from_attributes=True)


class ItemQueryParams(BaseModel):
    q: str | None = Field(default=None, max_length=50)
