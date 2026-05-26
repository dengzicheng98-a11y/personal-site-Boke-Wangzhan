import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const POSTS_DIR = path.join(process.cwd(), 'content/writing')

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt?: string
  readingTime: string
}
export type Post = PostMeta & { content: string }

export function getAllSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs.readdirSync(POSTS_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace(/\.mdx$/, ''))
}

export function getPost(slug: string): Post | null {
  const fp = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(fp)) return null
  const { data, content } = matter(fs.readFileSync(fp, 'utf8'))
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    excerpt: data.excerpt,
    readingTime: readingTime(content).text,
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  return getAllSlugs()
    .map(s => {
      const { content, ...meta } = getPost(s)!
      return meta
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}
