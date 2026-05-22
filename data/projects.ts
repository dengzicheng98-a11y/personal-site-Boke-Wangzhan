export type ThumbnailStyle = 'horizon' | 'rules' | 'dots'

export type Project = {
  title: string
  description: string
  tag: string
  href: string
  thumbnail: ThumbnailStyle
}

export const projects: Project[] = [
  {
    title: '小苏哒 — Live2D virtual streamer',
    description:
      'A Live2D-based virtual streamer with custom lip-sync, GPT-SoVITS voice synthesis, and a multi-source input separation pipeline.',
    tag: '2026  ·  Python, Live2D, GPT-SoVITS',
    href: '#',
    thumbnail: 'horizon',
  },
  {
    title: 'Hermes gateway — MCP integration layer',
    description:
      'An MCP gateway integrating 28 tools across desktop automation, screen recording, and multi-LLM providers — runs as a WSL service with systemd auto-start.',
    tag: '2026  ·  MCP, Agent, WSL',
    href: '#',
    thumbnail: 'rules',
  },
  {
    title: 'Xiaohongshu auto — Posting automation skill',
    description:
      'Desktop automation for Xiaohongshu publishing, with a clipboard bridge that solved CJK input corruption in keyboard-send APIs.',
    tag: '2026  ·  PowerShell, Automation',
    href: '#',
    thumbnail: 'dots',
  },
  {
    title: 'Bilingual subtitles — Streaming overlay extension',
    description:
      'A Chrome MV3 extension adding AI bilingual subtitles to YouTube, Netflix, Disney+, and HBO Max — handles per-platform fullscreen quirks.',
    tag: '2026  ·  Chrome MV3, LLM',
    href: '#',
    thumbnail: 'horizon',
  },
]
