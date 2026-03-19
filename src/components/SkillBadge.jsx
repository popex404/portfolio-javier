export default function SkillBadge({ children }) {
  return (
    <span className="inline-block px-3 py-1.5 text-xs font-semibold bg-secondary text-foreground rounded-full border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-default">
      {children}
    </span>
  )
}
