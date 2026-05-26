import type { Metadata } from 'next'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ResumeSwitcher } from '@/components/ResumeSwitcher'
import { resumes } from '@/data/resumes'

export const metadata: Metadata = {
  title: 'About — Dzs',
}

export default function AboutPage() {
  const primary = resumes[0]

  return (
    <>
      <Nav />
      <main className="about">
        <header className="about-header">
          <h1 className="about-name">Deng Zicheng</h1>
          <div className="about-contact">
            <a href={`mailto:${primary?.email}`}>{primary?.email}</a>
            <span className="about-contact-sep">·</span>
            <a href={`https://${primary?.github}`} target="_blank" rel="noopener noreferrer">
              {primary?.github}
            </a>
          </div>
        </header>
        <ResumeSwitcher resumes={resumes} />
        <Footer />
      </main>
    </>
  )
}
