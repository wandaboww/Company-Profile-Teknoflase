import { useState } from 'react'
import type { LandingPageContent } from './AdminPanel'

export default function Footer({ content }: { content: LandingPageContent }) {
  const brandName = content.brandName
  const currentYear = new Date().getFullYear()
  const [selectedServiceIdx, setSelectedServiceIdx] = useState<number | null>(null)

  const handleOpenService = (e: React.MouseEvent, idx: number) => {
    e.preventDefault()
    setSelectedServiceIdx(idx)
  }

  const footerServicesList = Array.isArray(content?.footerServices) && content.footerServices.length > 0
    ? content.footerServices
    : []
  const selectedService = selectedServiceIdx !== null && selectedServiceIdx < footerServicesList.length
    ? footerServicesList[selectedServiceIdx]
    : null

  return (
    <footer className="footer-section relative bg-slate-50 border-t border-slate-200/80 transition-colors duration-300">
      <div className="footer-container relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8">
        
        {/* Main Footer Layout using Flexbox */}
        <div className="footer-layout flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-start">
          
          {/* Brand Info */}
          <div className="footer-brand-box flex flex-col items-start max-w-xs shrink-0">
            <div className="footer-brand-header flex items-center gap-2.5 text-slate-950 font-bold text-lg font-heading">
              <div className="footer-brand-badge w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                {brandName.slice(0, 2).toUpperCase()}
              </div>
              <span className="footer-brand-name">{brandName}</span>
            </div>

            <p className="footer-brand-desc mt-4 max-w-xs text-slate-600 text-sm leading-relaxed font-sans">
              {content.footer.description}
            </p>

            {content.footer.showSocialMedia !== false && (
              <ul className="footer-social-list mt-6 flex gap-4">
                {content.footer.showLinkedin !== false && content.footer.linkedin && (
                  <li className="footer-social-item">
                    <a
                      href={content.footer.linkedin}
                      rel="noreferrer"
                      target="_blank"
                      className="footer-social-link p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center justify-center"
                      aria-label="LinkedIn"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </li>
                )}

                {content.footer.showInstagram !== false && content.footer.instagram && (
                  <li className="footer-social-item">
                    <a
                      href={content.footer.instagram}
                      rel="noreferrer"
                      target="_blank"
                      className="footer-social-link p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center justify-center"
                      aria-label="Instagram"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                      </svg>
                    </a>
                  </li>
                )}

                {content.footer.showTiktok !== false && content.footer.tiktok && (
                  <li className="footer-social-item">
                    <a
                      href={content.footer.tiktok}
                      rel="noreferrer"
                      target="_blank"
                      className="footer-social-link p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center justify-center"
                      aria-label="TikTok"
                    >
                      <span className="sr-only">TikTok</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 003 15.7a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.04-4.56z" />
                      </svg>
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>

          {/* Links Column Wrapper using Flexbox Wrap */}
          <div className="footer-links-wrapper flex flex-wrap flex-grow justify-between gap-x-8 gap-y-10 w-full lg:max-w-3xl">
            {/* Layanan & Solusi */}
            <div className="footer-links-col flex flex-col w-full sm:w-auto sm:min-w-[160px] sm:flex-1">
              <p className="footer-col-title font-semibold text-slate-900 tracking-wide text-left text-xs uppercase font-mono">Kategori Website</p>
              <ul className="footer-links-list mt-5 flex flex-row overflow-x-auto whitespace-nowrap gap-2 pb-2 scrollbar-none sm:flex-col sm:space-y-3 sm:gap-0 sm:pb-0 sm:overflow-visible text-sm justify-start">
                {footerServicesList.map((svc, idx) => (
                  <li key={idx} className="footer-links-item shrink-0 sm:shrink">
                    <button
                      type="button"
                      onClick={(e) => handleOpenService(e, idx)}
                      className="footer-service-btn text-slate-600 hover:text-blue-600 transition-colors duration-200 block px-3 py-1.5 sm:p-0 bg-white sm:bg-transparent border border-slate-200 sm:border-0 rounded-lg sm:rounded-none font-medium text-left focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
                    >
                      {svc.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perusahaan */}
            <div className="footer-links-col flex flex-col min-w-[140px] sm:min-w-[160px] flex-grow sm:flex-1">
              <p className="footer-col-title font-semibold text-slate-900 tracking-wide text-xs uppercase font-mono">Perusahaan</p>
              <ul className="footer-links-list mt-5 flex flex-col space-y-3 text-sm list-none p-0 m-0">
                <li className="footer-links-item">
                  <a href="#about" className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Tentang Kami
                  </a>
                </li>
                <li className="footer-links-item">
                  <a href="#services" className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Layanan
                  </a>
                </li>
                <li className="footer-links-item">
                  <a href="#faq" className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Tanya Jawab (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            {/* Konsultasi */}
            <div className="footer-links-col flex flex-col min-w-[140px] sm:min-w-[160px] flex-grow sm:flex-1">
              <p className="footer-col-title font-semibold text-slate-900 tracking-wide text-xs uppercase font-mono">Konsultasi</p>
              <ul className="footer-links-list mt-5 flex flex-col space-y-3 text-sm list-none p-0 m-0">
                <li className="footer-links-item">
                  <a href="#contact" className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Hubungi Tim Kami
                  </a>
                </li>
                <li className="footer-links-item">
                  <a href={content.footer.faqLink} className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Tanya Jawab (FAQ)
                  </a>
                </li>
                <li className="footer-links-item">
                  <a href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    WhatsApp Konsultasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Legalitas */}
            <div className="footer-links-col flex flex-col w-full sm:w-auto sm:min-w-[160px] sm:flex-1">
              <p className="footer-col-title font-semibold text-slate-900 tracking-wide text-left text-xs uppercase font-mono">Legalitas</p>
              <ul className="footer-links-list mt-5 flex flex-col space-y-3 text-sm">
                <li className="footer-links-item">
                  <a
                    href={content.footer.privacyLink || '#privacy'}
                    onClick={() => {
                      if ((content.footer.privacyLink || '#privacy').startsWith('#')) {
                        window.scrollTo({ top: 0, behavior: 'instant' })
                      }
                    }}
                    className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
                <li className="footer-links-item">
                  <a href={content.footer.termsLink} className="footer-nav-link text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Syarat & Ketentuan SLA
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom border-t border-slate-200 pt-8 mt-12 text-center">
          <p className="footer-copyright text-xs text-slate-500 text-center">
            &copy; {currentYear} {brandName}. {content.footer.copyrightSuffix}
          </p>
        </div>
      </div>

      {/* Services Detail Modal */}
      {selectedService && (
        <div className="footer-modal-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md transition-all duration-300 animate-fadeIn" role="dialog" aria-modal="true" aria-labelledby="modal-service-title">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-default" onClick={() => setSelectedServiceIdx(null)} />

          {/* Modal Container */}
          <div className="footer-modal-container relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200/90 shadow-2xl shadow-slate-950/20 z-10 scale-100 transition-all duration-300 max-h-[88vh] flex flex-col overflow-hidden text-slate-900 ring-1 ring-black/5">
            {/* Modal Header (Full Colour - Rich Royal Blue to Indigo Gradient) */}
            <div className="footer-modal-header p-6 sm:p-8 pb-6 border-b border-blue-500/30 shrink-0 relative pr-16 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white overflow-hidden shadow-sm">
              {/* Subtle ambient decorative lights */}
              <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-indigo-400/20 blur-xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wider uppercase bg-white/20 text-white border border-white/30 backdrop-blur-md shadow-xs">
                    <span>✨</span> Detail Solusi Bisnis
                  </span>
                  <span className="text-[11px] font-mono font-medium text-blue-100 bg-white/10 px-2.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                    {selectedService.name}
                  </span>
                </div>
                <h3 id="modal-service-title" className="footer-modal-title text-xl sm:text-2xl font-black text-white mt-2.5 font-heading tracking-tight leading-snug drop-shadow-xs">
                  {selectedService.title}
                </h3>
              </div>
              
              {/* Close Button inside Header */}
              <button
                type="button"
                onClick={() => setSelectedServiceIdx(null)}
                className="footer-modal-close-btn absolute top-6 right-6 h-10 w-10 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white/90 hover:text-white shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-md focus-visible:outline-2 focus-visible:outline-white z-20"
                aria-label="Tutup modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="footer-modal-body p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
              {/* Description Card */}
              <div className="rounded-2xl p-5 sm:p-6 bg-slate-50/70 border border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white text-[10px] font-bold">💡</span>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 font-mono">
                    Fokus Solusi & Nilai Bisnis
                  </h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedService.description}
                </p>
              </div>

              {/* Features List with 2-Column Responsive Cards */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono flex items-center gap-2">
                    <span>🚀</span> Fitur & Keunggulan Terpasang
                  </h4>
                  <span className="text-[11px] font-mono font-medium text-slate-400">
                    {selectedService.features.length} Fitur Unggulan
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div
                      key={i}
                      className="group flex gap-3 items-start p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 transition-all shadow-2xs"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        ✓
                      </span>
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MVP Scope Box with Badges */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-blue-50/50 via-slate-50 to-indigo-50/30 border border-blue-100/80 space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-md bg-emerald-600 text-white text-[10px] font-bold">🛡️</span>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono">
                    Estimasi Deliverable & Standar Pengerjaan
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedService.mvp}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-slate-500">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    ⚡ Siap Pakai
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    📱 Responsif Seluruh Layar
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 shadow-2xs">
                    🔍 Ramah Indeks Google
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer Actions (Full Colour - Deep Slate/Blue Gradient) */}
            <div className="footer-modal-footer p-5 sm:p-6 border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0 shadow-inner">
              <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${content.contact.whatsapp}?text=Halo%20${encodeURIComponent(brandName)}%2C%20kami%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(selectedService.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 px-6 font-bold text-sm shadow-md shadow-emerald-500/25 transition-all duration-200 cursor-pointer text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-emerald-400 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Konsultasi Layanan Ini</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                {selectedService.demoActive && (
                  <a
                    href={selectedService.demoLink || '#'}
                    target={selectedService.demoLink?.startsWith('http') ? '_blank' : '_self'}
                    rel={selectedService.demoLink?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={() => {
                      if (!selectedService.demoLink?.startsWith('http')) {
                        setSelectedServiceIdx(null)
                      }
                    }}
                    className="inline-flex justify-center items-center gap-2 rounded-xl bg-white/10 hover:bg-white/20 text-white py-3 px-5 font-semibold text-sm border border-white/20 hover:border-white/30 transition-all duration-200 cursor-pointer text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-white"
                  >
                    <span>Buka Preview Demo</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedServiceIdx(null)}
                className="w-full sm:w-auto rounded-xl border border-slate-700 hover:border-slate-600 bg-slate-800/80 hover:bg-slate-800 py-3 px-5 font-semibold text-sm text-slate-300 hover:text-white transition-all cursor-pointer text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-slate-400"
              >
                Tutup
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  )
}

