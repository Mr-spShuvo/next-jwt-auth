const { NextResponse } = require('next/server');

export default function middleware(req) {
  const isLoggedIn = req.cookies.get('access-token')?.value;

  const route = req.nextUrl.pathname;
  if (!isLoggedIn && isProtectedRoutes(route)) {
    return NextResponse.redirect(new URL('/login', req.url));
  } else if (isLoggedIn && isRedirectToDashboard(route)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  } else {
    return NextResponse.next();
  }
}

const isProtectedRoutes = route => {
  const protectedRoutes = ['/profile', '/dashboard', '/settings'];
  return protectedRoutes.find(protectedRoute => protectedRoute === route);
};

const isRedirectToDashboard = route => {
  const routes = ['/login', '/signup', '/forgot-password', '/reset-password'];
  return routes.find(redirectRoute => redirectRoute === route);
};
