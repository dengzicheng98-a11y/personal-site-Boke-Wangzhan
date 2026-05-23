import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { photoEssays } from '@/data/photoEssays'

export const metadata: Metadata = {
  title: 'Photos — Dzs',
  description: 'Photo essays on memory, landscape, and belonging.',
}

export default function PhotosPage() {
  return (
    <div>
      <div className="ph-col">
        <Nav />
        <header className="ph-index-header">
          <p className="caption">Photos&nbsp;&nbsp;/&nbsp;&nbsp;影像</p>
          <h1 className="ph-h1">Three places I keep returning to.</h1>
          <p className="subtitle">Photo essays on memory, landscape, and belonging.</p>
        </header>
      </div>

      <div className="essays-list">
        {photoEssays.map((essay, i) => (
          <Link
            key={essay.slug}
            href={`/photos/${essay.slug}`}
            className={`essay-card${i % 2 === 1 ? ' essay-card--reversed' : ''}`}
          >
            <div className="essay-card-cover">
              <Image
                src={`/photos/${essay.slug}/${essay.slug}-${String(essay.coverIndex).padStart(2, '0')}.jpg`}
                alt={`${essay.title} cover`}
                fill
                className="essay-card-img"
                sizes="(max-width: 640px) 100vw, 40vw"
              />
            </div>
            <div className="essay-card-body">
              <p className="caption">
                {essay.subtitle}&nbsp;&nbsp;/&nbsp;&nbsp;{essay.photoCount} photos
              </p>
              <h2 className="essay-title-cn">{essay.title}</h2>
              <p className="essay-subtitle-en">{essay.subtitle}</p>
              <span className="essay-cta">→ Read essay</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="ph-col">
        <Footer />
      </div>
    </div>
  )
}
