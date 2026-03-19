import { Link } from 'react-router-dom'
import { Mail, MapPin, FileText, ExternalLink, Github, Twitter, Linkedin } from 'lucide-react'
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
    description: 'Solución end-to-end de predicción de churn en equipo de 9 personas durante el hackathon Alura Latam + No Country (Dic 2025). Construí y evalué modelos de ML (Random Forest, KNN, Regresión Logística) sobre 357K registros, ingeniería de 48 features y segmentación de clientes con K-means.',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'Docker', 'MySQL'],
    link: 'https://github.com/ChurnGuard/ChurnInsight',
    linkText: 'Ver Repositorio',
  },
  {
    title: 'Blockchain Analytics',
    role: 'Data Analyst',
    description: 'Dashboards interactivos y análisis on-chain en Flipside Crypto y CovalentHQ. Métricas clave para proyectos blockchain y reportes accesibles para audiencias diversas. Más de 40 análisis en 13 redes blockchain.',
    tech: ['SQL', 'Blockchain', 'Tableau', 'Looker Studio', 'Flipside Crypto', 'CovalentHQ'],
    linkTo: '/dashboards',
    linkText: 'Ver dashboards',
  },
  {
    title: 'Power BI Dashboards',
    role: 'Data Analyst',
    description: 'Dashboards interactivos desarrollados con Power BI durante el curso de Daxus Latam. Reportes con visualizaciones de métricas de negocio y análisis de datos.',
    tech: ['Power BI', 'DAX', 'Data Visualization'],
    link: 'https://github.com/popex404/PowerBI-Dashboards',
    linkText: 'Ver Dashboards',
  },
  {
    title: 'A&C',
    role: 'Web Developer',
    description: 'Landing page para A&C Soluciones Agrícolas y Urbanas, empresa de control de plagas certificada SEREMI en Valparaíso.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    link: 'https://popex404.github.io/fa-ac-demos/',
    linkText: 'Ver demos',
  },
  {
    title: 'Gabriela Mistral en el Mundo',
    role: 'Data Visualization',
    description: 'Mapa interactivo que recorre los lugares visitados por Gabriela Mistral, diseñado en conjunto con Gabriela Rivera. Datos procesados con Python y pandas, visualizados con Folium y publicados en GitHub Pages.',
    tech: ['Python', 'pandas', 'Folium', 'Google Colab'],
    link: 'https://github.com/popex404/Gabriela-Mistral-en-el-Mundo',
    linkText: 'Ver el mapa',
  },
  {
    title: 'Alura Latam ONE',
    role: 'Data Scientist',
    description: 'Serie de desafíos del programa Oracle Next Education de Alura Latam. Cada desafío cubre un dominio distinto.',
    tech: ['Python', 'Jupyter', 'SQL', 'MySQL', 'JavaScript'],
    repos: [
      { label: 'Juego de números secretos', url: 'https://github.com/popex404/juego-secreto' },
      { label: 'Amigo secreto', url: 'https://github.com/popex404/amigo-secreto' },
      { label: 'Análisis de rentabilidad (AluraShop)', url: 'https://github.com/popex404/challenge-AluraShop' },
      { label: 'Predicción de churn Telecom X. parte 1', url: 'https://github.com/popex404/Desafio-Telecom-X' },
      { label: 'Predicción de churn Telecom X. parte 2', url: 'https://github.com/popex404/Desafio-Telecom-X-parte2' },
      { label: 'Base de datos MySQL', url: 'https://github.com/popex404/empresa-sql-project' },
    ],
  },
]

