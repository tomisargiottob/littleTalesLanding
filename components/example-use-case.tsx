import { Card } from "@/components/ui/card"
import { getServerMessages } from "@/lib/server-messages"
import type { Locale } from "@/lib/i18n-config"

interface ExampleUseCaseProps {
  locale: Locale
}

export function ExampleUseCase({ locale }: ExampleUseCaseProps) {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-12 text-balance text-center text-3xl font-bold tracking-tight md:text-4xl">
            {getServerMessages(locale, 'example.title')}
          </h2>

          <Card className="border-border bg-secondary/10 p-8 md:p-12">
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {getServerMessages(locale, 'example.quote1')}
              </p>

              <p className="text-lg leading-relaxed">
                {getServerMessages(locale, 'example.quote2')}
              </p>

              <p className="text-lg leading-relaxed">
                {getServerMessages(locale, 'example.quote3')}
              </p>

              <p className="text-lg leading-relaxed">
                {getServerMessages(locale, 'example.quote4')}
              </p>

              <div className="mt-8 border-l-4 border-primary pl-6">
                <p className="italic text-foreground">
                  {getServerMessages(locale, 'example.attribution')}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
