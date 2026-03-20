import { useState } from 'react'
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
    description: 'End-to-end churn prediction solution built in a team of 9 during the Alura Latam + No Country hackathon (Dec 2025). Built and evaluated ML models (Random Forest, KNN, Logistic Regression) on 357K records, engineered 48 features, and segmented customers with K-means.',
    tech: ['Python', 'scikit-learn', 'FastAPI', 'Docker', 'MySQL'],
    link: 'https://github.com/ChurnGuard/ChurnInsight',
    linkText: 'View Repository',
  },
  {
    title: 'Blockchain Analytics',
    role: 'Data Analyst',
    description: 'Interactive dashboards and on-chain analyses on Flipside Crypto and CovalentHQ. Key metrics for blockchain projects and accessible reports for diverse audiences. 40+ analyses across 13 blockchain networks.',
    tech: ['SQL', 'Blockchain', 'Tableau', 'Looker Studio', 'Flipside Crypto', 'CovalentHQ'],
    linkTo: '/en/dashboards',
    linkText: 'View dashboards',
  },
  {
    title: 'Power BI Dashboards',
    role: 'Data Analyst',
    description: 'Interactive dashboards developed with Power BI during the Daxus Latam course. Reports with business metrics visualizations and data analysis.',
    tech: ['Power BI', 'DAX', 'Data Visualization'],
    link: 'https://github.com/popex404/PowerBI-Dashboards',
    linkText: 'View Dashboards',
  },
  {
    title: 'A&C',
    role: 'Web Developer',
    description: 'Landing page for A&C Soluciones Agrícolas y Urbanas, a SEREMI-certified pest control company in Valparaíso.',
    tech: ['HTML', 'CSS', 'JavaScript', 'SEO'],
    link: 'https://popex404.github.io/fa-ac-demos/',
    linkText: 'View demos',
  },
  {
    title: 'Gabriela Mistral en el Mundo',
    role: 'Data Visualization',
    description: 'Interactive map tracing the places visited by Gabriela Mistral, designed together with Gabriela Rivera. Data processed with Python and pandas, visualized with Folium and published on GitHub Pages.',
    tech: ['Python', 'pandas', 'Folium', 'Google Colab'],
    link: 'https://github.com/popex404/Gabriela-Mistral-en-el-Mundo',
    linkText: 'View the map',
  },
  {
    title: 'Alura Latam ONE',
    role: 'Data Scientist',
    description: 'Challenge series from the Oracle Next Education program by Alura Latam. Each challenge covers a different domain.',
    tech: ['Python', 'Jupyter', 'SQL', 'MySQL', 'JavaScript'],
    repos: [
      { label: 'Number guessing game', url: 'https://github.com/popex404/juego-secreto' },
      { label: 'Secret Santa', url: 'https://github.com/popex404/amigo-secreto' },
      { label: 'Profitability analysis (AluraShop)', url: 'https://github.com/popex404/Desafio-Data-Science-1' },
      { label: 'Telecom X churn prediction — part 1', url: 'https://github.com/popex404/Desafio-Telecom-X' },
      { label: 'Telecom X churn prediction — part 2', url: 'https://github.com/popex404/Desafio-Telecom-X-parte2' },
      { label: 'MySQL database', url: 'https://github.com/popex404/empresa-sql-project' },
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

export default function HomeEN() {
  const [avatarError, setAvatarError] = useState(false)
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
                className={avatarError ? 'hidden' : 'w-full h-full object-cover'}
                onError={() => setAvatarError(true)}
              />
              <div
                className={`${avatarError ? 'flex' : 'hidden'} w-full h-full items-center justify-center text-4xl`}
                role="img"
                aria-label="Javier García avatar"
              >
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
              Data Analyst · Blockchain & SQL · Automation & ETL
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 max-w-xl">
              Data analyst in complex ecosystems. The same rigor, any industry.
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
                to="/en/cv"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md border border-border bg-transparent hover:bg-accent/10 hover:border-primary/50 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                View CV
              </Link>
              <a
                href="mailto:javiergarciapinilla95@gmail.com"
                className="inline-flex items-center gap-2 px-3 py-2 min-h-[44px] text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-transform"
              >
                <Mail className="w-4 h-4" />
                Contact
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
                About
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p className="text-foreground">
                  Data analyst. I spent 4 years analyzing blockchain ecosystems in a competitive English-speaking community: 40+ analyses, 13 networks, top analyst at Flipside Crypto. I now apply that same rigor to ML and building pipelines with LLMs.
                </p>
                <p className="text-muted-foreground">
                  CS background — Universidad de Chile. Remote from Valparaíso, C1 English.
                </p>
              </div>
            </section>

            {/* Background + Skills — mobile only */}
            <section
              className="lg:hidden bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Background
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Computer Science Engineering, Universidad de Chile (common core). C1 English. Four years of real work in English-speaking communities: analyses, whitepapers, coordination with teams in the US. 100% remote from Chile. Immediately available.
              </p>
              <div className="border-t border-border/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <SkillBadge key={s}>{s}</SkillBadge>
                  ))}
                </div>
              </div>
            </section>

            {/* Featured Work */}
            <section
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6 font-semibold">
                Projects
              </h2>
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </section>

          </main>

          {/* Right — sidebar */}
          <aside className="space-y-6">

            {/* Contact — desktop only */}
            <section
              className="hidden lg:block bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Contact
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

            {/* Background + Skills — desktop only */}
            <section
              className="hidden lg:block bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Background
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Computer Science Engineering, Universidad de Chile (common core). C1 English. Four years of real work in English-speaking communities: analyses, whitepapers, coordination with teams in the US. 100% remote from Chile. Immediately available.
              </p>
              <div className="border-t border-border/50 pt-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <SkillBadge key={s}>{s}</SkillBadge>
                  ))}
                </div>
              </div>
            </section>

            {/* Proof of Work — desktop only */}
            <section
              className="hidden lg:block bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:border-primary/30 animate-slide-in-right"
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                Proof of Work
              </h2>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p>🏆 Top Analyst · <span className="text-primary">Flipside Crypto</span></p>
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
            Made by Javier García. For collaborations or projects, reach me at{' '}
            <a href="mailto:javiergarciapinilla95@gmail.com" className="text-primary hover:underline">
              javiergarciapinilla95@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
