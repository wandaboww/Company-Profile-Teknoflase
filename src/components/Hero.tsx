import { useState, useEffect } from 'react'
import type { LandingPageContent } from './AdminPanel'

// Helper for title font size class
function getTitleSizeClass(size?: string): string {
  switch (size) {
    case 'compact':
      return 'text-3xl sm:text-5xl lg:text-6xl leading-[1.12]'
    case 'large':
      return 'text-5xl sm:text-7xl lg:text-8xl leading-[1.04]'
    case 'jumbo':
      return 'text-6xl sm:text-8xl lg:text-9xl leading-[1.02]'
    case 'normal':
    default:
      return 'text-4xl sm:text-6xl lg:text-7xl leading-[1.08]'
  }
}

// Helper for highlight font size class
function getHighlightSizeClass(highlightSize?: string): string {
  switch (highlightSize) {
    case 'compact':
      return 'text-2xl sm:text-4xl lg:text-5xl leading-tight'
    case 'normal':
      return 'text-3xl sm:text-5xl lg:text-6xl leading-tight'
    case 'large':
      return 'text-5xl sm:text-7xl lg:text-8xl leading-tight'
    case 'jumbo':
      return 'text-6xl sm:text-8xl lg:text-9xl leading-tight'
    case 'same':
    default:
      return '' // Proporsional mewarisi ukuran font judul
  }
}

// Helper for highlight color inline style (supports hex, rgb, or gradients)
function getHighlightStyle(color?: string): React.CSSProperties {
  const chosenColor = color || '#2563eb'
  if (chosenColor.includes('gradient')) {
    return {
      backgroundImage: chosenColor,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  }
  return {
    color: chosenColor,
  }
}

export default function Hero({ content }: { content: LandingPageContent }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroSlides = content.heroSlides

  // Auto-play loop
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const activeSlide = heroSlides[currentSlide] || heroSlides[0]

  return (
    <section className="hero-section section-hero relative overflow-hidden bg-white border-b border-slate-200/80 bg-tech-dots transition-colors duration-200">
      {/* Soft Luminous Gradient Wash */}
      <div className="hero-gradient-overlay absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white pointer-events-none" />

      <div className="hero-container relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        
        {/* Centered Hero Layout */}
        <div className="hero-content max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">

          {/* Main Headline */}
          <h1 className={`hero-title font-extrabold tracking-tight text-slate-900 ${getTitleSizeClass(activeSlide.fontSize || content.heroFontSize)}`}>
            {activeSlide.title}
            {content.showHeroHighlight !== false && (
              <span
                className={`hero-highlight block mt-2 ${getHighlightSizeClass(activeSlide.highlightFontSize || content.heroHighlightFontSize)}`}
                style={getHighlightStyle(activeSlide.highlightColor || content.heroHighlightColor)}
              >
                {activeSlide.highlight}
              </span>
            )}
          </h1>

          {/* Description */}
          <p className="hero-description text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            {activeSlide.desc}
          </p>

          {/* Slide Topic Indicators */}
          <div className="hero-slider-nav flex items-center gap-2 pt-2">
            <span className="hero-slider-label text-xs font-semibold text-slate-500 mr-2">Fokus Solusi:</span>
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentSlide(dotIdx)}
                className={`hero-slider-dot h-2 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 ${
                  currentSlide === dotIdx
                    ? 'w-8 bg-slate-900'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Pilih Solusi ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* CTA Action Buttons */}
          <div className="hero-actions pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href={activeSlide.ctaLink}
              target={activeSlide.ctaLink.startsWith('http') ? '_blank' : undefined}
              rel={activeSlide.ctaLink.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hero-cta-btn w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-slate-900 hover:bg-slate-800 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:shadow transition-all duration-200 cursor-pointer min-h-[48px] focus-visible:outline-2 focus-visible:outline-slate-900"
            >
              {activeSlide.ctaText}
            </a>

            <a
              href={activeSlide.learnLink}
              className="hero-learn-btn w-full sm:w-auto inline-flex justify-center items-center rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-8 py-4 text-sm font-semibold text-slate-700 hover:text-slate-900 shadow-xs transition-all duration-200 cursor-pointer min-h-[48px] focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              {activeSlide.learnText}
            </a>
          </div>

          {/* Capability Badges Strip (Horizontal Slide di Mobile & Tablet, Centered Wrap di Desktop) */}
          <div className="hero-badges-container pt-8 border-t border-slate-200/80 w-full overflow-hidden">
            <div className="hero-badges-list flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 text-xs font-semibold text-slate-500 overflow-x-auto no-scrollbar lg:flex-wrap justify-start lg:justify-center py-1 -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth snap-x snap-mandatory">
              {(content.heroBadges && content.heroBadges.length > 0
                ? content.heroBadges
                : [
                    'Loading Cepat & Ringan',
                    'Tampilan Responsif di Semua HP',
                    'Struktur SEO On-Page Rapi',
                    '100% Source Code Milik Anda',
                  ]
              ).map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="hero-badge-item inline-flex items-center gap-1.5 px-3 py-1.5 lg:py-1 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/60 shrink-0 whitespace-nowrap snap-start select-none"
                >
                  <span className="hero-badge-check text-blue-600 font-bold">✓</span> {badge}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}



