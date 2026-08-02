import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'stack' },
  { href: '#projects', label: 'projects' },
  { href: '#certifications', label: 'certs' },
  { href: '#contact', label: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/90 backdrop-blur border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold text-paper tracking-tight">
          jay<span className="text-violet">.</span>vaghela
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono tag-pill text-mist">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-teal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-paper"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden bg-ink border-b border-border px-6 pb-6 flex flex-col gap-4 font-mono tag-pill text-mist">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="hover:text-teal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
