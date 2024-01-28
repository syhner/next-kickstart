import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyRequestOrigin } from 'lucia';

// https://lucia-auth.com/guides/validate-session-cookies/nextjs-app
// CSRF protection is only handled by Next.js when using form actions. If you're using API routes, it must be implemented by yourself (see below)
export async function middleware(request: NextRequest): Promise<NextResponse> {
  if (request.method === 'GET') {
    return NextResponse.next();
  }
  const originHeader = request.headers.get('Origin');
  const hostHeader = request.headers.get('Host');
  if (
    !originHeader ||
    !hostHeader ||
    !verifyRequestOrigin(originHeader, [hostHeader])
  ) {
    return new NextResponse(null, { status: 403 });
  }
  return NextResponse.next();
}
