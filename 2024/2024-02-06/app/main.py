from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"root": "hello world"}


if __name__ == "__main__":
    pass
