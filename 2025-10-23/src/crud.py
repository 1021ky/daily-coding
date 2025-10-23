from collections.abc import Sequence

from sqlalchemy.orm import Session

from . import models, schemas


def get_items(db: Session, query: str | None = None) -> Sequence[models.Item]:
    q = db.query(models.Item)
    if query:
        q = q.filter(models.Item.name.contains(query))
    return q.all()


def get_item(db: Session, item_id: int) -> models.Item | None:
    return db.query(models.Item).filter(models.Item.id == item_id).first()


def create_item(db: Session, item_in: schemas.ItemCreate) -> models.Item:
    item = models.Item(**item_in.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item
