import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { photoEssays } from '@/data/photoEssays'
import rawMeta from '@/data/photoMeta.json'

// ── dimension helpers ────────────────────────────────────────────────────────
type Dims = { w: number; h: number }
type MetaShape = Record<string, Record<string, Dims> | undefined>

const PHOTO_META = rawMeta as MetaShape
const LAND_DEFAULT: Dims = { w: 1500, h: 1000 }

function getDims(slug: string, oneIdx: number): Dims {
  return PHOTO_META[slug]?.[String(oneIdx)] ?? LAND_DEFAULT
}

function isPortrait(d: Dims): boolean {
  return d.h > d.w
}

function aspect(d: Dims): number {
  return d.w / d.h
}

// ── static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return photoEssays.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const essay = photoEssays.find((e) => e.slug === slug)
  if (!essay) return {}
  return { title: `${essay.title} — Photos — Dzs` }
}

// ── routing algorithm ────────────────────────────────────────────────────────
//
// Classification:
//   portrait            → b-single-v          (standalone)
//   aspect > 1.95       → b-feature-wide       (standalone, full bleed)
//   aspect < 1.60 (L)   → b-feature-tall       (standalone, centered wide)
//   aspect 1.60–1.95    → "standard"           (eligible for grouping)
//
// Greedy grouping of standard horizontals (front-to-back):
//   3 consecutive, all aspect 1.70–1.85  → b-triptych-h
//   2 consecutive standard               → b-diptych-h
//   1 standard                           → b-single-h
//
// Long-tail break (Rule 05):
//   horizStreak counts photos placed in horizontal blocks.
//   Resets on: b-single-v, b-feature-wide (natural or forced).
//   Feature-tall IS horizontal in nature and increments the streak.
//   When streak ≥ 5 and the next candidate would be standard:
//     force it to b-feature-wide (even if aspect < 1.95), streak → 0.

type PhotoClass = 'feature-wide' | 'feature-tall' | 'standard' | 'vertical'

type BlockType =
  | 'b-single-h'
  | 'b-single-v'
  | 'b-feature-wide'
  | 'b-feature-tall'
  | 'b-diptych-h'
  | 'b-triptych-h'

interface Block {
  type: BlockType
  indices: number[] // zero-based
  forced?: boolean  // feature-wide via streak break (not shown in UI)
}

function classifyPhoto(slug: string, zeroIdx: number): PhotoClass {
  const d = getDims(slug, zeroIdx + 1)
  if (isPortrait(d)) return 'vertical'
  const ar = aspect(d)
  if (ar > 1.95) return 'feature-wide'
  if (ar < 1.60) return 'feature-tall'
  return 'standard'
}

function qualifiesForTriptych(slug: string, zeroIdx: number): boolean {
  const d = getDims(slug, zeroIdx + 1)
  if (isPortrait(d)) return false
  const ar = aspect(d)
  return ar >= 1.70 && ar <= 1.85
}

