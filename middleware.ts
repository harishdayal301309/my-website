import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value;

  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Also protect write operations to API routes
  if (request.nextUrl.pathname.startsWith('/api/') && request.method !== 'GET') {
    // Exclude login and contact endpoints
    if (!request.nextUrl.pathname.startsWith('/api/auth') && !request.nextUrl.pathname.startsWith('/api/contact')) {
      if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }
      try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        await jwtVerify(token, secret);
        return NextResponse.next();
      } catch (error) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
