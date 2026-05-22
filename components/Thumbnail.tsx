import type { ThumbnailStyle } from '@/data/projects'

export function Thumbnail({ style }: { style: ThumbnailStyle }) {
  return (
    <div className="thumb" aria-hidden="true">
      {style === 'horizon' && <HorizonSvg />}
      {style === 'rules' && <RulesSvg />}
      {style === 'dots' && <DotsSvg />}
    </div>
  )
}

function HorizonSvg() {
  return (
    <svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="thumb-g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2f2f4" />
          <stop offset="1" stopColor="#e6e6ea" />
        </linearGradient>
      </defs>
      <rect width="160" height="120" fill="url(#thumb-g1)" />
      <rect x="0" y="78" width="160" height="0.5" fill="rgba(0,0,0,0.12)" />
      <circle cx="110" cy="60" r="14" fill="#fff" opacity="0.9" />
    </svg>
  )
}

function RulesSvg() {
  return (
    <svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice">
      <rect width="160" height="120" fill="#f3f3f5" />
      <g stroke="rgba(0,0,0,0.18)" strokeWidth="0.5">
        <line x1="20" y1="34" x2="140" y2="34" />
        <line x1="20" y1="50" x2="116" y2="50" />
        <line x1="20" y1="66" x2="128" y2="66" />
        <line x1="20" y1="82" x2="92" y2="82" />
      </g>
      <rect x="20" y="22" width="36" height="4" fill="#1d1d1f" />
    </svg>
  )
}

function DotsSvg() {
  const xs = [28, 46, 64, 82, 100, 118, 136]
  const ys = [28, 46, 64, 82]
  return (
    <svg viewBox="0 0 160 120" preserveAspectRatio="xMidYMid slice">
      <rect width="160" height="120" fill="#f5f5f7" />
      <g fill="rgba(0,0,0,0.22)">
        {ys.flatMap((y) =>
          xs.map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" />)
        )}
        <circle cx="82" cy="64" r="3.5" fill="#1d1d1f" />
      </g>
    </svg>
  )
}