function buildLayout(slug: string, count: number): Block[] {
  const cls = Array.from({ length: count }, (_, i) => classifyPhoto(slug, i))
  const blocks: Block[] = []
  let i = 0
  let horizStreak = 0

  while (i < count) {
    const c = cls[i]

    // Portrait → single-v; resets streak
    if (c === 'vertical') {
      blocks.push({ type: 'b-single-v', indices: [i] })
      horizStreak = 0
      i++
      continue
    }

    // Natural feature-wide (aspect > 1.95) → standalone; resets streak
    if (c === 'feature-wide') {
      blocks.push({ type: 'b-feature-wide', indices: [i] })
      horizStreak = 0
      i++
      continue
    }

    // Feature-tall (aspect < 1.60) → standalone; increments streak
    // (horizontal in nature — provides visual relief but counts toward streak)
    if (c === 'feature-tall') {
      blocks.push({ type: 'b-feature-tall', indices: [i] })
      horizStreak++
      i++
      continue
    }

    // Standard horizontal — check long-tail break before grouping
    if (horizStreak >= 5) {
      blocks.push({ type: 'b-feature-wide', indices: [i], forced: true })
      horizStreak = 0
      i++
      continue
    }

    const rem = count - i

    // Triptych: 3 consecutive, all aspect 1.70–1.85
    if (
      rem >= 3 &&
      cls[i + 1] === 'standard' &&
      cls[i + 2] === 'standard' &&
      qualifiesForTriptych(slug, i) &&
      qualifiesForTriptych(slug, i + 1) &&
      qualifiesForTriptych(slug, i + 2)
    ) {
      blocks.push({ type: 'b-triptych-h', indices: [i, i + 1, i + 2] })
      horizStreak += 3
      i += 3
      continue
    }

    // Diptych: 2 consecutive standard
    if (rem >= 2 && cls[i + 1] === 'standard') {
      blocks.push({ type: 'b-diptych-h', indices: [i, i + 1] })
      horizStreak += 2
      i += 2
      continue
    }

    // Single horizontal
    blocks.push({ type: 'b-single-h', indices: [i] })
    horizStreak++
    i++
  }

  return blocks
}

// ── helpers ───────────────────────────────────────────────────────────────────
function photoSrc(slug: string, zeroIdx: number): string {
  return `/photos/${slug}/${slug}-${String(zeroIdx + 1).padStart(2, '0')}.jpg`
}

function fmtAr(d: Dims): string {
  return aspect(d).toFixed(2)
}

function fmtNum(zeroIdx: number): string {
  return String(zeroIdx + 1).padStart(2, '0')
}

// Natural-sizing image: container constrains width, height follows ratio.
function NatImg({
  src,
  alt,
  dims,
  sizes,
}: {
  src: string
  alt: string
  dims: Dims
  sizes: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={dims.w}
      height={dims.h}
      sizes={sizes}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  )
}

// Minimal caption: sequence number + aspect ratio.
function Cap({ dims, zeroIdx }: { dims: Dims; zeroIdx: number }) {
  return (
    <div className="cap">
      <span className="n">{fmtNum(zeroIdx)}</span>
      <span className="ar">A {fmtAr(dims)}</span>
    </div>
  )
}

const slugOrder = ['dream', 'sea', 'oldcanton'] as const

