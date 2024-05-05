import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isPublic(path: string) {
    let publicUrls = ['/login', "/"];
    let isPublic = publicUrls.some((p) =>{
        return path === p;
    });
    return isPublic;
};

export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the `RequestCookies` API
  let isLoggedIn = request.cookies.get('loggedIn')?.value || false;
  if (isPublic(request.nextUrl.pathname)) {
    return NextResponse.next();
  }
  if(isLoggedIn !== 'true') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|next.svg|vercel.svg).*)',
    ],
  }