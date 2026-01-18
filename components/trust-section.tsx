import { Shield, Home, Smile } from "lucide-react"
import { getServerMessages } from "@/lib/server-messages"
import type { Locale } from "@/lib/i18n-config"

interface TrustSectionProps {
  locale: Locale
}

export function TrustSection({ locale }: TrustSectionProps) {
  return (
    <section className="bg-muted/30 py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {getServerMessages(locale, 'trust.title')}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {getServerMessages(locale, 'trust.subtitle')}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {getServerMessages(locale, 'trust.privacy.title')}
            </h3>
            <p className="text-muted-foreground">
              {getServerMessages(locale, 'trust.privacy.description')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {getServerMessages(locale, 'trust.simple.title')}
            </h3>
            <p className="text-muted-foreground">
              {getServerMessages(locale, 'trust.simple.description')}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Smile className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {getServerMessages(locale, 'trust.ageAppropriate.title')}
            </h3>
            <p className="text-muted-foreground">
              {getServerMessages(locale, 'trust.ageAppropriate.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
