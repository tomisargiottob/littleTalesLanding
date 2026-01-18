# Kids Coloring Stories - Multilingual Blog

A production-ready, SEO-first Next.js blog about kids drawing activities with no screen time. Built with Next.js App Router, TypeScript, and MDX.

## Features

- **Multilingual Support**: English, Spanish, and Italian with URL-based routing (`/en/`, `/es/`, `/it/`)
- **SEO Optimized**: 
  - Dynamic metadata generation
  - JSON-LD structured data (BlogPosting schema)
  - Open Graph and Twitter Card support
  - Canonical URLs and hreflang tags
  - Automatic sitemap generation
  - robots.txt
- **Performance**: 
  - Static Site Generation (SSG) for all pages
  - Optimized fonts with next/font
  - Image optimization with next/image
- **Content Management**: MDX-based content with frontmatter metadata
- **Modern Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4

## Project Structure

```
├── app/
│   ├── [locale]/                    # Locale-based routing
│   │   ├── layout.tsx              # Root layout with metadata
│   │   ├── page.tsx                # Landing page
│   │   └── blog/
│   │       ├── page.tsx            # Blog index (SSG)
│   │       └── [slug]/
│   │           └── page.tsx        # Individual blog posts (SSG)
│   ├── robots.ts                   # Robots.txt generation
│   ├── sitemap.ts                  # Dynamic sitemap
│   └── globals.css                 # Global styles
├── components/
│   ├── ui/                         # shadcn/ui components
│   ├── language-switcher.tsx      # Locale navigation
│   ├── json-ld.tsx                # JSON-LD script component
│   └── ...                        # Landing page sections
├── content/                        # MDX content files
│   ├── en/blog/                   # English blog posts
│   ├── es/blog/                   # Spanish blog posts
│   └── it/blog/                   # Italian blog posts
├── lib/
│   ├── i18n-config.ts             # i18n configuration
│   ├── mdx.ts                     # MDX utilities
│   ├── mdx-components.tsx         # Custom MDX components
│   ├── seo.ts                     # SEO utilities
│   └── messages/                  # i18n message dictionaries
└── proxy.ts                       # Middleware for locale redirect
```

## Key Configuration Files

### next.config.ts
- Enables React Compiler for performance
- Configures experimental features (cacheComponents)
- TypeScript and image optimization settings

### proxy.ts (formerly middleware.ts)
- Redirects root URL to default locale (/en)
- Maintains locale in pathname for all routes

### lib/i18n-config.ts
- Defines supported locales: ['en', 'es', 'it']
- Locale validation utilities
- Type definitions for Locale

## Content Management

### MDX File Structure
Each blog post includes frontmatter:
```yaml
---
title: "Post Title"
description: "Post description for SEO"
slug: "url-slug"
keywords: ["keyword1", "keyword2"]
publishedAt: "2024-03-15"
author: "Author Name"
---
```

### Adding New Blog Posts
1. Create a new `.mdx` file in `content/{locale}/blog/`
2. Include required frontmatter fields
3. Write content using MDX syntax
4. The page will be statically generated automatically

## SEO Implementation

### Metadata Generation
- Each page uses `generateMetadata` for dynamic meta tags
- Includes title, description, keywords, Open Graph, Twitter Cards
- Canonical URLs and hreflang alternates for multilingual SEO

### JSON-LD Structured Data
- Blog index pages use Blog schema
- Individual posts use BlogPosting schema
- Includes publisher, author, and datePublished information

### Sitemap
- Automatically generated from content
- Includes all localized pages and blog posts
- Proper changeFrequency and priority settings
- Includes hreflang alternates

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set environment variables**:
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

## Adding New Locales

1. Add locale to `lib/i18n-config.ts`:
   ```typescript
   export const i18n = {
     locales: ['en', 'es', 'it', 'fr'], // Add 'fr'
     defaultLocale: 'en',
   }
   ```

2. Create content directory: `content/fr/blog/`

3. Add translations to components and SEO utilities

4. Update sitemap and metadata generation

## Performance Best Practices

- All blog pages are statically generated at build time
- Images use next/image for automatic optimization
- Fonts are optimized with next/font
- No client-side rendering for blog content
- Minimal JavaScript bundle size

## Deployment

This project is optimized for deployment on Vercel:

1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX with gray-matter
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## License

MIT
