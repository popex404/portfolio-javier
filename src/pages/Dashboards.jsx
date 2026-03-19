import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, Twitter, ChevronDown } from 'lucide-react'
import { ANALYSES, FULL_DASHBOARDS, SPECIALS, CHAIN_CONFIG, PLATFORM_CONFIG } from '../data/dashboardData'

const PRIMARY_CHAINS = ['Solana', 'Avalanche', 'Ethereum', 'NEAR']
const SECONDARY_CHAINS = ['BSC', 'Base', 'Cosmos', 'Algorand', 'Terra Luna', 'Flow', 'Arbitrum', 'Evmos', 'Aurora']

function ChainBadge({ chain, small = false }) {
  const cfg = CHAIN_CONFIG[chain]
  if (!cfg) return null
  return (
    <span
      className={`inline-block rounded font-semibold ${small ? 'text-[10px] px-1.5 py-0.5' : 'text-xs px-2 py-0.5'}`}
      style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
    >
      {chain}
    </span>
  )
}

function PlatformBadge({ platform }) {
  const cfg = PLATFORM_CONFIG[platform]
  if (!cfg) return null
  return (
    <span className="text-[10px] px-1.5 py-0.5 rounded border font-medium"
      style={{ color: cfg.color, borderColor: `${cfg.color}44`, background: `${cfg.color}12` }}>
      {cfg.label}
    </span>
  )
}

function AnalysisCard({ analysis }) {
  const dashIdx = analysis.title.indexOf(' — ')
  const mainTitle = dashIdx !== -1 ? analysis.title.slice(0, dashIdx) : analysis.title
  const subtitle = dashIdx !== -1 ? analysis.title.slice(dashIdx + 3) : null

  return (
    <a
      href={analysis.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-secondary/30 transition-all duration-200"
    >
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary mt-1 shrink-0 transition-colors" />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
          {mainTitle}
        </p>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{subtitle}</p>
        )}
        <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
          {analysis.chains.map((c) => <ChainBadge key={c} chain={c} small />)}
          <PlatformBadge platform={analysis.platform} />
        </div>
      </div>
    </a>
  )
}

