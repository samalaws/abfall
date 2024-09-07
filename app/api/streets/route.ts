import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'data/strasse.json'); // Adjust the path if needed
  const fileContents = await fs.readFile(filePath, 'utf8');
  const streets = JSON.parse(fileContents);
  return NextResponse.json(streets);
}