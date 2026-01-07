from datetime import datetime, timezone
from typing import Mapping, Any


def add_retrieved_timestamp(data: Mapping[str, Any]) -> dict[str, Any]:
    enriched = dict(data)
    enriched["retrieved_at"] = datetime.now(timezone.utc)
    return enriched
