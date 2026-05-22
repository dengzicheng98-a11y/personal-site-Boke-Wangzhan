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
    title: 'Marginal — a writing surface for thinking with models',
    description:
      'A long-form editor that treats the model as a margin reader, not a chat partner. Annotations stay quiet until summoned, and never overwrite your prose.',
    tag: '2026  ·  product, eng  ·  swift, ts',
    href: '#',
    thumbnail: 'horizon',
  },
  {
    title: 'Quiet Hours — a focus app that asks nothing of you',
    description:
      'No streaks, no graphs, no rewards. Just a small clock that fades the rest of your screen and stops when you stop. Shipped on macOS and iPadOS.',
    tag: '2025  ·  solo  ·  swiftui',
    href: '#',
    thumbnail: 'rules',
  },
  {
    title: 'Field Notes — design tokens for ambient interfaces',
    description:
      'An open kit of motion, type, and color primitives for software that lives at the edge of attention. Used by a handful of small teams building agent-shaped tools.',
    tag: '2024  ·  open source  ·  figma, css',
    href: '#',
    thumbnail: 'dots',
  },
]
