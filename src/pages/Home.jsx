import { Link } from 'react-router-dom'
import { Mail, MapPin, FileText, ExternalLink, Github, Twitter, Send } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'

const contacts = [
  { icon: MapPin, label: 'Valparaíso, Chile' },
  { icon: Mail, label: 'javiergarciapinilla95@gmail.com' },
]

const projects = [
  {
    title: 'ChurnInsight',
    role: 'Data Scientist',
    description: 'Modelos de ML para predicción de churn en hackathon Alura LATAM + No Country (126h). Construí y evalué múltiples modelos de predicción, seleccionando el de mejor rendimiento para un equipo que completó la entrega exitosamente.',
    tech: ['Python', 'Machine Learning', 'Google Colab', 'GitHub'],
    impact: 'Hackathon Prevención de Churn · Dic 2025 – Ene 2026',
    link: 'https://github.com/popex404',
    linkText: 'github.com/popex404',
  },
  {
    title: 'Blockchain Analytics',
    role: 'Data Analyst',
    description: 'Dashboards interactivos con métricas clave para proyectos blockchain. Análisis de macrodatos on-chain con SQL en plataformas como Flipside Crypto y CovalentHQ.',
    tech: ['SQL', 'Blockchain', 'Tableau', 'BigQuery', 'Snowflake'],
    impact: 'Top analista Flipside Crypto · Data Alchemist CovalentHQ',
    link: 'https://github.com/popex404',
    linkText: 'github.com/popex404',
  },
  {
    title: 'Proyecto IC-FA',
    role: 'Web Developer',
    description: 'Landing page para A&C, empresa de control de plagas certificada SEREMI en Valparaíso. Diseño mobile-first con framework Hormozi, sello de garantía y SEO local.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    link: 'https://github.com/popex404',
    linkText: 'github.com/popex404',
  },
]

const skills = [
  'SQL',
  'Python',
  'Data Analysis',
  'JavaScript',
  'Blockchain',
  'Tableau',
  'Power BI',
  'BigQuery',
  'Git / GitHub',
  'Machine Learning',
  'Claude API / LLMs',
  'R',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Hero */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start mb-8 sm:mb-12 animate-fade-in">
          {/* Avatar */}
          <div className="relative group shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl object-cover border-2 border-primary/20 shadow-lg transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 bg-secondary flex items-center justify-center overflow-hidden">
              <img
                src="/avatar.jpg"
                alt="Javier García"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="hidden w-full h-full items-center justify-center text-4xl">
                👨‍💻
              </div>
            </div>
            <div className="absolute inset-0 rounded-2xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Info */}
          <div className="flex-1 animate-slide-in-right">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-1 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
              Javier García
            </h1>
            <p className="text-lg sm:text-xl text-foreground font-semibold mb-1">
              Analista de Datos · Blockchain & SQL
            </p>
            <p className="text-xs text-primary/60 italic mb-3">
              Valparaíso, Chile
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Construyendo productos, herramientas y sistemas que generan resultados reales.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              {contacts.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary" />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-border bg-transparent hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Ver CV
              </Link>
              <a
                href="mailto:javiergarciapinilla95@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                Contactar
              </a>
              <a
                href="https://github.com/popex404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md border border-border bg-transparent hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left — main content */}
          <main className="lg:col-span-2 space-y-6">

            {/* About */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Sobre mí
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="text-foreground">
                  Analista de datos con base en Computer Science. Me especialicé en análisis de macrodatos de blockchain durante 4 años — fui top analista en Flipside Crypto. Aprendo rápido, adopto herramientas nuevas y soy obsesivo con los detalles.
                </p>
                <p className="text-muted-foreground">
                  Expando constantemente mi stack: de SQL y dashboards on-chain a Machine Learning, automatización con LLMs y desarrollo web. Inglés C1. Trabajo remoto desde Valparaíso, Chile.
                </p>
              </div>
            </section>

            {/* Featured Work */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                Proyectos
              </h2>
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </section>

            {/* Skills */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <SkillBadge key={s}>{s}</SkillBadge>
                ))}
              </div>
            </section>
          </main>

          {/* Right — sidebar */}
          <aside className="space-y-6">

            {/* Contact */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Contacto
              </h2>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:javiergarciapinilla95@gmail.com"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  javiergarciapinilla95@gmail.com
                </a>
                <a
                  href="https://github.com/popex404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  popex404
                </a>
                <a
                  href="https://x.com/Popex404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4" />
                  @Popex404
                </a>
                <a
                  href="https://linkedin.com/in/javier-garcia-popex404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </section>

            {/* Background */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Background
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science. Especializado en análisis de datos, blockchain y automatización. Experiencia en gestión de proyectos (Scrum, Kanban), herramientas Google y Microsoft. Inglés C1. Trabajo 100% remoto desde Chile.
              </p>
            </section>

            {/* Proof of Work */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Proof of Work
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p>🏆 Top analista — <span className="text-primary">Flipside Crypto</span></p>
                <p>⚗️ Data Alchemist — <span className="text-primary">CovalentHQ</span></p>
                <p>🥋 Sensei — <span className="text-primary">Struct Finance (Avalanche)</span></p>
                <p>📣 Ambassador — <span className="text-primary">BlazeStake (Solana)</span></p>
                <p>🎯 Hackathon Churn — <span className="text-primary">Alura Latam + No Country</span></p>
              </div>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Hecho por Javier García — Para colaboraciones o proyectos, escríbeme a{' '}
            <a href="mailto:javiergarciapinilla95@gmail.com" className="text-primary hover:underline">
              javiergarciapinilla95@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
