import { useState, useId, useRef } from 'react'
import type { LandingPageContent } from './AdminPanel'

export interface FAQItem {
  question: string
  answer: string
  category: string
}

export const DEFAULT_FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Layanan & Solusi',
    question: 'Jenis website apa saja yang dapat dibuat oleh TEKNOFLASE?',
    answer:
      'Kami melayani pembuatan website profil perusahaan (company profile), landing page penjualan, web portal katalog produk, aplikasi web internal bisnis, hingga platform SaaS kustom. Setiap website dibangun sesuai kebutuhan spesifik bisnis Anda tanpa menggunakan template pasaran yang kaku.',
  },
  {
    category: 'Waktu Pengerjaan',
    question: 'Berapa lama estimasi waktu pembuatan website hingga siap online?',
    answer:
      'Untuk landing page dan website profil perusahaan standar, waktu pengerjaan berkisar antara 7 hingga 14 hari kerja. Untuk web portal atau aplikasi web dengan fitur kustom, pengerjaan berkisar antara 3 hingga 6 minggu dengan laporan kemajuan dan sesi demo berkala.',
  },
  {
    category: 'SEO & Tampilan Mobile',
    question: 'Apakah website sudah dioptimasi untuk Google (SEO) dan nyaman dibuka di HP?',
    answer:
      'Ya. Kami menerapkan standar SEO on-page teknis mulai dari kode HTML semantik, optimasi kecepatan Core Web Vitals, sitemap otomatis, hingga meta tag media sosial. Seluruh tampilan juga dirancang dengan prinsip mobile-first agar ringan dan nyaman dibuka di smartphone, tablet, maupun laptop.',
  },
  {
    category: 'Pengelolaan Mandiri',
    question: 'Apakah saya dapat mengedit teks dan foto website sendiri setelah selesai dibuat?',
    answer:
      'Tentu saja. Kami menyediakan panel admin (CMS) yang intuitif dan mudah digunakan. Anda dapat memperbarui tulisan, mengganti foto portofolio, mengubah kontak bisnis, dan mengelola konten kapan saja secara mandiri tanpa harus memahami kode pemrograman.',
  },
  {
    category: 'Hak Cipta & Source Code',
    question: 'Apakah seluruh source code dan hak cipta website menjadi milik saya?',
    answer:
      'Ya. 100% kepemilikan source code, repositori, dan aset digital diserahkan kepada Anda setelah serah terima proyek selesai. Kami tidak menerapkan biaya sewa lisensi tahunan untuk kode sumber Anda (tanpa keterikatan vendor-lock).',
  },
  {
    category: 'Domain & Hosting',
    question: 'Bagaimana dengan kebutuhan nama domain dan server hosting website?',
    answer:
      'Kami dapat membantu pengurusan nama domain (.com, .id, .co.id, dll) serta konfigurasi server cloud berkecepatan tinggi, atau menghubungkan website langsung ke akun hosting dan domain yang sudah Anda miliki sebelumnya.',
  },
  {
    category: 'Wilayah & Dukungan UMKM',
    question: 'Apakah TEKNOFLASE melayani pembuatan website untuk UMKM di wilayah Bogor dan sekitarnya?',
    answer:
      'Tentu saja. Kami berbasis di Bogor dan secara aktif mendampingi UMKM serta bisnis lokal di Kota Bogor, Kabupaten Bogor, Cibinong, Sentul, hingga Jabodetabek untuk memiliki website profesional dengan harga terjangkau, proses transparan, dan siap mendatangkan pembeli via WhatsApp.',
  },
  {
    category: 'Biaya & Paket UMKM',
    question: 'Apakah biaya pembuatan website terjangkau untuk pelaku usaha kecil dan UMKM yang baru merintis?',
    answer:
      'Ya, kami menyediakan paket landing page dan website profil usaha yang sangat ramah kantong UMKM tanpa sistem bagi hasil atau biaya sewa bulanan tersembunyi. Sekali pengerjaan, seluruh website dan hak milik menjadi aset bisnis Anda 100%.',
  },
  {
    category: 'Garansi & SLA',
    question: 'Apakah ada garansi jika terjadi kendala teknis setelah website online?',
    answer:
      'Kami memberikan masa garansi perbaikan bug dan pendampingan teknis gratis paska peluncuran. Kami juga menyediakan opsi paket pemeliharaan berkala (SLA) untuk memastikan website Anda selalu aman dan beroperasi optimal.',
  },
]

