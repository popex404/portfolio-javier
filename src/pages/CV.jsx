import { Download, FileText, Mail, MapPin, Github, ExternalLink, Twitter, Phone } from 'lucide-react'
import { useLang } from '../context/LangContext'
import { content } from '../data/content'

function SectionTitle({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-xs uppercase tracking-widest font-semibold text-primary mb-1">
        {children}
      </h2>
      <div className="h-px bg-border" />
    </div>
  )
}

export default function CV() {
  const { lang } = useLang()
  const t = content[lang].cv

  const googleDocsUrl = `https://drive.google.com/file/d/${t.driveId}/view?usp=sharing`
  const pdfUrl = `https://drive.google.com/uc?export=download&id=${t.driveId}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">

      {/* Sticky action bar */}
      <div className="sticky top-12 z-30 bg-background/95 border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2 flex justify-end gap-2">
          <a
            href={googleDocsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md border border-border hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
          >
            <FileText className="w-4 h-4" />
            {t.viewCvLabel}
          </a>
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{t.downloadLabel} </span>{t.downloadShort}
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Info card */}
        <div className="bg-card border border-border rounded-lg px-6 py-4 mb-6 animate-fade-in flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Javier García</h2>
            <p className="text-sm text-muted-foreground">{t.infoSubtitle}</p>
          </div>
          <p className="text-xs text-muted-foreground sm:text-right max-w-xs">
            {t.infoHint}
          </p>
        </div>

        {/* CV Card */}
        <div className="bg-card/80 border border-border rounded-xl shadow-xl animate-fade-in">

          {/* Header */}
          <div className="px-4 sm:px-8 pt-6 sm:pt-8 pb-6 border-b border-border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
              Javier García Pinilla
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground mt-3">
              <a href="tel:+56967481782" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                +56 9 6748 1782
              </a>
              <a href="mailto:javiergarciapinilla95@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors break-all">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                javiergarciapinilla95@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Valparaíso, Chile
              </span>
              <a href="https://github.com/popex404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Github className="w-3.5 h-3.5" />
                popex404
              </a>
              <a href="https://linkedin.com/in/javier-garcia-popex404/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
                LinkedIn
              </a>
              <a href="https://x.com/Popex404" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Twitter className="w-3.5 h-3.5" />
                @Popex404
              </a>
            </div>
          </div>

          <div className="px-4 sm:px-8 py-5 sm:py-6 space-y-7">

            {/* Intro */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              {t.intro}
            </p>

            {/* Experience */}
            <section>
              <SectionTitle>{t.sections.experience}</SectionTitle>
              <div className="space-y-5">
                {t.experience.map((job) => (
                  <div key={job.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-0.5">
                      <span className="font-semibold text-foreground">{job.company}</span>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-2">
                      <span className="text-sm text-primary italic">{job.role}</span>
                      <span className="text-sm text-muted-foreground italic">{job.location}</span>
                    </div>
                    <ul className="space-y-1">
                      {job.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                          <span className="text-primary mt-1.5 shrink-0">·</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Certifications */}
            <section>
              <SectionTitle>{t.sections.certifications}</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {t.certifications.map((cert) => (
                  <p key={cert} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">·</span>
                    {cert}
                  </p>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle>{t.sections.education}</SectionTitle>
              <div className="space-y-3">
                {t.education.map((ed) => (
                  <div key={ed.institution}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5 mb-0.5">
                      <span className="font-semibold text-foreground">{ed.institution}</span>
                      <span className="text-sm text-muted-foreground">{ed.period}</span>
                    </div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                      <span className="text-sm text-primary italic">{ed.degree}</span>
                      <span className="text-sm text-muted-foreground italic">{ed.location}</span>
                    </div>
                    {ed.note && (
                      <p className="text-xs text-muted-foreground mt-1 italic">{ed.note}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <SectionTitle>{t.sections.skills}</SectionTitle>
              <div className="space-y-2">
                {Object.entries(t.skills).map(([label, value]) => (
                  <div key={label} className="flex flex-col sm:flex-row gap-0.5 sm:gap-3 text-sm">
                    <span className="font-semibold text-foreground sm:w-28 sm:shrink-0">{label}</span>
                    <span className="text-muted-foreground leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  )
}
