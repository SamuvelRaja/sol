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
  const body = await req.json();
  const { title, description } = body;

  if (!title || !description) {
    return NextResponse.json({ error: 'Title and description are required' }, { status: 400 });
  }

  const newTask = {
    id: Date.now(),
    title,
    description,
  };

  return NextResponse.json(newTask, { status: 201 });
}

// Handling other HTTP methods
export async function OPTIONS() {
  return NextResponse.json({}, { status: 204 });
}