import { Link } from 'react-router-dom'

export default function ProjectCard({ title, role, description, tech = [], impact, link, linkTo, linkText, repos = [] }) {
  return (
    <div className="group mb-5 sm:mb-6 last:mb-0 p-3 sm:p-4 rounded-lg hover:bg-secondary/30 transition-all duration-300 hover:translate-x-1 overflow-hidden">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300 min-w-0">
          {title}
        </h3>
        {role && (
          <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shrink-0 mt-0.5">
            {role}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>

      {tech.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {repos.length > 0 && (
        <div className="grid grid-cols-2 gap-1.5 mt-2">
          {repos.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline inline-block"
            >
              {r.label}
            </a>
          ))}
        </div>
      )}

      {linkTo && repos.length === 0 && (
        <Link
          to={linkTo}
          className="text-sm text-primary hover:underline mt-2 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          {linkText || linkTo}
        </Link>
      )}

      {/* If both `link` and `linkTo` are provided, `linkTo` takes precedence and `link` is intentionally ignored. */}
      {link && !linkTo && repos.length === 0 && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline mt-2 inline-block relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
          {linkText || link}
        </a>
      )}
    </div>
  )
}
