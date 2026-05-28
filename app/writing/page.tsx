import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Writing',
  description: '技术写作与调试记录。',
}

export default function WritingPage() {
  const posts = getAllPosts()

  return (
    <>
      <Nav />
      <main className="page">
        <section className="block">
          <div className="section-head">
            <h2>Writing</h2>
            <span className="meta">{posts.length} posts</span>
          </div>
          <div className="write-list">
            {posts.map((post) => (
              <Link key={post.slug} className="write-row" href={`/writing/${post.slug}`}>
                <div className="write-row-body">
                  <span className="write-title">{post.title}</span>
                  {post.excerpt && (
                    <p className="write-excerpt">{post.excerpt}</p>
                  )}
                </div>
                <span className="write-date">{post.date}</span>
              </Link>
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
