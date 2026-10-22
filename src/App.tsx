import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AdminPanel from './components/AdminPanel'
import AdminLogin from './components/AdminLogin'
import FAQ, { DEFAULT_FAQ_ITEMS } from './components/FAQ'
import SEO from './components/SEO'
import PrivacyPolicy, { DEFAULT_PRIVACY_POLICY } from './components/PrivacyPolicy'
import type { LandingPageContent } from './components/AdminPanel'
import { sanitizePortfolioStorage } from './utils/imageOptimizer'

const DEFAULT_CONTENT: LandingPageContent = {
  brandName: 'TEKNOFLASE',
  heroTitle: 'Jasa Pembuatan Website Profesional &',
  heroHighlight: 'Platform Web Modern Berkinerja Tinggi',
  heroHighlightColor: '#2563eb',
  heroFontSize: 'normal',
  heroHighlightFontSize: 'same',
  showHeroHeadline: true,
  showHeroHighlight: true,
  heroDescription: 'Kami membantu bisnis, perusahaan, dan profesional memiliki website berkecepatan tinggi, ramah SEO, dan berdesain kredibel. Bukan sekadar template, setiap website dibangun dengan standar kode bersih untuk menarik prospek dan meningkatkan pertumbuhan bisnis Anda.',

  heroSlides: [
    {
      title: 'Website Perusahaan & Company Profile',
      highlight: 'Membangun Kredibilitas & Kepercayaan Klien',
      desc: 'Tampilkan citra profesional bisnis Anda melalui website elegan yang responsif di seluruh perangkat. Struktur halaman terencana rapi untuk mempermudah calon klien mempelajari layanan Anda.',
      ctaText: 'Konsultasi Pembuatan Website',
      ctaLink: '#contact',
      learnText: 'Lihat Layanan Website',
      learnLink: '#services',
    },
    {
      title: 'Landing Page Penjualan & Promosi Terarah',
      highlight: 'Optimasi Kecepatan & Penangkapan Leads WhatsApp',
      desc: 'Maksimalkan hasil kampanye iklan dan promosi Anda dengan landing page yang cepat dimuat dan mudah dipahami. Terhubung langsung dengan tombol WhatsApp dan sistem formulir prospek.',
      ctaText: 'Pesan Landing Page',
      ctaLink: '#contact',
      learnText: 'Pelajari Keunggulan Kami',
      learnLink: '#about',
    },
    {
      title: 'Aplikasi Web Kustom & Portal Sistem',
      highlight: 'Solusi Portal Bisnis, SaaS & Manajemen Data',
      desc: 'Mulai dari sistem pemesanan online, katalog produk interaktif, hingga dashboard internal perusahaan dengan hak akses terenkripsi dan 100% kepemilikan source code di tangan Anda.',
      ctaText: 'Diskusikan Kebutuhan Sistem',
      ctaLink: '#contact',
      learnText: 'Tanya Jawab (FAQ)',
      learnLink: '#faq',
    },
  ],

  heroBadges: [
    'Support UMKM & Bisnis Lokal',
    'Berbasis di Bogor, Jabar',
    'Loading Cepat & Bebas Bloatware',
    '100% Source Code Milik Anda',
  ],

  aboutTitle: 'Standar Pembuatan Website yang Berorientasi pada Hasil Nyata',
  aboutDescription: 'Pendekatan pembuatan website di TEKNOFLASE memprioritaskan tiga pilar utama: kecepatan loading di bawah dua detik, desain profesional yang meyakinkan calon pelanggan, serta kemudahan pengelolaan konten secara mandiri.',
  aboutStats: [
    { label: 'Rata-rata Waktu Muat (Load Time)', value: '< 1.8 Detik' },
    { label: 'Skor Performa Core Web Vitals', value: '95+' },
    { label: 'Kepemilikan Source Code Klien', value: '100%' },
    { label: 'Jaminan Uptime Server & SLA', value: '99.9%' },
  ],

  portfolioHeading: 'Layanan Pembuatan Website & Solusi Digital',
  portfolioDescription: 'Pilihan solusi website perusahaan, landing page konversi, portal katalog, dan platform web kustom yang dibangun dengan standar performa tinggi.',
  servicesCtaTitle: 'Ingin Mengembangkan Website Serupa dengan Spesifikasi Kustom?',
  servicesCtaDesc: 'Diskusikan referensi desain dan target fitur bisnis Anda. Tim TEKNOFLASE siap menyusun arsitektur sistem dan estimasi pengerjaan yang transparan.',
  servicesCtaButton: 'Konsultasi Sekarang',

  faqHeading: 'Tanya Jawab Seputar Layanan Pembuatan Website',
  faqDescription: 'Temukan jawaban lengkap seputar estimasi waktu pengerjaan, kepemilikan source code, optimasi SEO Google, hingga kemudahan pengelolaan website Anda di TEKNOFLASE.',

  contactHeading: 'Mulai Wujudkan Website Profesional untuk Bisnis Anda',
  contactDescription: 'Diskusikan tujuan, kebutuhan fitur, dan target peluncuran website Anda. Tim kami siap memberikan rekomendasi struktur, estimasi waktu, dan penawaran transparan.',

  featuresDescription: 'Pendekatan pembuatan website di TEKNOFLASE memprioritaskan tiga pilar utama: kecepatan loading di bawah dua detik, desain profesional yang meyakinkan calon pelanggan, serta kemudahan pengelolaan konten secara mandiri.',
  featuresItems: [
    {
      icon: '🏢',
      title: 'Company Profile & Branding Korporat',
      description: 'Membangun reputasi dan kredibilitas bisnis Anda melalui website profesional yang responsif, terstruktur rapi, dan meyakinkan calon klien.',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      icon: '📈',
      title: 'Landing Page Penjualan & Konversi',
      description: 'Halaman penawaran terarah untuk memaksimalkan hasil iklan dan promosi, terhubung langsung ke kontak WhatsApp dan sistem penangkap prospek.',
      gradient: 'from-sky-500 to-blue-600',
    },
    {
      icon: '⚙️',
      title: 'Panel Admin CMS Mandiri',
      description: 'Kemudahan memperbarui teks, foto portofolio, dan informasi kontak kapan saja secara mandiri tanpa harus bergantung pada pihak ketiga.',
      gradient: 'from-slate-700 to-slate-900',
    },
    {
      icon: '🛡️',
      title: 'Kode Bersih & Ramah SEO Google',
      description: 'Struktur HTML semantik, optimasi kecepatan Core Web Vitals, dan sitemap otomatis agar website ringan diakses serta mudah terindeks mesin pencari.',
      gradient: 'from-indigo-600 to-violet-600',
    },
  ],

  ctaTitle: 'Konsultasi Langsung via WhatsApp',
  ctaDescription: 'Diskusikan rencana dan kebutuhan fitur website Anda langsung dengan tim teknis kami. Kami siap memberikan rekomendasi solusi, estimasi biaya, dan jadwal pengerjaan secara transparan.',
  ctaButtonText: 'WhatsApp Sekarang',

  teamMembers: [
    { name: 'Muhammad Farhan', role: 'Project Director & Lead Strategist', initials: 'MF', desc: 'Mengarahkan strategi pengembangan web, arsitektur solusi bisnis, dan kepuasan hasil proyek klien.', linkedin: 'https://linkedin.com' },
    { name: 'William Wirakarya', role: 'Operations & Delivery Lead', initials: 'WW', desc: 'Memastikan timeline pengerjaan tepat waktu, pengujian kualitas (QA), dan kelancaran serah terima sistem.', linkedin: 'https://linkedin.com' },
    { name: 'Rahadian Indra', role: 'Lead Full-Stack Web Engineer', initials: 'RI', desc: 'Memimpin implementasi kode backend, integrasi basis data, dan optimalisasi keamanan website.', linkedin: 'https://linkedin.com' },
    { name: 'Ferdinand Kurnia', role: 'UI/UX Designer & Frontend Engineer', initials: 'FK', desc: 'Merancang antarmuka visual yang estetik, pengalaman pengguna yang nyaman, serta tata letak responsif.', linkedin: 'https://linkedin.com' },
  ],

  portfolioItems: [
    {
      title: 'Website Perusahaan Konsultasi & Bisnis Korporat',
      category: 'Company Profile',
      tag: 'Corporate Profile',
      description: 'Website resmi profil perusahaan dengan tata letak kredibel, navigasi cepat, dan integrasi formulir penawaran kerja sama.',
      features: ['Waktu Muat < 1.5 Detik', 'Panel CMS Kelola Konten', 'Struktur SEO Terindeks Google'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      images: [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      ],
    },
    { title: 'Landing Page Penjualan Produk & Jasa Premium', category: 'Landing Page', tag: 'High-Conversion Page', description: 'Halaman penawaran terfokus dengan narasi persuasif dan alur tindakan terarah langsung ke kontak WhatsApp resmi tim sales.', features: ['Direct WhatsApp Leads', 'Mobile-First Responsive Layout', 'Piksel Analitik Terpasang'], image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80', images: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'] },
    { title: 'Website Toko Online Fashion & Katalog WhatsApp', category: 'Toko Online (E-Commerce)', tag: 'E-Commerce Store', description: 'Platform toko online modern dengan etalase produk responsif, kalkulasi ongkir, dan checkout langsung ke chat WhatsApp kasir.', features: ['Checkout WhatsApp Cepat', 'Manajemen Stok Produk', 'Tampilan Mobile Optimal'], image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80', images: ['https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80'] },
    { title: 'Portal Web Katalog Interaktif & Sistem Pemesanan', category: 'Web Portal & Katalog', tag: 'Web Portal', description: 'Website katalog produk dengan pencarian cepat, filter kategori multi-level, dan alur permohonan penawaran harga instan.', features: ['Filter Produk Real-Time', 'Dashboard Manajemen Katalog', 'Desain Modern & Ringan'], image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80', images: ['https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'] },
    { title: 'Aplikasi Web SaaS & Dashboard Internal Bisnis', category: 'Aplikasi Web (Web App)', tag: 'Custom Web Application', description: 'Sistem berbasis web dengan otentikasi login pengguna, hak akses peran (RBAC), serta pencatatan data operasional terpadu.', features: ['Keamanan Enkripsi Akun', 'Laporan Data Terpusat', 'Arsitektur Siap Berkembang'], image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80', images: ['https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80'] },
    { title: 'Portal Media Informasi & Website Publikasi Berita', category: 'Blog & Portal Berita', tag: 'News & Media Portal', description: 'Website publikasi artikel dan media berita yang ringan, teroptimasi Google News, dan dilengkapi modul manajemen kontributor.', features: ['Google Discover Ready', 'Pemuatan Halaman Kilat', 'Manajemen Kategori Artikel'], image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80', images: ['https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80'] },
  ],

  faqItems: DEFAULT_FAQ_ITEMS,

  contact: {
    email: 'diskusi@teknoflase.com',
    instagram: 'https://instagram.com/teknoflase',
    instagramHandle: 'teknoflase',
    whatsapp: '6281234567890',
    location: 'Bogor, Indonesia',
  },
  footer: {
    description: 'TEKNOFLASE menyediakan layanan pembuatan website profesional, landing page konversi, dan aplikasi web custom. Kami membantu bisnis membangun kehadiran digital yang kredibel, cepat, dan terukur.',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com/teknoflase',
    tiktok: 'https://tiktok.com/@teknoflase',
    showSocialMedia: true,
    showLinkedin: true,
    showInstagram: true,
    showTiktok: true,
    faqLink: '#faq',
    privacyLink: '#privacy',
    termsLink: '#',
    copyrightSuffix: 'Hak cipta dilindungi.',
  },
  footerServices: [
    {
      name: 'Company Profile',
      title: 'Bikin Usaha Anda Terlihat Kredibel & Langsung Dipercaya Calon Pembeli',
      description: 'Banyak calon pembeli atau rekan bisnis ragu bertransaksi kalau usaha Anda belum punya website resmi. Dengan website profil yang rapi, usaha Anda langsung terlihat terpercaya, profesional, dan siap menerima orderan besar.',
      features: [
        'Calon pembeli langsung yakin dan tidak ragu mentransfer pembayaran',
        'Profil usaha buka 24 jam nonstop, bisa dipelajari pelanggan kapan saja',
        'Tampil jauh lebih meyakinkan dibanding saingan yang cuma modal media sosial',
        'Dilengkapi tombol yang menghubungkan pembeli langsung ke WhatsApp Anda',
      ],
      mvp: 'Keuntungan Langsung: Sekali buat untuk selamanya. Menjadi aset yang terus mendatangkan kepercayaan pembeli tanpa perlu bayar biaya sewa bulanan.',
      demoActive: false,
    },
    {
      name: 'Landing Page',
      title: 'Ubah Orang yang Lewat di Iklan Jadi Pembeli yang Langsung Chat WhatsApp',
      description: 'Sering pasang iklan tapi yang beli sedikit? Masalahnya biasanya karena halaman promosi lambat dibuka atau bikin orang bingung. Kami buatkan halaman promosi yang ringan dan memikat agar orang langsung tertarik chat untuk membeli.',
      features: [
        'Halaman langsung terbuka cepat di HP, calon pembeli tidak keburu kabur',
        'Kata-kata dan tata letak dirancang khusus agar pembeli mantap untuk beli',
        'Calon pembeli langsung diarahkan chat WhatsApp dengan sekali tekan tombol',
        'Uang yang Anda keluarkan untuk iklan jadi tidak terbuang sia-sia',
      ],
      mvp: 'Keuntungan Langsung: Biaya promosi yang sama menghasilkan pembeli berkali lipat lebih banyak karena pengunjung tidak kabur di tengah jalan.',
      demoActive: false,
    },
    {
      name: 'Toko Online (E-Commerce)',
      title: 'Jual Produk Anda Sendiri Tanpa Dipotong Komisi Marketplace Sepeser Pun',
      description: 'Jualan di marketplace makin berat karena potongan biaya admin makin tinggi dan sering perang banting harga. Dengan toko online sendiri, semua hasil penjualan 100% utuh masuk ke kantong Anda sendiri.',
      features: [
        'Hasil penjualan 100% masuk ke rekening Anda tanpa potongan per transaksi',
        'Nomor WhatsApp dan data pembeli jadi milik Anda untuk ditawari produk lagi',
        'Bebas dari perang harga dan aturan sepihak yang merugikan di marketplace',
        'Pembeli gampang pilih produk di HP lalu langsung checkout ke WhatsApp Anda',
      ],
      mvp: 'Keuntungan Langsung: Makin banyak barang laku, makin besar uang yang Anda kantongi karena tidak ada potongan komisi dari pihak luar.',
      demoActive: false,
    },
    {
      name: 'Web Portal & Katalog',
      title: 'Pajang Ratusan Produk dengan Rapi Biar Pembeli Gampang Memilih & Memesan',
      description: 'Capek kirim foto produk satu per satu dan berulang kali jawab pertanyaan harga di chat? Taruh semua produk Anda di katalog digital ini. Calon pembeli bisa lihat foto, pilihan warna, dan harga sendiri secara praktis.',
      features: [
        'Hemat waktu Anda dan karyawan dari membalas pertanyaan barang yang sama berulang kali',
        'Calon pembeli bisa cari dan pilih barang sendiri dengan mudah tanpa bingung',
        'Tampilan rapi bikin produk Anda terlihat lebih berkelas dan layak dijual lebih mahal',
        'Calon pembeli yang menghubungi WhatsApp Anda adalah orang yang sudah siap beli',
      ],
      mvp: 'Keuntungan Langsung: Proses jualan jadi jauh lebih cepat, melayani lebih banyak pembeli tanpa harus menambah banyak karyawan baru.',
      demoActive: false,
    },
    {
      name: 'Aplikasi Web (Web App)',
      title: 'Rapikan Catatan Pesanan & Keuangan Usaha Biar Tidak Ada Uang yang Bocor',
      description: 'Usaha mulai ramai tapi sering pusing karena catatan pesanan tercecer di buku atau chat WhatsApp? Kami buatkan sistem sederhana lewat HP atau laptop agar pesanan, stok barang, dan laporan keuangan tercatat rapi secara otomatis.',
      features: [
        'Mencegah pesanan terlewat, barang salah kirim, atau selisih uang kas usaha',
        'Bisa Anda pantau langsung dari HP kapan saja, bahkan saat Anda di luar toko',
        'Tugas karyawan lebih tertata dan catatan penjualan tidak bisa diubah sembarangan',
        'Hemat waktu berjam-jam setiap minggu, Anda bisa fokus membesarkan usaha',
      ],
      mvp: 'Keuntungan Langsung: Menutup celah kerugian dan kebocoran uang kas yang sering kali jauh lebih besar daripada biaya pembuatan sistem.',
      demoActive: false,
    },
    {
      name: 'Blog & Portal Berita',
      title: 'Datangkan Calon Pembeli dari Pencarian Google Tanpa Perlu Bayar Iklan',
      description: 'Setiap hari ada ribuan orang mencari produk atau jasa di Google. Kalau usaha Anda tidak muncul di sana, calon pembeli itu lari ke tempat lain. Kami buatkan website yang mudah ditemukan di Google agar pembeli datang sendiri ke usaha Anda.',
      features: [
        'Menjaring pembeli yang memang sedang butuh dan siap transaksi saat itu juga',
        'Mendatangkan calon pembeli secara gratis setiap hari tanpa biaya iklan harian',
        'Usaha Anda otomatis dianggap sebagai pilihan nomor satu yang paling terpercaya',
        'Artikel dan informasi yang dipasang menjadi tenaga sales yang bekerja siang malam',
      ],
      mvp: 'Keuntungan Langsung: Menjadi sumber pelanggan baru yang terus berdatangan tanpa perlu mengeluarkan biaya promosi harian terus-menerus.',
      demoActive: false,
    },
  ],
  privacyPolicy: DEFAULT_PRIVACY_POLICY,
}

function App() {
  // Content CMS State
  const [content, setContent] = useState<LandingPageContent>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('landing_page_content')
      if (saved) {
        try {
          let parsed = JSON.parse(saved)
          // Auto-migrate: if they have older content, update to new high-converting website service content
          if (
            parsed.heroTitle === 'Merakit Logika' || 
            parsed.heroHighlight === 'Membangun Realita' ||
            parsed.heroTitle === 'Jasa Pembuatan E-Commerce' ||
            parsed.heroTitle === 'Rekayasa Perangkat Lunak,' ||
            !parsed.heroTitle?.includes('Website')
          ) {
            localStorage.setItem('landing_page_content', JSON.stringify(DEFAULT_CONTENT))
            return DEFAULT_CONTENT
          }
          // Strips the tech credit suffix from older client configurations immediately
          if (parsed.footer?.copyrightSuffix?.includes('Dibuat menggunakan React')) {
            parsed.footer.copyrightSuffix = 'Hak cipta dilindungi.'
            localStorage.setItem('landing_page_content', JSON.stringify(parsed))
          }
          // Auto-migrate legacy brand names (trinova..., jasaweb...) to TEKNOFLASE in existing localStorage
          let contentString = JSON.stringify(parsed)
          if (/trinova|jasaweb/i.test(contentString)) {
            contentString = contentString
              .replace(/demo\.jasaweb\.digital/gi, 'demo.teknoflase.com')
              .replace(/jasaweb\.digital/gi, 'TEKNOFLASE')
              .replace(/jasaweb/gi, 'teknoflase')
              .replace(/demo\.trinovagroup\.com/gi, 'demo.teknoflase.com')
              .replace(/trinovagroup\.com/gi, 'teknoflase.com')
              .replace(/trinovadigital\.com/gi, 'teknoflase.com')
              .replace(/Trinovagroup/g, 'TEKNOFLASE')
              .replace(/trinovagroup/g, 'teknoflase')
              .replace(/Trinova Group/gi, 'TEKNOFLASE')
              .replace(/Trinova Digital/gi, 'TEKNOFLASE')
              .replace(/trinovadigital/g, 'teknoflase')
            parsed = JSON.parse(contentString)
            if (parsed.brandName && (/jasaweb/i.test(parsed.brandName) || /trinova/i.test(parsed.brandName))) {
              parsed.brandName = 'TEKNOFLASE'
            }
            localStorage.setItem('landing_page_content', JSON.stringify(parsed))
          }
          // Migrate: update footerServices to easy-to-understand profit-focused copy
          if (
            !parsed.footerServices ||
            parsed.footerServices.length < 6 ||
            parsed.footerServices.some((s: Record<string, unknown>) => 
              s.name === 'Audit & Optimasi Website' || 
              s.name === 'Website Perusahaan (Company Profile)' ||
              (typeof s.title === 'string' && s.title.includes('Pembuatan Website Company Profile & Korporat')) ||
              (typeof s.title === 'string' && s.title.includes('Membangun Kredibilitas & Reputasi Bisnis'))
            )
          ) {
            parsed.footerServices = DEFAULT_CONTENT.footerServices
            localStorage.setItem('landing_page_content', JSON.stringify(parsed))
          }
          // Migrate: ensure existing saved portfolio items have images array and coverImage
          if (parsed.portfolioItems && Array.isArray(parsed.portfolioItems)) {
            let hasImageUpdates = false
            parsed.portfolioItems = parsed.portfolioItems.map((item: Record<string, unknown>, idx: number) => {
              let updated = { ...item }
              if (!updated.image) {
                hasImageUpdates = true
                const defaultItem = DEFAULT_CONTENT.portfolioItems[idx]
                updated.image = defaultItem?.image || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
              }
              const defaultItem = DEFAULT_CONTENT.portfolioItems[idx]
              if (!Array.isArray(updated.images) || updated.images.length === 0) {
                hasImageUpdates = true
                updated.images = defaultItem?.images || (updated.image ? [updated.image as string] : [])
              }
              if (!updated.coverImage && updated.image) {
                hasImageUpdates = true
                updated.coverImage = updated.image
              }
              return updated
            })
            if (hasImageUpdates) {
              localStorage.setItem('landing_page_content', JSON.stringify(parsed))
            }
          }

          // Migrate: ensure privacyPolicy exists
          if (!parsed.privacyPolicy || !Array.isArray(parsed.privacyPolicy.sections)) {
            parsed.privacyPolicy = DEFAULT_CONTENT.privacyPolicy
            localStorage.setItem('landing_page_content', JSON.stringify(parsed))
          }

          // Migrate: ensure footer.privacyLink points to #privacy
          if (parsed.footer && (parsed.footer.privacyLink === '#' || !parsed.footer.privacyLink)) {
            parsed.footer.privacyLink = '#privacy'
            localStorage.setItem('landing_page_content', JSON.stringify(parsed))
          }

          // Migrate: update old default ctaButtonText to 'WhatsApp Sekarang'
          if (parsed.ctaButtonText === 'Mulai Percakapan WhatsApp Sekarang') {
            parsed.ctaButtonText = 'WhatsApp Sekarang'
            localStorage.setItem('landing_page_content', JSON.stringify(parsed))
          }

          // Migrate: merge missing keys from DEFAULT_CONTENT so new fields populate
          return {
            ...DEFAULT_CONTENT,
            ...parsed,
            privacyPolicy: (parsed.privacyPolicy && Array.isArray(parsed.privacyPolicy.sections) && parsed.privacyPolicy.sections.length > 0)
              ? parsed.privacyPolicy
              : DEFAULT_CONTENT.privacyPolicy,
            footer: {
              ...DEFAULT_CONTENT.footer,
              ...(parsed.footer || {}),
              privacyLink: (parsed.footer?.privacyLink && parsed.footer.privacyLink !== '#')
                ? parsed.footer.privacyLink
                : '#privacy',
            },
            footerServices: (Array.isArray(parsed.footerServices) && parsed.footerServices.length > 0)
              ? parsed.footerServices
              : DEFAULT_CONTENT.footerServices,
            featuresItems: (Array.isArray(parsed.featuresItems) && parsed.featuresItems.length > 0)
              ? parsed.featuresItems
              : DEFAULT_CONTENT.featuresItems,
            faqItems: (Array.isArray(parsed.faqItems) && parsed.faqItems.length > 0)
              ? parsed.faqItems
              : DEFAULT_CONTENT.faqItems,
            aboutStats: (Array.isArray(parsed.aboutStats) && parsed.aboutStats.length > 0)
              ? parsed.aboutStats
              : DEFAULT_CONTENT.aboutStats,
            teamMembers: (Array.isArray(parsed.teamMembers) && parsed.teamMembers.length > 0)
              ? parsed.teamMembers
              : DEFAULT_CONTENT.teamMembers,
            portfolioItems: (Array.isArray(parsed.portfolioItems) && parsed.portfolioItems.length > 0)
              ? parsed.portfolioItems
              : DEFAULT_CONTENT.portfolioItems,
          }
        } catch (e) {
          console.error('Failed to parse saved content', e)
        }
      }
    }
    return DEFAULT_CONTENT
  })

  // Admin Auth State (session-based: clears when tab is closed)
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('admin_auth') === 'true'
    }
    return false
  })

  // Hash-based Route State ('landing' | 'admin' | 'privacy')
  type RouteType = 'landing' | 'admin' | 'privacy'

  const getRouteFromHash = (): RouteType => {
    if (typeof window === 'undefined') return 'landing'
    const hash = window.location.hash.toLowerCase()
    if (hash === '#admin') return 'admin'
    if (hash === '#privacy' || hash === '#kebijakan-privasi') return 'privacy'
    return 'landing'
  }

  const [currentRoute, setCurrentRoute] = useState<RouteType>(getRouteFromHash)

  useEffect(() => {
    // Lighting aesthetic concept: Clean, luminous public page
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }, [])

  // Sync document title dynamically with content.brandName & currentRoute
  useEffect(() => {
    if (content.brandName) {
      if (currentRoute === 'privacy') {
        document.title = `Kebijakan Privasi | ${content.brandName}`
      } else if (currentRoute === 'admin') {
        document.title = `Admin CMS | ${content.brandName}`
      } else {
        document.title = `${content.brandName} | Jasa Pembuatan Website Profesional & Aplikasi Web Modern`
      }
    }
  }, [content.brandName, currentRoute])

  useEffect(() => {
    const handleHashChange = () => {
      const nextRoute = getRouteFromHash()
      setCurrentRoute(nextRoute)
      const currentHash = window.location.hash
      if (nextRoute === 'landing' && currentHash && currentHash !== '#' && currentHash.length > 1) {
        setTimeout(() => {
          const el = document.querySelector(currentHash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          } else {
            window.scrollTo({ top: 0, behavior: 'instant' })
          }
        }, 120)
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'landing_page_content' && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue)
          if (parsed && typeof parsed === 'object') {
            setContent(parsed)
          }
        } catch {
          // Abaikan jika data parsing tidak valid
        }
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('storage', handleStorageChange)

    // Auto-optimize existing oversized base64 images in localStorage from legacy uploads
    try {
      const rawSaved = localStorage.getItem('landing_page_content')
      if (rawSaved && rawSaved.length > 400_000) {
        sanitizePortfolioStorage(content.portfolioItems).then(({ items, compressedCount }) => {
          if (compressedCount > 0) {
            const optimized = { ...content, portfolioItems: items }
            setContent(optimized)
            try {
              localStorage.setItem('landing_page_content', JSON.stringify(optimized))
              console.info(`[Teknoflase] Otomatis mengoptimalkan ${compressedCount} aset gambar lokal (${(rawSaved.length / 1024 / 1024).toFixed(2)} MB ➔ ${(JSON.stringify(optimized).length / 1024 / 1024).toFixed(2)} MB)`)
            } catch (e) {
              console.warn('Could not auto-save optimized images:', e)
            }
          }
        })
      }
    } catch (e) {
      console.warn('Storage check error:', e)
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  const handleUpdateContent = async (newContent: LandingPageContent) => {
    setContent(newContent)
    try {
      localStorage.setItem('landing_page_content', JSON.stringify(newContent))
    } catch (err: unknown) {
      console.warn('LocalStorage quota exceeded, attempting automatic image optimization...', err)
      try {
        const { items, compressedCount } = await sanitizePortfolioStorage(newContent.portfolioItems)
        if (compressedCount > 0) {
          const sanitizedContent = { ...newContent, portfolioItems: items }
          setContent(sanitizedContent)
          localStorage.setItem('landing_page_content', JSON.stringify(sanitizedContent))
          console.info(`[Teknoflase] Berhasil mengompresi ${compressedCount} gambar untuk menghemat kuota localStorage.`)
          return
        }
      } catch (sanitizeErr) {
        console.error('Failed to auto-sanitize portfolio storage:', sanitizeErr)
      }

      alert('Kapasitas penyimpanan lokal browser (localStorage) penuh (~5MB). Silakan gunakan tautan URL gambar (Google Drive/Dropbox/Unsplash) atau kurangi jumlah foto agar perubahan tersimpan permanen.')
    }
  }

  const handleLogin = () => {
    setIsAdminAuthenticated(true)
  }

  const handleLogout = () => {
    sessionStorage.removeItem('admin_auth')
    setIsAdminAuthenticated(false)
    window.location.hash = ''
    setCurrentRoute('landing')
  }

  // ── Admin Route ─────────────────────────────────────────────────────────────
  if (currentRoute === 'admin') {
    if (!isAdminAuthenticated) {
      return <AdminLogin onLogin={handleLogin} brandName={content.brandName} />
    }
    return (
      <AdminPanel
        content={content}
        onUpdateContent={handleUpdateContent}
        onLogout={handleLogout}
      />
    )
  }

  // ── Privacy Policy Route ───────────────────────────────────────────────────
  if (currentRoute === 'privacy') {
    return (
      <div className="app-layout min-h-screen bg-white text-slate-900 transition-colors duration-200">
        <SEO content={content} />
        <PrivacyPolicy
          content={content}
          onBack={() => {
            window.location.hash = ''
            setCurrentRoute('landing')
          }}
        />
      </div>
    )
  }

  // ── Landing Page Route (Lighting Aesthetic) ─────────────────────────────────
  return (
    <div className="app-layout min-h-screen bg-white text-slate-900 transition-colors duration-200">
      <SEO content={content} />
      <Navbar brandName={content.brandName} />
      <Hero content={content} />
      <About content={content} />
      <Services content={content} />
      <FAQ content={content} />
      <Contact content={content} />
      <Footer content={content} />
    </div>
  )
}

export default App
