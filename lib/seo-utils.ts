import type { Locale } from '@/lib/i18n-config'

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  noindex?: boolean
  canonical?: string
}

export function generateSEOMetadata(
  config: SEOConfig,
  locale: Locale,
  path: string = ''
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'
  const fullUrl = `${siteUrl}/${locale}${path}`

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords,
    robots: config.noindex ? 'noindex, nofollow' : 'index, follow',
    canonical: config.canonical || fullUrl,
    openGraph: {
      title: config.title,
      description: config.description,
      url: fullUrl,
      siteName: getSiteName(locale),
      locale: locale,
      type: 'website' as const,
      images: config.ogImage ? [
        {
          url: config.ogImage,
          width: 1200,
          height: 630,
          alt: config.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: config.title,
      description: config.description,
      images: config.ogImage ? [config.ogImage] : [],
    },
    alternates: {
      canonical: config.canonical || fullUrl,
      languages: generateHrefLangAlternates(path),
    },
  }
}

export function getSiteName(locale: Locale): string {
  const siteNames = {
    en: 'Colorbook - Personalized Coloring Stories',
    es: 'Colorbook - Historias Personalizadas para Colorear',
    it: 'Colorbook - Storie da Colorare Personalizzate',
  }
  return siteNames[locale]
}

export function generateHrefLangAlternates(path: string = '') {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'
  const locales: Locale[] = ['en', 'es', 'it']
  
  return Object.fromEntries(
    locales.map(locale => [
      locale,
      `${siteUrl}/${locale}${path}`
    ])
  )
}

export function generateOrganizationSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Colorbook',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: 'Personalized coloring storybooks for children',
    foundingDate: '2026',
    sameAs: [
      'https://facebook.com/colorbook',
      'https://instagram.com/colorbook',
      'https://twitter.com/colorbook',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@colorbook.com',
      contactType: 'customer service',
    },
  }
}

export function generateWebsiteSchema(locale: Locale) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: getSiteName(locale),
    url: `${siteUrl}/${locale}`,
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/${locale}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
  locale: Locale
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}/${locale}${item.url}`,
    })),
  }
}

export function generateArticleSchema(
  post: {
    title: string
    description: string
    publishedAt: string
    author: string
    content: string
    slug: string
  },
  locale: Locale
) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://colorbook.com'
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Colorbook',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `${siteUrl}/${locale}/blog/${post.slug}`,
    mainEntityOfPage: `${siteUrl}/${locale}/blog/${post.slug}`,
    inLanguage: locale,
    wordCount: post.content.split(' ').length,
  }
}