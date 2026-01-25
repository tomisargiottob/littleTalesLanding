import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { i18n } from "@/lib/i18n-config"

// Get the preferred locale from Accept-Language header
function getLocale(request: NextRequest): string {
  // Try to get locale from cookie first (user preference)
  const cookieLocale = request.cookies.get('preferred-locale')?.value
  if (cookieLocale && i18n.locales.includes(cookieLocale as any)) {
    return cookieLocale
  }

  // Parse Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return i18n.defaultLocale

  // Parse languages and their quality values
  const languages = acceptLanguage
    .split(',')
    .map(lang => {
      const parts = lang.trim().split(';')
      const code = parts[0].toLowerCase()
      const quality = parts[1] ? parseFloat(parts[1].split('=')[1]) : 1.0
      return { code, quality }
    })
    .sort((a, b) => b.quality - a.quality)

  // Find the first matching locale
  for (const { code } of languages) {
    // Check exact match first (e.g., 'en-US' -> 'en')
    const exactMatch = i18n.locales.find(locale => code === locale)
    if (exactMatch) return exactMatch

    // Check language prefix match (e.g., 'en-US' -> 'en')
    const langCode = code.split('-')[0]
    const prefixMatch = i18n.locales.find(locale => locale === langCode)
    if (prefixMatch) return prefixMatch
  }

  return i18n.defaultLocale
}

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
  
  if (pathnameHasLocale) {
    // If pathname has a locale, verify it's valid and update cookie
    const currentLocale = pathname.split('/')[1]
    if (currentLocale && i18n.locales.includes(currentLocale as any)) {
      const response = NextResponse.next()
      response.cookies.set('preferred-locale', currentLocale, {
        maxAge: 365 * 24 * 60 * 60, // 1 year
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
      })
      return response
    }
    return
  }

  // Detect preferred locale and redirect
  const locale = getLocale(request)
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url)
  
  // Set a cookie to remember user's preference
  const response = NextResponse.redirect(redirectUrl)
  response.cookies.set('preferred-locale', locale, {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })
  
  return response
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next|api|favicon.ico|.*\\..*).*)",
  ],
}
