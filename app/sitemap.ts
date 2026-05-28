import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

const BASE = 'https://personal-site-boke-wangzhan.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map(p => ({
    url: `${BASE}/writing/${p.slug}`,
    lastModified: new Date(p.date),
  }))
  return [
    { url: BASE, priority: 1 },
    { url: `${BASE}/about` },
    { url: `${BASE}/writing` },
    { url: `${BASE}/photos` },
    ...posts,
  ]
}
