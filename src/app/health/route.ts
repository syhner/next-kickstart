import { ServerRuntime } from 'next';
import { NextResponse } from 'next/server';

export const runtime: ServerRuntime = 'edge';

export async function GET(request: Request) {
  return NextResponse.json({ status: 'ok' });
}
