import { NextRequest } from "next/server";

import createIntlMiddleware from "next-intl/middleware";

import { routing } from "./i18n/routing";

// Create the intl middleware once
const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const response = intlMiddleware(request);
  return response;
}

// Matcher: Exclude public/static/auth paths
export const config = {
  matcher: [
    "/((?!api|trpc|_next|_vercel|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
  ],
};
