import Link from "next/link"
import { getBlogPosts } from "@/lib/mdx"
import { generateBlogSchema, getSiteName, generateAlternateLinks } from "@/lib/seo"
import { JsonLd } from "@/components/json-ld"
import type { Locale } from "@/lib/i18n-config"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LanguageSwitcher } from "@/components/language-switcher"
import type { Metadata } from "next"

interface BlogPageProps {
  params: Promise<{
    locale: Locale
  }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: "Blog - Kids Drawing Activities & Tips",
    es: "Blog - Actividades de Dibujo para Niños y Consejos",
    it: "Blog - Attività di Disegno per Bambini e Consigli",
  }

  const descriptions = {
    en: "Discover creative drawing activities, parenting tips, and screen-free ideas for kids aged 3-7.",
    es: "Descubre actividades de dibujo creativas, consejos para padres e ideas sin pantallas para niños de 3-7 años.",
    it: "Scopri attività di disegno creative, consigli per genitori e idee senza schermi per bambini dai 3 ai 7 anni.",
  }

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `/${locale}/blog`,
      languages: generateAlternateLinks("/blog"),
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: `/${locale}/blog`,
      siteName: getSiteName(locale),
      locale: locale,
      type: "website",
    },
  }
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params
  const posts = await getBlogPosts(locale)
  const blogSchema = generateBlogSchema(locale)

  const headings = {
    en: "Drawing Activities & Parenting Tips",
    es: "Actividades de Dibujo y Consejos para Padres",
    it: "Attività di Disegno e Consigli per Genitori",
  }

  const subheadings = {
    en: "Expert insights on screen-free activities and creative development",
    es: "Conocimientos expertos sobre actividades sin pantallas y desarrollo creativo",
    it: "Approfondimenti esperti su attività senza schermi e sviluppo creativo",
  }

  return (
    <>
      <JsonLd data={blogSchema} />
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        <LanguageSwitcher currentLocale={locale} />

        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <header className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 text-balance">{headings[locale]}</h1>
            <p className="text-xl text-muted-foreground text-balance">{subheadings[locale]}</p>
          </header>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {locale === "en" && "No blog posts available yet."}
                {locale === "es" && "Aún no hay publicaciones disponibles."}
                {locale === "it" && "Nessun post del blog disponibile ancora."}
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/${locale}/blog/${post.slug}`} className="group">
                  <Card className="h-full transition-all hover:shadow-lg hover:scale-[1.02]">
                    <CardHeader>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors text-balance">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {new Date(post.publishedAt).toLocaleDateString(locale, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed text-pretty">{post.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              ← {locale === "en" && "Back to Home"}
              {locale === "es" && "Volver al Inicio"}
              {locale === "it" && "Torna alla Home"}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
