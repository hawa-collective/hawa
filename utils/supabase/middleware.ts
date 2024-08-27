// middleware.ts
import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const createClient = (request: NextRequest) => {
  // Create an unmodified response
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  return { supabase, supabaseResponse };
};

// Protect routes by checking authentication status
export async function middleware(request: NextRequest) {
  const { supabase, supabaseResponse } = createClient(request);

  // List of protected routes
  const protectedRoutes = ['/products'];

  // Check if the request path is in the protected routes
  if (protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))) {
    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser();
    // console.log("User logged in: ", user);

    if (!user) {
      // Redirect to the login page if the user is not authenticated
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Continue to the requested page if authenticated or route is not protected
  return supabaseResponse;
}

// Apply middleware only to specific routes
export const config = {
  matcher: [
    '/dashboard/:path*', // Protect all paths under /dashboard
    '/profile',          // Protect /profile page
    // Add more specific routes as needed
  ],
};
