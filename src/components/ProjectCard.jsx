export default function ProjectCard({ title, role, description, tech = [], impact, link, linkText }) {
  return (
    <div className="group mb-6 last:mb-0 p-4 rounded-lg hover:bg-secondary/30 transition-all duration-300 hover:translate-x-1">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-all duration-300">
          {title}
        </h3>
        {role && (
          <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20 shrink-0">
            {role}
          </span>
        )}
      </div>

      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>

      {impact && (
        <p className="text-sm text-primary font-semibold mt-2">{impact}</p>
      )}

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

      {link && (
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
