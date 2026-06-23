import axios from "axios";

export async function sendQuestion(
  question: string
) {

  const response = await axios.post(
    "http://localhost:8000/chat",
    {
      question
    }
  );

  return response.data.answer;
}