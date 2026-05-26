import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export function Writing({ posts }: { posts: PostMeta[] }) {
  return (
    <section className="block" id="writing">
      <div className="bg-grid bg-grid-writing" aria-hidden="true">
        <div className="bg-fill bg-blue" />
        <div className="bg-line bg-v1" />
        <div className="bg-line bg-v2" />
        <div className="bg-line bg-vdate" />
      </div>
      <div className="section-head">
        <h2>Writing</h2>
        <Link href="/writing" className="meta" style={{ textDecoration: 'none' }}>
          All posts ↗
        </Link>
      </div>
      <div className="write-list">
        {posts.map((post) => (
          <Link key={post.slug} className="write-row" href={`/writing/${post.slug}`}>
            <span className="write-title">{post.title}</span>
            <span className="write-date">{post.date}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
