import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/dashboards', label: 'Dashboards' },
  { to: '/cv', label: 'CV' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">

        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          Javier García
        </Link>

        {/* Desktop links */}
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
        </div>

        {/* Mobile: compact row or hamburger — using compact row for 3 items */}
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
        </div>

      </div>
    </nav>
  )
}
