import { Link } from 'react-router-dom'
import { ArrowLeft, FileText, Download, Monitor } from 'lucide-react'

export default function CV() {
  const googleDocsUrl = 'https://docs.google.com/document/d/1ev4FiZ4OdNqwHGf1pMAtxq6utbrNKhM0/edit?usp=sharing'
  const pdfUrl = 'https://docs.google.com/document/d/1ev4FiZ4OdNqwHGf1pMAtxq6utbrNKhM0/export?format=pdf'

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <Link to="/">
          <button className="mb-8 flex items-center gap-2 px-4 py-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/20 transition-all animate-fade-in">
            <ArrowLeft className="w-4 h-4" />
            Volver al Portfolio
          </button>
        </Link>

        <div className="text-center mb-12 animate-slide-in-left">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 animate-float">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            Curriculum Vitae
          </h1>
          <p className="text-muted-foreground">Analista de Datos · Blockchain & SQL</p>
        </div>

        <div
          className="bg-card border border-border rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50 animate-fade-in"
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-2">Javier García</h2>
              <p className="text-muted-foreground">Analista de Datos · Blockchain & SQL · Computer Science</p>
            </div>

            <p className="text-sm text-muted-foreground text-center max-w-md">
              Haz clic en "Ver CV" para abrir en Google Docs o "Descargar PDF" para guardar una copia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={googleDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md border border-border hover:bg-accent/10 hover:border-primary/50 transition-all duration-200 group hover:scale-105"
              >
                <FileText className="w-4 h-4 group-hover:text-primary transition-colors" />
                Ver CV
              </a>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Download className="w-4 h-4" />
                Descargar PDF
              </a>
            </div>

            <div className="w-full border-t border-border pt-4">
              <p className="text-xs text-muted-foreground text-center mb-3">También disponible como versión web interactiva</p>
              <Link
                to="/cv-digital"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-md border border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-200"
              >
                <Monitor className="w-4 h-4" />
                Ver CV Digital
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
