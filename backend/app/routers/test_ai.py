from fastapi import APIRouter
from app.services.openai_service import test_openai

router = APIRouter()


@router.get("/test-ai")
def test_ai_route():
    return {
        "response": test_openai()
    }