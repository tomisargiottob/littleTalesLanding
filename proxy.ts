import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/lib/i18n-config"

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip static files (images, fonts, etc.)
  if (pathname.match(/\.(jpg|jpeg|png|gif|svg|ico|webp|js|css|woff|woff2|ttf|eot)$/i)) {
    return
  }

  // Check if pathname already includes a locale
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )
  
  if (pathnameHasLocale) return

  // Redirect to default locale if no locale in pathname
  const locale = i18n.defaultLocale
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
}
