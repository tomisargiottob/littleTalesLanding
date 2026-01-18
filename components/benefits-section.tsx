import { Heart, Palette, Book, Clock } from "lucide-react"
import { getServerMessages } from "@/lib/server-messages"
import type { Locale } from "@/lib/i18n-config"

interface BenefitsSectionProps {
  locale: Locale
}

export function BenefitsSection({ locale }: BenefitsSectionProps) {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {getServerMessages(locale, 'benefits.title')}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {getServerMessages(locale, 'benefits.subtitle')}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Heart className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                {getServerMessages(locale, 'benefits.bonding.title')}
              </h3>
              <p className="text-muted-foreground">
                {getServerMessages(locale, 'benefits.bonding.description')}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                {getServerMessages(locale, 'benefits.creativity.title')}
              </h3>
              <p className="text-muted-foreground">
                {getServerMessages(locale, 'benefits.creativity.description')}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                {getServerMessages(locale, 'benefits.ritual.title')}
              </h3>
              <p className="text-muted-foreground">
                {getServerMessages(locale, 'benefits.ritual.description')}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <Book className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold">
                {getServerMessages(locale, 'benefits.keepsake.title')}
              </h3>
              <p className="text-muted-foreground">
                {getServerMessages(locale, 'benefits.keepsake.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
