import uuid
from datetime import UTC, datetime
from http import HTTPStatus
from uuid import UUID

from fastapi import HTTPException
from starlette import status
from starlette.responses import Response

from practice_micro_service.api.schemas import (
    CreateOrderSchema,
    GetOrderSchema,
    GetOrdersSchema,
)
from practice_micro_service.app import app

ORDERS = []


@app.get("/orders", response_model=GetOrdersSchema)
def get_orders():
    return {"orders": ORDERS}


@app.post("/orders", status_code=status.HTTP_201_CREATED, response_model=GetOrderSchema)
def create_order(order_details: CreateOrderSchema):
    order = order_details.dict()
    order["id"] = uuid.uuid4()
    order["created"] = datetime.now(tz=UTC)
    order["status"] = "created"
    ORDERS.append(order)
    return order


@app.get("/orders/{order_id}", response_model=GetOrderSchema)
def get_order(order_id: UUID):
    for order in ORDERS:
        if order["id"] == order_id:
            return order
    raise HTTPException(status_code=404, detail=f"Order with ID {order_id} no found")


@app.put("/orders/{order_id}")
def update_order(order_id: UUID, order_details: CreateOrderSchema):
    for order in ORDERS:
        if order["id"] == order_id:
            order.update(order_details.dict())
            return order
    raise HTTPException(status_code=404, detail=f"Order with ID {order_id} no found")


@app.delete("/orders/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_order(order_id: UUID):
    # 書籍と違って.valueは不要なよう
    # https://github.com/encode/starlette/blob/master/starlette/status.pyを参照
    for index, order in enumerate(ORDERS):
        if order["id"] == order_id:
            ORDERS.pop(index)
            return Response(statsu_code=HTTPStatus.HTTP_204_NO_CONTENT)
    raise HTTPException(status_code=404, detail=f"Order with ID {order_id} not found")


@app.post("/orders/{order_id}/cancel")
def cancel_order(order_id: UUID):
    for order in ORDERS:
        if order["id"] == order_id:
            order["status"] = "cancelled"
            return order
    raise HTTPException(status_code=404, detail=f"Order with ID {order_id} not found")


@app.post("/orders/{order_id}/pay")
def pay_order(order_id: UUID):
    for order in ORDERS:
        if order["id"] == order_id:
            order["status"] = "progress"
            return order
    raise HTTPException(status_code=404, detail=f"Order with ID {order_id} not found")
