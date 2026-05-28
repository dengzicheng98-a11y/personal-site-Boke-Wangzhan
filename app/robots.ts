import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://personal-site-boke-wangzhan.vercel.app/sitemap.xml',
  }
}
