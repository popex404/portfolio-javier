import { Link } from 'react-router-dom'
import { ArrowLeft, Download, FileText, Mail, MapPin, Github, ExternalLink, Twitter } from 'lucide-react'

const experience = [
  {
    company: 'Duran Alta Gestión SPA',
    period: '2025 – 2026',
    role: 'Consultor de Servicios TI',
    location: 'El Melón, Chile',
    bullets: [
      'Diseñó plantillas de Excel y estandarizó flujos de trabajo para resolver errores frecuentes en hojas de cálculo, mejorando la precisión de los datos y reduciendo la dependencia del soporte TI.',
      'Elaboró guías de resolución de problemas que permitieron al equipo contable gestionar fallas comunes de forma autónoma, aumentando la eficiencia operativa.',
    ],
  },
  {
    company: 'FlipsideCrypto',
    period: '2021 – 2025',
    role: 'Analista de Datos Blockchain',
    location: 'Remoto',
    bullets: [
      'Construyó dashboards interactivos y modelos de datos para clarificar información on-chain compleja, facilitando la interpretación de métricas clave y la toma de decisiones.',
      'Preparó informes y análisis accesibles para audiencias diversas, incrementando el interés del público y las visitas a los sitios web asociados.',
    ],
  },
  {
    company: 'GSG Group',
    period: '2019 – 2021',
    role: 'Asistente Ejecutivo',
    location: 'Remoto',
    bullets: [
      'Gestionó calendarios, coordinación de reuniones y flujos operativos para ejecutivos de nivel C, optimizando su disponibilidad y el orden interno de la organización.',
      'Mejoró plantillas administrativas en Excel y optimizó procesos internos, permitiendo una comunicación más clara y seguimiento eficiente de tareas.',
    ],
  },
]

const certifications = [
  'Análisis de datos · Google Coursera',
  'Análisis de datos avanzado · SENCE',
  'Gestión de proyectos · Google Coursera',
  'Ciencia de datos · Alura Latam',
  'Inteligencia artificial y productividad · Google',
  'Análisis de blockchain · CovalentHQ',
  'Marketing y SEO · Santander Open Academy',
  'Power BI Masterclass · Alura Latam',
  'Certificado inglés C1 · EF SET',
  'Power BI + IA · Daxus Latam',
  'Asistente administrativo · Pareto Talent',
  'Oracle Cloud Foundations · Oracle',
  'Hackathon Alura Latam ONE · No Country',
]

const skills = {
  Software: 'SQL · Python · Google Workspace · Microsoft Office · Power BI · Tableau · LLMs · GitHub · SAP',
  Metodologías: 'Gestión de Proyectos · Scrum · Kanban · Diagramas RACI · Gantt · Metodologías Ágiles y en Cascada',
  Idiomas: 'Español nativo · Inglés C1 (Avanzado)',
}

const education = [
  {
    institution: 'Universidad de Chile',
    period: '2014 – 2020',
    degree: 'Ingeniería Civil en Ciencias de la Computación',
    location: 'Santiago, Chile',
    note: 'Plan Común aprobado + cursos de especialización (estudios incompletos)',
  },
  {
    institution: 'Colegio Cervantino',
    period: '2009 – 2013',
    degree: 'Certificado de Enseñanza Media',
    location: 'Putaendo, Chile',
  },
]

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
  const googleDocsUrl = 'https://drive.google.com/file/d/1mAlIksGz3oTgTRAeDdt7E0D1AWCZ6TwL/view?usp=sharing'
  const pdfUrl = 'https://drive.google.com/uc?export=download&id=1mAlIksGz3oTgTRAeDdt7E0D1AWCZ6TwL'

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

        {/* Nav */}
        <div className="flex items-center justify-between mb-6 animate-fade-in">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Link>
          <div className="flex gap-2">
            <a
              href={googleDocsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-border hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
            >
              <FileText className="w-4 h-4" />
              Ver CV
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" />
              Descargar PDF
            </a>
          </div>
        </div>

        {/* Info card */}
        <div className="bg-card border border-border rounded-lg px-6 py-4 mb-6 animate-fade-in flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Javier García</h2>
            <p className="text-sm text-muted-foreground">Analista de Datos · Blockchain & SQL · Computer Science</p>
          </div>
          <p className="text-xs text-muted-foreground sm:text-right max-w-xs">
            Haz clic en "Ver CV" para abrir en Google Drive o "Descargar PDF" para guardar una copia.
          </p>
        </div>

        {/* CV Card */}
        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl shadow-xl animate-fade-in">

          {/* Header */}
          <div className="px-8 pt-8 pb-6 border-b border-border text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
              Javier García Pinilla
            </h1>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-3">
              <a href="mailto:javiergarciapinilla95@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" />
                javiergarciapinilla95@gmail.com
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                La Calera, Chile
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

          <div className="px-8 py-6 space-y-7">

            {/* Intro */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Analista de datos con formación en Ingeniería Civil en Ciencias de la Computación
              y más de 6 años de trayectoria en análisis de datos, blockchain y gestión de proyectos.
              Especializado en SQL, Python, Google Workspace, Microsoft Office y LLMs.
              Top analista en Flipside Crypto y Data Alchemist en CovalentHQ.
              Orientado al detalle, aprendizaje rápido y toma de decisiones basada en datos.
            </p>

            {/* Experiencia */}
            <section>
              <SectionTitle>Experiencia</SectionTitle>
              <div className="space-y-5">
                {experience.map((job) => (
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

            {/* Certificaciones */}
            <section>
              <SectionTitle>Certificaciones</SectionTitle>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
                {certifications.map((cert) => (
                  <p key={cert} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                    <span className="text-primary shrink-0">·</span>
                    {cert}
                  </p>
                ))}
              </div>
            </section>

            {/* Educación */}
            <section>
              <SectionTitle>Educación</SectionTitle>
              <div className="space-y-3">
                {education.map((ed) => (
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

            {/* Habilidades */}
            <section>
              <SectionTitle>Habilidades</SectionTitle>
              <div className="space-y-2">
                {Object.entries(skills).map(([label, value]) => (
                  <div key={label} className="flex gap-3 text-sm">
                    <span className="font-semibold text-foreground w-28 shrink-0">{label}</span>
                    <span className="text-muted-foreground leading-relaxed">{value}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6 mb-4">
          +56 9 6748 1782 · La Calera, Valparaíso, Chile
        </p>
      </div>
    </div>
  )
}
