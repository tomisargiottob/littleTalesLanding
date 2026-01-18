import type { Locale } from "./i18n-config"
import en from "./messages/en"
import es from "./messages/es"
import it from "./messages/it"

export function getMessages(locale: Locale) {
  const messages = {
    en,
    es,
    it,
  }

  return messages[locale]
}
