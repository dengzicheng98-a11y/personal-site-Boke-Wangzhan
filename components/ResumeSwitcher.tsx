'use client'

import { useState } from 'react'
import type { Resume } from '@/data/resumes'

export function ResumeSwitcher({ resumes }: { resumes: Resume[] }) {
  const [activeId, setActiveId] = useState(resumes[0]?.id ?? '')
  const resume = resumes.find(r => r.id === activeId) ?? resumes[0]

  if (!resume) return null

  return (
    <>
      <div className="resume-tabs" role="tablist">
        {resumes.map(r => (
          <button
            key={r.id}
            role="tab"
            aria-selected={r.id === activeId}
            className={`resume-tab${r.id === activeId ? ' resume-tab--active' : ''}`}
            onClick={() => setActiveId(r.id)}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="resume-body">
        {resume.role && (
          <div className="resume-meta-row">
            <span className="resume-role">{resume.role}</span>
            <span className="resume-meta-chips">
              {resume.salary && <span className="resume-chip">{resume.salary}</span>}
              {resume.city && <span className="resume-chip">{resume.city}</span>}
            </span>
          </div>
        )}

        {resume.skills.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">核心能力</h2>
            <ul className="resume-skill-list">
              {resume.skills.map(s => (
                <li key={s.title} className="resume-skill">
                  <span className="resume-skill-title">{s.title}</span>
                  <span className="resume-skill-desc">{s.desc}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {resume.projects.length > 0 && (
          <section className="resume-section">
            <h2 className="resume-section-title">项目经历</h2>
            <div className="resume-project-list">
              {resume.projects.map(p => (
                <div key={p.title} className="resume-project">
                  <div className="resume-project-head">
                    <span className="resume-project-title">{p.title}</span>
                    {p.subtitle && (
                      <span className="resume-project-sub">{p.subtitle}</span>
                    )}
                  </div>
                  <p className="resume-project-body">{p.body}</p>
                  {p.stack && (
                    <p className="resume-project-stack">{p.stack}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {resume.education.school && (
          <section className="resume-section">
            <h2 className="resume-section-title">教育经历</h2>
            <div className="resume-project">
              <div className="resume-project-head">
                <span className="resume-project-title">{resume.education.school}</span>
                <span className="resume-project-sub">{resume.education.period}</span>
              </div>
              <p className="resume-project-body">{resume.education.major}</p>
              {resume.education.note && (
                <p className="resume-project-body">{resume.education.note}</p>
              )}
            </div>
          </section>
        )}

        {resume.summary && (
          <section className="resume-section">
            <h2 className="resume-section-title">自我评价</h2>
            <p className="resume-summary">{resume.summary}</p>
          </section>
        )}
      </div>
    </>
  )
}
