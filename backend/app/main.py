from fastapi import FastAPI
from app.routers.chat import router as chat_router
from app.routers.test_ai import router as test_ai_router

app = FastAPI()

app.include_router(test_ai_router)
app.include_router(chat_router)


@app.get("/")
def root():
    return {
        "status": "healthy"
    }