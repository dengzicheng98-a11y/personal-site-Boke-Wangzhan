import type { Post } from '@/data/posts'

export function Writing({ posts }: { posts: Post[] }) {
  return (
    <section className="block" id="writing">
      <div className="bg-grid bg-grid-writing" aria-hidden="true">
        <div className="bg-line bg-v1" />
        <div className="bg-line bg-v2" />
        <div className="bg-line bg-vdate" />
      </div>
      <div className="section-head">
        <h2>Writing</h2>
        <a href="#" className="meta" style={{ textDecoration: 'none' }}>
          All posts ↗
        </a>
      </div>
      <div className="write-list">
        {posts.map((post) => (
          <a key={post.title} className="write-row" href={post.href}>
            <span className="write-title">{post.title}</span>
            <span className="write-date">{post.date}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
