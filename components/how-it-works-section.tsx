import { UserPlus, Pencil, Mail, Printer } from "lucide-react"
import { getServerMessages } from "@/lib/server-messages"
import type { Locale } from "@/lib/i18n-config"

interface HowItWorksSectionProps {
  locale: Locale
}

export function HowItWorksSection({ locale }: HowItWorksSectionProps) {
  return (
    <section className="bg-muted/50 py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            {getServerMessages(locale, 'works.title')}
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            {getServerMessages(locale, 'works.subtitle')}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                1
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                  <UserPlus className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {getServerMessages(locale, 'works.step1.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {getServerMessages(locale, 'works.step1.description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                2
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                  <Pencil className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {getServerMessages(locale, 'works.step2.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {getServerMessages(locale, 'works.step2.description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                3
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {getServerMessages(locale, 'works.step3.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {getServerMessages(locale, 'works.step3.description')}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                4
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                  <Printer className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">
                    {getServerMessages(locale, 'works.step4.title')}
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  {getServerMessages(locale, 'works.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
