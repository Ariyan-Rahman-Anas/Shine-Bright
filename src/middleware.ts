import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/verifyToken";

type RoutePattern = string | RegExp;

const privateRoutes: RoutePattern[] = [
  "/user/profile",
  "/user/account",
  "/user/orders",
  "/user/settings",
  /^\/user(\/.*)?$/,
];

const restrictedIfAuthenticated: RoutePattern[] = [
  "/login",
  "/registration",
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("taupenotch_access_token")?.value;
  console.log("Token from middleware: ", token);

  const isPrivateRoute = privateRoutes.some(route =>
    typeof route === "string" ? route === pathname : route.test(pathname)
  );

  const shouldRestrict = restrictedIfAuthenticated.some(route =>
    typeof route === "string" ? route === pathname : route.test(pathname)
  );

  const { isValid, decoded } = await verifyToken(token);
  const isAuthenticated = isValid && decoded?.id;

  if (isAuthenticated && shouldRestrict) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPrivateRoute && !isAuthenticated) {
    const response = NextResponse.redirect(new URL("/login", request.url));

    if (token && (!isValid || !decoded?.id)) {
      response.cookies.set("taupenotch_access_token", "", { path: "/", maxAge: -1 });
      response.cookies.set("taupenotch_refresh_token", "", { path: "/", maxAge: -1 });
    }

    return response;
  }

  return NextResponse.next();
}

// Match all routes except static files and API
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};