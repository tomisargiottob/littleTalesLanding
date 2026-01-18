import { OptimizedHeroSection } from "@/components/optimized-hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BenefitsSection } from "@/components/benefits-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ExampleUseCase } from "@/components/example-use-case"
import { PricingSection } from "@/components/pricing-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCTA } from "@/components/final-cta"
import type { Locale } from "@/lib/i18n-config"
import { getServerMessages } from "@/lib/server-messages"
import { HeroSection } from "@/components/hero-section"

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      <HeroSection locale={locale} />
      {/* Other sections with optimized rendering */}
      <ProblemSection locale={locale} />
      <SolutionSection locale={locale} />
      <BenefitsSection locale={locale} />
      <HowItWorksSection locale={locale} />
      <ExampleUseCase locale={locale} />
      <PricingSection locale={locale} />
      <TrustSection locale={locale} />
      <FinalCTA locale={locale} />
    </main>
  )
}
