// app/api/tasks/route.js

import { NextResponse } from 'next/server';

// GET handler
export async function GET() {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'This is task 1' },
    { id: 2, title: 'Task 2', description: 'This is task 2' },
  ];

  return NextResponse.json(tasks);
}

// POST handler
export async function POST(req) {
  



const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
  systemInstruction: "You are tasked with translating ReactJS documentation from English to Tamil. Your translations should be easy to read and use casual spoken language to better connect with readers.\n\nKey guidelines for translation:\n\n\t1.\tMaintain Technical Terms and Keywords: Do not translate technical terms, keywords, or names. These should remain in English to ensure clarity and consistency.\n\t2.\tFocus on Meaning and Context: Ensure that the translation conveys the meaning and context accurately. Prioritize readability and understanding over literal translation.\n\t3.\tUse Casual Spoken Language: The translations should feel natural and conversational, making the content accessible and engaging for the reader.\n\nExample:\n\nEnglish Text:\n“In React, components can be created as either classes or functions. Each component should ideally be focused on a single task.”\n\nTamil Translation:\n“React-இல், components-ஐ classes அல்லது functions ஆக உருவாக்கலாம். ஒவ்வொரு component-மும் ஒரு குறிப்பிட்ட task-ஐ மட்டுமே செய்ய வேண்டும்.”\n",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();

  const newTask = {
    id: Date.now(),
    title,
    description,
  };

  return NextResponse.json(result.response.text(), { status: 201 });
}

