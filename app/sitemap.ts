import type { MetadataRoute } from "next"
import { getAllBlogSlugs } from "@/lib/mdx"
import { i18n } from "@/lib/i18n-config"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"

  // Get all blog post slugs
  const blogSlugs = await getAllBlogSlugs()

  // Generate sitemap entries for home pages (all locales)
  const homePages: MetadataRoute.Sitemap = i18n.locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    alternates: {
      languages: Object.fromEntries(i18n.locales.map((loc) => [loc, `${siteUrl}/${loc}`])),
    },
  }))

  // Generate sitemap entries for blog index pages (all locales)
  const blogIndexPages: MetadataRoute.Sitemap = i18n.locales.map((locale) => ({
    url: `${siteUrl}/${locale}/blog`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(i18n.locales.map((loc) => [loc, `${siteUrl}/${loc}/blog`])),
    },
  }))

  // Generate sitemap entries for all blog posts
  const blogPostPages: MetadataRoute.Sitemap = blogSlugs.map(({ locale, slug }) => ({
    url: `${siteUrl}/${locale}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(i18n.locales.map((loc) => [loc, `${siteUrl}/${loc}/blog/${slug}`])),
    },
  }))

  return [...homePages, ...blogIndexPages, ...blogPostPages]
}
