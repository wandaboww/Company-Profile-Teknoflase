import { useState, useEffect, useRef } from 'react'
import type { LandingPageContent } from './AdminPanel'
import Footer from './Footer'

export interface PrivacySection {
  title: string
  content: string
}

export interface PrivacyPolicyContent {
  title: string
  subtitle?: string
  lastUpdated: string
  intro: string
  sections: PrivacySection[]
}

export const DEFAULT_PRIVACY_POLICY: PrivacyPolicyContent = {
  title: 'Kebijakan Privasi',
  subtitle: 'Komitmen Perlindungan Privasi & Keamanan Data Pengunjung serta Klien TEKNOFLASE',
  lastUpdated: '15 Oktober 2026',
  intro: 'Selamat datang di TEKNOFLASE. Kami sangat menghargai kepercayaan Anda dan berkomitmen penuh untuk melindungi informasi serta data pribadi yang Anda berikan saat menjelajahi website ini, berkonsultasi, maupun mempercayakan pembuatan website dan platform digital Anda kepada kami.',
  sections: [
    {
      title: '1. Informasi & Data yang Kami Kumpulkan',
      content: 'Kami hanya mengumpulkan informasi yang Anda berikan secara sukarela demi kelancaran konsultasi dan pengerjaan proyek, antara lain:\n\n• Data Kontak: Nama, alamat email, nomor telepon/WhatsApp, dan nama instansi atau bisnis Anda saat menghubungi kami atau mengisi formulir konsultasi.\n• Rincian Proyek: Referensi desain, spesifikasi fitur website, materi konten, dan preferensi teknis yang Anda bagikan selama sesi diskusi.\n• Data Teknis Pengunjung: Data log anonim seperti alamat protokol internet (IP), tipe peramban (browser), penyedia layanan internet, dan durasi kunjungan semata-mata untuk optimasi Core Web Vitals dan performa server.',
    },
    {
      title: '2. Tujuan Penggunaan Informasi',
      content: 'Data dan informasi yang kami peroleh digunakan semata-mata untuk keperluan profesional dan operasional berikut:\n\n• Memproses permintaan konsultasi dan menyusun rancangan anggaran biaya (RAB) serta proposal teknis yang akurat.\n• Melaksanakan pengerjaan, pengujian, dan serah terima website sesuai kesepakatan spesifikasi proyek.\n• Menghubungi Anda terkait pembaruan perkembangan proyek, masa aktif hosting/domain, atau bantuan pemeliharaan teknis (maintenance).\n• Meningkatkan kualitas tampilan antarmuka, keamanan sistem, dan kenyamanan penjelajahan di website kami.',
    },
    {
      title: '3. Kerahasiaan & Keamanan Data Tingkat Tinggi',
      content: 'Kami memperlakukan setiap data Anda dengan standar keamanan ketat. Seluruh transmisi data di website kami diamankan dengan enkripsi SSL/TLS 256-bit standar industri.\n\nKami MENJAMIN 100% tidak akan pernah menjual, menyewakan, memperdagangkan, atau menyebarluaskan data kontak dan data proyek Anda kepada pihak ketiga mana pun tanpa persetujuan tertulis eksplisit dari Anda, kecuali jika diwajibkan oleh peraturan hukum yang berlaku di Republik Indonesia.',
    },
    {
      title: '4. Kepemilikan Penuh Aset & Source Code Klien (100% Client Ownership)',
      content: 'Di TEKNOFLASE, seluruh materi digital (logo, teks, foto, dokumen) yang Anda berikan untuk pembuatan website tetap merupakan hak cipta dan kepemilikan Anda sepenuhnya.\n\nSetelah serah terima proyek dan pelunasan selesai, seluruh source code, berkas aset, dan hak akses dashboard admin sepenuhnya menjadi milik Anda tanpa penguncian sistem (vendor lock-in) tersembunyi.',
    },
    {
      title: '5. Kebijakan Cookie & Teknologi Pelacak Analitik',
      content: 'Website kami dapat menggunakan cookie sesi dan teknologi analitik untuk:\n\n• Menyimpan preferensi tampilan sementara demi kenyamanan browsing Anda.\n• Mengukur metrik kecepatan muat halaman dan mendeteksi kesalahan teknis.\n\nAnda berhak menonaktifkan cookie melalui pengaturan peramban (browser) Anda kapan saja tanpa kehilangan akses terhadap informasi utama website kami.',
    },
    {
      title: '6. Hak Pengguna atas Data Pribadi (UU PDP No. 27/2022)',
      content: 'Sesuai dengan ketentuan Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi (UU PDP), Anda memiliki hak untuk:\n\n• Meminta konfirmasi dan salinan data pribadi Anda yang tersimpan di sistem kami.\n• Meminta pembaruan atau perbaikan jika terdapat kekeliruan data.\n• Meminta penghapusan permanen data kontak atau riwayat diskusi Anda dari database kami kapan saja.',
    },
    {
      title: '7. Pembaruan Kebijakan Privasi',
      content: 'Kami dapat memperbarui dokumen Kebijakan Privasi ini dari waktu ke waktu guna menyesuaikan dengan perkembangan teknologi, regulasi hukum terbaru, atau penambahan fitur layanan kami. Tanggal pembaruan terkini akan selalu kami cantumkan secara transparan di bagian atas halaman ini.',
    },
    {
      title: '8. Kontak & Saluran Pengaduan Privasi',
      content: 'Apabila Anda memiliki pertanyaan, saran, atau ingin mengajukan permohonan terkait perlindungan data pribadi Anda, silakan hubungi tim kami melalui saluran resmi berikut:\n\n• Email Resmi: diskusi@teknoflase.com\n• WhatsApp Resmi: Melalui tombol konsultasi di website kami\n• Lokasi Operasional: Bogor, Jawa Barat, Indonesia',
    },
  ],
}

