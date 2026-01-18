import type React from "react"
import Image from "next/image"
import Link from "next/link"

export const mdxComponents = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4 text-balance">{children}</h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl font-bold mt-8 mb-4 text-balance">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-2xl font-bold mt-6 mb-3 text-balance">{children}</h3>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-lg leading-relaxed mb-4 text-pretty">{children}</p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => <li className="text-lg leading-relaxed">{children}</li>,
  a: ({ href, children }: { href?: string; children: React.ReactNode }) => (
    <Link href={href || "#"} className="text-primary hover:underline">
      {children}
    </Link>
  ),
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <Image src={src || ""} alt={alt || ""} width={800} height={400} className="rounded-lg my-6" />
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">{children}</blockquote>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto mb-4 font-mono text-sm">{children}</pre>
  ),
}
