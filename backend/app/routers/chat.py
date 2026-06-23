from fastapi import APIRouter

from app.models.chat_models import ChatRequest
from app.services.chat_service import ask_ai

router = APIRouter()

@router.post("/chat")
def chat(request: ChatRequest):

    answer = ask_ai(
        request.question
    )

    return {
        "answer": answer
    }