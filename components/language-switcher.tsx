"use client"

import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Locale } from "@/lib/i18n-config"
import { localeNames, i18n } from "@/lib/i18n-config"

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  // Remove current locale from pathname to get the base path
  const getLocalizedPath = (newLocale: Locale) => {
    const segments = pathname.split("/")
    segments[1] = newLocale
    return segments.join("/")
  }

  const handleLanguageChange = (newLocale: Locale) => {
    // Set the preferred locale cookie
    document.cookie = `preferred-locale=${newLocale}; path=/; max-age=${365 * 24 * 60 * 60}; samesite=lax`
    
    // Navigate to the new locale
    const newPath = getLocalizedPath(newLocale)
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm">
          <Languages className="h-5 w-5" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {i18n.locales.map((locale) => (
          <DropdownMenuItem 
            key={locale} 
            className={currentLocale === locale ? "bg-accent" : ""}
            onClick={() => handleLanguageChange(locale)}
          >
            {localeNames[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
