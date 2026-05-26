import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getAllSlugs, getPost } from '@/lib/posts'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} — Dzs` }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <main className="page">
      <Nav />
      <article className="prose">
        <Link href="/#writing" className="prose-back">← Writing</Link>
        <header className="prose-header">
          <p className="caption">{post.date} · {post.readingTime}</p>
          <h1>{post.title}</h1>
          {post.excerpt && <p className="prose-excerpt">{post.excerpt}</p>}
        </header>
        <MDXRemote source={post.content} />
      </article>
      <Footer />
    </main>
  )
}
