from app.services.openai_service import client

def ask_ai(question:str):

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {
                "role":"user",
                "content":question
            }
        ]
    )

    return response.choices[0].message.content