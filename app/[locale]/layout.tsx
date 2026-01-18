import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { notFound } from "next/navigation"
import { i18n, type Locale, isValidLocale } from "@/lib/i18n-config"
import { SiteHeader } from "@/components/site-header"
import { generateOrganizationSchema, generateWebsiteSchema, getSiteName, generateAlternateLinks } from "@/lib/seo"
import "../globals.css"


export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'

  const titles = {
    en: "Create Your Child's Personalized Coloring Story | Colorbook",
    es: "Crea la Historia Personalizada de Colorear de tu Hijo | Colorbook",
    it: "Crea la Storia da Colorare Personalizzata di tuo Figlio | Colorbook",
  }

  const descriptions = {
    en: "A personalized, printable coloring storybook created just for your child. Receive one illustration each day that continues their unique story. Perfect for ages 3-7.",
    es: "Un libro de historias personalizado para colorear, creado especialmente para tu hijo. Recibe una ilustración cada día que continúa su historia única. Perfecto para edades 3-7.",
    it: "Un libro da colorare personalizzato creato appositamente per tuo figlio. Ricevi un'illustrazione ogni giorno che continua la sua storia unica. Perfetto per età 3-7.",
  }

  const keywords = {
    en: ["personalized coloring book", "children coloring pages", "custom storybook", "printable coloring sheets", "kids creative activities", "screen-free activities"],
    es: ["libro de colorear personalizado", "páginas para colorear niños", "libro de cuentos personalizado", "hojas para colorear imprimibles", "actividades creativas niños", "actividades sin pantallas"],
    it: ["libro da colorare personalizzato", "pagine da colorare bambini", "libro di storie personalizzato", "fogli da colorare stampabili", "attività creative bambini", "attività senza schermi"],
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: keywords[locale],
    generator: "Colorbook",
    applicationName: "Colorbook",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Colorbook Team" }],
    creator: "Colorbook",
    publisher: "Colorbook",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: generateAlternateLinks(''),
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `/${locale}`,
      siteName: getSiteName(locale),
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: titles[locale],
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale],
      description: descriptions[locale],
      images: ['/og-image.jpg'],
      creator: '@colorbook',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    icons: {
      icon: [
        {
          url: "/icon-light-32x32.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/icon-dark-32x32.png",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/icon.svg",
          type: "image/svg+xml",
        },
      ],
      apple: "/apple-icon.png",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  // Validate locale
  if (!isValidLocale(locale)) {
    notFound()
  }

  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebsiteSchema(locale as Locale)

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <SiteHeader locale={locale as Locale} />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
