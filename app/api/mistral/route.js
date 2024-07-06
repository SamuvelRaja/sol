
import { NextResponse } from 'next/server';
import MistralClient from '@mistralai/mistralai';



// POST handler
export async function POST(req) {
  const data = await req.json();

  const apiKey = process.env.MISTRAL_KEY;

const client = new MistralClient(apiKey);

const chatResponse = await client.chat({
  model: 'mistral-large-latest',
  messages: [{role: 'user', content: data.message}],
});

console.log('Chat:', chatResponse.choices[0].message.content);
  

  return NextResponse.json({ reply:chatResponse.choices[0].message.content }, { status: 201 });
}