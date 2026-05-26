import type { Project } from '@/data/projects'
import { Thumbnail } from './Thumbnail'

export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section className="block" id="work">
      <div className="bg-grid bg-grid-work" aria-hidden="true">
        <div className="bg-fill bg-red" />
        <div className="bg-fill bg-yellow" />
        <div className="bg-line bg-v1" />
        <div className="bg-line bg-v2" />
      </div>
      <div className="section-head">
        <h2>Selected work</h2>
        <span className="meta">2023 — 2026</span>
      </div>
      <div className="work-list">
        {projects.map((project) => (
          <a key={project.title} className="work-row" href={project.href}>
            <Thumbnail id={project.thumbnail} />
            <div className="work-meta">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag">{project.tag}</div>
            </div>
          </a>
        ))}
        <div className="work-thumb-line" aria-hidden="true" />
      </div>
    </section>
  )
}
