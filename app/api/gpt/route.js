import { NextResponse } from 'next/server';
import axios from 'axios';

const GPT4V_ENDPOINT = "https://sol001.openai.azure.com/openai/deployments/gpt001/chat/completions?api-version=2024-02-15-preview";

export async function POST(req) {
  try {
    const data = await req.json();
    const apiKey = process.env.GPT4V_KEY;

    const headers = {
      "Content-Type": "application/json",
      "api-key": apiKey,
    };

    const payload = {
      "messages": [{ role: 'user', content: data.message }],
      "temperature": 0.7,
      "top_p": 0.95,
      "max_tokens": 800
    };

    const response = await axios.post(GPT4V_ENDPOINT, payload, { headers });
    console.log(response.data.choices,"rr")
    return NextResponse.json({ reply: response.data.choices[0].message.content }, { status: 201 });
  } catch (error) {
    console.error("Failed to make the request. Error:", error.data);
    return NextResponse.json({ error: 'Failed to make the request' }, { status: 500 });
  }
}