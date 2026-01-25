import { Smartphone, Sparkles, Calendar } from "lucide-react"
import type { Locale } from "@/lib/i18n-config"
import { getServerMessages } from "@/lib/server-messages"

interface ProblemSectionProps {
  locale: Locale
}

export function ProblemSection({ locale }: ProblemSectionProps) {
  // Server-side message resolution - no client context needed
  const title = getServerMessages(locale, 'problem.title')
  const subtitle = getServerMessages(locale, 'problem.subtitle')
  const screenTimeTitle = getServerMessages(locale, 'problem.screenTime.title')
  const screenTimeDesc = getServerMessages(locale, 'problem.screenTime.description')
  const genericTitle = getServerMessages(locale, 'problem.generic.title')
  const genericDesc = getServerMessages(locale, 'problem.generic.description')
  const timeTitle = getServerMessages(locale, 'problem.time.title')
  const timeDesc = getServerMessages(locale, 'problem.time.description')
  return (
    <section className="py-10 md:py-14" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mb-12 text-pretty text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {screenTimeTitle}
            </h3>
            <p className="text-muted-foreground">
              {screenTimeDesc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {genericTitle}
            </h3>
            <p className="text-muted-foreground">
              {genericDesc}
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">
              {timeTitle}
            </h3>
            <p className="text-muted-foreground">
              {timeDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
