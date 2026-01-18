import type { Locale } from "@/lib/i18n-config"
import type { BlogPostMetadata } from "@/lib/mdx"

interface SEOConfig {
  siteName: {
    en: string
    es: string
    it: string
  }
  siteUrl: string
  twitterHandle?: string
}

const seoConfig: SEOConfig = {
  siteName: {
    en: "Kids Coloring Stories",
    es: "Historias para Colorear",
    it: "Storie da Colorare",
  },
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  twitterHandle: "@kidscoloringstories",
}

/**
 * Generate JSON-LD structured data for a blog post
 */
export function generateBlogPostingSchema(post: BlogPostMetadata, locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.publishedAt,
    inLanguage: locale,
    keywords: post.keywords.join(", "),
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName[locale],
      logo: {
        "@type": "ImageObject",
        url: `${seoConfig.siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${seoConfig.siteUrl}/${locale}/blog/${post.slug}`,
    },
  }
}

/**
 * Generate JSON-LD structured data for the blog index page
 */
export function generateBlogSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: seoConfig.siteName[locale],
    description: getLocalizedDescription(locale),
    inLanguage: locale,
    url: `${seoConfig.siteUrl}/${locale}/blog`,
    publisher: {
      "@type": "Organization",
      name: seoConfig.siteName[locale],
    },
  }
}

/**
 * Generate Open Graph metadata for a blog post
 */
export function generateBlogPostOGMetadata(post: BlogPostMetadata, locale: Locale) {
  return {
    title: post.title,
    description: post.description,
    url: `${seoConfig.siteUrl}/${locale}/blog/${post.slug}`,
    siteName: seoConfig.siteName[locale],
    locale: locale,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author],
  }
}

/**
 * Generate Twitter Card metadata
 */
export function generateTwitterMetadata(post: BlogPostMetadata) {
  return {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    creator: seoConfig.twitterHandle,
  }
}

/**
 * Generate hreflang alternate links
 */
export function generateAlternateLinks(path: string) {
  const locales: Locale[] = ["en", "es", "it"]
  const links: Record<string, string> = {}

  locales.forEach((locale) => {
    links[locale] = `${seoConfig.siteUrl}/${locale}${path}`
  })

  return links
}

/**
 * Get localized site description
 */
function getLocalizedDescription(locale: Locale): string {
  const descriptions = {
    en: "Screen-free drawing activities and coloring stories for kids. Educational, personalized, and fun.",
    es: "Actividades de dibujo sin pantallas e historias para colorear para niños. Educativo, personalizado y divertido.",
    it: "Attività di disegno senza schermi e storie da colorare per bambini. Educativo, personalizzato e divertente.",
  }
  return descriptions[locale]
}

/**
 * Get localized site name
 */
export function getSiteName(locale: Locale): string {
  return seoConfig.siteName[locale]
}

/**
 * Get site URL
 */
export function getSiteUrl(): string {
  return seoConfig.siteUrl
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.siteUrl}/#organization`,
    name: "Colorbook",
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    sameAs: [
      "https://facebook.com/colorbook",
      "https://instagram.com/colorbook",
      "https://twitter.com/colorbook"
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "Italian"]
    }
  }
}

/**
 * Generate Website structured data
 */
export function generateWebsiteSchema(locale: Locale) {
  const names = {
    en: "Colorbook - Personalized Coloring Stories",
    es: "Colorbook - Historias de Colorear Personalizadas", 
    it: "Colorbook - Storie da Colorare Personalizzate"
  }

  const descriptions = {
    en: "Create personalized, printable coloring storybooks for children ages 3-7.",
    es: "Crea libros de historias de colorear personalizados para niños de 3-7 años.",
    it: "Crea libri di storie da colorare personalizzati per bambini di 3-7 anni."
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    url: seoConfig.siteUrl,
    name: names[locale],
    description: descriptions[locale],
    publisher: {
      "@id": `${seoConfig.siteUrl}/#organization`
    },
    inLanguage: locale
  }
}
