"use client"

import { IntlProvider } from "react-intl"
import type { ReactNode } from "react"

interface IntlProviderClientProps {
  locale: string
  messages: Record<string, string>
  children: ReactNode
}

export function IntlProviderClient({ locale, messages, children }: IntlProviderClientProps) {
  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
