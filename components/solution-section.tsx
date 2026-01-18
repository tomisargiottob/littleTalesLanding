"use client"

import type { Locale } from "@/lib/i18n-config"
import { getServerMessages } from "@/lib/server-messages"

interface SolutionSectionProps {
  locale: Locale
}

export function SolutionSection({ locale }: SolutionSectionProps) {
  const title = getServerMessages(locale, 'solution.title')
  const subtitle = getServerMessages(locale, 'solution.subtitle')
  const day1Text = getServerMessages(locale, 'solution.day1')
  const day2Text = getServerMessages(locale, 'solution.day2')
  const day3Text = getServerMessages(locale, 'solution.day3')
  const day7Text = getServerMessages(locale, 'solution.day7')
  return (
    <section className="bg-secondary/20 py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-primary">Day 1</div>
              <p className="text-sm text-muted-foreground">
                {day1Text}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-primary">Day 2</div>
              <p className="text-sm text-muted-foreground">
                {day2Text}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-primary">Day 3</div>
              <p className="text-sm text-muted-foreground">
                {day3Text}
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <div className="mb-3 text-4xl font-bold text-primary">Day 7</div>
              <p className="text-sm text-muted-foreground">
                {day7Text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
