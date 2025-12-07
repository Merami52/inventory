import { getCurrentUser } from "@/lib/auth/server";
import { NextResponse, type NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  // Get current user from JWT token in cookies
  const user = await getCurrentUser();

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith("/dashboard") && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/auth/login";
    return NextResponse.redirect(url);
  }

  // If user is authenticated and tries to access auth pages, redirect to dashboard
  if (
    (request.nextUrl.pathname.startsWith("/auth/login") || 
     request.nextUrl.pathname.startsWith("/auth/sign-up")) && 
    user
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
}
