export const i18n = {
  locales: ["en", "es", "it"],
  defaultLocale: "en",
} as const

export type Locale = (typeof i18n)["locales"][number]

// Dictionary for locale names
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  it: "Italiano",
}

// Validate if a given string is a valid locale
export function isValidLocale(locale: string): locale is Locale {
  return i18n.locales.includes(locale as Locale)
}
