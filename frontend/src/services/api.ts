import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export async function sendQuestion(
  question: string
) {
  const response = await axios.post(
    `${API_URL}/chat`,
    { question }
  );

  return response.data.answer;
}
