const { NextResponse } = require('next/server');
import * as constants from 'config/constants';

export default function middleware(req) {
  const authCookie = req.cookies.get(constants.AUTH_KEY)?.value;
  const route = req.nextUrl.pathname;

  if (!authCookie) {
    if (isProtectedRoutes(route)) return NextResponse.redirect(new URL('/login', req.url));
    else return NextResponse.next();
  }

  const isLoggedIn = JSON.parse(authCookie)?.access;
  if (!isLoggedIn && isProtectedRoutes(route))
    return NextResponse.redirect(new URL('/login', req.url));
  else if (isLoggedIn && shouldRedirectToDashboard(route))
    return NextResponse.redirect(new URL('/dashboard', req.url));
}

const isProtectedRoutes = route => {
  const protectedRoutes = ['/profile', '/dashboard', '/settings'];
  return protectedRoutes.find(protectedRoute => protectedRoute === route);
};

const shouldRedirectToDashboard = route => {
  const routes = ['/login', '/signup', '/forgot-password', '/reset-password'];
  return routes.find(redirectRoute => redirectRoute === route);
};
