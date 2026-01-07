from collections.abc import Sequence

from fastapi import Depends, FastAPI, HTTPException, status
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import engine, get_db
from .logic import add_retrieved_timestamp


models.Base.metadata.create_all(bind=engine)

app = FastAPI()


@app.get("/")
async def read_root():
    return {"Hello": "World"}


@app.get("/items", response_model=list[schemas.ItemRead])
async def list_items(
    params: schemas.ItemQueryParams = Depends(),
    db: Session = Depends(get_db),
) -> Sequence[schemas.ItemRead]:
    items = crud.get_items(db, query=params.q)
    return [_to_item_read(item) for item in items]


@app.get("/items/{item_id}", response_model=schemas.ItemRead)
async def read_item(
    item_id: int,
    params: schemas.ItemQueryParams = Depends(),
    db: Session = Depends(get_db),
) -> schemas.ItemRead:
    item = crud.get_item(db, item_id=item_id)
    if not item:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")

    if params.q and params.q not in (item.name or ""):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Item not found")

    return _to_item_read(item)


@app.post("/items", response_model=schemas.ItemRead, status_code=status.HTTP_201_CREATED)
async def create_item(
    item_in: schemas.ItemCreate,
    db: Session = Depends(get_db),
) -> schemas.ItemRead:
    item = crud.create_item(db, item_in=item_in)
    return _to_item_read(item)


def _to_item_read(item: models.Item) -> schemas.ItemRead:
    item_data = {column.key: getattr(item, column.key) for column in models.Item.__table__.columns}
    enriched = add_retrieved_timestamp(item_data)
    return schemas.ItemRead.model_validate(enriched)