export default function SkillBadge({ children, className }) {
  return (
    <span
      className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full border transition-all duration-300 [@media(hover:hover)]:hover:scale-105 [@media(hover:hover)]:hover:shadow-lg cursor-default ${
        className || 'bg-secondary text-foreground border-border hover:border-primary/50 [@media(hover:hover)]:hover:shadow-primary/20'
      }`}
    >
      {children}
    </span>
  )
}
