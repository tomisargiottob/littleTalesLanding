import { notFound } from "next/navigation"
import Link from "next/link"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getBlogPost, getAllBlogSlugs } from "@/lib/mdx"
import { mdxComponents } from "@/lib/mdx-components"
import {
  generateBlogPostingSchema,
  generateBlogPostOGMetadata,
  generateTwitterMetadata,
  generateAlternateLinks,
} from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import type { Locale } from "@/lib/i18n-config"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{
    locale: Locale
    slug: string
  }>
}

export async function generateStaticParams() {
  const allSlugs = await getAllBlogSlugs()
  return allSlugs.map(({ locale, slug }) => ({
    locale,
    slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = await getBlogPost(locale, slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: generateAlternateLinks(`/blog/${slug}`),
    },
    openGraph: generateBlogPostOGMetadata(
      {
        slug: post.slug,
        title: post.title,
        description: post.description,
        keywords: post.keywords,
        publishedAt: post.publishedAt,
        author: post.author,
        locale: post.locale,
      },
      locale,
    ),
    twitter: generateTwitterMetadata({
      slug: post.slug,
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      publishedAt: post.publishedAt,
      author: post.author,
      locale: post.locale,
    }),
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  const post = await getBlogPost(locale, slug)

  if (!post) {
    notFound()
  }

  const blogPostSchema = generateBlogPostingSchema(
    {
      slug: post.slug,
      title: post.title,
      description: post.description,
      keywords: post.keywords,
      publishedAt: post.publishedAt,
      author: post.author,
      locale: post.locale,
    },
    locale,
  )

  return (
    <>
      <JsonLd data={blogPostSchema} />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <LanguageSwitcher currentLocale={locale} />

        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="mb-5">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium"
            >
              ← {locale === "en" && "Back to Blog"}
              {locale === "es" && "Volver al Blog"}
              {locale === "it" && "Torna al Blog"}
            </Link>

            {/* <h1 className="text-5xl font-bold mb-4 text-balance">{post.title}</h1>

            <div className="flex items-center gap-4 text-muted-foreground">
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.author}</span>
            </div> */}
          </header>

          <div className="prose prose-lg max-w-none">
            <MDXRemote source={post.content} components={mdxComponents} />
          </div>

          <footer className="mt-16 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((keyword) => (
                <span key={keyword} className="px-3 py-1 bg-secondary rounded-full text-sm">
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href={`/${locale}/blog`}
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                ← {locale === "en" && "Read More Articles"}
                {locale === "es" && "Leer Más Artículos"}
                {locale === "it" && "Leggi Altri Articoli"}
              </Link>
            </div>
          </footer>
        </article>
      </div>
    </>
  )
}