const skills = [
  'SQL',
  'Python',
  'R',
  'Java',
  'Blockchain',
  'On-chain Analytics',
  'Web3 / DeFi',
  'Tableau',
  'Power BI',
  'BigQuery',
  'Snowflake',
  'ETL',
  'Machine Learning',
  'Git / GitHub',
  'Claude API / LLMs',
  'Agile / Scrum',
  'Google Workspace',
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

        {/* Hero */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start mb-8 sm:mb-12 animate-fade-in">
          {/* Avatar */}
          <div className="relative group shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl object-cover border-2 border-primary/20 shadow-lg transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 bg-secondary flex items-center justify-center overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}avatar.jpg`}
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
              Analista de Datos · Blockchain & SQL · Automatización & ETL
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Analizo ecosistemas complejos de datos y produzco insights accionables. El mismo rigor, cualquier industria.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              {contacts.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 text-sm text-muted-foreground min-w-0">
                  <Icon className="w-4 h-4 text-primary shrink-0" />
                  <span className="break-all">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 items-center">
              <Link
                to="/cv"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md border border-border bg-transparent hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                Ver CV
              </Link>
              <a
                href="mailto:javiergarciapinilla95@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                Contactar
              </a>
              <a
                href="https://github.com/popex404"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md border border-border bg-transparent hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
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
                  Analista de datos. Pasé 4 años analizando ecosistemas blockchain en una comunidad angloparlante competitiva: 40+ análisis, 13 redes, top analista en Flipside Crypto. Lo mismo aplico ahora a ML y a la construcción de pipelines con LLMs.
                </p>
                <p className="text-muted-foreground">
                  Formación en Ciencias de la Computación, Universidad de Chile. Remoto desde Valparaíso, inglés C1.
                </p>
              </div>
            </section>

            {/* Proof of Work — mobile only, appears after About and before Projects */}
            <section
              className="lg:hidden bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Proof of Work
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p>🏆 Top analista · <span className="text-primary">Flipside Crypto</span></p>
                <p>🧪 Data Alchemist · <span className="text-primary">CovalentHQ</span></p>
                <p>🧙‍♂️ Sensei · <span className="text-primary">Struct Finance (Avalanche)</span></p>
                <p>🔥 Ambassador · <span className="text-primary">BlazeStake (Solana)</span></p>
                <p>🎯 Hackathon Churn · <span className="text-primary">Alura Latam + No Country</span></p>
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

          </main>

          {/* Right — sidebar */}
          <aside className="space-y-6">

            {/* Contact */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Contacto
              </h2>
              <div className="space-y-3 text-sm">
                <a
                  href="mailto:javiergarciapinilla95@gmail.com"
                  className="text-primary hover:underline flex items-center gap-2 min-w-0"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span className="break-all">javiergarciapinilla95@gmail.com</span>
                </a>
                <a
                  href="https://github.com/popex404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Github className="w-4 h-4 shrink-0" />
                  <span>GitHub <span className="text-muted-foreground font-normal">· popex404</span></span>
                </a>
                <a
                  href="https://x.com/Popex404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Twitter className="w-4 h-4 shrink-0" />
                  <span>X / Twitter <span className="text-muted-foreground font-normal">· @Popex404</span></span>
                </a>
                <a
                  href="https://linkedin.com/in/javier-garcia-popex404/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4 shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </section>

            {/* Background + Skills */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Background
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Ingeniería Civil en Ciencias de la Computación, Universidad de Chile (plan común). Inglés C1. Cuatro años de trabajo real en comunidades angloparlantes: análisis, whitepapers, coordinación con equipos en EE.UU. 100% remoto desde Chile. Disponibilidad inmediata.
              </p>
              <div className="border-t border-border/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <SkillBadge key={s}>{s}</SkillBadge>
                  ))}
                </div>
              </div>
            </section>

            {/* Proof of Work — desktop only (mobile version is in main content above) */}
            <section
              className="hidden lg:block bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Proof of Work
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p>🏆 Top analista · <span className="text-primary">Flipside Crypto</span></p>
                <p>🧪 Data Alchemist · <span className="text-primary">CovalentHQ</span></p>
                <p>🧙‍♂️ Sensei · <span className="text-primary">Struct Finance (Avalanche)</span></p>
                <p>🔥 Ambassador · <span className="text-primary">BlazeStake (Solana)</span></p>
                <p>🎯 Hackathon Churn · <span className="text-primary">Alura Latam + No Country</span></p>
              </div>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Hecho por Javier García. Para colaboraciones o proyectos, escríbeme a{' '}
            <a href="mailto:javiergarciapinilla95@gmail.com" className="text-primary hover:underline">
              javiergarciapinilla95@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
