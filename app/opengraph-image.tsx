import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

async function loadFont() {
  const css = await fetch(
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@700&display=swap',
    { headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120' } }
  ).then(r => r.text()).catch(() => '')
  const url = css.match(/src: url\((.+?)\) format\('woff2'\)/)?.[1]
  if (!url) return null
  return fetch(url).then(r => r.arrayBuffer()).catch(() => null)
}

export default async function OG() {
  const fontData = await loadFont()

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#ffffff',
          display: 'flex',
          position: 'relative',
          fontFamily: "'Noto Sans SC', sans-serif",
        }}
      >
        {/* outer border */}
        <div style={{ position: 'absolute', inset: 0, border: '6px solid #000', display: 'flex' }} />

        {/* left strip: red / white / blue */}
        <div style={{ width: 120, height: 630, display: 'flex', flexDirection: 'column', borderRight: '6px solid #000', flexShrink: 0 }}>
          <div style={{ flex: 2, background: '#d32f2f' }} />
          <div style={{ height: 6, background: '#000' }} />
          <div style={{ flex: 1, background: '#ffffff' }} />
          <div style={{ height: 6, background: '#000' }} />
          <div style={{ flex: 2, background: '#1e40af' }} />
        </div>

        {/* center content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px' }}>
          <div style={{ fontSize: 100, fontWeight: 700, color: '#1d1d1f', letterSpacing: '-3px', lineHeight: 1.1, marginBottom: 28 }}>
            邓梓晟
          </div>
          <div style={{ fontSize: 30, color: '#6e6e73', letterSpacing: '1px', lineHeight: 1.5 }}>
            建筑设计 × AI 产品 / 全栈开发
          </div>
        </div>

        {/* right strip: yellow / white */}
        <div style={{ width: 80, height: 630, display: 'flex', flexDirection: 'column', borderLeft: '6px solid #000', flexShrink: 0 }}>
          <div style={{ flex: 2, background: '#f9a825' }} />
          <div style={{ height: 6, background: '#000' }} />
          <div style={{ flex: 3, background: '#ffffff' }} />
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData ? { fonts: [{ name: 'Noto Sans SC', data: fontData, weight: 700 as const, style: 'normal' as const }] } : {}),
    }
  )
}
