import { useRef, useState } from 'react'
import type { LandingPageContent } from './AdminPanel'

export default function About({ content }: { content: LandingPageContent }) {
  const [isTeamOpen, setIsTeamOpen] = useState(false)

  const defaultPillars = [
    {
      icon: '🏢',
      title: 'Company Profile & Branding Korporat',
      description: 'Membangun reputasi dan kredibilitas bisnis Anda melalui website profesional yang responsif, terstruktur rapi, dan meyakinkan calon klien.',
    },
    {
      icon: '📈',
      title: 'Landing Page Penjualan & Konversi',
      description: 'Halaman penawaran terarah untuk memaksimalkan hasil iklan dan promosi, terhubung langsung ke kontak WhatsApp dan sistem penangkap prospek.',
    },
    {
      icon: '⚙️',
      title: 'Panel Admin CMS Mandiri',
      description: 'Kemudahan memperbarui teks, foto portofolio, dan informasi kontak kapan saja secara mandiri tanpa harus bergantung pada pihak ketiga.',
    },
    {
      icon: '🛡️',
      title: 'Kode Bersih & Ramah SEO Google',
      description: 'Struktur HTML semantik, optimasi kecepatan Core Web Vitals, dan sitemap otomatis agar website ringan diakses serta mudah terindeks mesin pencari.',
    },
  ]

  const servicePillars = (content.featuresItems && content.featuresItems.length > 0)
    ? content.featuresItems
    : defaultPillars

  // Mobile & tablet horizontal scroll indicators
  const [activePillarIdx, setActivePillarIdx] = useState(0)
  const pillarsScrollRef = useRef<HTMLDivElement>(null)

  const handlePillarsScroll = () => {
    if (!pillarsScrollRef.current) return
    const { scrollLeft, scrollWidth } = pillarsScrollRef.current
    const count = servicePillars.length || 4
    const cardWidth = scrollWidth / count
    if (cardWidth > 0) {
      const newIdx = Math.round(scrollLeft / cardWidth)
      setActivePillarIdx(Math.min(Math.max(0, newIdx), count - 1))
    }
  }

  const [activeTeamIdx, setActiveTeamIdx] = useState(0)
  const teamScrollRef = useRef<HTMLDivElement>(null)

  const handleTeamScroll = () => {
    if (!teamScrollRef.current) return
    const { scrollLeft, scrollWidth } = teamScrollRef.current
    const totalCount = content.teamMembers?.length || 4
    const cardWidth = scrollWidth / totalCount
    if (cardWidth > 0) {
      const newIdx = Math.round(scrollLeft / cardWidth)
      setActiveTeamIdx(Math.min(Math.max(0, newIdx), totalCount - 1))
    }
  }

  const renderPillarIcon = (iconStr: string | undefined, index: number) => {
    if (iconStr && iconStr.trim() && iconStr.length <= 4) {
      return <span className="text-xl leading-none select-none">{iconStr}</span>
    }
    const svgIcons = [
      <svg key="1" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>,
      <svg key="2" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>,
      <svg key="3" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>,
      <svg key="4" className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,
    ]
    return svgIcons[index % svgIcons.length]
  }

  const stats = content.aboutStats && content.aboutStats.length > 0
    ? content.aboutStats
    : [
        { label: 'Rata-rata Waktu Muat (Load Time)', value: '< 1.8 Detik' },
        { label: 'Skor Performa Core Web Vitals', value: '95+' },
        { label: 'Kepemilikan Source Code Klien', value: '100%' },
        { label: 'Jaminan Uptime Server & SLA', value: '99.9%' },
      ]

  const teamMembers = content.teamMembers

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 transition-colors duration-200 scroll-mt-16 section-about overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Editorial Header */}
        <div className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {content.aboutTitle || 'Standar Pembuatan Website yang Berorientasi pada Hasil Nyata'}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {content.aboutDescription || content.featuresDescription}
          </p>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Core Services Stack (Horizontal Scroll di Mobile & Tablet, 2-Col Grid di Desktop) */}
          <div className="lg:col-span-7 w-full">
            <div
              ref={pillarsScrollRef}
              onScroll={handlePillarsScroll}
              className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-4 sm:gap-5 py-2 px-1 lg:px-0 lg:py-0 lg:grid lg:grid-cols-2 lg:gap-5"
            >
              {servicePillars.map((val, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 w-[280px] sm:w-[320px] lg:w-auto shrink-0 snap-start select-none"
                >
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 w-fit mb-4 flex items-center justify-center min-w-[44px] min-h-[44px]">
                    {renderPillarIcon(val.icon, i)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile & Tablet Scroll Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-4 lg:hidden" aria-hidden="true">
              {servicePillars.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    if (!pillarsScrollRef.current) return
                    const cardEl = pillarsScrollRef.current.children[dotIdx] as HTMLElement
                    cardEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activePillarIdx === dotIdx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Lihat pilar layanan ${dotIdx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Impact Stats Card */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
              Tolok Ukur Kualitas Website
            </span>
            <h3 className="mt-1 text-lg font-bold text-slate-900">
              Standar Rekayasa Web {content.brandName}
            </h3>

            <div className="mt-6 space-y-3">
              {stats.map((stat, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-none">
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    {stat.label}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 italic">
              *Diuji secara berkala dengan audit performa Google Lighthouse pada jaringan seluler maupun desktop.
            </p>
          </div>

        </div>

        {/* Interactive Dropdown Boundary Line & Team Section */}
        <div className="mt-20">
          
          {/* Garis Batas Interaktif yang Berfungsi Sebagai Dropdown Toggle (Tanpa Teks & Tanpa Badges) */}
          <button
            type="button"
            onClick={() => setIsTeamOpen(!isTeamOpen)}
            aria-expanded={isTeamOpen}
            aria-controls="team-section-content"
            className="group w-full flex items-center justify-center cursor-pointer py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg select-none"
            title={isTeamOpen ? 'Klik untuk menutup tim pengembang' : 'Klik untuk melihat tim pengembang'}
          >
            {/* Garis Kiri */}
            <div className={`flex-1 border-t transition-colors duration-200 ${isTeamOpen ? 'border-blue-300' : 'border-slate-200 group-hover:border-blue-400'}`} />

            {/* Ikon Panah Atas Bawah di Bagian Tengah */}
            <div className={`px-4 shrink-0 transition-all duration-300 ${isTeamOpen ? 'text-blue-600 rotate-180' : 'text-slate-400 group-hover:text-blue-600'}`}>
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 15l5 5 5-5M7 9l5-5 5 5" />
              </svg>
            </div>

            {/* Garis Kanan */}
            <div className={`flex-1 border-t transition-colors duration-200 ${isTeamOpen ? 'border-blue-300' : 'border-slate-200 group-hover:border-blue-400'}`} />
          </button>

          {/* Area Tim Pengembang (Default Tertutup, Muncul Saat Garis Diklik) */}
          {isTeamOpen && (
            <div id="team-section-content" className="pt-12 sm:pt-14 transition-all duration-300 animate-fade-in">
              
              <div className="mx-auto max-w-3xl text-center mb-14 flex flex-col items-center">
                <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                  Tim Pengembang di Balik <span className="text-blue-600">{content.brandName}</span>
                </h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto">
                  Didukung talenta berdedikasi dalam desain antarmuka pengguna, rekayasa kode modern, dan optimasi performa website.
                </p>
              </div>

              {/* Clean Responsive Grid (Horizontal Scroll di Mobile & Tablet, 4-Col Grid di Desktop) */}
              <div className="w-full">
                <div
                  ref={teamScrollRef}
                  onScroll={handleTeamScroll}
                  className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-5 sm:gap-6 py-2 px-1 lg:px-0 lg:py-0 lg:grid lg:grid-cols-4 lg:gap-6 w-full"
                >
                  {teamMembers.map((member, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200 w-[260px] sm:w-[280px] lg:w-auto shrink-0 snap-start select-none"
                    >
                      {/* Initials Avatar Box */}
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 border border-slate-200/80 font-bold text-base mb-4">
                        {member.initials}
                      </div>

                      {/* Name & Role */}
                      <h4 className="text-base font-bold text-slate-900">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider mt-0.5">
                        {member.role}
                      </p>

                      {/* Bio Description */}
                      <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                        {member.desc}
                      </p>

                      {/* LinkedIn Link */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex justify-center">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-blue-600 transition-colors p-2 rounded-lg focus-visible:outline-2 focus-visible:outline-blue-600"
                          aria-label={`LinkedIn ${member.name}`}
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mobile & Tablet Scroll Indicator Dots for Team */}
                <div className="flex items-center justify-center gap-1.5 pt-4 lg:hidden" aria-hidden="true">
                  {teamMembers.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => {
                        if (!teamScrollRef.current) return
                        const cardEl = teamScrollRef.current.children[dotIdx] as HTMLElement
                        cardEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeTeamIdx === dotIdx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Lihat profil tim ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  )
}


