import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Renamed from middleware.ts → proxy.ts (Next.js 16 convention)
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect all /admin routes except /admin itself (login page)
  if (pathname.startsWith('/admin') && pathname !== '/admin') {
    const session = request.cookies.get('pc_admin_session');
    if (!session || session.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  const response = NextResponse.next();

  // ── Security Headers ────────────────────────────────────────────────────────
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');

  // CSP: allow unsafe-eval in dev so React error overlays work;
  // in production it is intentionally omitted.
  const isDev = process.env.NODE_ENV === 'development';
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      isDev
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        : "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob:",
      "connect-src 'self'",
      "frame-ancestors 'none'",
    ].join('; ')
  );

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
