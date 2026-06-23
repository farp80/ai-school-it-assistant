from fastapi import FastAPI
from app.routers.test_ai import router

app = FastAPI()

app.include_router(router)


@app.get("/")
def root():
    return {
        "status": "healthy"
    }