export default function FAQ({ content }: { content: LandingPageContent }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeFaqIdx, setActiveFaqIdx] = useState(0)
  const faqScrollRef = useRef<HTMLDivElement>(null)
  const searchInputId = useId()

  const handleFaqScroll = () => {
    if (!faqScrollRef.current) return
    const { scrollLeft, scrollWidth } = faqScrollRef.current
    const totalCount = filteredFAQs.length || 1
    const cardWidth = scrollWidth / totalCount
    if (cardWidth > 0) {
      const newIdx = Math.round(scrollLeft / cardWidth)
      setActiveFaqIdx(Math.min(Math.max(0, newIdx), totalCount - 1))
    }
  }

  const handleCategoryClick = (cat: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(cat)
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }

  const faqs = content.faqItems && content.faqItems.length > 0 ? content.faqItems : DEFAULT_FAQ_ITEMS

  // Categories list
  const categories = ['Semua', ...Array.from(new Set(faqs.map(f => f.category)))]

  // Filter FAQs based on category and search query
  const filteredFAQs = faqs.filter(faq => {
    const matchesCat = selectedCategory === 'Semua' || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  const toggleAccordion = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx))
  }

  return (
    <section id="faq" className="py-20 sm:py-28 bg-slate-50/70 border-b border-slate-200/80 transition-colors duration-200 scroll-mt-16 section-faq">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {content.faqHeading || 'Tanya Jawab Seputar Layanan Pembuatan Website'}
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {content.faqDescription || `Temukan jawaban lengkap seputar estimasi waktu pengerjaan, kepemilikan source code, optimasi SEO Google, hingga kemudahan pengelolaan website Anda di ${content.brandName || 'TEKNOFLASE'}.`}
          </p>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          
          {/* Search Input */}
          <div className="relative">
            <label htmlFor={searchInputId} className="sr-only">Cari pertanyaan</label>
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              id={searchInputId}
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari pertanyaan teknis, NDA, source code, timeline..."
              className="w-full rounded-2xl bg-white border border-slate-200/90 shadow-2xs pl-12 pr-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 transition-all font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full px-2 py-0.5 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Tablist (Single-Row Horizontal Slide di Semua Tampilan Device) */}
          <div className="w-full overflow-hidden">
            <div
              role="tablist"
              aria-label="Kategori FAQ"
              className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1 touch-pan-x"
              style={{ justifyContent: 'safe center' }}
            >
              {categories.map((cat, idx) => {
                const isSelected = selectedCategory === cat
                return (
                  <button
                    key={idx}
                    role="tab"
                    id={`faq-tab-${idx}`}
                    aria-selected={isSelected}
                    type="button"
                    onClick={(e) => handleCategoryClick(cat, e)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold shrink-0 whitespace-nowrap transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-600 select-none ${
                      isSelected
                        ? 'bg-slate-900 text-white shadow-xs font-semibold border border-slate-900'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

        </div>

        {/* Accordion FAQ List (Horizontal Slide di Mobile, Stack Vertikal di Tablet & Monitor) */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-12 bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs">
              <span className="text-3xl mb-2 block">🔍</span>
              <p className="text-sm font-semibold text-slate-800">Tidak ada pertanyaan yang sesuai dengan kata kunci.</p>
              <p className="text-xs text-slate-500 mt-1">Coba gunakan kata kunci lain atau pilih kategori &quot;Semua&quot;.</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Reset Pencarian
              </button>
            </div>
          ) : (
            <>
              <div
                ref={faqScrollRef}
                onScroll={handleFaqScroll}
                className="flex items-start overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-3 py-2 px-6 -mx-6 sm:mx-0 sm:px-0 sm:flex-col sm:items-stretch sm:overflow-visible sm:space-y-3.5 sm:gap-0"
              >
                {filteredFAQs.map((faq, idx) => {
                  const isOpen = openIndex === idx
                  return (
                    <div
                      key={idx}
                      className={`w-[86vw] max-w-[340px] shrink-0 snap-start sm:w-full sm:max-w-none sm:shrink border rounded-2xl transition-all duration-200 overflow-hidden ${
                        isOpen
                          ? 'bg-white border-slate-300/90 shadow-md'
                          : 'bg-white border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs'
                      }`}
                    >
                      {/* Accordion Header / Question */}
                      <button
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        className="w-full px-5 sm:px-6 py-4.5 sm:py-5 text-left flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus:outline-none outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 rounded-2xl select-none"
                        aria-expanded={isOpen}
                      >
                        <div className="flex flex-col items-start gap-1.5 sm:gap-2 flex-1">
                          <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 shrink-0">
                            {faq.category}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                            {faq.question}
                          </span>
                        </div>

                        <div className={`flex h-8 w-8 items-center justify-center rounded-xl transition-transform duration-200 shrink-0 ${
                          isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-600'
                        }`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {/* Accordion Body / Answer */}
                      {isOpen && (
                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          <p className="mt-2">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Mobile Slide Indicator Dots */}
              {filteredFAQs.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 pt-4 sm:hidden" aria-hidden="true">
                  {filteredFAQs.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      onClick={() => {
                        if (!faqScrollRef.current) return
                        const cardEl = faqScrollRef.current.children[dotIdx] as HTMLElement
                        cardEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        activeFaqIdx === dotIdx ? 'w-6 bg-blue-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                      aria-label={`Buka slide FAQ ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
