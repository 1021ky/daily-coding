from enum import Enum
from typing import Annotated

from pydantic import BaseModel, conint, conlist

from datetime import datetime
from uuid import UUID


class Size(Enum):
    small = "small"
    medium = "medium"
    big = "big"


class Status(Enum):
    created = "created"
    paid = "paid"
    progress = "progress"
    cancelled = "cancelled"
    dispatched = "dispatched"
    delivered = "deliverd"


class OrderItemSchema(BaseModel):
    product: str
    size: Size
    quantity: Annotated[int, conint(ge=1, strict=True)] | None = 1


class CreateOrderSchema(BaseModel):
    order: Annotated[list, conlist(OrderItemSchema, min_length=1)]


class GetOrderSchema(CreateOrderSchema):
    id: UUID
    created: datetime
    status: Status


class GetOrdersSchema(BaseModel):
    orders: list[GetOrderSchema]
