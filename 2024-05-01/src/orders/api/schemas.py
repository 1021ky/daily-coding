"""リクエストペイロードに対する検証モデル
"""

from datetime import datetime
from enum import Enum
from typing import Optional
from uuid import UUID

from pydantic import BaseModel, conint, field_validator, conlist


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
    delivered = "delivered"


class OrderItemSchema(BaseModel):
    """注文品のスキーマ"""

    product: str
    size: Size
    quantity: Optional[conint(ge=1, strict=True)] = (
        1  # conintは関数呼び出しを伴うためOptionalが必要
    )

    # validatorは非推奨になったのでfield_validatorに
    @field_validator("quantity")
    def quantity_non_nullable(cls, value):
        """quanntityがnullではないことを確認する"""
        assert value is not None, "quantity may not be None"
        return value


class CreateOrderSchema(BaseModel):
    order: conlist(OrderItemSchema, min_length=1)


class GetOrderSchema(BaseModel):
    id: UUID
    created: datetime
    status: Status
    order: conlist(OrderItemSchema, min_length=1)


class GetOrdersSchema(BaseModel):
    orders: list[GetOrderSchema]
