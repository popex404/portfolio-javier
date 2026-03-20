import { useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLang } from '../context/LangContext'

const linksES = [
  { to: '/', label: 'Inicio' },
  { to: '/dashboards', label: 'Dashboards' },
  { to: '/cv', label: 'CV' },
]

const linksEN = [
  { to: '/en', label: 'Home' },
  { to: '/en/dashboards', label: 'Dashboards' },
  { to: '/en/cv', label: 'CV' },
]

// Maps ES routes to their EN equivalents and vice versa
const ES_TO_EN = {
  '/': '/en',
  '/dashboards': '/en/dashboards',
  '/cv': '/en/cv',
}
const EN_TO_ES = {
  '/en': '/',
  '/en/dashboards': '/dashboards',
  '/en/cv': '/cv',
}

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang } = useLang()
  const navigate = useNavigate()
  const location = useLocation()

  const links = lang === 'en' ? linksEN : linksES

  function handleLangToggle(targetLang) {
    if (targetLang === lang) return
    setLang(targetLang)
    const current = location.pathname
    if (targetLang === 'en') {
      // Find matching EN route or fall back to /en
      const target = ES_TO_EN[current] ?? '/en'
      navigate(target)
    } else {
      // Find matching ES route or fall back to /
      const target = EN_TO_ES[current] ?? '/'
      navigate(target)
    }
  }

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">

        {/* Logo */}
        <Link
          to={lang === 'en' ? '/en' : '/'}
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          Javier García
        </Link>

        {/* Desktop links + lang toggle */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? 'text-primary bg-primary/10 font-medium'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Language toggle */}
          <div className="flex items-center gap-0.5 ml-2 border border-border rounded-md overflow-hidden">
            <button
              onClick={() => handleLangToggle('es')}
              aria-pressed={lang === 'es'}
              className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === 'es'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => handleLangToggle('en')}
              aria-pressed={lang === 'en'}
              className={`px-2.5 py-1 text-xs font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent/10'
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile: compact row */}
        <div className="flex sm:hidden items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              className={({ isActive }) =>
                `px-2 py-1 min-h-[44px] flex items-center rounded text-xs transition-colors ${
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`
              }
            >
              {label}
            </NavLink>
          ))}

          {/* Language toggle — mobile */}
          <div className="flex items-center gap-0 ml-1 border border-border rounded-md overflow-hidden">
            <button
              onClick={() => handleLangToggle('es')}
              aria-pressed={lang === 'es'}
              className={`px-2 min-h-[44px] flex items-center text-xs font-medium transition-colors ${
                lang === 'es'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              ES
            </button>
            <button
              onClick={() => handleLangToggle('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 min-h-[44px] flex items-center text-xs font-medium transition-colors ${
                lang === 'en'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
          </div>
        </div>

      </div>
    </nav>
  )
}
