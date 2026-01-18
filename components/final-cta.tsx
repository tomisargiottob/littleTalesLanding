import type { Locale } from "@/lib/i18n-config"
import { getServerMessages } from "@/lib/server-messages"
import { WaitlistForm } from "@/components/waitlist-form"

interface FinalCTAProps {
  locale: Locale
}

export function FinalCTA({ locale }: FinalCTAProps) {
  // Server-side message resolution
  const title = getServerMessages(locale, 'finalCta.title')
  const subtitle = getServerMessages(locale, 'finalCta.subtitle')
  const buttonText = getServerMessages(locale, 'finalCta.button')
  const subtextText = getServerMessages(locale, 'finalCta.subtext')
  const placeholder = getServerMessages(locale, 'waitlist.placeholder')
  const successMessage = getServerMessages(locale, 'waitlist.success')
  const errorMessage = getServerMessages(locale, 'waitlist.error')
  
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            {subtitle}
          </p>
          <WaitlistForm
            locale={locale}
            buttonText={buttonText}
            placeholder={placeholder}
            successMessage={successMessage}
            errorMessage={errorMessage}
            className="mb-6"
          />
          <p className="mt-6 text-sm text-muted-foreground">
            {subtextText}
          </p>
        </div>
      </div>
    </section>
  )
}
