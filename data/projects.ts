export type ThumbnailId = 'xiaosuda' | 'hermes' | 'personal-site' | 'screenpipe'

export type Project = {
  title: string
  description: string
  tag: string
  href: string
  thumbnail: ThumbnailId
}

export const projects: Project[] = [
  {
    title: '小苏哒 — Live2D virtual streamer',
    description:
      'A Live2D-based virtual streamer with custom lip-sync, GPT-SoVITS voice synthesis, and a multi-source input separation pipeline.',
    tag: '2026  ·  Python, Live2D, GPT-SoVITS',
    href: '#',
    thumbnail: 'xiaosuda',
  },
  {
    title: 'Hermes gateway — MCP routing layer',
    description:
      'A WSL-based MCP gateway with systemd auto-start, providing unified config and multi-LLM routing across Bailian, OpenRouter, and ZAI providers.',
    tag: '2026  ·  MCP, Agent, WSL',
    href: '#',
    thumbnail: 'hermes',
  },
  {
    title: 'This site — Next.js portfolio',
    description:
      'A continuously-evolving portfolio with MDX writing, a three-track résumé switcher, and a Mondrian-inspired hero. Built in public.',
    tag: '2026  ·  Next.js, Tailwind v4, MDX',
    href: '#',
    thumbnail: 'personal-site',
  },
  {
    title: 'Screenpipe integration — 28 MCP tools',
    description:
      "Integrated Screenpipe's screen-recording engine into Hermes as 28 MCP tools, solving WSL-to-Windows network routing with custom host config and a Windows scheduled task for auto-start.",
    tag: '2026  ·  MCP, WSL, Windows',
    href: '#',
    thumbnail: 'screenpipe',
  },
]
