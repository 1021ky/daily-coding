from datetime import datetime
from uuid import UUID, uuid4

from starlette.responses import Response
from starlette import status

from orders.app import app
from orders.api.schemas import GetOrderSchema, CreateOrderSchema, GetOrdersSchema

# レスポンスで返す注文オブジェクト
ORDERS = []


@app.post("orders", status_code=status.HTTP_201_CREATED, response_model=GetOrderSchema)
def create_order(order_details: CreateOrderSchema):
    order = order_details.dict()
    order["id"] = uuid4()
    order["created"] = datetime.now()
    order["status"] = "created"
    ORDERS.append(order)
    return order


# response_modelを指定するとモデルに指定されているフィールド以外は返らない
@app.get("/orders", response_model=GetOrdersSchema)
def get_orders():
    return {"orders": [orders]}


@app.get("/orders/{order_id}", response_model=GetOrderSchema)
def get_order(order_id: UUID):
    return orders


@app.put("/orders/{order_id}")
def update_order(order_id: UUID, order_details: CreateOrderSchema):
    return orders


@app.delete("/orders/{order_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_order(order_id: UUID):
    # 書籍と違って.valueは不要なよう
    # https://github.com/encode/starlette/blob/master/starlette/status.pyを参照
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@app.post("/orders/{order_id}/cancel")
def cancel_order(order_id: UUID):
    return orders


@app.post("/orders/{order_id}/pay")
def pay_order(order_id: UUID):
    return orders
