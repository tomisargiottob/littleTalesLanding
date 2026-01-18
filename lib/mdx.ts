import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Locale } from "@/lib/i18n-config"

const contentDirectory = path.join(process.cwd(), "content")

export interface BlogPost {
  slug: string
  title: string
  description: string
  keywords: string[]
  publishedAt: string
  author: string
  content: string
  locale: Locale
}

export interface BlogPostMetadata {
  slug: string
  title: string
  description: string
  keywords: string[]
  publishedAt: string
  author: string
  locale: Locale
}

/**
 * Get all blog posts for a specific locale
 */
export async function getBlogPosts(locale: Locale): Promise<BlogPostMetadata[]> {
  const postsDirectory = path.join(contentDirectory, locale, "blog")

  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const files = fs.readdirSync(postsDirectory)
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      return {
        slug: data.slug || file.replace(/\.mdx$/, ""),
        title: data.title,
        description: data.description,
        keywords: data.keywords || [],
        publishedAt: data.publishedAt,
        author: data.author,
        locale,
      } as BlogPostMetadata
    }),
  )

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

/**
 * Get a single blog post by slug and locale
 */
export async function getBlogPost(locale: Locale, slug: string): Promise<BlogPost | null> {
  const postsDirectory = path.join(contentDirectory, locale, "blog")
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)

  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug: data.slug || slug,
    title: data.title,
    description: data.description,
    keywords: data.keywords || [],
    publishedAt: data.publishedAt,
    author: data.author,
    content,
    locale,
  }
}

/**
 * Get all blog post slugs for all locales (for static generation)
 */
export async function getAllBlogSlugs(): Promise<Array<{ locale: Locale; slug: string }>> {
  const locales: Locale[] = ["en", "es", "it"]
  const allSlugs: Array<{ locale: Locale; slug: string }> = []

  for (const locale of locales) {
    const postsDirectory = path.join(contentDirectory, locale, "blog")

    if (!fs.existsSync(postsDirectory)) {
      continue
    }

    const files = fs.readdirSync(postsDirectory)
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

    for (const file of mdxFiles) {
      const fullPath = path.join(postsDirectory, file)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data } = matter(fileContents)

      allSlugs.push({
        locale,
        slug: data.slug || file.replace(/\.mdx$/, ""),
      })
    }
  }

  return allSlugs
}
