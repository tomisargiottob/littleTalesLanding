import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import type { Locale } from "@/lib/i18n-config"
import { getServerMessages } from "@/lib/server-messages"

interface FinalCTAProps {
  locale: Locale
}

export function FinalCTA({ locale }: FinalCTAProps) {
  // Server-side message resolution
  const title = getServerMessages(locale, 'finalCta.title')
  const subtitle = getServerMessages(locale, 'finalCta.subtitle')
  const buttonText = getServerMessages(locale, 'finalCta.button')
  const subtextText = getServerMessages(locale, 'finalCta.subtext')
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
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto text-base" asChild>
              <a href={`/${locale}/signup`}>
                <Mail className="mr-2 h-5 w-5" />
                {buttonText}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {subtextText}
          </p>
        </div>
      </div>
    </section>
  )
}
