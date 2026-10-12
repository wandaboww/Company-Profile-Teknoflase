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
    <footer className="relative bg-slate-50 border-t border-slate-200/80 transition-colors duration-300">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8">
        
        {/* Main Footer Layout using Flexbox */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-start">
          
          {/* Brand Info */}
          <div className="flex flex-col items-start max-w-xs shrink-0">
            <div className="flex items-center gap-2.5 text-slate-950 font-bold text-lg font-heading">
              <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-bold shadow-sm">
                {brandName.slice(0, 2).toUpperCase()}
              </div>
              <span>{brandName}</span>
            </div>

            <p className="mt-4 max-w-xs text-slate-600 text-sm leading-relaxed font-sans">
              {content.footer.description}
            </p>

            {content.footer.showSocialMedia !== false && (
              <ul className="mt-6 flex gap-4">
                {content.footer.showLinkedin !== false && content.footer.linkedin && (
                  <li>
                    <a
                      href={content.footer.linkedin}
                      rel="noreferrer"
                      target="_blank"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center justify-center"
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
                  <li>
                    <a
                      href={content.footer.instagram}
                      rel="noreferrer"
                      target="_blank"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center justify-center"
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
                  <li>
                    <a
                      href={content.footer.tiktok}
                      rel="noreferrer"
                      target="_blank"
                      className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/70 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 flex items-center justify-center"
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
          <div className="flex flex-wrap flex-grow justify-between gap-x-8 gap-y-10 w-full lg:max-w-3xl">
            {/* Layanan & Solusi */}
            <div className="flex flex-col w-full sm:w-auto sm:min-w-[160px] sm:flex-1">
              <p className="font-semibold text-slate-900 tracking-wide text-left text-xs uppercase font-mono">Kategori Website</p>
              <ul className="mt-5 flex flex-row overflow-x-auto whitespace-nowrap gap-2 pb-2 scrollbar-none sm:flex-col sm:space-y-3 sm:gap-0 sm:pb-0 sm:overflow-visible text-sm justify-start">
                {footerServicesList.map((svc, idx) => (
                  <li key={idx} className="shrink-0 sm:shrink">
                    <button
                      type="button"
                      onClick={(e) => handleOpenService(e, idx)}
                      className="text-slate-600 hover:text-blue-600 transition-colors duration-200 block px-3 py-1.5 sm:p-0 bg-white sm:bg-transparent border border-slate-200 sm:border-0 rounded-lg sm:rounded-none font-medium text-left focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
                    >
                      {svc.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Perusahaan */}
            <div className="flex flex-col min-w-[140px] sm:min-w-[160px] flex-grow sm:flex-1">
              <p className="font-semibold text-slate-900 tracking-wide text-xs uppercase font-mono">Perusahaan</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Tanya Jawab (FAQ)
                  </a>
                </li>
              </ul>
            </div>

            {/* Tautan */}
            <div className="flex flex-col min-w-[140px] sm:min-w-[160px] flex-grow sm:flex-1">
              <p className="font-semibold text-slate-900 tracking-wide text-xs uppercase font-mono">Konsultasi</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Hubungi Tim Kami
                  </a>
                </li>
                <li>
                  <a href={content.footer.faqLink} className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Tanya Jawab (FAQ)
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${content.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    WhatsApp Konsultasi
                  </a>
                </li>
              </ul>
            </div>

            {/* Legalitas */}
            <div className="flex flex-col w-full sm:w-auto sm:min-w-[160px] sm:flex-1">
              <p className="font-semibold text-slate-900 tracking-wide text-left text-xs uppercase font-mono">Legalitas</p>
              <ul className="mt-5 flex flex-col space-y-3 text-sm">
                <li>
                  <a href={content.footer.privacyLink} className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Kebijakan Privasi
                  </a>
                </li>
                <li>
                  <a href={content.footer.termsLink} className="text-slate-600 hover:text-blue-600 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 rounded">
                    Syarat & Ketentuan SLA
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 pt-8 mt-12 text-center">
          <p className="text-xs text-slate-500 text-center">
            &copy; {currentYear} {brandName}. {content.footer.copyrightSuffix}
          </p>
        </div>
      </div>

      {/* Services Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-all duration-300" role="dialog" aria-modal="true" aria-labelledby="modal-service-title">
          {/* Backdrop Click */}
          <div className="absolute inset-0 cursor-default" onClick={() => setSelectedServiceIdx(null)} />

          {/* Modal Container */}
          <div className="relative w-full max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl z-10 scale-100 transition-all duration-300 max-h-[85vh] flex flex-col overflow-hidden text-slate-900">
            {/* Modal Header (Stationary) */}
            <div className="p-6 sm:p-7 pb-4 border-b border-slate-100 shrink-0 relative pr-16 bg-slate-50/70">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider font-mono">Detail Layanan</span>
              <h3 id="modal-service-title" className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 font-heading tracking-tight">
                {selectedService.title}
              </h3>
              
              {/* Close Button inside Header */}
              <button
                type="button"
                onClick={() => setSelectedServiceIdx(null)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors cursor-pointer rounded-lg focus-visible:outline-2 focus-visible:outline-blue-600"
                aria-label="Tutup modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="p-6 sm:p-7 space-y-6 overflow-y-auto flex-1">
              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 font-mono">
                  Deskripsi Solusi
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedService.description}
                </p>
              </div>

              {/* Features List */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                  Fitur & Keunggulan Layanan
                </h4>
                <ul className="space-y-2.5">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-sm text-slate-700 leading-relaxed">
                      <span className="text-blue-600 font-bold font-mono">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MVP Scope */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 mb-1.5 font-mono">
                  Estimasi Deliverable & Cakupan Paket
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {selectedService.mvp}
                </p>
              </div>
            </div>

            {/* Modal Footer Actions (Stationary) */}
            <div className="p-5 sm:p-6 border-t border-slate-100 bg-slate-50/70 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${content.contact.whatsapp}?text=Halo%20${encodeURIComponent(brandName)}%2C%20kami%20ingin%20konsultasi%20mengenai%20${encodeURIComponent(selectedService.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white py-2.5 px-5 font-semibold text-sm shadow-sm transition-all duration-200 cursor-pointer text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600"
                >
                  Konsultasi Layanan Ini
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
                    className="inline-flex justify-center items-center gap-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 py-2.5 px-5 font-semibold text-sm border border-slate-300 transition-all duration-200 cursor-pointer text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600"
                  >
                    Buka Preview Demo
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedServiceIdx(null)}
                className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white py-2.5 px-5 font-semibold text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-blue-600"
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

