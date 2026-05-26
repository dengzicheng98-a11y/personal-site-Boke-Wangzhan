import type { ThumbnailId } from '@/data/projects'

export function Thumbnail({ id }: { id: ThumbnailId }) {
  return (
    <div className="thumb" aria-hidden="true">
      {id === 'xiaosuda' && <XiaoSudaSvg />}
      {id === 'hermes' && <HermesSvg />}
      {id === 'personal-site' && <PersonalSiteSvg />}
      {id === 'screenpipe' && <ScreenpipeSvg />}
    </div>
  )
}

function XiaoSudaSvg() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="proj-svg" aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="1.5">
        <circle cx="140" cy="125" r="42" />
        <path d="M 95 215 Q 95 175 140 175 Q 185 175 185 215" />
        <path d="M 168 117 A 40 40 0 0 1 168 173" opacity="0.7" />
        <path d="M 189 96 A 70 70 0 0 1 189 194" opacity="0.45" />
        <path d="M 211 74 A 100 100 0 0 1 211 216" opacity="0.25" />
      </g>
      <ellipse cx="140" cy="145" rx="11" ry="5" fill="#d40000" />
    </svg>
  )
}

function HermesSvg() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="proj-svg" aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="1">
        <line x1="228.5" y1="159.3" x2="309.4" y2="185.5" />
        <line x1="217.6" y1="174.3" x2="267.6" y2="243" />
        <line x1="200" y1="180" x2="200" y2="265" />
        <line x1="182.4" y1="174.3" x2="132.4" y2="243" />
        <line x1="171.5" y1="159.3" x2="90.6" y2="185.5" />
        <line x1="171.5" y1="140.7" x2="90.6" y2="114.5" />
        <line x1="182.4" y1="125.7" x2="132.4" y2="57" />
        <line x1="200" y1="120" x2="200" y2="35" />
        <line x1="217.6" y1="125.7" x2="267.6" y2="57" />
        <line x1="228.5" y1="140.7" x2="309.4" y2="114.5" />
      </g>
      <rect x="180" y="130" width="40" height="40" fill="#0050a0" />
      <g fill="currentColor">
        <circle cx="309.4" cy="185.5" r="3" />
        <circle cx="267.6" cy="243" r="3" />
        <circle cx="200" cy="265" r="3" />
        <circle cx="132.4" cy="243" r="3" />
        <circle cx="90.6" cy="185.5" r="3" />
        <circle cx="90.6" cy="114.5" r="3" />
        <circle cx="132.4" cy="57" r="3" />
        <circle cx="200" cy="35" r="3" />
        <circle cx="267.6" cy="57" r="3" />
        <circle cx="309.4" cy="114.5" r="3" />
      </g>
      <text x="200" y="158" textAnchor="middle" fontSize="22" fontFamily="monospace" fontWeight="500" fill="#fff">H</text>
    </svg>
  )
}

function PersonalSiteSvg() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="proj-svg" aria-hidden="true">
      <rect x="60" y="50" width="280" height="200" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <line x1="60" y1="72" x2="340" y2="72" stroke="currentColor" strokeWidth="1" />
      <circle cx="76" cy="61" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="90" cy="61" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="104" cy="61" r="3" fill="currentColor" opacity="0.4" />
      <rect x="60" y="72" width="160" height="100" fill="#d40000" />
      <rect x="220" y="122" width="120" height="50" fill="#f7d108" />
      <rect x="220" y="172" width="120" height="78" fill="#0050a0" />
      <line x1="60" y1="172" x2="340" y2="172" stroke="#000" strokeWidth="3" />
      <line x1="220" y1="72" x2="220" y2="250" stroke="#000" strokeWidth="3" />
      <line x1="220" y1="122" x2="340" y2="122" stroke="#000" strokeWidth="3" />
    </svg>
  )
}

function ScreenpipeSvg() {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="proj-svg" aria-hidden="true">
      <g stroke="currentColor" fill="none" strokeWidth="1.5">
        <rect x="50" y="80" width="140" height="100" />
        <rect x="58" y="88" width="124" height="84" strokeWidth="0.5" opacity="0.5" />
        <line x1="120" y1="180" x2="120" y2="195" />
        <line x1="100" y1="195" x2="140" y2="195" />
        <line x1="210" y1="130" x2="246" y2="130" />
      </g>
      <path d="M 240 124 L 252 130 L 240 136 Z" fill="currentColor" />
      <g stroke="currentColor" fill="none" strokeWidth="1">
        <rect x="266" y="80" width="20" height="20" />
        <rect x="322" y="80" width="20" height="20" />
        <rect x="350" y="80" width="20" height="20" />
        <rect x="266" y="108" width="20" height="20" />
        <rect x="322" y="108" width="20" height="20" />
        <rect x="350" y="108" width="20" height="20" />
        <rect x="266" y="136" width="20" height="20" />
        <rect x="294" y="136" width="20" height="20" />
        <rect x="322" y="136" width="20" height="20" />
        <rect x="350" y="136" width="20" height="20" />
        <rect x="266" y="164" width="20" height="20" />
        <rect x="294" y="164" width="20" height="20" />
        <rect x="322" y="164" width="20" height="20" />
        <rect x="350" y="164" width="20" height="20" />
      </g>
      <rect x="294" y="80" width="20" height="20" fill="#f7d108" />
      <rect x="294" y="108" width="20" height="20" fill="#f7d108" />
    </svg>
  )
}
