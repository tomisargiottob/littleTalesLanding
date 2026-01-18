"use client"

import { getServerMessages } from "@/lib/server-messages"
import { WaitlistForm } from "@/components/waitlist-form"

export function HeroSection({ locale }: { locale: 'es' | 'en' | 'it' }) {
  const heroTitle = getServerMessages(locale, 'hero.title')
  const heroSubtitle = getServerMessages(locale, 'hero.subtitle')
  const heroSubText = getServerMessages(locale, 'hero.subtext')
  const heroAltText = getServerMessages(locale, 'hero.altText')

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {heroTitle}
          </h1>
          <p className="mb-8 text-pretty text-lg text-muted-foreground md:text-xl">
            {heroSubtitle}
          </p>
          <WaitlistForm
            locale={locale}
            className="mb-4"
          />
          <p className="mt-4 text-sm text-muted-foreground">
            {heroSubText}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
            <img
              src="public/child-coloring-a-page-from-a-personalized-storybook.jpg"
              alt={heroAltText}
              className="h-auto w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
