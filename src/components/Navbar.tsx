import { useState, useEffect, useRef } from 'react'

interface NavbarProps {
  brandName: string
}

export default function Navbar({ brandName }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Behavior: Tutup menu navigasi hamburger ketika area luar menu diklik atau tombol Escape ditekan
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (navRef.current && !navRef.current.contains(target)) {
        setIsOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  return (
    <>
      <nav
        ref={navRef}
        className="navbar sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md transition-colors duration-200"
      >
        <div className="navbar-container mx-auto max-w-7xl px-6 sm:px-8">
          <div className="navbar-wrapper flex h-16 items-center justify-between">
            
            {/* Logo & Brand Identity */}
            <a
              href="#"
              className="navbar-brand flex items-center gap-3 group cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg p-1"
            >
              <div className="navbar-logo flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-white font-black text-lg shadow-sm transition-transform duration-200 group-hover:scale-105">
                {brandName ? brandName.charAt(0).toUpperCase() : 'T'}
              </div>
              <div className="navbar-brand-content flex flex-col">
                <span className="navbar-brand-name text-lg font-bold tracking-tight text-slate-900">
                  {brandName}
                </span>
                <span className="navbar-brand-tagline text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">
                  Jasa Pembuatan Website
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links (Monitor Desktop ≥ 1024px) */}
            <div className="navbar-menu-desktop hidden lg:flex items-center gap-1 lg:gap-2">
              <a
                href="#"
                className="navbar-link py-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                Beranda
              </a>
              <a
                href="#about"
                className="navbar-link py-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                Tentang Kami
              </a>
              <a
                href="#services"
                className="navbar-link py-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                Layanan
              </a>
              <a
                href="#faq"
                className="navbar-link py-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="navbar-link py-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600"
              >
                Kontak
              </a>
            </div>

            {/* Desktop Right Actions (CTA) */}
            <div className="navbar-actions-desktop hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="navbar-cta-btn rounded-xl bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-slate-900"
              >
                Mulai Konsultasi
              </a>
            </div>

            {/* Mobile & Tablet Hamburger Menu Button (Layar < 1024px) */}
            <div className="navbar-mobile-toggle flex lg:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="navbar-toggle-btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all cursor-pointer min-h-[44px]"
                aria-expanded={isOpen}
                aria-label="Buka navigasi menu"
              >
                {isOpen ? (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Tutup</span>
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span>Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Drawer (Layar < 1024px) */}
        <div
          className={`navbar-drawer ${
            isOpen ? 'block' : 'hidden'
          } lg:hidden border-t border-slate-200 bg-white transition-all duration-300 shadow-xl`}
        >
          <div className="navbar-drawer-nav space-y-1 px-6 py-4 pb-6">
            <a
              href="#"
              onClick={() => setIsOpen(false)}
              className="navbar-drawer-link block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              Beranda
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="navbar-drawer-link block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              Tentang Kami
            </a>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="navbar-drawer-link block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              Layanan
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="navbar-drawer-link block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="navbar-drawer-link block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              Kontak
            </a>
            <div className="navbar-drawer-actions pt-4 border-t border-slate-200 mt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="navbar-drawer-cta-btn block w-full text-center rounded-xl bg-slate-900 hover:bg-slate-800 px-4 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                Mulai Konsultasi
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay ketika hamburger terbuka (klik di luar untuk menutup) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="navbar-drawer-backdrop fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}
    </>
  )
}

