import { useState, useEffect } from 'react'
import type { LandingPageContent, PortfolioItem } from './AdminPanel'

// Icon helper representing each website category cleanly (matching Services concept)
function getServiceIcon(category: string, index: number) {
  const cat = (category || '').toLowerCase()
  if (cat.includes('company') || cat.includes('profile') || cat.includes('korporat')) {
    // Corporate / Building
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
  if (cat.includes('landing')) {
    // Rocket / High conversion
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m0 0a6.003 6.003 0 00-1.89-4.896m0 0a14.978 14.978 0 0112.12-6.16 14.978 14.978 0 01-6.16 12.12z" />
      </svg>
    )
  }
  if (cat.includes('toko') || cat.includes('commerce') || cat.includes('shop')) {
    // Shopping Bag / E-commerce
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  }
  if (cat.includes('katalog') || cat.includes('portal')) {
    // Catalog / Directory
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  }
  if (cat.includes('aplikasi') || cat.includes('app') || cat.includes('saas')) {
    // Web App / Computer Dashboard
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
  if (cat.includes('blog') || cat.includes('berita') || cat.includes('media')) {
    // Blog / Newspaper
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  }
  if (cat.includes('kuliner') || cat.includes('restoran') || cat.includes('cafe')) {
    // Restaurant / Food
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
  if (cat.includes('booking') || cat.includes('reservasi') || cat.includes('jadwal')) {
    // Calendar / Booking
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  }
  if (cat.includes('properti') || cat.includes('estate') || cat.includes('rumah')) {
    // Real Estate / Home
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  }
  if (cat.includes('travel') || cat.includes('wisata') || cat.includes('tour')) {
    // Travel / Globe
    return (
      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
  // Alternating fallback icons
  switch (index % 3) {
    case 0:
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    case 1:
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    default:
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
  }
}

const DEFAULT_SERVICE_IMAGES: Record<string, string> = {
  'Company Profile': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
  'Landing Page': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'Toko Online (E-Commerce)': 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
  'Web Portal & Katalog': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
  'Aplikasi Web (Web App)': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
  'Blog & Portal Berita': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
  'Website UMKM & Bisnis Lokal': 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  'Website Restoran & Kuliner': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  'Website Reservasi & Booking': 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1200&q=80',
  'Website Portofolio Kreatif': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  'Website Lembaga & Pendidikan': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  'Website Properti & Real Estate': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  'Website Tour & Travel': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
  'Website Organisasi & Komunitas': 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80',
  'Website Undangan Digital': 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
}

function getServiceImage(image?: string, category?: string, index: number = 0): string {
  if (image && image.trim() !== '') return image
  if (category && DEFAULT_SERVICE_IMAGES[category]) return DEFAULT_SERVICE_IMAGES[category]
  const list = Object.values(DEFAULT_SERVICE_IMAGES)
  return list[index % list.length] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
}

export default function Services({ content }: { content: LandingPageContent }) {
  const [activeTab, setActiveTab] = useState('Semua')
  const [selectedDetailIdx, setSelectedDetailIdx] = useState<number | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  const brandName = content.brandName || 'TEKNOFLASE'
  const whatsappNumber = content.contact?.whatsapp || '6281234567890'
  const projects = content.portfolioItems || []

  // Extract unique categories for filter tabs
  const categories = ['Semua', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))]

  const filteredProjects = activeTab === 'Semua' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  const safeSlide = Math.min(activeSlide, Math.max(0, filteredProjects.length - 1))
  const activeDetail: PortfolioItem | null = selectedDetailIdx !== null ? projects[selectedDetailIdx] : null

  // Handle category tab change & reset slide index
  const handleCategoryChange = (cat: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(cat)
    setActiveSlide(0)
    e?.currentTarget?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  // Keyboard navigation when user presses left/right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedDetailIdx !== null) return // Pause when detail modal is open
      if (filteredProjects.length <= 1) return

      if (e.key === 'ArrowRight') {
        setActiveSlide((prev) => (prev + 1) % filteredProjects.length)
      } else if (e.key === 'ArrowLeft') {
        setActiveSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filteredProjects.length, selectedDetailIdx])

  // Mobile touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || filteredProjects.length <= 1) return
    const touchEndX = e.changedTouches[0].clientX
    const diffX = touchStartX - touchEndX
    if (diffX > 50) {
      // Swipe left -> Next slide
      setActiveSlide((prev) => (prev + 1) % filteredProjects.length)
    } else if (diffX < -50) {
      // Swipe right -> Prev slide
      setActiveSlide((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
    }
    setTouchStartX(null)
  }

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 transition-colors duration-200 scroll-mt-16 section-services">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {content.portfolioHeading || 'Layanan Pembuatan Website & Solusi Digital'}
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {content.portfolioDescription || 'Pilihan solusi website perusahaan, landing page konversi, portal katalog, dan platform web kustom yang dibangun dengan standar performa tinggi.'}
          </p>
        </div>

        {/* Tab Filters (Single Row Horizontal Slide di Mobile, Tablet & Monitor) */}
        <div className="w-full max-w-5xl mx-auto mb-12">
          <div
            className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
            style={{ justifyContent: 'safe center' }}
            role="tablist"
            aria-label="Filter Layanan Website"
          >
            {categories.map((cat, i) => {
              const isActive = activeTab === cat
              return (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={(e) => handleCategoryChange(cat, e)}
                  className={`shrink-0 whitespace-nowrap px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 select-none ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs font-semibold border border-slate-900'
                      : 'bg-slate-50 text-slate-600 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* ──────────────────────────────────────────────────────────── */}
        {/* HORIZONTAL SLIDE CARDS TRACK                                */}
        {/* ──────────────────────────────────────────────────────────── */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200/80 max-w-5xl mx-auto">
            <p className="text-sm text-slate-500">Belum ada layanan dalam kategori ini.</p>
          </div>
        ) : (
          <div className="relative mx-auto max-w-5xl">
            {/* Horizontal Slider Viewport with Touch Gestures */}
            <div 
              className="overflow-hidden rounded-3xl"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${safeSlide * 100}%)` }}
              >
                {filteredProjects.map((project, index) => {
                  const realIndex = projects.indexOf(project)
                  const consultationUrl = `https://wa.me/${whatsappNumber}?text=Halo%20${encodeURIComponent(brandName)}%2C%20kami%20tertarik%20dengan%20layanan%20${encodeURIComponent(project.title)}%20dan%20ingin%20konsultasi%20pembuatan%20website%20serupa.`

                  return (
                    <div key={index} className="w-full shrink-0">
                      <div className="rounded-3xl border border-slate-200/90 bg-white shadow-xl shadow-slate-100 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
                          
                          {/* ─── Kolom Kiri: 5/12 (Gambar Layanan: 4:3 di Mobile & Tablet, Full di Monitor) ─── */}
                          <div className="lg:col-span-5 relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-full bg-slate-100 overflow-hidden flex items-center justify-center group">
                            <img
                              src={getServiceImage(project.image, project.category, realIndex)}
                              alt={project.title}
                              className="w-full h-full object-cover object-center aspect-[4/3] lg:aspect-auto transition-transform duration-700 ease-out group-hover:scale-105"
                              loading="lazy"
                            />
                          </div>

                          {/* ─── Kolom Kanan: 7/12 (Seluruh Konten Layanan, Fitur & Aksi) ─── */}
                          <div className="lg:col-span-7 p-7 sm:p-9 flex flex-col justify-between bg-white">
                            <div>
                              {/* Icon & Category Badge Header */}
                              <div className="flex items-start justify-between gap-4 mb-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 border border-slate-200/90 shadow-xs">
                                  <div>
                                    {getServiceIcon(project.category, realIndex)}
                                  </div>
                                </div>
                                <div className="flex flex-wrap items-center justify-end gap-1.5">
                                  {project.duration && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 border border-emerald-200">
                                      ⏱️ {project.duration}
                                    </span>
                                  )}
                                  <span className="inline-flex px-2 py-0.5 rounded text-[11px] font-mono font-medium text-blue-700 bg-blue-50 border border-blue-200">
                                    {project.category}
                                  </span>
                                </div>
                              </div>

                              {/* Title & Description */}
                              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                                {project.title}
                              </h3>
                              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {project.description}
                              </p>

                              {/* Fitur Utama & Keunggulan Layanan */}
                              <div className="mt-5 pt-4 border-t border-slate-100">
                                <span className="block text-xs font-bold text-slate-900 uppercase tracking-wider font-mono mb-3">
                                  Fitur Utama & Keunggulan Layanan:
                                </span>
                                {project.features && project.features.length > 0 && (
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {project.features.map((feature, fIdx) => (
                                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold mt-0.5">
                                          ✓
                                        </span>
                                        <span className="leading-snug font-medium">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>

                              {/* Highlight Deliverable Scope Box */}
                              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider font-mono mb-0.5">
                                  Standar Implementasi:
                                </span>
                                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                  {project.deliverables || 'Dibuat dengan kode bersih, optimasi kecepatan Core Web Vitals, tampilan responsif di seluruh gadget, dan 100% kepemilikan source code klien.'}
                                </p>
                              </div>
                            </div>

                            {/* Bottom Action Buttons (Konsultasi & Detail) */}
                            <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-3">
                              <a
                                href={consultationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600"
                              >
                                <span>Konsultasi Layanan Ini</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                              </a>

                              {project.demoUrl && (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl border border-blue-200 bg-blue-50/80 hover:bg-blue-100 text-blue-700 text-xs font-semibold transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600"
                                  title="Buka Website Demo"
                                >
                                  <span>Demo</span>
                                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </a>
                              )}

                              <button
                                type="button"
                                onClick={() => setSelectedDetailIdx(realIndex)}
                                className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-xs font-semibold transition-colors cursor-pointer min-h-[44px] focus-visible:outline-2 focus-visible:outline-blue-600"
                                aria-label={`Rincian layanan ${project.title}`}
                              >
                                Detail Layanan
                              </button>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* ──────────────────────────────────────────────────────────── */}
            {/* SLIDE INDICATOR                                              */}
            {/* ──────────────────────────────────────────────────────────── */}
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-4 px-2">
              
              {/* Counter Slide & Status */}
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 order-2 sm:order-1">
                <span>Layanan:</span>
                <strong className="text-slate-900 font-sans font-semibold">
                  0{safeSlide + 1} dari 0{filteredProjects.length}
                </strong>
                {filteredProjects[safeSlide] && (
                  <span className="hidden sm:inline text-slate-600 font-sans">
                    ({filteredProjects[safeSlide].category})
                  </span>
                )}
              </div>

              {/* Stepper Dots Indicator */}
              <div className="flex items-center gap-2.5 order-1 sm:order-2" role="tablist" aria-label="Indikator Slide Layanan">
                {filteredProjects.map((project, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    role="tab"
                    aria-selected={safeSlide === dotIdx}
                    onClick={() => setActiveSlide(dotIdx)}
                    aria-label={`Buka slide layanan 0${dotIdx + 1}: ${project.title}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      safeSlide === dotIdx
                        ? 'w-9 bg-blue-600 shadow-xs'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              {/* Tag Layanan Aktif */}
              <div className="order-3 text-xs font-mono text-slate-500 hidden sm:block">
                <span className="text-blue-600 font-sans font-medium">
                  {filteredProjects[safeSlide]?.tag || filteredProjects[safeSlide]?.category}
                </span>
              </div>

            </div>
          </div>
        )}

        {/* Service Assurance Banner */}
        <div className="mt-16 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-100 via-white to-blue-50/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900">
              {content.servicesCtaTitle || 'Ingin Mengembangkan Website Serupa dengan Spesifikasi Kustom?'}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {content.servicesCtaDesc || `Diskusikan referensi desain dan target fitur bisnis Anda. Tim ${brandName} siap menyusun arsitektur sistem dan estimasi pengerjaan yang transparan.`}
            </p>
          </div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Halo%20${encodeURIComponent(brandName)}%2C%20kami%20ingin%20konsultasi%20pembuatan%20website%20kustom.`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-slate-900"
          >
            {content.servicesCtaButton || 'Konsultasi Sekarang'}
          </a>
        </div>

      </div>

      {/* Service Detail Quick Modal */}
      {activeDetail && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all duration-300" role="dialog" aria-modal="true" aria-labelledby="modal-services-title">
          <div className="absolute inset-0 cursor-default" onClick={() => setSelectedDetailIdx(null)} />
          <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl z-10 max-h-[85vh] flex flex-col overflow-hidden text-slate-900">
            <div className="p-6 border-b border-slate-100 relative pr-16 bg-slate-50/70 shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider font-mono">
                  Solusi {activeDetail.category}
                </span>
                {activeDetail.duration && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    ⏱️ {activeDetail.duration}
                  </span>
                )}
              </div>
              <h3 id="modal-services-title" className="text-xl font-bold text-slate-900 mt-1 font-heading">
                {activeDetail.title}
              </h3>
              <button
                type="button"
                onClick={() => setSelectedDetailIdx(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
                aria-label="Tutup detail modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-5 overflow-y-auto flex-1">
              <div className="h-44 sm:h-52 w-full rounded-xl bg-slate-100 overflow-hidden shrink-0 border border-slate-200">
                <img
                  src={getServiceImage(activeDetail.image, activeDetail.category, selectedDetailIdx ?? 0)}
                  alt={activeDetail.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-mono">Deskripsi Layanan</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{activeDetail.description}</p>
              </div>

              {activeDetail.features && activeDetail.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-mono">Fitur yang Diterapkan</h4>
                  <ul className="space-y-2">
                    {activeDetail.features.map((feat, i) => (
                      <li key={i} className="flex gap-2.5 items-start text-sm text-slate-700">
                        <span className="text-emerald-500 font-bold font-mono">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-1 font-mono">Standar & Deliverables</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {activeDetail.deliverables || 'Dibangun dengan arsitektur web modern, performa tinggi, struktur SEO terindeks Google, dan 100% kepemilikan source code klien.'}
                </p>
              </div>
            </div>

            <div className="p-5 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
              <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Halo%20${encodeURIComponent(brandName)}%2C%20kami%20tertarik%20dengan%20layanan%20${encodeURIComponent(activeDetail.title)}%20dan%20ingin%20konsultasi%20pembuatan%20website%20serupa.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-5 font-semibold text-sm shadow-sm transition-all"
                >
                  Konsultasi Layanan Ini
                </a>
                {activeDetail.demoUrl && (
                  <a
                    href={activeDetail.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex justify-center items-center gap-1.5 rounded-xl border border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 py-2.5 px-4 font-semibold text-xs shadow-xs transition-all"
                  >
                    <span>Kunjungi Live Demo</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedDetailIdx(null)}
                className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white py-2.5 px-5 font-semibold text-sm text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