function ImageLightbox({ src, alt, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-start justify-center overflow-y-auto"
      onClick={onClose}
    >
      <div className="relative min-h-full flex items-start justify-center p-4 pt-12">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10 text-lg font-bold"
        >
          ×
        </button>
        <img
          src={src}
          alt={alt}
          className="max-w-full h-auto rounded shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

function DashboardCarousel() {
  const slides = FULL_DASHBOARDS.filter((d) => d.image)
  const [idx, setIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  if (!slides.length) return null

  const current = slides[idx]
  const prev = () => setIdx((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIdx((i) => (i + 1) % slides.length)

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 sm:p-6 shadow-xl">
      <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">
        Capturas de mis Dashboards
      </h2>
      <p className="text-xs text-muted-foreground mb-4 -mt-1">
        Snapshots de dashboards desarrolladas entre 2022 y 2024 en Flipside Crypto y CovalentHQ. Los informes originales ya no están disponibles online — estos son los registros visuales que quedan.
      </p>

      {lightbox && (
        <ImageLightbox src={current.image} alt={current.title} onClose={() => setLightbox(false)} />
      )}

      <div className="relative">
        <button
          onClick={() => setLightbox(true)}
          className="block w-full overflow-hidden rounded-lg border border-border hover:border-primary/40 transition-all duration-200 group text-left"
        >
          <div className="relative h-52 sm:h-72 lg:h-96 bg-[#0a0a0a] overflow-hidden flex items-start justify-center">
            <img
              src={current.image}
              alt={current.title}
              className="h-full w-auto object-top group-hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[11px] text-white/80 bg-black/40 rounded px-2 py-1">
              <ExternalLink className="w-3 h-3" />
              Ver completa
            </div>
          </div>
        </button>

        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-accent/20 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 border border-border flex items-center justify-center hover:border-primary/50 hover:bg-accent/20 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="mt-4">
        <p className="text-xs text-muted-foreground/60 italic mt-3 mb-1">Haz clic en la imagen para verla en tamaño completo.</p>
        {(() => {
          const dashIdx = current.title.indexOf(' — ')
          const mainTitle = dashIdx !== -1 ? current.title.slice(0, dashIdx) : current.title
          const subtitle = dashIdx !== -1 ? current.title.slice(dashIdx + 3) : null
          return (
            <>
              <p className="text-sm font-semibold text-foreground">{mainTitle}</p>
              {subtitle && <p className="text-xs text-muted-foreground mt-0.5">{subtitle}</p>}
            </>
          )
        })()}
        <div className="flex flex-wrap items-center gap-2 mt-1.5">
          {current.chains.map((c) => <ChainBadge key={c} chain={c} small />)}
          <PlatformBadge platform={current.platform} />
        </div>
        <a
          href={current.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-2"
        >
          <Twitter className="w-3 h-3" />
          Ver tweet original
        </a>
      </div>

      <div className="flex justify-center gap-1.5 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all duration-200 ${i === idx ? 'bg-primary w-3' : 'bg-border hover:bg-muted-foreground w-1.5'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Dashboards() {
  const [activeChain, setActiveChain] = useState('Solana')
  const [showOthers, setShowOthers] = useState(false)

  const isSecondaryActive = SECONDARY_CHAINS.includes(activeChain)
  const filtered = ANALYSES.filter((a) => a.chains.includes(activeChain))

  const counts = {}
  ANALYSES.forEach((a) => a.chains.forEach((c) => { counts[c] = (counts[c] || 0) + 1 }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">

      {/* All content in max-w-4xl */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
        {/* Back nav */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>

      {/* Rest of content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary">
            Mis Dashboards
          </h1>
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 sm:p-6 text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>
              Entre <span className="text-foreground font-medium">2022 y 2024</span>, trabajé como analista independiente de blockchain para{' '}
              <a href="https://flipsidecrypto.xyz" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Flipside Crypto</a> y <a href="https://www.covalenthq.com" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">CovalentHQ</a>,
              plataformas que proporcionaban acceso a bases de datos on-chain de múltiples redes.
            </p>
            <p>
              Participé en bounties y competencias de análisis, creando dashboards e informes sobre flujos de capital, actividad de protocolos,
              comportamiento de usuarios y métricas clave en DeFi y NFT. Fui reconocido como{' '}
              <span className="text-foreground font-medium">Top Analista en Flipside Crypto</span> y{' '}
              <span className="text-foreground font-medium">Data Alchemist en CovalentHQ</span>.
            </p>
            <p>
              En 2025, Flipside migró completamente hacia un modelo de IA y la plataforma original dejó de existir.
              Lo que queda son estos tweets: registros de <span className="text-foreground font-medium">más de 40 análisis</span>{' '}
              distribuidos en <span className="text-foreground font-medium">13 redes blockchain</span>.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mb-8 animate-fade-in">
          <DashboardCarousel />
        </div>

        {/* Social proof */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          {SPECIALS.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card/50 border border-border rounded-xl p-4 hover:border-primary/40 hover:bg-secondary/20 transition-all duration-200"
            >
              <div className="flex items-center gap-2 mb-2">
                <Twitter className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-primary">{s.source}</span>
                <ChainBadge chain={s.chain} small />
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed italic">
                "{s.text}"
              </p>
              <span className="text-xs text-primary/60 group-hover:text-primary mt-2 inline-block transition-colors">
                Ver tweet →
              </span>
            </a>
          ))}
        </div>

        {/* Main analyses section */}
        <div
          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 shadow-xl mb-6 animate-fade-in"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-2 font-semibold">
            Publicaciones de mis Dashboards
          </h2>
          <p className="text-xs text-muted-foreground mb-4">
            Posts en Twitter explicando los highlights más importantes de mis dashboards a las comunidades cripto, a través de hilos interactivos.
          </p>

          {/* Primary chain buttons */}
          <div className="flex flex-wrap gap-2 mb-2">
            {PRIMARY_CHAINS.map((chain) => {
              const cfg = CHAIN_CONFIG[chain]
              const isActive = activeChain === chain
              const count = counts[chain] || 0
              return (
                <button
                  key={chain}
                  onClick={() => { setActiveChain(chain); setShowOthers(false) }}
                  className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 flex items-center gap-1.5"
                  style={
                    isActive && cfg
                      ? { color: cfg.color, background: cfg.bg, borderColor: cfg.border, boxShadow: `0 0 8px ${cfg.color}30` }
                      : { color: 'hsl(var(--muted-foreground))', background: 'transparent', borderColor: 'hsl(var(--border))' }
                  }
                >
                  {chain}
                  <span className="text-[10px] opacity-70">({count})</span>
                </button>
              )
            })}

            {/* Otras Blockchains toggle */}
            <button
              onClick={() => setShowOthers(!showOthers)}
              className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 flex items-center gap-1.5"
              style={
                isSecondaryActive || showOthers
                  ? { color: 'hsl(var(--primary))', background: 'hsl(var(--primary)/0.1)', borderColor: 'hsl(var(--primary)/0.4)' }
                  : { color: 'hsl(var(--muted-foreground))', background: 'transparent', borderColor: 'hsl(var(--border))' }
              }
            >
              Otras Blockchains
              <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${showOthers || isSecondaryActive ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Secondary chain buttons */}
          {(showOthers || isSecondaryActive) && (
            <div className="flex flex-wrap gap-2 mb-2 mt-2 pl-3 border-l-2 border-border">
              {SECONDARY_CHAINS.map((chain) => {
                const cfg = CHAIN_CONFIG[chain]
                const isActive = activeChain === chain
                const count = counts[chain] || 0
                return (
                  <button
                    key={chain}
                    onClick={() => setActiveChain(chain)}
                    className="text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200 flex items-center gap-1.5"
                    style={
                      isActive && cfg
                        ? { color: cfg.color, background: cfg.bg, borderColor: cfg.border, boxShadow: `0 0 8px ${cfg.color}30` }
                        : { color: 'hsl(var(--muted-foreground))', background: 'transparent', borderColor: 'hsl(var(--border))' }
                    }
                  >
                    {chain}
                    <span className="text-[10px] opacity-70">({count})</span>
                  </button>
                )
              })}
            </div>
          )}

          {/* Analyses list */}
          <div className="space-y-2 mt-5">
            {filtered.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-8">
                Sin análisis para esta blockchain.
              </p>
            )}
            {filtered.map((a) => <AnalysisCard key={a.id} analysis={a} />)}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Hecho por Javier García ·{' '}
            <Link to="/" className="text-primary hover:underline">Volver al portfolio</Link>
          </p>
        </footer>
      </div>
    </div>
  )
}
