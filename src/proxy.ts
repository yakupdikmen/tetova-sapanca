import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/utils/locale";

// Default locale (tr) is served unprefixed at "/", so requests without a
// /en or /ar prefix are rewritten internally to /tr while the URL bar and
// canonical stay clean. Prefixed requests pass through untouched.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const firstSegment = pathname.split("/")[1] ?? "";
  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals, the file-convention metadata routes
  // (opengraph-image has no extension so it needs an explicit name), and
  // any request path that has a file extension (covers everything in
  // public/: favicon.ico, robots.txt, sitemap.xml, *.svg, *.png, ...).
  matcher: ["/((?!api|_next/static|_next/image|opengraph-image|.*\\..*).*)"],
};
