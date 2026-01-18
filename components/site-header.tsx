"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BookText } from "lucide-react"
import type { Locale } from "@/lib/i18n-config"
import { LanguageSwitcher } from "./language-switcher"

interface SiteHeaderProps {
  locale: Locale
  messages: {
    "nav.home": string
    "nav.blog": string
    "nav.features": string
    "nav.pricing": string
    "hero.cta": string
  }
}

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const pathname = usePathname()

  const navigation = [
    { name: messages["nav.home"], href: `/${locale}` },
    { name: messages["nav.blog"], href: `/${locale}/blog` },
    { name: messages["nav.features"], href: `/${locale}/#features` },
    { name: messages["nav.pricing"], href: `/${locale}/#pricing` },
  ]

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={`/${locale}`} className="flex items-center gap-2 ml-10">
            <BookText className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">StoryColor</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.href) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href={`/${locale}#cta`}>{messages["hero.cta"]}</Link>
          </Button>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-around py-2">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-xs font-medium transition-colors hover:text-primary px-3 py-2 ${
                isActive(item.href) ? "text-foreground" : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