// ── page ─────────────────────────────────────────────────────────────────────
export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const essay = photoEssays.find((e) => e.slug === slug)
  if (!essay) notFound()

  const curIdx = (slugOrder as readonly string[]).indexOf(essay.slug)
  const nextSlug = slugOrder[(curIdx + 1) % slugOrder.length]
  const nextEssay = photoEssays.find((e) => e.slug === nextSlug)!
  const blocks = buildLayout(essay.slug, essay.photoCount)

  return (
    <div>
      <div className="ph-col">
        <Nav />
      </div>

      {/* ── hero ────────────────────────────────────────────────────────── */}
      <section className="ph-hero-section">
        <div className="bg-grid bg-grid-ph-hero" aria-hidden="true">
          <div className="bg-line bg-v1" />
          <div className="bg-line bg-v2" />
          <div className="bg-line bg-h1" />
          <div className="bg-line bg-h2" />
        </div>
        <div className="ph-accent-cell ph-accent-cell-red" aria-hidden="true" />
        <div className="ph-accent-cell ph-accent-cell-blue" aria-hidden="true" />
        <div className="ph-col">
          <p className="caption">
            {essay.subtitle}&nbsp;&nbsp;/&nbsp;&nbsp;影像
          </p>
          <h1 className="ph-hero-title">{essay.title}</h1>
          <div className="ph-intro">
            {essay.intro.split('\n\n').map((para, pi) => (
              <p key={pi}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── sequence ────────────────────────────────────────────────────── */}
      <div className="ph-magazine">
        {blocks.map((block, bi) => {
          const { type, indices } = block

          // b-single-h ─────────────────────────────────────────────────────
          if (type === 'b-single-h') {
            const idx = indices[0]
            const d = getDims(essay.slug, idx + 1)
            return (
              <section key={bi} className="block b-single-h">
                <NatImg
                  src={photoSrc(essay.slug, idx)}
                  alt={`${essay.subtitle} — ${fmtNum(idx)}`}
                  dims={d}
                  sizes="min(96vw, 1600px)"
                />
                <Cap dims={d} zeroIdx={idx} />
              </section>
            )
          }

          // b-single-v ─────────────────────────────────────────────────────
          if (type === 'b-single-v') {
            const idx = indices[0]
            const d = getDims(essay.slug, idx + 1)
            return (
              <section key={bi} className="block b-single-v">
                <NatImg
                  src={photoSrc(essay.slug, idx)}
                  alt={`${essay.subtitle} — ${fmtNum(idx)}`}
                  dims={d}
                  sizes="(max-width: 480px) 88vw, (max-width: 768px) 80vw, min(50vw, 640px)"
                />
                <Cap dims={d} zeroIdx={idx} />
              </section>
            )
          }

          // b-feature-wide (natural or forced) ─────────────────────────────
          if (type === 'b-feature-wide') {
            const idx = indices[0]
            const d = getDims(essay.slug, idx + 1)
            return (
              <section key={bi} className="block b-feature-wide">
                <NatImg
                  src={photoSrc(essay.slug, idx)}
                  alt={`${essay.subtitle} — ${fmtNum(idx)}`}
                  dims={d}
                  sizes="100vw"
                />
                <div className="meta-row">
                  <span><b>{fmtNum(idx)}</b></span>
                  <span>A {fmtAr(d)}</span>
                </div>
              </section>
            )
          }

          // b-feature-tall ──────────────────────────────────────────────────
          if (type === 'b-feature-tall') {
            const idx = indices[0]
            const d = getDims(essay.slug, idx + 1)
            return (
              <section key={bi} className="block b-feature-tall">
                <NatImg
                  src={photoSrc(essay.slug, idx)}
                  alt={`${essay.subtitle} — ${fmtNum(idx)}`}
                  dims={d}
                  sizes="(max-width: 768px) 92vw, min(75vw, 1200px)"
                />
                <Cap dims={d} zeroIdx={idx} />
              </section>
            )
          }

          // b-diptych-h ─────────────────────────────────────────────────────
          if (type === 'b-diptych-h') {
            return (
              <section key={bi} className="block b-diptych-h">
                {indices.map((idx) => {
                  const d = getDims(essay.slug, idx + 1)
                  return (
                    <div key={idx}>
                      <NatImg
                        src={photoSrc(essay.slug, idx)}
                        alt={`${essay.subtitle} — ${fmtNum(idx)}`}
                        dims={d}
                        sizes="(max-width: 768px) 94vw, 48vw"
                      />
                      <Cap dims={d} zeroIdx={idx} />
                    </div>
                  )
                })}
              </section>
            )
          }

          // b-triptych-h ────────────────────────────────────────────────────
          if (type === 'b-triptych-h') {
            return (
              <section key={bi} className="block b-triptych-h">
                {indices.map((idx) => {
                  const d = getDims(essay.slug, idx + 1)
                  return (
                    <div key={idx}>
                      <NatImg
                        src={photoSrc(essay.slug, idx)}
                        alt={`${essay.subtitle} — ${fmtNum(idx)}`}
                        dims={d}
                        sizes="(max-width: 768px) 94vw, 31vw"
                      />
                      <Cap dims={d} zeroIdx={idx} />
                    </div>
                  )
                })}
              </section>
            )
          }

          return null
        })}
      </div>

      {/* ── essay nav ───────────────────────────────────────────────────── */}
      <nav className="ph-essay-nav" aria-label="Essay navigation">
        <Link href="/photos">← Photos index</Link>
        <Link href={`/photos/${nextSlug}`}>
          {nextEssay.subtitle}&nbsp;→
        </Link>
      </nav>

      <div className="ph-col">
        <Footer />
      </div>
    </div>
  )
}
