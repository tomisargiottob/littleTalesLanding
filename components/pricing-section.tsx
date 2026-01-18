// import { FormattedMessage } from "react-intl"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"
import type { Locale } from "@/lib/i18n-config"
import { getServerMessages } from "@/lib/server-messages"
import { WaitlistForm } from "./waitlist-form"

interface PricingSectionProps {
  locale: Locale
}

export function PricingSection({ locale }: PricingSectionProps) {
  // Server-side message resolution for better performance
  const title = getServerMessages(locale, 'pricing.title')
  const subtitle = getServerMessages(locale, 'pricing.subtitle')
  const monthlyText = getServerMessages(locale, 'pricing.monthly')
  const annualText = getServerMessages(locale, 'pricing.annual')
  const saveText = getServerMessages(locale, 'pricing.save')
  const ctaText = getServerMessages(locale, 'pricing.cta')
  const plans = [
    {
      id: "free",
      nameKey: "pricing.free.name",
      priceKey: "pricing.free.price",
      descriptionKey: "pricing.free.description",
      features: ["pricing.free.feature1", "pricing.free.feature2", "pricing.free.feature3"],
      ctaKey: "pricing.free.cta",
      disabled: true,
      popular: false,
    },
    {
      id: "artist",
      nameKey: "pricing.artist.name",
      priceKey: "pricing.artist.price",
      descriptionKey: "pricing.artist.description",
      features: [
        "pricing.artist.feature1",
        "pricing.artist.feature2",
        "pricing.artist.feature3",
        "pricing.artist.feature4",
      ],
      ctaKey: "pricing.artist.cta",
      disabled: true,
      // popular: true,
    },
    {
      id: "pro",
      nameKey: "pricing.pro.name",
      priceKey: "pricing.pro.price",
      descriptionKey: "pricing.pro.description",
      features: [
        "pricing.pro.feature1",
        "pricing.pro.feature2",
        "pricing.pro.feature3",
        "pricing.pro.feature4",
        "pricing.pro.feature5",
      ],
      ctaKey: "pricing.pro.cta",
      disabled: true,
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-balance mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative p-8 flex flex-col ${
                plan.popular ? "border-primary border-2 shadow-lg scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {getServerMessages(locale, 'pricing.popular')}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-serif mb-2">
                  {getServerMessages(locale, plan.nameKey)}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">
                    {getServerMessages(locale, plan.priceKey)}
                  </span>
                  {plan.id !== "free" && (
                    <span className="text-muted-foreground">
                      {getServerMessages(locale, 'pricing.perMonth')}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground text-pretty">
                  {getServerMessages(locale, plan.descriptionKey)}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((featureKey) => (
                  <li key={featureKey} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-pretty">
                      {getServerMessages(locale, featureKey)}
                    </span>
                  </li>
                ))}
              </ul>
              <WaitlistForm locale={locale} />
              {/* <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                size="lg"
                disabled={plan.disabled}
              >
                {getServerMessages(locale, plan.ctaKey)}
              </Button> */}
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {getServerMessages(locale, 'pricing.footer')}
        </p>
      </div>
    </section>
  )
}
