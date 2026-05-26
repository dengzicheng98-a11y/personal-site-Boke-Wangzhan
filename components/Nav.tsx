import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'

export function Nav() {
  return (
    <nav className="top" aria-label="Primary">
      <Link href="/" className="brand">Dzs</Link>
      <ul>
        <li><Link href="/#work">Work</Link></li>
        <li><Link href="/#writing">Writing</Link></li>
        <li><Link href="/photos">Photos</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  )
}
