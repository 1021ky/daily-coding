from fastapi import FastAPI

app = FastAPI(debug=True)

from practice_micro_service.api import api  # noqa
