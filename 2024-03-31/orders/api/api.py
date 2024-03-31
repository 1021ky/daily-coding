from datetime import datetime
from http import HTTPStatus
from uuid import UUID

from starlette.responses import Response
from starlette import status

from orders.app import app

# レスポンスで返す注文オブジェクト
orders = {
    "id": "ff0f1355-e821-4178-9567-550dec27a373",
    "status": "deliverd",
    "created": datetime.now(),
    "order": [{"product": "cappuccino", "size": "medium", "quantity": 1}],
}


@app.post("orders", status_code=status.HTTP_201_CREATED)
def create_order():
    return orders


@app.get("/orders/{order_id}")
def get_order(order_id: UUID):
    return orders


@app.put("/orders/{order_id}")
def update_order(order_id: UUID):
    return orders


@app.delete("/orders/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_order(order_id: UUID):
    return Response(status_code=HTTPStatus.NO_CONTENT.value)


@app.post("/orders/{order_id}/cancel")
def update_order(order_id: UUID):
    return orders


@app.post("/orders/{order_id}/pay")
def pay_order(order_id: UUID):
    return orders