interface PrivacyPolicyProps {
  content: LandingPageContent
  onBack?: () => void
}

const LANDING_NAV_ITEMS = [
  { label: 'Beranda', href: '#' },
  { label: 'Tentang Kami', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#contact' },
]

export default function PrivacyPolicy({ content, onBack }: PrivacyPolicyProps) {
  const brandName = content.brandName || 'TEKNOFLASE'
  const privacy = content.privacyPolicy || DEFAULT_PRIVACY_POLICY
  const sectionsList = privacy.sections && privacy.sections.length > 0 ? privacy.sections : DEFAULT_PRIVACY_POLICY.sections

  // Ref container header & drawer navigasi
  const headerRef = useRef<HTMLElement>(null)

  // State Accordion untuk setiap elemen privacy-section-header
  // Default: Pasal #1 terbuka untuk panduan visual awal pembaca
  const [openSectionIndices, setOpenSectionIndices] = useState<number[]>([0])
  // State Hamburger Navigasi Menu Mobile (Layar < 1024px)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Behavior: Tutup menu navigasi hamburger ketika diklik di area luar menu atau menekan tombol Escape
  useEffect(() => {
    if (!isMobileMenuOpen) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (headerRef.current && !headerRef.current.contains(target)) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
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
  }, [isMobileMenuOpen])

  const toggleSection = (idx: number) => {
    setOpenSectionIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const expandAll = () => {
    setOpenSectionIndices(sectionsList.map((_, i) => i))
  }

  const collapseAll = () => {
    setOpenSectionIndices([])
  }

  // Scroll to top upon mounting page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (onBack) {
      onBack()
    } else {
      window.location.hash = ''
    }
  }

  const handleNavigateSection = (e: React.MouseEvent, targetHash: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    if (targetHash === '#' || targetHash === '') {
      if (onBack) {
        onBack()
      } else {
        window.location.hash = ''
      }
      window.scrollTo({ top: 0, behavior: 'instant' })
    } else {
      window.location.hash = targetHash
      setTimeout(() => {
        const el = document.querySelector(targetHash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  return (
    <div className="privacy-page min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      {/* ── Top Navigation Bar ────────────────────────────────────────────── */}
      <header
        ref={headerRef}
        className="privacy-header sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200"
      >
        <div className="privacy-header-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo & Back Action */}
          <a
            href="#"
            onClick={handleBackToHome}
            className="privacy-header-brand flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-blue-600 rounded-lg p-1"
          >
            <div className="privacy-header-logo w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-mono text-base font-bold shadow-sm group-hover:bg-blue-600 transition-colors">
              {brandName.slice(0, 2).toUpperCase()}
            </div>
            <div className="privacy-header-brand-info flex flex-col">
              <span className="privacy-header-brand-name font-heading font-extrabold text-lg text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {brandName}
              </span>
              <span className="privacy-header-brand-tagline text-[11px] font-mono text-slate-500 hidden sm:inline">
                Jasa Pembuatan Website Profesional
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links (Monitor Desktop ≥ 1024px) */}
          <nav className="privacy-header-menu-desktop hidden lg:flex items-center gap-1 lg:gap-2">
            {LANDING_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigateSection(e, item.href)}
                className="privacy-header-nav-link py-1.5 px-3 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-lg transition-colors focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Mobile Hamburger Toggle */}
          <div className="privacy-header-actions flex items-center gap-2 sm:gap-3">
            <a
              href="#"
              onClick={handleBackToHome}
              className="privacy-header-back-btn hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 border border-slate-200/90 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 cursor-pointer"
            >
              <svg className="privacy-header-back-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="privacy-header-back-text">Kembali ke Beranda</span>
            </a>

            {content.contact?.whatsapp && (
              <a
                href={`https://wa.me/${content.contact.whatsapp}?text=Halo%20${encodeURIComponent(brandName)}%2C%20saya%20ingin%20berkonsultasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="privacy-header-cta-btn hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-sm shadow-blue-600/25 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="privacy-header-cta-text">Konsultasi WhatsApp</span>
                <svg className="privacy-header-cta-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            )}

            {/* Mobile & Tablet Hamburger Menu Button (Layar < 1024px) */}
            <div className="privacy-mobile-toggle flex lg:hidden items-center">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="privacy-toggle-btn inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 transition-all cursor-pointer min-h-[44px]"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle menu navigasi"
              >
                {isMobileMenuOpen ? (
                  <>
                    <svg className="privacy-toggle-icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="privacy-toggle-text">Tutup</span>
                  </>
                ) : (
                  <>
                    <svg className="privacy-toggle-icon h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <span className="privacy-toggle-text">Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Drawer Menu (Layar < 1024px) */}
        <div
          className={`privacy-drawer ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:hidden border-t border-slate-200 bg-white transition-all duration-300 shadow-xl`}
        >
          <div className="privacy-drawer-nav space-y-1 px-5 py-4 pb-6">
            {LANDING_NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavigateSection(e, item.href)}
                className="privacy-drawer-link block rounded-xl px-4 py-3 text-base font-semibold text-slate-800 hover:bg-blue-50/70 hover:text-blue-600 transition-colors min-h-[44px] cursor-pointer"
              >
                {item.label}
              </a>
            ))}

            <div className="privacy-drawer-actions pt-4 border-t border-slate-200 mt-3 space-y-2">
              {content.contact?.whatsapp && (
                <a
                  href={`https://wa.me/${content.contact.whatsapp}?text=Halo%20${encodeURIComponent(brandName)}%2C%20saya%20ingin%20berkonsultasi`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="privacy-drawer-cta-btn flex items-center justify-center gap-2 w-full text-center rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-3 text-sm font-bold text-white shadow-sm transition-all duration-200 cursor-pointer min-h-[44px]"
                >
                  <span className="privacy-drawer-cta-text">Konsultasi WhatsApp</span>
                  <svg className="privacy-drawer-cta-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}

              <a
                href="#"
                onClick={handleBackToHome}
                className="privacy-drawer-back-btn flex items-center justify-center gap-2 w-full text-center rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-3 text-sm font-semibold border border-slate-200 transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                <svg className="privacy-drawer-back-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="privacy-drawer-back-text">Kembali ke Beranda</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop Overlay: Menutup menu navigasi hamburger ketika area luar diklik */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="privacy-drawer-backdrop fixed inset-0 z-40 bg-slate-950/25 backdrop-blur-[2px] transition-opacity duration-200 lg:hidden cursor-pointer"
          aria-hidden="true"
        />
      )}

      {/* ── Hero Banner Section ───────────────────────────────────────────── */}
      <section className="privacy-hero-section relative bg-gradient-to-b from-slate-50 via-blue-50/20 to-white border-b border-slate-200/70 pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle decorative background shapes */}
        <div className="privacy-hero-bg-glow-right absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl pointer-events-none -z-10" />
        <div className="privacy-hero-bg-glow-left absolute bottom-0 left-10 w-80 h-80 rounded-full bg-indigo-50/60 blur-2xl pointer-events-none -z-10" />

        <div className="privacy-hero-container mx-auto max-w-4xl text-center space-y-4">
          <h1 className="privacy-hero-title text-3xl sm:text-4xl md:text-5xl font-black font-heading text-slate-950 tracking-tight leading-tight">
            {privacy.title || 'Kebijakan Privasi'}
          </h1>

          {privacy.subtitle && (
            <p className="privacy-hero-subtitle text-base sm:text-lg text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
              {privacy.subtitle}
            </p>
          )}

          {/* Quick Notice Card */}
          <div className="privacy-notice-card mt-8 text-left bg-white rounded-2xl p-6 sm:p-7 border border-blue-100 shadow-md shadow-blue-500/5 flex flex-col sm:flex-row gap-4 items-start">
            <div className="privacy-notice-icon-box w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200/80">
              <svg className="privacy-notice-icon w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="privacy-notice-content space-y-1.5">
              <h2 className="privacy-notice-title text-sm font-bold font-mono uppercase tracking-wide text-slate-900">
                Pernyataan Perlindungan Data TEKNOFLASE
              </h2>
              <p className="privacy-notice-desc text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {privacy.intro || 'Kami berkomitmen penuh untuk melindungi informasi serta data pribadi yang Anda berikan saat berkonsultasi maupun menggunakan layanan pembuatan website dan platform digital kami.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Policy Content ───────────────────────────────────────────── */}
      <main className="privacy-content-section flex-1 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="privacy-content-container mx-auto max-w-4xl space-y-8">
          
          {/* Policy Sections Toolbar */}
          <div className="privacy-sections-toolbar flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-200/80">
            <div className="privacy-sections-toolbar-info flex items-center gap-2.5">
              <span className="privacy-sections-count text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                Daftar Klausul ({sectionsList.length} Pasal)
              </span>
              <span className="privacy-sections-status text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/80 font-medium">
                {openSectionIndices.length} Terbuka
              </span>
            </div>

            <div className="privacy-sections-toggle-all flex items-center gap-2">
              <button
                type="button"
                onClick={expandAll}
                className="privacy-sections-btn-expand px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 active:scale-95"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="privacy-sections-btn-collapse px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-blue-600 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/90 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 active:scale-95"
              >
                Tutup Semua
              </button>
            </div>
          </div>

          {/* Policy Sections Cards (Accordion) */}
          <div className="privacy-sections-list space-y-4">
            {sectionsList.map((section, idx) => {
              const isOpen = openSectionIndices.includes(idx)
              const sectionNumber = idx + 1
              const cleanTitle = section.title.replace(/^\d+\.\s*/, '')
              const sectionId = `privacy-section-body-${idx}`

              return (
                <article
                  key={idx}
                  className={`privacy-section-card group rounded-2xl bg-white border transition-all duration-300 shadow-2xs hover:shadow-sm overflow-hidden ${
                    isOpen
                      ? 'privacy-section-card-open border-blue-200 ring-1 ring-blue-500/10'
                      : 'privacy-section-card-closed border-slate-200/80 hover:border-slate-300 bg-slate-50/40 hover:bg-slate-50/70'
                  }`}
                >
                  {/* Accordion Clickable Header */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={sectionId}
                    onClick={() => toggleSection(idx)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        toggleSection(idx)
                      }
                    }}
                    className="privacy-section-header p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2"
                  >
                    <div className="privacy-section-header-left flex items-center gap-3.5 min-w-0">
                      <span className={`privacy-section-number flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold transition-all shadow-2xs ${
                        isOpen
                          ? 'bg-blue-600 text-white shadow-blue-500/20'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }`}>
                        {sectionNumber}
                      </span>
                      <h2 className={`privacy-section-title text-base sm:text-lg font-bold font-heading tracking-tight transition-colors duration-200 truncate sm:whitespace-normal ${
                        isOpen ? 'text-blue-900' : 'text-slate-900 group-hover:text-blue-600'
                      }`}>
                        {cleanTitle}
                      </h2>
                    </div>

                    <div className="privacy-section-toggle flex items-center gap-2 shrink-0">
                      <span className="privacy-section-toggle-label hidden md:inline-block text-xs font-mono font-medium text-slate-400 group-hover:text-slate-600">
                        {isOpen ? 'Tutup' : 'Lihat'}
                      </span>
                      <div className={`privacy-section-chevron w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-blue-50 text-blue-600 rotate-180'
                          : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600 rotate-0'
                      }`}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Body & Preview */}
                  {isOpen ? (
                    <div
                      id={sectionId}
                      className="privacy-section-body px-5 sm:px-6 pb-6 pt-2 border-t border-slate-100 text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line font-sans pl-5 sm:pl-17"
                    >
                      {section.content}
                    </div>
                  ) : (
                    <div
                      onClick={() => toggleSection(idx)}
                      className="privacy-section-preview px-5 sm:px-6 pb-4 -mt-2 text-xs sm:text-sm text-slate-400 truncate pl-5 sm:pl-17 cursor-pointer hover:text-slate-600 transition-colors font-sans"
                    >
                      {section.content.replace(/\n+/g, ' ')}
                    </div>
                  )}
                </article>
              )
            })}
          </div>

          {/* Contact Support Assistance Card */}
          <div className="privacy-contact-card rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-7 sm:p-9 shadow-xl space-y-4">
            <div className="privacy-contact-layout flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="privacy-contact-info space-y-2">
                <span className="privacy-contact-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-white/10 text-blue-200 border border-white/20">
                  <span className="privacy-contact-badge-icon">📩</span> Hubungi Tim Privasi Kami
                </span>
                <h3 className="privacy-contact-title text-xl sm:text-2xl font-black font-heading text-white tracking-tight">
                  Ada Pertanyaan Mengenai Keamanan Data Anda?
                </h3>
                <p className="privacy-contact-desc text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Tim teknis dan legalitas {brandName} selalu siap membantu memberikan klarifikasi dan menjawab segala pertanyaan terkait privasi serta data digital Anda.
                </p>
              </div>

              <div className="privacy-contact-actions flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
                {content.contact?.whatsapp && (
                  <a
                    href={`https://wa.me/${content.contact.whatsapp}?text=Halo%20${encodeURIComponent(brandName)}%2C%20saya%20ingin%20bertanya%20seputar%20kebijakan%20privasi`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="privacy-contact-wa-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="privacy-contact-wa-text">Chat WhatsApp</span>
                    <svg className="privacy-contact-wa-icon w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
                <a
                  href="#"
                  onClick={handleBackToHome}
                  className="privacy-contact-back-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
                >
                  <span className="privacy-contact-back-text">Kembali ke Beranda</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <Footer content={content} />
    </div>
  )
}
