import { useState, useRef } from 'react'
import type { LandingPageContent } from './AdminPanel'

export default function Contact({ content }: { content: LandingPageContent }) {
  const [activeContactIdx, setActiveContactIdx] = useState(0)
  const contactScrollRef = useRef<HTMLDivElement>(null)

  const handleContactScroll = () => {
    if (!contactScrollRef.current) return
    const { scrollLeft, scrollWidth } = contactScrollRef.current
    const totalCount = contactInfo.length
    const cardWidth = scrollWidth / (totalCount || 1)
    if (cardWidth > 0) {
      const newIdx = Math.round(scrollLeft / cardWidth)
      setActiveContactIdx(Math.min(Math.max(0, newIdx), totalCount - 1))
    }
  }
  const contactInfo = [
    {
      label: 'Alamat Email',
      value: content.contact.email,
      href: `mailto:${content.contact.email}`,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'Lokasi Studio & Kantor',
      value: content.contact.location,
      href: undefined,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 transition-colors duration-200 scroll-mt-16 section-contact">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {content.contactHeading || (
              <>
                Mulai Wujudkan Website Profesional untuk <span className="text-blue-600">Bisnis Anda</span>
              </>
            )}
          </h2>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {content.contactDescription || 'Diskusikan tujuan, kebutuhan fitur, dan target peluncuran website Anda. Tim kami siap memberikan rekomendasi struktur, estimasi waktu, dan penawaran transparan.'}
          </p>
        </div>

        {/* Direct WhatsApp Callout Card (Desain Sangat Tegas & High-Converting) */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative rounded-3xl bg-slate-950 text-white p-8 sm:p-12 text-center shadow-2xl border border-slate-800 overflow-hidden">
            {/* Ambient Glow Lighting Effect */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {content.ctaTitle || 'Konsultasi Langsung via WhatsApp'}
              </h3>

              <p className="mt-3.5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
                {content.ctaDescription || 'Diskusikan rencana dan kebutuhan fitur website Anda langsung dengan tim teknis kami. Kami siap memberikan rekomendasi solusi, estimasi biaya, dan jadwal pengerjaan secara transparan.'}
              </p>
              
              <div className="mt-8 flex justify-center w-full sm:w-auto">
                <a
                  href={`https://wa.me/${content.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-400 group"
                >
                  <img
                    src="https://api.iconify.design/logos:whatsapp-icon.svg"
                    alt="WhatsApp"
                    className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 transition-transform duration-200 group-hover:scale-110 drop-shadow-xs"
                    width={28}
                    height={28}
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement
                      if (!target.src.endsWith('/whatsapp-icon.svg')) {
                        target.src = '/whatsapp-icon.svg'
                      }
                    }}
                  />
                  <span>{content.ctaButtonText || 'Mulai Percakapan WhatsApp Sekarang'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Coordinates (Horizontal Scroll di Mobile & Tablet, 2-Col Grid di Desktop) */}
        <div className="max-w-3xl mx-auto">
          <div
            ref={contactScrollRef}
            onScroll={handleContactScroll}
            className="flex items-stretch overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-4 sm:gap-5 py-2 px-1 -mx-1 sm:mx-0 sm:px-0 lg:grid lg:grid-cols-2 lg:gap-6 lg:overflow-visible lg:py-0"
          >
            {contactInfo.map((info, idx) => {
              const cardContent = (
                <>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                    {info.icon}
                  </div>
                  <div className="ml-4 min-w-0 flex-1">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider truncate">
                      {info.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900 transition-colors break-words">
                      {info.value}
                    </p>
                  </div>
                </>
              )

              return info.href ? (
                <a
                  key={idx}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-xs transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 w-[280px] sm:w-[320px] lg:w-auto shrink-0 snap-start select-none"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={idx}
                  className="group flex items-center rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 shadow-xs transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-sm w-[280px] sm:w-[320px] lg:w-auto shrink-0 snap-start select-none"
                >
                  {cardContent}
                </div>
              )
            })}
          </div>

          {/* Mobile & Tablet Slider Indicator Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-4 lg:hidden" aria-hidden="true">
            {contactInfo.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => {
                  if (!contactScrollRef.current) return
                  const cardEl = contactScrollRef.current.children[dotIdx] as HTMLElement
                  cardEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeContactIdx === dotIdx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Buka slide kontak ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}


