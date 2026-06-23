import { useState } from "react";
import { sendQuestion } from "../services/api";
import "./ChatWindow.css";

export default function ChatWindow() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!question.trim()) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendQuestion(question);
      setAnswer(result);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="chat-shell">
      <section className="chat-card">
        <div className="chat-header">
          <p className="chat-eyebrow">School IT support</p>
          <h1>AI School IT Assistant</h1>
          <p className="chat-subtitle">
            Ask a question about school technology, access, devices, or common IT issues.
          </p>
        </div>

        <form className="chat-form" onSubmit={handleSend}>
          <label htmlFor="question">Your question</label>
          <textarea
            id="question"
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Example: How do I reset my school password?"
            rows={5}
          />

          <button type="submit" disabled={isLoading || !question.trim()}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>

        <div className="chat-answer" aria-live="polite">
          {answer ? (
            <p>{answer}</p>
          ) : (
            <p className="chat-answer-placeholder">
              The assistant response will appear here.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
