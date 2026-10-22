import { useState } from 'react'
import { DEFAULT_FAQ_ITEMS } from './FAQ'
import { DEFAULT_PRIVACY_POLICY } from './PrivacyPolicy'
import type { PrivacySection, PrivacyPolicyContent } from './PrivacyPolicy'
import { compressImageFile, compressBase64Image } from '../utils/imageOptimizer'

export type { PrivacySection, PrivacyPolicyContent }

// ─── Data Interfaces ─────────────────────────────────────────────────────────

export interface FeatureItem {
  icon: string
  title: string
  description: string
  gradient: string
}

export interface HeroSlide {
  title: string
  highlight: string
  desc: string
  ctaText: string
  ctaLink: string
  learnText: string
  learnLink: string
  highlightColor?: string
  fontSize?: string
  highlightFontSize?: string
}

export interface WorkflowStep {
  no: string
  title: string
  description: string
  gradient?: string
  shadowColor?: string
}

export interface FAQItem {
  category: string
  question: string
  answer: string
}

export interface TeamMember {
  name: string
  role: string
  initials: string
  desc: string
  linkedin: string
}

export interface PortfolioItem {
  title: string
  category: string
  tag: string
  description: string
  features: string[]
  image?: string
  images?: string[]
  coverImage?: string
  duration?: string
  demoUrl?: string
  deliverables?: string
}

export interface ContactInfo {
  email: string
  instagram: string
  instagramHandle: string
  whatsapp: string
  location: string
}

export interface FooterInfo {
  description: string
  linkedin: string
  instagram: string
  tiktok?: string
  faqLink: string
  privacyLink: string
  termsLink: string
  copyrightSuffix: string
  showSocialMedia?: boolean
  showLinkedin?: boolean
  showInstagram?: boolean
  showTiktok?: boolean
}

export interface FooterService {
  name: string
  title: string
  description: string
  features: string[]
  mvp: string
  demoActive?: boolean
  demoLink?: string
}

export interface AboutStat {
  label: string
  value: string
}

export interface LandingPageContent {
  brandName: string
  heroTitle: string
  heroHighlight: string
  heroDescription: string
  heroSlides: HeroSlide[]
  heroBadges?: string[]
  heroHighlightColor?: string
  heroFontSize?: string
  heroHighlightFontSize?: string
  showHeroHeadline?: boolean
  showHeroHighlight?: boolean
  aboutTitle?: string
  aboutDescription?: string
  aboutStats?: AboutStat[]
  featuresDescription: string
  featuresItems: FeatureItem[]
  servicesHeading?: string
  servicesDescription?: string
  servicesCtaTitle?: string
  servicesCtaDesc?: string
  servicesCtaButton?: string
  portfolioHeading?: string
  portfolioDescription?: string
  faqHeading?: string
  faqDescription?: string
  contactHeading?: string
  contactDescription?: string
  ctaTitle: string
  ctaDescription: string
  ctaButtonText?: string
  workflowSteps?: WorkflowStep[]
  faqItems?: FAQItem[]
  teamMembers: TeamMember[]
  portfolioItems: PortfolioItem[]
  contact: ContactInfo
  footer: FooterInfo
  footerServices: FooterService[]
  privacyPolicy?: PrivacyPolicyContent
}

// ─── Panel Props ─────────────────────────────────────────────────────────────

interface AdminPanelProps {
  content: LandingPageContent
  onUpdateContent: (content: LandingPageContent) => void
  onLogout: () => void
}

// ─── Category Config (Urut Sesuai Landing Page) ────────────────────────────────

export const CATEGORIES = [
  { id: 'general',   label: 'General & Brand',         icon: '⚙️' },
  { id: 'hero',      label: 'Hero Slides & Badges',    icon: '✨' },
  { id: 'about',     label: 'Tentang Kami & Tim',      icon: '🏢' },
  { id: 'portfolio', label: 'Layanan & Portofolio',   icon: '🗂️' },
  { id: 'faq',       label: 'Tanya Jawab (FAQ)',       icon: '❓' },
  { id: 'contact',   label: 'Kontak & Call to Action', icon: '📬' },
  { id: 'footer',    label: 'Footer & Legalitas',      icon: '🦶' },
  { id: 'privacy',   label: 'Kebijakan Privasi',       icon: '🛡️' },
]

export const WEBSITE_CATEGORIES = [
  'Company Profile',
  'Landing Page',
  'Toko Online (E-Commerce)',
  'Web Portal & Katalog',
  'Aplikasi Web (Web App)',
  'Blog & Portal Berita',
  'Website UMKM & Bisnis Lokal',
  'Website Restoran & Kuliner',
  'Website Reservasi & Booking',
  'Website Portofolio Kreatif',
  'Website Lembaga & Pendidikan',
  'Website Properti & Real Estate',
  'Website Tour & Travel',
  'Website Organisasi & Komunitas',
  'Website Undangan Digital',
] as const

// ─── Hero Headline & Highlight Style Presets ─────────────────────────────────

const HERO_COLOR_PRESETS = [
  { name: 'Biru Royal', hex: '#2563eb' },
  { name: 'Emerald Hijau', hex: '#059669' },
  { name: 'Indigo Modern', hex: '#4f46e5' },
  { name: 'Ungu Violet', hex: '#7c3aed' },
  { name: 'Amber Emas', hex: '#d97706' },
  { name: 'Rose Coral', hex: '#e11d48' },
  { name: 'Cyan Futuristik', hex: '#0891b2' },
]

const HERO_GRADIENT_PRESETS = [
  { name: 'Biru ➔ Emerald', value: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)' },
  { name: 'Ungu ➔ Pink', value: 'linear-gradient(135deg, #7c3aed 0%, #ec4899 100%)' },
  { name: 'Amber ➔ Rose', value: 'linear-gradient(135deg, #f59e0b 0%, #e11d48 100%)' },
]

const HERO_FONT_SIZES = [
  { id: 'compact', label: 'Compact / Ringkas', desc: '3xl (HP) / 5xl (Tablet) / 6xl (Desktop)' },
  { id: 'normal',  label: 'Standar / Normal',   desc: '4xl (HP) / 6xl (Tablet) / 7xl (Desktop) — Bawaan' },
  { id: 'large',   label: 'Besar / Menonjol',   desc: '5xl (HP) / 7xl (Tablet) / 8xl (Desktop)' },
  { id: 'jumbo',   label: 'Jumbo / Ekstra',     desc: '6xl (HP) / 8xl (Tablet) / 9xl (Desktop)' },
]

const HERO_HIGHLIGHT_FONT_SIZES = [
  { id: 'same',    label: 'Proporsional (Sama dengan Judul)', desc: 'Ukuran highlight mengikuti judul' },
  { id: 'compact', label: 'Lebih Ringkas',                   desc: 'Ukuran highlight sedikit lebih kecil' },
  { id: 'normal',  label: 'Sedang / Normal',                 desc: 'Ukuran highlight seimbang' },
  { id: 'large',   label: 'Lebih Besar',                     desc: 'Highlight lebih menonjol dari judul' },
  { id: 'jumbo',   label: 'Ekstra Besar',                    desc: 'Highlight kontras ekstra besar' },
]

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

// ─── Reusable Input Components ────────────────────────────────────────────────

function Field({ label, value, onChange, multiline = false, rows = 3, placeholder = '' }: {
  label: string; value: string; onChange: (v: string) => void; multiline?: boolean; rows?: number; placeholder?: string
}) {
  const cls = "w-full rounded-xl bg-slate-950 px-4 py-3 text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-sm"
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</label>
      {multiline
        ? <textarea rows={rows} value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} className={`${cls} resize-y`} />
        : <input type="text" value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)} className={cls} />
      }
    </div>
  )
}

function SelectField({ label, value, options, onChange }: {
  label: string
  value: string
  options: readonly string[] | string[]
  onChange: (v: string) => void
}) {
  const cls = "w-full rounded-xl bg-slate-950 px-4 py-3 text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-sm cursor-pointer"
  const allOptions = options.includes(value) || !value ? options : [value, ...options]
  return (
    <div>
      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} className={cls}>
        {allOptions.map((opt) => (
          <option key={opt} value={opt} className="bg-slate-900 text-white">
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}

function SectionTitle({ icon, label }: { icon: string; label: string }) {
  return (
    <h2 className="text-base font-bold text-white mb-6 flex items-center gap-2 pb-4 border-b border-slate-800">
      <span>{icon}</span> {label}
    </h2>
  )
}

// ─── Main Admin Panel Component ───────────────────────────────────────────────

export default function AdminPanel({ content, onUpdateContent, onLogout }: AdminPanelProps) {
  const [activeCategory, setActiveCategory] = useState('general')
  const [saved, setSaved] = useState(false)
  const [expandedProjectIdx, setExpandedProjectIdx] = useState<number | null>(0)
  const [openHeroSlideIndices, setOpenHeroSlideIndices] = useState<number[]>([0])
  const [portfolioSearch, setPortfolioSearch] = useState<string>('')
  const [portfolioCategoryFilter, setPortfolioCategoryFilter] = useState<string>('Semua')
  const [selectedFooterServiceIdx, setSelectedFooterServiceIdx] = useState<number | 'all'>(0)
  const [projectImageUrlInput, setProjectImageUrlInput] = useState<string>('')
  const [openPrivacySectionIndices, setOpenPrivacySectionIndices] = useState<number[]>([0])
  const [uploadProgress, setUploadProgress] = useState<{
    projectIdx: number
    percent: number
    current: number
    total: number
    fileName: string
    isComplete?: boolean
  } | null>(null)

  const handleChange = <K extends keyof LandingPageContent>(key: K, value: LandingPageContent[K]) => {
    onUpdateContent({ ...content, [key]: value })
    flashSaved()
  }

  const flashSaved = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  // ── Dynamic Brand Name Cascading Update ────────────────────────────────────
  const handleBrandNameChange = (newBrandName: string) => {
    const oldBrand = content.brandName || ''
    if (!newBrandName.trim() || oldBrand === newBrandName) {
      handleChange('brandName', newBrandName)
      return
    }

    const replaceBrand = (text: string): string => {
      if (!text) return text
      let res = text
      if (oldBrand && oldBrand.trim()) {
        const escaped = oldBrand.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        res = res.replace(new RegExp(escaped, 'gi'), newBrandName)
      }
      res = res.replace(/trinova\s*group|trinova\s*digital|trinovagroup|trinovadigital|jasaweb\.digital|jasaweb/gi, newBrandName)
      return res
    }

    const updatedHeroSlides = content.heroSlides.map(slide => ({
      ...slide,
      title: replaceBrand(slide.title),
      highlight: replaceBrand(slide.highlight),
      desc: replaceBrand(slide.desc),
      learnText: replaceBrand(slide.learnText),
    }))

    const updatedCtaDesc = replaceBrand(content.ctaDescription)
    const updatedServicesCtaDesc = content.servicesCtaDesc ? replaceBrand(content.servicesCtaDesc) : content.servicesCtaDesc
    const updatedFooter = {
      ...content.footer,
      description: replaceBrand(content.footer.description),
    }

    const updatedServices = (content.footerServices || []).map(service => ({
      ...service,
      title: replaceBrand(service.title),
      description: replaceBrand(service.description),
      mvp: replaceBrand(service.mvp),
    }))

    const updatedContent: LandingPageContent = {
      ...content,
      brandName: newBrandName,
      ctaDescription: updatedCtaDesc,
      servicesCtaDesc: updatedServicesCtaDesc,
      heroSlides: updatedHeroSlides,
      footer: updatedFooter,
      footerServices: updatedServices,
    }

    onUpdateContent(updatedContent)
    flashSaved()
  }

  // ── Hero Slides Management ─────────────────────────────────────────────────
  const updateSlide = (idx: number, key: keyof HeroSlide, value: string) => {
    const slides = [...content.heroSlides]
    slides[idx] = { ...slides[idx], [key]: value }
    handleChange('heroSlides', slides)
  }

  const applyStyleToAllSlides = (updates: { color?: string; fontSize?: string; highlightFontSize?: string }) => {
    const slides = content.heroSlides.map(slide => ({
      ...slide,
      ...(updates.color !== undefined ? { highlightColor: updates.color } : {}),
      ...(updates.fontSize !== undefined ? { fontSize: updates.fontSize } : {}),
      ...(updates.highlightFontSize !== undefined ? { highlightFontSize: updates.highlightFontSize } : {}),
    }))
    const updated = {
      ...content,
      heroSlides: slides,
      ...(updates.color !== undefined ? { heroHighlightColor: updates.color } : {}),
      ...(updates.fontSize !== undefined ? { heroFontSize: updates.fontSize } : {}),
      ...(updates.highlightFontSize !== undefined ? { heroHighlightFontSize: updates.highlightFontSize } : {}),
    }
    onUpdateContent(updated)
    flashSaved()
  }

  const toggleHeroSlide = (idx: number) => {
    setOpenHeroSlideIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const expandAllHeroSlides = () => {
    setOpenHeroSlideIndices(content.heroSlides.map((_, i) => i))
  }

  const collapseAllHeroSlides = () => {
    setOpenHeroSlideIndices([])
  }

  const moveSlide = (idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1
    if (targetIdx < 0 || targetIdx >= content.heroSlides.length) return
    const slides = [...content.heroSlides]
    const temp = slides[idx]
    slides[idx] = slides[targetIdx]
    slides[targetIdx] = temp
    handleChange('heroSlides', slides)
    setOpenHeroSlideIndices(prev => {
      const hasIdx = prev.includes(idx)
      const hasTarget = prev.includes(targetIdx)
      const next = prev.filter(i => i !== idx && i !== targetIdx)
      if (hasIdx) next.push(targetIdx)
      if (hasTarget) next.push(idx)
      return next
    })
  }

  const addSlide = () => {
    const newSlide: HeroSlide = {
      title: 'Solusi Website Bisnis',
      highlight: 'Kecepatan & Konversi Tinggi',
      desc: 'Deskripsi singkat mengenai solusi website yang menarik dan profesional.',
      ctaText: 'Mulai Konsultasi',
      ctaLink: '#contact',
      learnText: 'Lihat Layanan',
      learnLink: '#services',
    }
    const newIndex = content.heroSlides.length
    handleChange('heroSlides', [...content.heroSlides, newSlide])
    setOpenHeroSlideIndices(prev => [...prev, newIndex])
  }

  const deleteSlide = (idx: number) => {
    if (content.heroSlides.length <= 1) {
      alert('Minimal harus memiliki 1 slide hero.')
      return
    }
    const slides = content.heroSlides.filter((_, i) => i !== idx)
    handleChange('heroSlides', slides)
    setOpenHeroSlideIndices(prev =>
      prev
        .filter(i => i !== idx)
        .map(i => (i > idx ? i - 1 : i))
    )
  }

  // ── Hero Badges ────────────────────────────────────────────────────────────
  const updateHeroBadges = (value: string) => {
    const badges = value.split('\n').map(s => s.trim()).filter(Boolean)
    handleChange('heroBadges', badges)
  }

  // ── About Feature Pillars (Pilar Layanan Utama) ─────────────────────────────
  const updateFeatureItem = (idx: number, key: keyof FeatureItem, value: string) => {
    const items = [...(content.featuresItems || [])]
    items[idx] = { ...items[idx], [key]: value }
    handleChange('featuresItems', items)
  }

  const addFeatureItem = () => {
    const items = [...(content.featuresItems || [])]
    const newItem: FeatureItem = {
      icon: '✨',
      title: 'Pilar Layanan Baru',
      description: 'Penjelasan mengenai keunggulan dan manfaat pilar layanan ini untuk calon klien.',
      gradient: 'from-blue-600 to-indigo-600',
    }
    handleChange('featuresItems', [...items, newItem])
  }

  const deleteFeatureItem = (idx: number) => {
    const items = [...(content.featuresItems || [])]
    if (items.length <= 1) {
      alert('Minimal harus memiliki 1 pilar layanan.')
      return
    }
    handleChange('featuresItems', items.filter((_, i) => i !== idx))
  }

  // ── About Stats ────────────────────────────────────────────────────────────
  const updateStat = (idx: number, key: 'label' | 'value', value: string) => {
    const currentStats = content.aboutStats && content.aboutStats.length > 0
      ? [...content.aboutStats]
      : [
          { label: 'Rata-rata Waktu Muat (Load Time)', value: '< 1.8 Detik' },
          { label: 'Skor Performa Core Web Vitals', value: '95+' },
          { label: 'Kepemilikan Source Code Klien', value: '100%' },
          { label: 'Jaminan Uptime Server & SLA', value: '99.9%' },
        ]
    currentStats[idx] = { ...currentStats[idx], [key]: value }
    handleChange('aboutStats', currentStats)
  }

  // ── Team Members ───────────────────────────────────────────────────────────
  const updateMember = (idx: number, key: keyof TeamMember, value: string) => {
    const members = [...content.teamMembers]
    members[idx] = { ...members[idx], [key]: value }
    handleChange('teamMembers', members)
  }

  const addMember = () => {
    const newMember: TeamMember = {
      name: 'Nama Anggota',
      role: 'Spesialisasi / Jabatan',
      initials: 'NA',
      desc: 'Pengalaman dan dedikasi dalam perancangan dan pengembangan website modern.',
      linkedin: 'https://linkedin.com',
    }
    handleChange('teamMembers', [...content.teamMembers, newMember])
  }

  const deleteMember = (idx: number) => {
    if (content.teamMembers.length <= 1) {
      alert('Minimal harus memiliki 1 anggota tim.')
      return
    }
    const members = content.teamMembers.filter((_, i) => i !== idx)
    handleChange('teamMembers', members)
  }

  // ── Portfolio Projects CRUD Mechanism ─────────────────────────────────────
  const updateProject = (idx: number, key: keyof PortfolioItem, value: string | string[]) => {
    const projects = [...content.portfolioItems]
    projects[idx] = { ...projects[idx], [key]: value }
    handleChange('portfolioItems', projects)
  }

  const updateProjectFeatures = (idx: number, value: string) => {
    updateProject(idx, 'features', value.split('\n').map(s => s.trim()).filter(Boolean))
  }

  const handleUploadProjectImages = (idx: number, files: FileList | null) => {
    if (!files || files.length === 0) return
    const fileArray = Array.from(files)
    const total = fileArray.length

    // Inisialisasi progress bar awal
    setUploadProgress({
      projectIdx: idx,
      percent: 15,
      current: 1,
      total,
      fileName: fileArray[0].name,
      isComplete: false,
    })

    let completed = 0
    const results: string[] = []

    fileArray.forEach(async (file, fileIdx) => {
      try {
        const compressed = await compressImageFile(file)
        results[fileIdx] = compressed
      } catch {
        results[fileIdx] = ''
      }

      completed += 1
      const percent = Math.min(95, Math.round((completed / total) * 90))
      setUploadProgress({
        projectIdx: idx,
        percent,
        current: Math.min(completed + 1, total),
        total,
        fileName: file.name,
        isComplete: false,
      })

      if (completed === total) {
        const valid = results.filter(r => Boolean(r && r.trim()))
        if (valid.length > 0) {
          const projects = [...content.portfolioItems]
          const currentItem = projects[idx]
          const existing = (currentItem.images && currentItem.images.length > 0)
            ? currentItem.images
            : (currentItem.image ? [currentItem.image] : [])
          const updatedImages = [...existing, ...valid]
          const preservedCover = (currentItem.coverImage && currentItem.coverImage.trim() !== '')
            ? currentItem.coverImage
            : (updatedImages[0] || '')

          projects[idx] = {
            ...currentItem,
            images: updatedImages,
            image: updatedImages[0] || '',
            coverImage: preservedCover,
          }
          handleChange('portfolioItems', projects)
        }

        // Set 100% dan status selesai
        setUploadProgress({
          projectIdx: idx,
          percent: 100,
          current: total,
          total,
          fileName: total > 1 ? `${total} foto berhasil dioptimalkan & diunggah` : file.name,
          isComplete: true,
        })

        // Sembunyikan progress bar otomatis setelah 2 detik
        setTimeout(() => {
          setUploadProgress(prev => (prev && prev.projectIdx === idx ? null : prev))
        }, 2000)
      }
    })
  }

  const normalizeImageUrl = (input: string): string => {
    let url = input.trim()
    // Konversi Google Drive sharing/view link ke direct CDN link
    const gdriveMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || url.match(/[?&]id=([a-zA-Z0-9_-]+)/)
    if (gdriveMatch && gdriveMatch[1]) {
      return `https://lh3.googleusercontent.com/d/${gdriveMatch[1]}`
    }
    // Konversi Dropbox sharing link ke direct file
    if (url.includes('dropbox.com')) {
      return url.replace('dl=0', 'raw=1').replace('www.dropbox.com', 'dl.dropboxusercontent.com')
    }
    return url
  }

  const handleAddProjectImageUrl = (idx: number, url: string) => {
    if (!url || !url.trim()) return
    const cleanedUrl = normalizeImageUrl(url)
    const projects = [...content.portfolioItems]
    const currentItem = projects[idx]
    const existing = (currentItem.images && currentItem.images.length > 0)
      ? currentItem.images
      : (currentItem.image ? [currentItem.image] : [])
    const updatedImages = [...existing, cleanedUrl]
    projects[idx] = {
      ...currentItem,
      images: updatedImages,
      image: updatedImages[0] || '',
      coverImage: updatedImages[0] || '',
    }
    handleChange('portfolioItems', projects)
  }

  const handleRemoveProjectImage = (idx: number, imgIdx: number) => {
    const projects = [...content.portfolioItems]
    const currentItem = projects[idx]
    const existing = (currentItem.images && currentItem.images.length > 0)
      ? currentItem.images
      : (currentItem.image ? [currentItem.image] : [])
    const updatedImages = existing.filter((_, i) => i !== imgIdx)
    projects[idx] = {
      ...currentItem,
      images: updatedImages,
      image: updatedImages[0] || '',
      coverImage: updatedImages[0] || '',
    }
    handleChange('portfolioItems', projects)
  }

  const handleMoveProjectImage = (idx: number, imgIdx: number, direction: 'left' | 'right') => {
    const projects = [...content.portfolioItems]
    const currentItem = projects[idx]
    const existing = [...((currentItem.images && currentItem.images.length > 0) ? currentItem.images : (currentItem.image ? [currentItem.image] : []))]
    const targetIdx = direction === 'left' ? imgIdx - 1 : imgIdx + 1
    if (targetIdx < 0 || targetIdx >= existing.length) return
    const [moved] = existing.splice(imgIdx, 1)
    existing.splice(targetIdx, 0, moved)
    projects[idx] = {
      ...currentItem,
      images: existing,
      image: existing[0] || '',
      coverImage: existing[0] || '',
    }
    handleChange('portfolioItems', projects)
  }

  const handleSetPrimaryImage = async (idx: number, imgIdx: number) => {
    if (imgIdx === 0) return
    const projects = [...content.portfolioItems]
    const currentItem = projects[idx]
    const existing = [...((currentItem.images && currentItem.images.length > 0) ? currentItem.images : (currentItem.image ? [currentItem.image] : []))]
    const [primary] = existing.splice(imgIdx, 1)

    // Kompresi gambar primer jika bertipe Data URL Base64 besar
    let optimizedPrimary = primary
    if (typeof primary === 'string' && primary.startsWith('data:image/') && primary.length > 70_000) {
      optimizedPrimary = await compressBase64Image(primary, 1000, 650, 0.70)
    }

    existing.unshift(optimizedPrimary)

    // Kompresi seluruh array gambar agar hemat memori localStorage
    const optimizedImages = await Promise.all(
      existing.map(async (img) => {
        if (typeof img === 'string' && img.startsWith('data:image/') && img.length > 70_000) {
          return await compressBase64Image(img, 1000, 650, 0.70)
        }
        return img
      })
    )

    projects[idx] = {
      ...currentItem,
      images: optimizedImages,
      image: optimizedImages[0] || '',
      coverImage: optimizedImages[0] || '',
    }
    handleChange('portfolioItems', projects)
  }

  const handleClearProjectImages = (idx: number) => {
    const projects = [...content.portfolioItems]
    projects[idx] = {
      ...projects[idx],
      images: [],
      image: '',
      coverImage: '',
    }
    handleChange('portfolioItems', projects)
  }

  const addProject = () => {
    const newProject: PortfolioItem = {
      title: 'Website Proyek Baru',
      category: WEBSITE_CATEGORIES[0],
      tag: 'Proyek Unggulan',
      description: 'Penjelasan singkat mengenai solusi website yang dibangun, fitur utama, dan dampaknya bagi pertumbuhan bisnis klien.',
      features: ['Desain Modern & Responsif', 'Kecepatan Muat Optimal', 'Struktur SEO Terindeks Google'],
      image: '',
      images: [],
      coverImage: '',
      duration: '7 - 14 Hari Kerja',
      demoUrl: '',
      deliverables: 'Dibuat dengan kode bersih, optimasi Core Web Vitals, tampilan responsif di seluruh gadget, dan 100% kepemilikan source code klien.',
    }
    const updated = [newProject, ...content.portfolioItems]
    handleChange('portfolioItems', updated)
    setExpandedProjectIdx(0)
  }

  const duplicateProject = (idx: number) => {
    const original = content.portfolioItems[idx]
    const duplicated: PortfolioItem = {
      ...original,
      title: `${original.title} (Salinan)`,
      features: [...original.features],
      images: original.images ? [...original.images] : (original.image ? [original.image] : []),
      image: original.image || (original.images?.[0] || ''),
      coverImage: original.coverImage || original.image || (original.images?.[0] || ''),
    }
    const updated = [...content.portfolioItems]
    updated.splice(idx + 1, 0, duplicated)
    handleChange('portfolioItems', updated)
    setExpandedProjectIdx(idx + 1)
  }

  const deleteProject = (idx: number) => {
    if (content.portfolioItems.length <= 1) {
      alert('Minimal harus memiliki 1 proyek portofolio.')
      return
    }
    const targetTitle = content.portfolioItems[idx]?.title || `Proyek #${idx + 1}`
    if (window.confirm(`Hapus proyek "${targetTitle}"? Tindakan ini tidak dapat dibatalkan.`)) {
      const updated = content.portfolioItems.filter((_, i) => i !== idx)
      handleChange('portfolioItems', updated)
      if (expandedProjectIdx === idx) {
        setExpandedProjectIdx(null)
      } else if (expandedProjectIdx !== null && expandedProjectIdx > idx) {
        setExpandedProjectIdx(expandedProjectIdx - 1)
      }
    }
  }

  const moveProject = (fromIdx: number, direction: 'up' | 'down') => {
    const toIdx = direction === 'up' ? fromIdx - 1 : fromIdx + 1
    if (toIdx < 0 || toIdx >= content.portfolioItems.length) return
    const updated = [...content.portfolioItems]
    const [moved] = updated.splice(fromIdx, 1)
    updated.splice(toIdx, 0, moved)
    handleChange('portfolioItems', updated)
    setExpandedProjectIdx(toIdx)
  }

  // ── FAQ Items ──────────────────────────────────────────────────────────────
  const updateFaq = (idx: number, key: keyof FAQItem, value: string) => {
    const faqs = [...(content.faqItems && content.faqItems.length > 0 ? content.faqItems : DEFAULT_FAQ_ITEMS)]
    faqs[idx] = { ...faqs[idx], [key]: value }
    handleChange('faqItems', faqs)
  }

  const addFaq = () => {
    const faqs = [...(content.faqItems && content.faqItems.length > 0 ? content.faqItems : DEFAULT_FAQ_ITEMS)]
    const newFaq: FAQItem = {
      category: 'Layanan & Solusi',
      question: 'Pertanyaan baru seputar layanan pembuatan website?',
      answer: 'Penjelasan rinci dan transparan untuk menjawab keraguan calon klien.',
    }
    handleChange('faqItems', [...faqs, newFaq])
  }

  const deleteFaq = (idx: number) => {
    const faqs = [...(content.faqItems && content.faqItems.length > 0 ? content.faqItems : DEFAULT_FAQ_ITEMS)]
    if (faqs.length <= 1) {
      alert('Minimal harus memiliki 1 pertanyaan FAQ.')
      return
    }
    handleChange('faqItems', faqs.filter((_, i) => i !== idx))
  }

  // ── Contact & Footer Helpers ───────────────────────────────────────────────
  const updateContact = (key: keyof ContactInfo, value: string) => {
    handleChange('contact', { ...content.contact, [key]: value })
  }

  const updateFooter = <K extends keyof FooterInfo>(key: K, value: FooterInfo[K]) => {
    handleChange('footer', { ...content.footer, [key]: value })
  }

  const updateFooterService = <K extends keyof FooterService>(idx: number, key: K, value: FooterService[K]) => {
    const services = [...(content.footerServices || [])]
    services[idx] = { ...services[idx], [key]: value }
    handleChange('footerServices', services)
  }

  const updateFooterServiceFeatures = (idx: number, value: string) => {
    updateFooterService(idx, 'features', value.split('\n').map(s => s.trim()).filter(Boolean))
  }

  // ── Privacy Policy Helpers ─────────────────────────────────────────────────
  const privacyData = content.privacyPolicy || DEFAULT_PRIVACY_POLICY

  const updatePrivacyField = <K extends keyof PrivacyPolicyContent>(key: K, value: PrivacyPolicyContent[K]) => {
    handleChange('privacyPolicy', {
      ...privacyData,
      [key]: value,
    })
  }

  const togglePrivacySection = (idx: number) => {
    setOpenPrivacySectionIndices(prev =>
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    )
  }

  const expandAllPrivacySections = () => {
    const total = (privacyData.sections || []).length
    setOpenPrivacySectionIndices(Array.from({ length: total }, (_, i) => i))
  }

  const collapseAllPrivacySections = () => {
    setOpenPrivacySectionIndices([])
  }

  const updatePrivacySection = (idx: number, key: keyof PrivacySection, value: string) => {
    const sections = [...(privacyData.sections || [])]
    sections[idx] = { ...sections[idx], [key]: value }
    updatePrivacyField('sections', sections)
  }

  const addPrivacySection = () => {
    const sections = [...(privacyData.sections || [])]
    const newIdx = sections.length + 1
    const newSection: PrivacySection = {
      title: `${newIdx}. Ketentuan Kebijakan Baru`,
      content: 'Tuliskan penjelasan mengenai ketentuan atau kebijakan perlindungan data baru di sini.',
    }
    const updated = [...sections, newSection]
    updatePrivacyField('sections', updated)
    setOpenPrivacySectionIndices(prev => [...prev, updated.length - 1])
  }

  const deletePrivacySection = (idx: number) => {
    const sections = [...(privacyData.sections || [])]
    if (sections.length <= 1) {
      alert('Minimal harus memiliki 1 pasal / poin kebijakan privasi.')
      return
    }
    const targetTitle = sections[idx]?.title || `Pasal #${idx + 1}`
    if (window.confirm(`Hapus "${targetTitle}"? Tindakan ini tidak dapat dibatalkan.`)) {
      const updated = sections.filter((_, i) => i !== idx)
      updatePrivacyField('sections', updated)
      setOpenPrivacySectionIndices(prev =>
        prev
          .filter(i => i !== idx)
          .map(i => (i > idx ? i - 1 : i))
      )
    }
  }

  const movePrivacySection = (idx: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1
    const sections = [...(privacyData.sections || [])]
    if (targetIdx < 0 || targetIdx >= sections.length) return
    const temp = sections[idx]
    sections[idx] = sections[targetIdx]
    sections[targetIdx] = temp
    updatePrivacyField('sections', sections)
    setOpenPrivacySectionIndices(prev => {
      const hasIdx = prev.includes(idx)
      const hasTarget = prev.includes(targetIdx)
      const next = prev.filter(i => i !== idx && i !== targetIdx)
      if (hasIdx) next.push(targetIdx)
      if (hasTarget) next.push(idx)
      return next
    })
  }

  const resetPrivacyToDefault = () => {
    if (window.confirm('Reset seluruh isi Kebijakan Privasi ke standar awal TEKNOFLASE? Tindakan ini akan menimpa perubahan kustom saat ini.')) {
      handleChange('privacyPolicy', DEFAULT_PRIVACY_POLICY)
      setOpenPrivacySectionIndices([0])
    }
  }

  const activeCat = CATEGORIES.find(c => c.id === activeCategory) || CATEGORIES[0]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <div className="flex min-h-screen">

        {/* ── Sidebar (Stationary/Sticky on Desktop) ───────────────────── */}
        <aside className="sticky top-0 h-screen hidden md:flex flex-col w-64 shrink-0 bg-slate-900 border-r border-slate-800 py-6 px-4">
          <div className="flex items-center gap-2.5 px-2 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black text-sm shadow-md shadow-emerald-500/20">
              {content.brandName ? content.brandName.charAt(0).toUpperCase() : 'T'}
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-base font-bold text-white leading-tight">Admin CMS</span>
              <span className="text-xs text-emerald-400 font-medium truncate max-w-[140px]">{content.brandName}</span>
            </div>
          </div>

          <nav className="flex flex-col gap-1 overflow-y-auto flex-1 pr-1">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-emerald-400 ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100 border border-transparent'
                }`}
              >
                <span className="text-base leading-none">{cat.icon}</span>
                <span className="truncate">{cat.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto space-y-2 pt-4 border-t border-slate-800">
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-400 hover:bg-slate-800 hover:text-slate-100 transition-all focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              <span>🌐</span> Lihat Landing Page
            </a>
            <button
              type="button"
              onClick={onLogout}
              className="w-full flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-semibold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-emerald-400"
            >
              <span>🚪</span> Logout
            </button>
          </div>
        </aside>

        {/* ── Main Content Area ───────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Top Bar */}
          <header className="sticky top-0 z-10 bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-base font-bold text-white flex items-center gap-2">
                <span>{activeCat.icon}</span> {activeCat.label}
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">Kelola dan sesuaikan konten landing page secara langsung</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-500 ${
                saved
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                  : 'bg-slate-950 text-slate-400 border-slate-800'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${saved ? 'bg-emerald-400 animate-pulse' : 'bg-slate-600'}`} />
                {saved ? 'Tersimpan ✓' : 'Autosave aktif'}
              </span>
              <button
                type="button"
                onClick={onLogout}
                className="md:hidden px-3 py-1.5 text-xs font-semibold text-red-400 border border-red-500/20 bg-red-500/10 rounded-xl hover:bg-red-500/20 cursor-pointer transition-all"
              >
                Logout
              </button>
              <select
                className="md:hidden border border-slate-800 rounded-xl px-3 py-1.5 text-xs font-semibold bg-slate-950 text-white cursor-pointer"
                value={activeCategory}
                onChange={e => setActiveCategory(e.target.value)}
              >
                {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.icon} {c.label}</option>)}
              </select>
            </div>
          </header>

          {/* Form Content Area */}
          <main className="flex-1 p-6 sm:p-8 max-w-5xl w-full mx-auto space-y-6">

            {/* ── 1. GENERAL & BRAND ────────────────────────── */}
            {activeCategory === 'general' && (
              <div className="space-y-5 bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm">
                <SectionTitle icon="⚙️" label="Pengaturan Brand & Hero Utama" />
                <div>
                  <Field label="Nama Brand Perusahaan" value={content.brandName} onChange={v => handleBrandNameChange(v)} />
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    💡 Mengubah Brand Name di sini otomatis memperbarui nama brand di Navbar, Hero, About, Portofolio, FAQ, Footer, CTA, dan WhatsApp.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Judul Hero (Baris 1)" value={content.heroTitle} onChange={v => handleChange('heroTitle', v)} />
                  <Field label="Judul Hero Highlight (Teks Berwarna)" value={content.heroHighlight} onChange={v => handleChange('heroHighlight', v)} />
                </div>
                <Field label="Deskripsi Hero Utama" value={content.heroDescription} onChange={v => handleChange('heroDescription', v)} multiline rows={3} />
              </div>
            )}

            {/* ── 2. HERO SLIDES & BADGES ────────────────────── */}
            {activeCategory === 'hero' && (
              <div className="space-y-6">
                {/* Badges Strip Editor */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                  <SectionTitle icon="🏷️" label="Badge Nilai Keunggulan (Strip Bawah Hero)" />
                  <p className="text-xs text-slate-400 -mt-2">
                    Tuliskan 4 badge nilai jual utama yang tampil di strip bawah hero banner (satu baris per badge).
                  </p>
                  <textarea
                    rows={4}
                    value={(content.heroBadges && content.heroBadges.length > 0
                      ? content.heroBadges
                      : [
                          'Loading Cepat & Ringan',
                          'Tampilan Responsif di Semua HP',
                          'Struktur SEO On-Page Rapi',
                          '100% Source Code Milik Anda',
                        ]
                    ).join('\n')}
                    onChange={e => updateHeroBadges(e.target.value)}
                    className="w-full rounded-xl bg-slate-950 px-4 py-3 text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-sm"
                  />
                </div>

                {/* Global Styling Card for Hero */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <SectionTitle icon="🎨" label="Penataan Bawaan Headline (Highlight & Ukuran Font)" />
                      <p className="text-xs text-slate-400 -mt-3">
                        Tentukan warna teks highlight dan ukuran font bawaan untuk headline Hero. Anda juga dapat mengatur gaya unik per slide di bawah.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => applyStyleToAllSlides({
                        color: content.heroHighlightColor || '#2563eb',
                        fontSize: content.heroFontSize || 'normal',
                        highlightFontSize: content.heroHighlightFontSize || 'same',
                      })}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-sm transition-all cursor-pointer self-start sm:self-auto shrink-0"
                      title="Seragamkan seluruh slide dengan warna dan ukuran font bawaan ini"
                    >
                      <span>⚡</span> Terapkan ke Semua Slide
                    </button>
                  </div>

                  {/* Toggle Show / Hide Highlight Text */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>✨</span> Tampilkan Highlight Teks Berwarna (Show / Hide)
                        </span>
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold ${
                          content.showHeroHighlight !== false
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${content.showHeroHighlight !== false ? 'bg-emerald-400' : 'bg-amber-400'}`} />
                          {content.showHeroHighlight !== false ? 'ON (Ditampilkan)' : 'OFF (Disembunyikan)'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {content.showHeroHighlight !== false
                          ? 'Teks highlight berwarna kustom saat ini aktif tampil di bawah judul utama headline.'
                          : 'Teks highlight saat ini disembunyikan. Judul utama headline tetap tampil rapi di landing page tanpa teks highlight.'}
                      </p>
                    </div>

                    <button
                      type="button"
                      role="switch"
                      aria-checked={content.showHeroHighlight !== false}
                      onClick={() => handleChange('showHeroHighlight', content.showHeroHighlight === false ? true : false)}
                      className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 ${
                        content.showHeroHighlight !== false ? 'bg-emerald-500' : 'bg-slate-700'
                      }`}
                      title={content.showHeroHighlight !== false ? 'Klik untuk mematikan / menyembunyikan teks highlight' : 'Klik untuk mengaktifkan / menampilkan teks highlight'}
                    >
                      <span className="sr-only">Toggle Tampilkan Highlight</span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                          content.showHeroHighlight !== false ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-2 border-t border-slate-800">
                    {/* Global Highlight Color */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Warna Highlight Bawaan
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                          <input
                            type="color"
                            value={content.heroHighlightColor?.startsWith('#') ? content.heroHighlightColor : '#2563eb'}
                            onChange={e => handleChange('heroHighlightColor', e.target.value)}
                            className="w-6 h-6 rounded cursor-pointer bg-transparent border-0 shrink-0"
                            title="Pilih warna secara visual"
                          />
                          <input
                            type="text"
                            value={content.heroHighlightColor || '#2563eb'}
                            onChange={e => handleChange('heroHighlightColor', e.target.value)}
                            placeholder="#2563eb"
                            className="w-full text-xs font-mono bg-transparent text-white border-0 focus:outline-none"
                          />
                        </div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {HERO_COLOR_PRESETS.map((preset) => {
                            const isSelected = (content.heroHighlightColor || '#2563eb').toLowerCase() === preset.hex.toLowerCase()
                            return (
                              <button
                                key={preset.hex}
                                type="button"
                                onClick={() => handleChange('heroHighlightColor', preset.hex)}
                                className={`w-6 h-6 rounded-md transition-transform flex items-center justify-center cursor-pointer ${
                                  isSelected ? 'scale-110 ring-2 ring-white ring-offset-1 ring-offset-slate-900 shadow' : 'hover:scale-105'
                                }`}
                                style={{ backgroundColor: preset.hex }}
                                title={preset.name}
                              >
                                {isSelected && <span className="text-[9px] text-white font-bold">✓</span>}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Global Title Font Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Ukuran Font Judul Headline Bawaan
                      </label>
                      <select
                        value={content.heroFontSize || 'normal'}
                        onChange={e => handleChange('heroFontSize', e.target.value)}
                        className="w-full rounded-xl bg-slate-950 px-3 py-2.5 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 cursor-pointer"
                      >
                        {HERO_FONT_SIZES.map(s => (
                          <option key={s.id} value={s.id}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-[11px] text-slate-500 mt-1.5">
                        {HERO_FONT_SIZES.find(s => s.id === (content.heroFontSize || 'normal'))?.desc}
                      </p>
                    </div>

                    {/* Global Highlight Font Size */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Ukuran Font Highlight Bawaan
                      </label>
                      <select
                        value={content.heroHighlightFontSize || 'same'}
                        onChange={e => handleChange('heroHighlightFontSize', e.target.value)}
                        className="w-full rounded-xl bg-slate-950 px-3 py-2.5 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 cursor-pointer"
                      >
                        {HERO_HIGHLIGHT_FONT_SIZES.map(hs => (
                          <option key={hs.id} value={hs.id}>
                            {hs.label}
                          </option>
                        ))}
                      </select>
                      <p className="text-[11px] text-slate-500 mt-1.5">
                        {HERO_HIGHLIGHT_FONT_SIZES.find(hs => hs.id === (content.heroHighlightFontSize || 'same'))?.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Slides Editor Header */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <SectionTitle icon="✨" label="Daftar Slide Hero" />
                      <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-950 text-slate-300 border border-slate-800 -mt-6">
                        {content.heroSlides.length} Slide
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 -mt-3 mb-0">
                      Slide bergantian otomatis setiap 7 detik pada halaman beranda. Klik pada baris slide untuk membuka atau menutup accordion.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                    <button
                      type="button"
                      onClick={expandAllHeroSlides}
                      className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                      title="Buka seluruh accordion slide"
                    >
                      Buka Semua
                    </button>
                    <button
                      type="button"
                      onClick={collapseAllHeroSlides}
                      className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                      title="Tutup seluruh accordion slide"
                    >
                      Tutup Semua
                    </button>
                    <button
                      type="button"
                      onClick={addSlide}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                    >
                      <span>+</span> Tambah Slide Baru
                    </button>
                  </div>
                </div>

                {/* Slides Accordion List */}
                <div className="space-y-3.5">
                  {content.heroSlides.map((slide, idx) => {
                    const isExpanded = openHeroSlideIndices.includes(idx)
                    const effectiveColor = slide.highlightColor || content.heroHighlightColor || '#2563eb'
                    const effectiveFontSize = slide.fontSize || content.heroFontSize || 'normal'
                    const effectiveHighlightFontSize = slide.highlightFontSize || content.heroHighlightFontSize || 'same'

                    return (
                      <div
                        key={idx}
                        className={`bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
                          isExpanded ? 'border-emerald-500/40 ring-1 ring-emerald-500/20' : 'border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        {/* ─── Compact Summary Row Header (Accordion Toggle Bar) ─── */}
                        <div
                          onClick={() => toggleHeroSlide(idx)}
                          className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-3.5 bg-slate-900/95 cursor-pointer hover:bg-slate-800/60 transition-colors select-none"
                          role="button"
                          aria-expanded={isExpanded}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleHeroSlide(idx)
                            }
                          }}
                        >
                          {/* Left: Index badge, title & highlight preview */}
                          <div className="flex items-center gap-3.5 min-w-0 flex-1">
                            <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-mono font-bold shrink-0 transition-colors ${
                              isExpanded
                                ? 'bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/30'
                                : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            }`}>
                              #{idx + 1}
                            </span>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="text-sm font-bold text-white truncate max-w-sm sm:max-w-md lg:max-w-xl">
                                  {slide.title || 'Slide Hero Tanpa Judul'}
                                </h4>
                                {slide.highlight && content.showHeroHighlight !== false && (
                                  <span
                                    className="text-xs font-bold truncate max-w-xs"
                                    style={getHighlightStyle(effectiveColor)}
                                  >
                                    {slide.highlight}
                                  </span>
                                )}
                              </div>

                              {/* Compact Meta Badges */}
                              <div className="flex items-center gap-2 mt-1 flex-wrap text-[11px] font-mono text-slate-400">
                                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                                  <span className="w-2 h-2 rounded-full inline-block shrink-0" style={{ background: effectiveColor }} />
                                  <span>{effectiveColor.startsWith('#') ? effectiveColor : 'Gradien'}</span>
                                </span>
                                <span className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                                  Ukuran: {effectiveFontSize}
                                </span>
                                {slide.ctaText && (
                                  <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-400">
                                    Tombol: {slide.ctaText}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Right: Actions & Accordion Toggle */}
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 self-end md:self-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/80 w-full md:w-auto justify-end"
                          >
                            {/* Reorder Buttons */}
                            <button
                              type="button"
                              disabled={idx === 0}
                              onClick={() => moveSlide(idx, 'up')}
                              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                              title="Geser urutan slide ke atas"
                              aria-label="Geser ke atas"
                            >
                              ⬆️
                            </button>
                            <button
                              type="button"
                              disabled={idx === content.heroSlides.length - 1}
                              onClick={() => moveSlide(idx, 'down')}
                              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                              title="Geser urutan slide ke bawah"
                              aria-label="Geser ke bawah"
                            >
                              ⬇️
                            </button>

                            {/* Delete Button */}
                            <button
                              type="button"
                              onClick={() => deleteSlide(idx)}
                              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 transition-colors cursor-pointer flex items-center gap-1"
                              title="Hapus Slide Ini"
                            >
                              <span>🗑️</span>
                              <span className="hidden sm:inline">Hapus</span>
                            </button>

                            {/* Expand / Collapse Button */}
                            <button
                              type="button"
                              onClick={() => toggleHeroSlide(idx)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                                isExpanded
                                  ? 'bg-slate-800 text-white border border-slate-700'
                                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/20'
                              }`}
                            >
                              <span>{isExpanded ? 'Tutup' : 'Edit'}</span>
                              <svg
                                className={`w-3.5 h-3.5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2.5}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        {/* ─── Detailed Edit Form (Expanded Accordion Body) ─── */}
                        {isExpanded && (
                          <div className="p-6 border-t border-slate-800 bg-slate-950/40 space-y-5 animate-fadeIn">
                            {/* Live Preview Card */}
                            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/90 shadow-inner">
                              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                                    <span>👁️</span> Live Headline Preview
                                  </span>
                                  {content.showHeroHighlight === false && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                      ⚠️ Highlight Disembunyikan (OFF)
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800">
                                    Ukuran: {effectiveFontSize}
                                  </span>
                                  <span className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full inline-block" style={{ background: effectiveColor }} />
                                    {effectiveColor.startsWith('#') ? effectiveColor : 'Gradien'}
                                  </span>
                                </div>
                              </div>
                              <div className="py-4 px-3 bg-slate-900/60 rounded-lg border border-slate-800/60 text-center">
                                <p className={`font-extrabold tracking-tight text-white leading-tight ${
                                  effectiveFontSize === 'compact' ? 'text-lg sm:text-2xl' :
                                  effectiveFontSize === 'large' ? 'text-2xl sm:text-4xl' :
                                  effectiveFontSize === 'jumbo' ? 'text-3xl sm:text-5xl' :
                                  'text-xl sm:text-3xl'
                                }`}>
                                  {slide.title || 'Judul Slide Hero'}
                                  {content.showHeroHighlight !== false && (
                                    <span
                                      className={`block mt-1 font-extrabold ${
                                        effectiveHighlightFontSize === 'compact' ? 'text-base sm:text-xl' :
                                        effectiveHighlightFontSize === 'large' ? 'text-2xl sm:text-4xl' :
                                        effectiveHighlightFontSize === 'jumbo' ? 'text-3xl sm:text-5xl' :
                                        ''
                                      }`}
                                      style={getHighlightStyle(effectiveColor)}
                                    >
                                      {slide.highlight || 'Highlight Teks Berwarna'}
                                    </span>
                                  )}
                                </p>
                              </div>
                            </div>

                            {/* Input Judul & Highlight */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Field label="Judul Slide" value={slide.title} onChange={v => updateSlide(idx, 'title', v)} />
                              <Field label="Highlight (Teks Berwarna)" value={slide.highlight} onChange={v => updateSlide(idx, 'highlight', v)} />
                            </div>

                            {/* Kontrol Penataan Warna Highlight & Ukuran Font Dinamis */}
                            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-4">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                                  <span>🎨</span> Kustomisasi Warna & Ukuran Font Slide #{idx + 1}
                                </span>
                                {(slide.highlightColor || slide.fontSize || slide.highlightFontSize) && (
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const slides = [...content.heroSlides]
                                      const updatedSlide = { ...slides[idx] }
                                      delete updatedSlide.highlightColor
                                      delete updatedSlide.fontSize
                                      delete updatedSlide.highlightFontSize
                                      slides[idx] = updatedSlide
                                      handleChange('heroSlides', slides)
                                    }}
                                    className="text-[11px] text-slate-400 hover:text-slate-200 underline cursor-pointer"
                                    title="Kembalikan ke gaya bawaan hero"
                                  >
                                    Reset ke Bawaan
                                  </button>
                                )}
                              </div>

                              {/* 1. Pengaturan Warna Highlight */}
                              <div>
                                <label className="block text-xs font-semibold text-slate-300 mb-2">
                                  Pilih Warna Highlight
                                </label>
                                <div className="flex flex-wrap items-center gap-3">
                                  {/* Color Picker & Text */}
                                  <div className="flex items-center gap-2 bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
                                    <input
                                      type="color"
                                      value={effectiveColor.startsWith('#') ? effectiveColor : '#2563eb'}
                                      onChange={e => updateSlide(idx, 'highlightColor', e.target.value)}
                                      className="w-7 h-7 rounded cursor-pointer bg-transparent border-0 shrink-0"
                                      title="Pilih warna highlight visual"
                                    />
                                    <input
                                      type="text"
                                      value={slide.highlightColor || ''}
                                      onChange={e => updateSlide(idx, 'highlightColor', e.target.value)}
                                      placeholder={content.heroHighlightColor || '#2563eb'}
                                      className="w-28 text-xs font-mono bg-transparent text-white border-0 focus:outline-none"
                                    />
                                  </div>

                                  {/* Solid Swatches */}
                                  <div className="flex flex-wrap items-center gap-1.5">
                                    {HERO_COLOR_PRESETS.map((preset) => {
                                      const isSelected = effectiveColor.toLowerCase() === preset.hex.toLowerCase()
                                      return (
                                        <button
                                          key={preset.hex}
                                          type="button"
                                          onClick={() => updateSlide(idx, 'highlightColor', preset.hex)}
                                          className={`w-7 h-7 rounded-lg transition-transform flex items-center justify-center cursor-pointer ${
                                            isSelected ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-slate-900 shadow-md' : 'hover:scale-105'
                                          }`}
                                          style={{ backgroundColor: preset.hex }}
                                          title={preset.name}
                                        >
                                          {isSelected && <span className="text-[10px] text-white font-bold">✓</span>}
                                        </button>
                                      )
                                    })}
                                  </div>

                                  {/* Gradient Presets */}
                                  <div className="flex items-center gap-1.5 pl-2 border-l border-slate-800">
                                    <span className="text-[10px] font-mono text-slate-400">Gradien:</span>
                                    {HERO_GRADIENT_PRESETS.map((grad, gIdx) => {
                                      const isSelected = slide.highlightColor === grad.value
                                      return (
                                        <button
                                          key={gIdx}
                                          type="button"
                                          onClick={() => updateSlide(idx, 'highlightColor', grad.value)}
                                          className={`px-2.5 py-1 rounded-md text-[10px] font-semibold text-white transition-all cursor-pointer ${
                                            isSelected ? 'ring-2 ring-white ring-offset-1 ring-offset-slate-900 scale-105' : 'opacity-85 hover:opacity-100'
                                          }`}
                                          style={{ background: grad.value }}
                                          title={grad.name}
                                        >
                                          {grad.name.split(' ')[0]}
                                        </button>
                                      )
                                    })}
                                  </div>
                                </div>
                              </div>

                              {/* 2. Pengaturan Ukuran Font Judul & Highlight */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-900">
                                <div>
                                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                    Ukuran Font Judul Headline
                                  </label>
                                  <select
                                    value={slide.fontSize || content.heroFontSize || 'normal'}
                                    onChange={e => updateSlide(idx, 'fontSize', e.target.value)}
                                    className="w-full rounded-xl bg-slate-900 px-3 py-2 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 cursor-pointer"
                                  >
                                    {HERO_FONT_SIZES.map(s => (
                                      <option key={s.id} value={s.id}>
                                        {s.label} — {s.desc}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                <div>
                                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                                    Ukuran Font Highlight (Teks Berwarna)
                                  </label>
                                  <select
                                    value={slide.highlightFontSize || content.heroHighlightFontSize || 'same'}
                                    onChange={e => updateSlide(idx, 'highlightFontSize', e.target.value)}
                                    className="w-full rounded-xl bg-slate-900 px-3 py-2 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 cursor-pointer"
                                  >
                                    {HERO_HIGHLIGHT_FONT_SIZES.map(hs => (
                                      <option key={hs.id} value={hs.id}>
                                        {hs.label}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </div>

                            <Field label="Deskripsi Slide" value={slide.desc} onChange={v => updateSlide(idx, 'desc', v)} multiline rows={2} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Field label="Teks Tombol Utama" value={slide.ctaText} onChange={v => updateSlide(idx, 'ctaText', v)} />
                              <Field label="Link Tombol Utama" value={slide.ctaLink} onChange={v => updateSlide(idx, 'ctaLink', v)} />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Field label="Teks Tombol Sekunder" value={slide.learnText} onChange={v => updateSlide(idx, 'learnText', v)} />
                              <Field label="Link Tombol Sekunder" value={slide.learnLink} onChange={v => updateSlide(idx, 'learnLink', v)} />
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* ── 3. TENTANG KAMI & TIM ──────────────────────── */}
            {activeCategory === 'about' && (
              <div className="space-y-6">
                {/* Header Section About */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                  <SectionTitle icon="🏢" label="Section Tentang Kami (About)" />
                  <Field
                    label="Judul Section Tentang Kami"
                    value={content.aboutTitle || 'Standar Pembuatan Website yang Berorientasi pada Hasil Nyata'}
                    onChange={v => handleChange('aboutTitle', v)}
                  />
                  <Field
                    label="Deskripsi Narasi Tentang Kami"
                    value={content.aboutDescription || content.featuresDescription}
                    onChange={v => {
                      handleChange('aboutDescription', v)
                      handleChange('featuresDescription', v)
                    }}
                    multiline
                    rows={3}
                  />
                </div>

                {/* Pilar Layanan Utama (Features & Pillars Cards) */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>💎</span> Pilar Layanan Utama (Kartu Keunggulan)
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Kartu pilar yang ditampilkan di section Tentang Kami (dapat digeser di tablet/mobile).
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addFeatureItem}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer self-start sm:self-auto"
                    >
                      <span>+</span> Tambah Pilar
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(content.featuresItems && content.featuresItems.length > 0 ? content.featuresItems : []).map((pillar, pIdx) => (
                      <div key={pIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3 relative group">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-emerald-400 font-bold">Pilar #{pIdx + 1}</span>
                          <button
                            type="button"
                            onClick={() => deleteFeatureItem(pIdx)}
                            className="text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 rounded-lg px-2 py-0.5 transition-colors cursor-pointer"
                            title="Hapus Pilar Ini"
                          >
                            Hapus
                          </button>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="col-span-1">
                            <Field
                              label="Icon / Emoji"
                              value={pillar.icon || '✨'}
                              onChange={v => updateFeatureItem(pIdx, 'icon', v)}
                            />
                          </div>
                          <div className="col-span-3">
                            <Field
                              label="Judul Pilar"
                              value={pillar.title}
                              onChange={v => updateFeatureItem(pIdx, 'title', v)}
                            />
                          </div>
                        </div>
                        <Field
                          label="Deskripsi Pilar"
                          value={pillar.description}
                          onChange={v => updateFeatureItem(pIdx, 'description', v)}
                          multiline
                          rows={3}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Performance Stats Cards */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                  <SectionTitle icon="📊" label="Tolok Ukur Kualitas & Metrik Performa" />
                  <p className="text-xs text-slate-400 -mt-2">
                    4 tolok ukur kualitas teknis yang ditampilkan pada kartu metrik performa.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(content.aboutStats && content.aboutStats.length > 0
                      ? content.aboutStats
                      : [
                          { label: 'Rata-rata Waktu Muat (Load Time)', value: '< 1.8 Detik' },
                          { label: 'Skor Performa Core Web Vitals', value: '95+' },
                          { label: 'Kepemilikan Source Code Klien', value: '100%' },
                          { label: 'Jaminan Uptime Server & SLA', value: '99.9%' },
                        ]
                    ).map((stat, sIdx) => (
                      <div key={sIdx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-3">
                        <span className="text-xs font-mono text-emerald-400 font-bold">Metrik 0{sIdx + 1}</span>
                        <Field label="Label Metrik" value={stat.label} onChange={v => updateStat(sIdx, 'label', v)} />
                        <Field label="Nilai / Skor" value={stat.value} onChange={v => updateStat(sIdx, 'value', v)} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <SectionTitle icon="👥" label="Tim Pengembang" />
                    <p className="text-sm text-slate-400 -mt-3 mb-0">Kelola profil anggota tim yang tampil di bagian bawah Tentang Kami.</p>
                  </div>
                  <button
                    type="button"
                    onClick={addMember}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <span>+</span> Tambah Anggota Tim
                  </button>
                </div>

                {content.teamMembers.map((member, idx) => (
                  <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Anggota #{idx + 1}</span>
                      <button
                        type="button"
                        onClick={() => deleteMember(idx)}
                        className="text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 rounded-lg px-2.5 py-1 transition-colors cursor-pointer"
                        title="Hapus Anggota Ini"
                      >
                        Hapus
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label="Nama Lengkap" value={member.name} onChange={v => updateMember(idx, 'name', v)} />
                      <Field label="Jabatan / Role" value={member.role} onChange={v => updateMember(idx, 'role', v)} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Field label="Inisial Avatar (2 Huruf)" value={member.initials} onChange={v => updateMember(idx, 'initials', v)} />
                      <Field label="URL LinkedIn" value={member.linkedin} onChange={v => updateMember(idx, 'linkedin', v)} />
                    </div>
                    <Field label="Bio Singkat" value={member.desc} onChange={v => updateMember(idx, 'desc', v)} multiline rows={2} />
                  </div>
                ))}
              </div>
            )}

            {/* ── 4. PORTOFOLIO PROYEK ──────────────────────── */}
            {activeCategory === 'portfolio' && (
              <div className="space-y-6">
                {/* Header Section Portofolio */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                  <SectionTitle icon="🗂️" label="Pengaturan Section Portofolio" />
                  <Field
                    label="Judul Section Portofolio"
                    value={content.portfolioHeading || 'Portofolio Proyek & Hasil Pembuatan Website'}
                    onChange={v => handleChange('portfolioHeading', v)}
                  />
                  <Field
                    label="Deskripsi Section Portofolio"
                    value={content.portfolioDescription || 'Contoh implementasi website perusahaan, landing page konversi, portal katalog, dan platform web kustom yang dibangun dengan standar performa tinggi.'}
                    onChange={v => handleChange('portfolioDescription', v)}
                    multiline
                    rows={2}
                  />
                </div>

                {/* List Projects Header & Controls */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <span>📁</span> Manajemen Proyek Layanan & Portofolio
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Total {content.portfolioItems.length} proyek aktif. Anda dapat menambah, mengedit konten, menduplikasi, dan mengatur urutan tampilan.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={addProject}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer self-start sm:self-auto shrink-0"
                    >
                      <span>+</span> Tambah Proyek Baru
                    </button>
                  </div>

                  {/* Filter & Search Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-3 border-t border-slate-800">
                    <div className="sm:col-span-7 relative">
                      <input
                        type="text"
                        value={portfolioSearch}
                        onChange={e => setPortfolioSearch(e.target.value)}
                        placeholder="Cari proyek berdasarkan judul, kategori, atau fitur..."
                        className="w-full rounded-xl bg-slate-950 px-4 py-2.5 pl-9 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-medium placeholder-slate-500"
                      />
                      <svg className="w-4 h-4 text-slate-500 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      {portfolioSearch && (
                        <button
                          type="button"
                          onClick={() => setPortfolioSearch('')}
                          className="absolute right-3 top-2.5 text-xs text-slate-500 hover:text-slate-300"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                    <div className="sm:col-span-5">
                      <select
                        value={portfolioCategoryFilter}
                        onChange={e => setPortfolioCategoryFilter(e.target.value)}
                        className="w-full rounded-xl bg-slate-950 px-3.5 py-2.5 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 font-medium cursor-pointer"
                      >
                        <option value="Semua">Semua Kategori Website ({content.portfolioItems.length})</option>
                        {WEBSITE_CATEGORIES.map(cat => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Projects List with Expandable CRUD Forms */}
                <div className="space-y-4">
                  {content.portfolioItems
                    .map((project, idx) => ({ project, idx }))
                    .filter(({ project }) => {
                      const matchCat = portfolioCategoryFilter === 'Semua' || project.category === portfolioCategoryFilter
                      const matchSearch = !portfolioSearch.trim() || 
                        project.title.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
                        project.tag.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
                        project.category.toLowerCase().includes(portfolioSearch.toLowerCase()) ||
                        project.description.toLowerCase().includes(portfolioSearch.toLowerCase())
                      return matchCat && matchSearch
                    })
                    .map(({ project, idx }) => {
                      const isExpanded = expandedProjectIdx === idx

                      return (
                        <div
                          key={idx}
                          className={`bg-slate-900 rounded-2xl border transition-all duration-200 overflow-hidden shadow-sm ${
                            isExpanded ? 'border-emerald-500/40 ring-1 ring-emerald-500/20' : 'border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          {/* ─── Compact Summary Row Header ─── */}
                          <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/90">
                            
                            {/* Left: Thumbnail & Main Info */}
                            <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                              {/* Order Badge */}
                              <div className="flex flex-col items-center gap-1 shrink-0">
                                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                                  #{idx + 1}
                                </span>
                              </div>

                              {/* Thumbnail Preview */}
                              <div className="w-14 h-12 rounded-lg bg-slate-950 border border-slate-800 overflow-hidden shrink-0 flex items-center justify-center relative">
                                {project.image ? (
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                    onError={(e) => {
                                      const target = e.currentTarget as HTMLImageElement
                                      target.style.opacity = '0.3'
                                    }}
                                  />
                                ) : (
                                  <span className="text-base text-slate-600">🌐</span>
                                )}
                              </div>

                              {/* Title, Category & Badges */}
                              <div className="min-w-0 flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="text-sm font-bold text-white truncate max-w-md">
                                    {project.title}
                                  </h4>
                                </div>
                                <div className="flex items-center gap-2 mt-1 flex-wrap">
                                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                                    {project.category}
                                  </span>
                                  {project.tag && (
                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                                      {project.tag}
                                    </span>
                                  )}
                                  {project.duration && (
                                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                      ⏱ {project.duration}
                                    </span>
                                  )}
                                  <span className="text-[11px] text-slate-500 font-mono">
                                    {project.features?.length || 0} Fitur
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Right: Quick Action Buttons */}
                            <div className="flex items-center gap-1.5 self-end md:self-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800/80 w-full md:w-auto justify-end">
                              {/* Reorder Buttons */}
                              <button
                                type="button"
                                disabled={idx === 0}
                                onClick={() => moveProject(idx, 'up')}
                                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                                title="Geser ke atas"
                                aria-label="Geser ke atas"
                              >
                                ⬆️
                              </button>
                              <button
                                type="button"
                                disabled={idx === content.portfolioItems.length - 1}
                                onClick={() => moveProject(idx, 'down')}
                                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
                                title="Geser ke bawah"
                                aria-label="Geser ke bawah"
                              >
                                ⬇️
                              </button>

                              {/* Duplicate Button */}
                              <button
                                type="button"
                                onClick={() => duplicateProject(idx)}
                                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer flex items-center gap-1"
                                title="Duplikat Proyek Ini"
                              >
                                <span>📋</span>
                                <span className="hidden sm:inline">Duplikat</span>
                              </button>

                              {/* Delete Button */}
                              <button
                                type="button"
                                onClick={() => deleteProject(idx)}
                                className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 transition-colors cursor-pointer flex items-center gap-1"
                                title="Hapus Proyek Ini"
                              >
                                <span>🗑️</span>
                                <span className="hidden sm:inline">Hapus</span>
                              </button>

                              {/* Expand/Collapse Toggle */}
                              <button
                                type="button"
                                onClick={() => setExpandedProjectIdx(isExpanded ? null : idx)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                                  isExpanded
                                    ? 'bg-slate-800 text-white border border-slate-700'
                                    : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-sm shadow-emerald-500/20'
                                }`}
                              >
                                <span>{isExpanded ? 'Tutup Editor ▴' : 'Edit Konten ▾'}</span>
                              </button>
                            </div>

                          </div>

                          {/* ─── Detailed Edit Form (Expanded State) ─── */}
                          {isExpanded && (
                            <div className="p-6 border-t border-slate-800 bg-slate-950/40 space-y-6 animate-fadeIn">
                              
                              {/* 1. Informasi Utama & Identitas Proyek */}
                              <div className="space-y-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
                                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                                  Bagian 1: Identitas & Informasi Proyek
                                </span>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <Field
                                    label="Judul Proyek / Solusi Website"
                                    value={project.title}
                                    onChange={v => updateProject(idx, 'title', v)}
                                  />
                                  <Field
                                    label="Tag Label Kategori (Badge Ringkas)"
                                    value={project.tag}
                                    onChange={v => updateProject(idx, 'tag', v)}
                                  />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="md:col-span-1">
                                    <SelectField
                                      label="Kategori Website (Dropdown)"
                                      value={project.category}
                                      options={WEBSITE_CATEGORIES}
                                      onChange={v => updateProject(idx, 'category', v)}
                                    />
                                  </div>
                                  <div className="md:col-span-1">
                                    <Field
                                      label="Estimasi Pengerjaan"
                                      value={project.duration || ''}
                                      onChange={v => updateProject(idx, 'duration', v)}
                                    />
                                  </div>
                                  <div className="md:col-span-1">
                                    <Field
                                      label="Link Demo Live (Opsional, https://...)"
                                      value={project.demoUrl || ''}
                                      onChange={v => updateProject(idx, 'demoUrl', v)}
                                    />
                                  </div>
                                </div>
                              </div>

                              {/* 2. Deskripsi & Standar Implementasi */}
                              <div className="space-y-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
                                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                                  Bagian 2: Deskripsi & Standar Deliverables
                                </span>
                                
                                <Field
                                  label="Deskripsi Proyek (Ditampilkan di Kartu Slide & Modal)"
                                  value={project.description}
                                  onChange={v => updateProject(idx, 'description', v)}
                                  multiline
                                  rows={3}
                                />

                                <Field
                                  label="Catatan Standar Implementasi / Deliverables (Opsional Kustomisasi)"
                                  value={project.deliverables || ''}
                                  onChange={v => updateProject(idx, 'deliverables', v)}
                                  multiline
                                  rows={2}
                                />
                              </div>

                              {/* 3. Fitur Utama & Keunggulan Layanan */}
                              <div className="space-y-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                                    Bagian 3: Fitur Utama Layanan ({project.features?.length || 0} Fitur)
                                  </span>
                                  <span className="text-[11px] text-slate-400">Tulis satu fitur per baris</span>
                                </div>

                                <textarea
                                  rows={4}
                                  value={(project.features || []).join('\n')}
                                  onChange={e => updateProjectFeatures(idx, e.target.value)}
                                  placeholder="Waktu Muat < 1.5 Detik&#10;Panel CMS Kelola Konten&#10;Struktur SEO Terindeks Google"
                                  className="w-full rounded-xl bg-slate-950 px-4 py-3 text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-sm resize-y"
                                />

                                {/* Live Preview List Fitur */}
                                {project.features && project.features.length > 0 && (
                                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block font-mono">
                                      Pratinjau Tampilan Fitur:
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                      {project.features.map((feat, fIdx) => (
                                        <span
                                          key={fIdx}
                                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs bg-slate-950 border border-slate-800 text-slate-200"
                                        >
                                          <span className="text-emerald-400 font-bold">✓</span>
                                          <span>{feat}</span>
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>

                              {/* 4. Media Gambar / Mockup Proyek (Multi-Image Slider Support) */}
                              {(() => {
                                const currentProjectImages: string[] = (project.images && project.images.length > 0)
                                  ? project.images
                                  : (project.image && project.image.trim() !== '' ? [project.image] : [])

                                return (
                                  <div className="space-y-4 bg-slate-900 p-5 rounded-xl border border-slate-800">
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                                      <div>
                                        <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                                          Bagian 4: Gambar Mockup &amp; Galeri Slider Proyek
                                        </span>
                                        <span className="text-[11px] text-slate-400">
                                          Unggah 1 gambar untuk tampilan statis, atau lebih dari 1 gambar untuk mengaktifkan <strong>Slider Foto Interaktif</strong> di landing page.
                                        </span>
                                      </div>
                                      <div>
                                        {currentProjectImages.length > 1 ? (
                                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                            <span>🎠</span>
                                            <span>Slider Aktif ({currentProjectImages.length} Foto)</span>
                                          </span>
                                        ) : currentProjectImages.length === 1 ? (
                                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            <span>🖼️</span>
                                            <span>1 Gambar (Cover)</span>
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800 text-slate-400 border border-slate-700">
                                            <span>🌐</span>
                                            <span>Gambar Default Kategori</span>
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    {/* Catatan Panduan Ukuran & Format Gambar */}
                                    <div className="rounded-xl bg-slate-950/80 border border-slate-800/90 p-3 text-xs space-y-1.5 text-slate-400">
                                      <div className="flex items-center gap-1.5 font-semibold text-emerald-400 text-xs">
                                        <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span>Panduan &amp; Tips Slider Gambar:</span>
                                      </div>
                                      <ul className="list-disc list-inside space-y-0.5 text-[11px] leading-relaxed text-slate-300">
                                        <li><strong>Multi-upload:</strong> Klik <em>"Pilih File Gambar (Bisa Banyak)"</em> lalu pilih beberapa file sekaligus menggunakan tombol <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px]">Ctrl</kbd> / <kbd className="px-1 py-0.5 rounded bg-slate-800 text-[10px]">Shift</kbd>.</li>
                                        <li><strong>Rasio Ideal:</strong> Landscape <strong>16:9</strong> atau <strong>4:3</strong> (misalnya 1200 × 800 px) agar rapi dan seragam di semua gadget.</li>
                                        <li><strong>Format:</strong> JPG, JPEG, PNG, atau WebP.</li>
                                        <li><strong>Urutan Slide:</strong> Gambar pertama (#1) bertindak sebagai gambar sampul utama. Gunakan tombol panah ◀ ▶ untuk mengatur urutan slide.</li>
                                      </ul>
                                    </div>

                                    {/* Upload & URL Input Tools */}
                                    <div className="space-y-3 pt-1">
                                      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                                        {/* Multi-file input button */}
                                        <label className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold border border-emerald-500 cursor-pointer transition-colors shadow-sm shadow-emerald-600/20 shrink-0">
                                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                          </svg>
                                          <span>📁 Pilih File Gambar (Bisa Banyak)</span>
                                          <input
                                            type="file"
                                            multiple
                                            accept="image/*"
                                            className="hidden"
                                            onChange={e => {
                                              handleUploadProjectImages(idx, e.target.files)
                                              e.target.value = ''
                                            }}
                                          />
                                        </label>

                                        {/* URL Input */}
                                        <div className="flex-1 flex gap-2">
                                          <input
                                            type="text"
                                            value={projectImageUrlInput}
                                            onChange={e => setProjectImageUrlInput(e.target.value)}
                                            onKeyDown={e => {
                                              if (e.key === 'Enter') {
                                                e.preventDefault()
                                                handleAddProjectImageUrl(idx, projectImageUrlInput)
                                                setProjectImageUrlInput('')
                                              }
                                            }}
                                            placeholder="Tempel path lokal (/images/services/...) atau URL gambar (https://...)"
                                            className="flex-1 rounded-xl bg-slate-950 px-4 py-2.5 text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 text-xs font-medium"
                                          />
                                          <button
                                            type="button"
                                            onClick={() => {
                                              handleAddProjectImageUrl(idx, projectImageUrlInput)
                                              setProjectImageUrlInput('')
                                            }}
                                            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-slate-700 cursor-pointer transition-colors shrink-0"
                                          >
                                            + Tambah URL
                                          </button>
                                        </div>

                                        {currentProjectImages.length > 0 && (
                                          <button
                                            type="button"
                                            onClick={() => handleClearProjectImages(idx)}
                                            className="px-3 py-2.5 rounded-xl text-xs font-semibold text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 transition-colors cursor-pointer shrink-0"
                                            title="Hapus semua gambar"
                                          >
                                            Hapus Semua
                                          </button>
                                        )}
                                      </div>

                                      {/* Simple & Clean Upload Progress Bar */}
                                      {uploadProgress && uploadProgress.projectIdx === idx && (
                                        <div className="p-3 rounded-xl bg-slate-950/90 border border-emerald-500/30 space-y-2 transition-all shadow-sm">
                                          <div className="flex items-center justify-between text-xs gap-2">
                                            <div className="flex items-center gap-2 min-w-0">
                                              {uploadProgress.isComplete ? (
                                                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                                                  ✓
                                                </span>
                                              ) : (
                                                <div className="h-3.5 w-3.5 shrink-0 rounded-full border-2 border-emerald-400 border-t-transparent animate-spin" />
                                              )}
                                              <span className="font-semibold text-slate-200 truncate">
                                                {uploadProgress.isComplete
                                                  ? 'Upload Selesai!'
                                                  : `Mengunggah (${uploadProgress.current}/${uploadProgress.total})...`}
                                              </span>
                                              <span className="text-[11px] text-slate-400 truncate max-w-[200px] hidden sm:inline">
                                                {uploadProgress.fileName}
                                              </span>
                                            </div>
                                            <span className="font-mono text-xs font-bold text-emerald-400 shrink-0">
                                              {uploadProgress.percent}%
                                            </span>
                                          </div>

                                          {/* Progress Bar Track */}
                                          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                                            <div
                                              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-300 ease-out"
                                              style={{ width: `${uploadProgress.percent}%` }}
                                            />
                                          </div>
                                        </div>
                                      )}
                                    </div>

                                    {/* Gallery Thumbnails Grid */}
                                    {currentProjectImages.length > 0 ? (
                                      <div className="space-y-2 pt-2">
                                        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                                          <span>Daftar Slide Gambar ({currentProjectImages.length} foto):</span>
                                          <span className="text-[11px] text-slate-500">Gunakan panah untuk mengatur urutan slide</span>
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                          {currentProjectImages.map((img, imgIdx) => (
                                            <div
                                              key={imgIdx}
                                              className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col group hover:border-slate-700 transition-colors"
                                            >
                                              {/* Image Preview */}
                                              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                                                <img
                                                  src={img}
                                                  alt={`Slide #${imgIdx + 1}`}
                                                  className="w-full h-full object-cover"
                                                  referrerPolicy="no-referrer"
                                                  onError={(e) => {
                                                    const target = e.currentTarget as HTMLImageElement
                                                    target.style.opacity = '0.3'
                                                  }}
                                                />
                                                <div className="absolute top-1.5 left-1.5 flex items-center gap-1">
                                                  <span
                                                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold shadow-sm ${
                                                      imgIdx === 0
                                                        ? 'bg-emerald-500 text-slate-950 font-bold'
                                                        : 'bg-black/75 text-white backdrop-blur-sm'
                                                    }`}
                                                  >
                                                    {imgIdx === 0 ? '★ Cover' : `#${imgIdx + 1}`}
                                                  </span>
                                                </div>
                                              </div>

                                              {/* Image Control Toolbar */}
                                              <div className="p-1.5 bg-slate-900 flex items-center justify-between border-t border-slate-800 gap-1">
                                                <div className="flex items-center gap-1">
                                                  <button
                                                    type="button"
                                                    disabled={imgIdx === 0}
                                                    onClick={() => handleMoveProjectImage(idx, imgIdx, 'left')}
                                                    className="h-6 w-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-20 disabled:pointer-events-none text-[11px] cursor-pointer"
                                                    title="Geser ke kiri"
                                                    aria-label="Geser ke kiri"
                                                  >
                                                    ◀
                                                  </button>
                                                  <button
                                                    type="button"
                                                    disabled={imgIdx === currentProjectImages.length - 1}
                                                    onClick={() => handleMoveProjectImage(idx, imgIdx, 'right')}
                                                    className="h-6 w-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-20 disabled:pointer-events-none text-[11px] cursor-pointer"
                                                    title="Geser ke kanan"
                                                    aria-label="Geser ke kanan"
                                                  >
                                                    ▶
                                                  </button>
                                                  {imgIdx !== 0 && (
                                                    <button
                                                      type="button"
                                                      onClick={() => handleSetPrimaryImage(idx, imgIdx)}
                                                      className="px-1.5 py-0.5 rounded text-[10px] font-semibold text-emerald-400 hover:bg-emerald-500/10 border border-emerald-500/20 cursor-pointer"
                                                      title="Jadikan gambar sampul utama (#1)"
                                                    >
                                                      ★ Cover
                                                    </button>
                                                  )}
                                                </div>
                                                <button
                                                  type="button"
                                                  onClick={() => handleRemoveProjectImage(idx, imgIdx)}
                                                  className="h-6 w-6 rounded flex items-center justify-center text-red-400 hover:text-red-300 hover:bg-red-500/10 text-xs cursor-pointer"
                                                  title="Hapus gambar ini"
                                                  aria-label="Hapus gambar ini"
                                                >
                                                  🗑️
                                                </button>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="p-4 rounded-xl bg-slate-950/60 border border-dashed border-slate-800 text-center text-xs text-slate-500">
                                        Belum ada gambar yang diunggah. Klik <strong>"Pilih File Gambar"</strong> di atas atau tempel URL untuk menambahkan foto mockup.
                                      </div>
                                    )}
                                  </div>
                                )
                              })()}

                              {/* Close Editor Button */}
                              <div className="flex justify-end pt-2">
                                <button
                                  type="button"
                                  onClick={() => setExpandedProjectIdx(null)}
                                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-white text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
                                >
                                  Selesai &amp; Tutup Editor Proyek #{idx + 1}
                                </button>
                              </div>

                            </div>
                          )}

                        </div>
                      )
                    })}
                </div>

                {/* Banner Bawah Layanan (Spesifikasi Kustom CTA) */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                  <SectionTitle icon="💡" label="Banner Bawah Layanan (Spesifikasi Kustom)" />
                  <p className="text-xs text-slate-400 -mt-3">
                    Banner yang tampil di bagian bawah section Layanan yang mengajak pengunjung berkonsultasi spesifikasi kustom.
                  </p>
                  <Field
                    label="Judul Banner Bawah Layanan"
                    value={content.servicesCtaTitle || 'Ingin Mengembangkan Website Serupa dengan Spesifikasi Kustom?'}
                    onChange={v => handleChange('servicesCtaTitle', v)}
                  />
                  <Field
                    label="Deskripsi Banner Bawah Layanan"
                    value={content.servicesCtaDesc || `Diskusikan referensi desain dan target fitur bisnis Anda. Tim ${content.brandName || 'TEKNOFLASE'} siap menyusun arsitektur sistem dan estimasi pengerjaan yang transparan.`}
                    onChange={v => handleChange('servicesCtaDesc', v)}
                    multiline
                    rows={2}
                  />
                  <Field
                    label="Teks Tombol Konsultasi"
                    value={content.servicesCtaButton || 'Konsultasi Sekarang'}
                    onChange={v => handleChange('servicesCtaButton', v)}
                  />
                </div>
              </div>
            )}

            {/* ── 5. TANYA JAWAB (FAQ) ──────────────────────── */}
            {activeCategory === 'faq' && (
              <div className="space-y-6">
                {/* Header Section FAQ */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                  <SectionTitle icon="❓" label="Pengaturan Section Tanya Jawab (FAQ)" />
                  <Field
                    label="Judul Section FAQ"
                    value={content.faqHeading || 'Tanya Jawab Seputar Layanan Pembuatan Website'}
                    onChange={v => handleChange('faqHeading', v)}
                  />
                  <Field
                    label="Deskripsi Section FAQ"
                    value={content.faqDescription || `Temukan jawaban lengkap seputar estimasi waktu pengerjaan, kepemilikan source code, optimasi SEO Google, hingga kemudahan pengelolaan website Anda di ${content.brandName || 'TEKNOFLASE'}.`}
                    onChange={v => handleChange('faqDescription', v)}
                    multiline
                    rows={2}
                  />
                </div>

                {/* FAQ List Header */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span>💡</span> Daftar Pertanyaan & Jawaban
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Dapat dicari secara real-time dan difilter berdasarkan kategori oleh pengunjung.</p>
                  </div>
                  <button
                    type="button"
                    onClick={addFaq}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-md shadow-emerald-500/20 transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <span>+</span> Tambah FAQ Baru
                  </button>
                </div>

                {(content.faqItems && content.faqItems.length > 0 ? content.faqItems : DEFAULT_FAQ_ITEMS).map((faq, idx) => (
                  <div key={idx} className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                          {idx + 1}
                        </span>
                        <span className="text-sm font-bold text-white">Pertanyaan #{idx + 1}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => deleteFaq(idx)}
                        className="text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 rounded-lg px-2.5 py-1 transition-colors cursor-pointer"
                        title="Hapus Pertanyaan Ini"
                      >
                        Hapus
                      </button>
                    </div>
                    <Field label="Kategori Pertanyaan" value={faq.category} onChange={v => updateFaq(idx, 'category', v)} />
                    <Field label="Pertanyaan" value={faq.question} onChange={v => updateFaq(idx, 'question', v)} />
                    <Field label="Jawaban Lengkap" value={faq.answer} onChange={v => updateFaq(idx, 'answer', v)} multiline rows={3} />
                  </div>
                ))}
              </div>
            )}

            {/* ── 6. KONTAK & CALL TO ACTION ─────────────────── */}
            {activeCategory === 'contact' && (
              <div className="space-y-6">
                {/* WhatsApp Callout Card Editor */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                  <SectionTitle icon="💬" label="Card Konsultasi Langsung via WhatsApp" />
                  <p className="text-xs text-slate-400 -mt-3">
                    Komponen kartu gelap berdampak tinggi dengan tombol WhatsApp hijau di bagian atas section Kontak.
                  </p>
                  <Field
                    label="Judul Card WhatsApp"
                    value={content.ctaTitle || 'Konsultasi Langsung via WhatsApp'}
                    onChange={v => handleChange('ctaTitle', v)}
                  />
                  <Field
                    label="Deskripsi Card WhatsApp"
                    value={content.ctaDescription || 'Diskusikan rencana dan kebutuhan fitur website Anda langsung dengan tim teknis kami. Kami siap memberikan rekomendasi solusi, estimasi biaya, dan jadwal pengerjaan secara transparan.'}
                    onChange={v => handleChange('ctaDescription', v)}
                    multiline
                    rows={2}
                  />
                  <Field
                    label="Teks Tombol WhatsApp"
                    value={content.ctaButtonText || 'WhatsApp Sekarang'}
                    onChange={v => handleChange('ctaButtonText', v)}
                  />
                </div>

                {/* Section Contact Header & Info */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                  <SectionTitle icon="📬" label="Informasi Kontak & Konsultasi" />
                  <Field
                    label="Judul Section Kontak"
                    value={content.contactHeading || 'Mulai Wujudkan Website Profesional untuk Bisnis Anda'}
                    onChange={v => handleChange('contactHeading', v)}
                  />
                  <Field
                    label="Deskripsi Section Kontak"
                    value={content.contactDescription || 'Diskusikan tujuan, kebutuhan fitur, dan target peluncuran website Anda. Tim kami siap memberikan rekomendasi struktur, estimasi waktu, dan penawaran transparan.'}
                    onChange={v => handleChange('contactDescription', v)}
                    multiline
                    rows={2}
                  />

                  <div className="border-t border-slate-800 pt-5 space-y-4">
                    <Field label="Alamat Email Resmi" value={content.contact.email} onChange={v => updateContact('email', v)} />
                    <Field label="Nomor WhatsApp (format internasional tanpa +, contoh: 6281234567890)" value={content.contact.whatsapp} onChange={v => updateContact('whatsapp', v)} />
                    <Field label="Lokasi" value={content.contact.location} onChange={v => updateContact('location', v)} />
                  </div>
                </div>
              </div>
            )}

            {/* ── 7. FOOTER & LEGALITAS ─────────────────────── */}
            {activeCategory === 'footer' && (
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-sm space-y-5">
                <SectionTitle icon="🦶" label="Footer, Tautan & Legalitas" />
                <Field label="Deskripsi Singkat Footer" value={content.footer.description} onChange={v => updateFooter('description', v)} multiline rows={3} />
                {/* ── Media Sosial Footer Editor (Show / Hide & TikTok) ── */}
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>🌐</span> Media Sosial Footer (Show / Hide & Tautan)
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Kelola tautan dan tampilkan/sembunyikan ikon media sosial di bagian kiri bawah footer.
                      </p>
                    </div>

                    {/* Master Toggle untuk Semua Media Sosial */}
                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-300 font-semibold">Semua Media Sosial:</span>
                      <button
                        type="button"
                        role="switch"
                        aria-checked={content.footer.showSocialMedia !== false}
                        onClick={() => updateFooter('showSocialMedia', content.footer.showSocialMedia === false ? true : false)}
                        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                          content.footer.showSocialMedia !== false ? 'bg-emerald-500' : 'bg-slate-700'
                        }`}
                        title={content.footer.showSocialMedia !== false ? 'Matikan semua media sosial di footer' : 'Aktifkan media sosial di footer'}
                      >
                        <span className="sr-only">Toggle Semua Media Sosial</span>
                        <span
                          aria-hidden="true"
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                            content.footer.showSocialMedia !== false ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <span className={`text-[11px] font-mono font-semibold px-1.5 py-0.5 rounded ${
                        content.footer.showSocialMedia !== false
                          ? 'text-emerald-400 bg-emerald-500/10'
                          : 'text-amber-400 bg-amber-500/10'
                      }`}>
                        {content.footer.showSocialMedia !== false ? 'ON' : 'OFF'}
                      </span>
                    </div>
                  </div>

                  {/* Daftar Item Media Sosial: LinkedIn, Instagram, TikTok */}
                  <div className="space-y-3 pt-1">
                    {/* 1. LinkedIn */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-[140px]">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20 flex items-center justify-center font-bold text-sm">
                          💼
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">LinkedIn</span>
                          <span className={`text-[10px] font-mono ${
                            content.footer.showLinkedin !== false ? 'text-emerald-400' : 'text-slate-500'
                          }`}>
                            {content.footer.showLinkedin !== false ? 'Aktif (Tampil)' : 'Disembunyikan'}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <input
                          type="text"
                          value={content.footer.linkedin || ''}
                          onChange={e => updateFooter('linkedin', e.target.value)}
                          placeholder="https://linkedin.com/company/..."
                          className="w-full rounded-lg bg-slate-950 px-3 py-2 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 font-mono"
                        />
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={content.footer.showLinkedin !== false}
                          onClick={() => updateFooter('showLinkedin', content.footer.showLinkedin === false ? true : false)}
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                            content.footer.showLinkedin !== false ? 'bg-emerald-500' : 'bg-slate-700'
                          }`}
                          title="Toggle LinkedIn (Show/Hide)"
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                              content.footer.showLinkedin !== false ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* 2. Instagram */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-[140px]">
                        <div className="w-8 h-8 rounded-lg bg-pink-600/10 text-pink-400 border border-pink-500/20 flex items-center justify-center font-bold text-sm">
                          📸
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">Instagram</span>
                          <span className={`text-[10px] font-mono ${
                            content.footer.showInstagram !== false ? 'text-emerald-400' : 'text-slate-500'
                          }`}>
                            {content.footer.showInstagram !== false ? 'Aktif (Tampil)' : 'Disembunyikan'}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <input
                          type="text"
                          value={content.footer.instagram || ''}
                          onChange={e => updateFooter('instagram', e.target.value)}
                          placeholder="https://instagram.com/..."
                          className="w-full rounded-lg bg-slate-950 px-3 py-2 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 font-mono"
                        />
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={content.footer.showInstagram !== false}
                          onClick={() => updateFooter('showInstagram', content.footer.showInstagram === false ? true : false)}
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                            content.footer.showInstagram !== false ? 'bg-emerald-500' : 'bg-slate-700'
                          }`}
                          title="Toggle Instagram (Show/Hide)"
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                              content.footer.showInstagram !== false ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    {/* 3. TikTok */}
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-[140px]">
                        <div className="w-8 h-8 rounded-lg bg-cyan-600/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center font-bold text-sm">
                          🎵
                        </div>
                        <div>
                          <span className="text-xs font-bold text-white block">TikTok</span>
                          <span className={`text-[10px] font-mono ${
                            content.footer.showTiktok !== false ? 'text-emerald-400' : 'text-slate-500'
                          }`}>
                            {content.footer.showTiktok !== false ? 'Aktif (Tampil)' : 'Disembunyikan'}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <input
                          type="text"
                          value={content.footer.tiktok || ''}
                          onChange={e => updateFooter('tiktok', e.target.value)}
                          placeholder="https://tiktok.com/@..."
                          className="w-full rounded-lg bg-slate-950 px-3 py-2 text-xs text-white border border-slate-800 focus:outline-none focus:border-emerald-400 font-mono"
                        />
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                        <button
                          type="button"
                          role="switch"
                          aria-checked={content.footer.showTiktok !== false}
                          onClick={() => updateFooter('showTiktok', content.footer.showTiktok === false ? true : false)}
                          className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                            content.footer.showTiktok !== false ? 'bg-emerald-500' : 'bg-slate-700'
                          }`}
                          title="Toggle TikTok (Show/Hide)"
                        >
                          <span
                            aria-hidden="true"
                            className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                              content.footer.showTiktok !== false ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Kategori & Modal Layanan Footer (Dropdown Selector) ─────────────── */}
                <div className="border-t border-slate-800 pt-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                    <div>
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>📑</span> Kategori Layanan & Konten Modal Footer
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Pilih kategori website dari dropdown untuk mengedit detail konten modal interaktif di footer secara efektif.
                      </p>
                    </div>

                    {/* Dropdown Selector */}
                    <div className="flex items-center gap-2.5 self-start sm:self-auto shrink-0 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800 shadow-sm">
                      <label htmlFor="footer-service-dropdown" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 whitespace-nowrap">
                        <span>📂</span> Pilih Kategori:
                      </label>
                      <select
                        id="footer-service-dropdown"
                        value={selectedFooterServiceIdx}
                        onChange={e => setSelectedFooterServiceIdx(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                        className="rounded-lg bg-slate-950 px-3 py-1.5 text-xs text-emerald-400 font-bold border border-slate-700 hover:border-slate-600 focus:outline-none focus:border-emerald-400 font-mono cursor-pointer transition-all"
                      >
                        {(content.footerServices || []).map((service, sIdx) => (
                          <option key={sIdx} value={sIdx} className="bg-slate-900 text-white font-sans font-medium">
                            #{sIdx + 1} - {service.name}
                          </option>
                        ))}
                        <option value="all" className="bg-slate-900 text-slate-300 font-sans font-medium">
                          👁️ Tampilkan Semua ({(content.footerServices || []).length})
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Form Editor Layanan Terpilih */}
                  <div className="space-y-4">
                    {(content.footerServices || [])
                      .map((service, sIdx) => ({ service, sIdx }))
                      .filter(({ sIdx }) => selectedFooterServiceIdx === 'all' || selectedFooterServiceIdx === sIdx)
                      .map(({ service, sIdx }) => {
                        const totalServices = (content.footerServices || []).length
                        return (
                          <div key={sIdx} className="bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-3">
                              <div className="flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20">
                                  #{sIdx + 1}
                                </span>
                                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                                  {service.name}
                                </span>
                                <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-medium">
                                  Modal Interaktif
                                </span>
                              </div>

                              {/* Tombol Navigasi Sebelumnya / Berikutnya pada Single View */}
                              {selectedFooterServiceIdx !== 'all' && totalServices > 1 && (
                                <div className="flex items-center gap-1.5 self-end sm:self-auto">
                                  <span className="text-[11px] text-slate-500 font-mono mr-1">
                                    Layanan {sIdx + 1} dari {totalServices}
                                  </span>
                                  <button
                                    type="button"
                                    disabled={sIdx === 0}
                                    onClick={() => setSelectedFooterServiceIdx(Math.max(0, sIdx - 1))}
                                    className="p-1.5 px-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs font-semibold cursor-pointer"
                                    title="Layanan Sebelumnya"
                                  >
                                    ← Sebelumnya
                                  </button>
                                  <button
                                    type="button"
                                    disabled={sIdx === totalServices - 1}
                                    onClick={() => setSelectedFooterServiceIdx(Math.min(totalServices - 1, sIdx + 1))}
                                    className="p-1.5 px-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors text-xs font-semibold cursor-pointer"
                                    title="Layanan Berikutnya"
                                  >
                                    Berikutnya →
                                  </button>
                                </div>
                              )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <Field
                                label="Nama Tombol Footer"
                                value={service.name}
                                onChange={v => updateFooterService(sIdx, 'name', v)}
                              />
                              <Field
                                label="Headline Modal (Manfaat Utama)"
                                value={service.title}
                                onChange={v => updateFooterService(sIdx, 'title', v)}
                              />
                            </div>

                            <Field
                              label="Deskripsi Modal"
                              value={service.description}
                              onChange={v => updateFooterService(sIdx, 'description', v)}
                              multiline
                              rows={3}
                            />

                            <div>
                              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                Poin-Poin Manfaat / Fitur (satu per baris)
                              </label>
                              <textarea
                                rows={3}
                                value={(service.features || []).join('\n')}
                                onChange={e => updateFooterServiceFeatures(sIdx, e.target.value)}
                                className="w-full rounded-xl bg-slate-950 px-4 py-3 text-white border border-slate-800 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all font-medium text-sm resize-y"
                              />
                            </div>

                            <Field
                              label="Catatan Keuntungan Langsung (MVP Highlight)"
                              value={service.mvp}
                              onChange={v => updateFooterService(sIdx, 'mvp', v)}
                              multiline
                              rows={2}
                            />
                          </div>
                        )
                      })}
                  </div>
                </div>

                <div className="border-t border-slate-800 pt-5 space-y-4">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Tautan Navigasi & Legal</span>
                  <Field label="Tautan Tanya Jawab (FAQ)" value={content.footer.faqLink} onChange={v => updateFooter('faqLink', v)} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Tautan Kebijakan Privasi" value={content.footer.privacyLink} onChange={v => updateFooter('privacyLink', v)} />
                    <Field label="Tautan Syarat & Ketentuan SLA" value={content.footer.termsLink} onChange={v => updateFooter('termsLink', v)} />
                  </div>
                </div>
                <div className="border-t border-slate-800 pt-5">
                  <Field label="Teks Copyright Akhir" value={content.footer.copyrightSuffix} onChange={v => updateFooter('copyrightSuffix', v)} multiline rows={2} />
                </div>
              </div>
            )}

            {/* ═══════════════════════════════════════════════════════════════ */}
            {/* 🛡️ TAB: KEBIJAKAN PRIVASI (CMS KONTEN LEGAL & PRIVASI DATA)    */}
            {/* ═══════════════════════════════════════════════════════════════ */}
            {activeCategory === 'privacy' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <SectionTitle icon="🛡️" label="Pengelolaan Halaman Kebijakan Privasi" />
                    <p className="text-xs text-slate-400 -mt-4">
                      Kelola konten halaman Kebijakan Privasi, tanggal pembaruan, dan pasal perlindungan data pribadi sesuai standar UU No. 27 Tahun 2022 (UU PDP).
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href="#privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 text-xs font-semibold transition-all cursor-pointer"
                      title="Lihat halaman Kebijakan Privasi di tab baru"
                    >
                      <span>👁️</span> Buka Halaman
                    </a>
                    <button
                      type="button"
                      onClick={resetPrivacyToDefault}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold transition-all cursor-pointer"
                      title="Kembalikan ke template standar bawaan"
                    >
                      <span>🔄</span> Reset Standar
                    </button>
                  </div>
                </div>

                {/* Info & Banner Header Settings */}
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 space-y-4">
                  <div className="flex items-center gap-2 text-white font-bold text-sm">
                    <span>📝</span>
                    <span>Informasi & Pengantar Utama Halaman</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Judul Halaman"
                      value={privacyData.title || 'Kebijakan Privasi'}
                      onChange={v => updatePrivacyField('title', v)}
                    />
                    <Field
                      label="Tanggal Terakhir Diperbarui"
                      value={privacyData.lastUpdated || ''}
                      onChange={v => updatePrivacyField('lastUpdated', v)}
                    />
                  </div>

                  <Field
                    label="Sub-judul / Komitmen Ringkas"
                    value={privacyData.subtitle || ''}
                    onChange={v => updatePrivacyField('subtitle', v)}
                    multiline
                    rows={2}
                  />

                  <Field
                    label="Teks Pengantar / Pernyataan Perlindungan Data (Intro Card)"
                    value={privacyData.intro || ''}
                    onChange={v => updatePrivacyField('intro', v)}
                    multiline
                    rows={3}
                  />
                </div>

                {/* Accordion Poin-Poin & Pasal Kebijakan Privasi */}
                <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800/80 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-white font-bold text-sm">
                        <span>📑</span>
                        <span>Daftar Poin & Pasal Kebijakan Privasi</span>
                        <span className="text-xs font-mono font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/30">
                          {(privacyData.sections || []).length} Pasal
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Format pasal disusun dengan accordion ringkas. Anda dapat menambah, mengedit, mengubah urutan, atau menghapus pasal sesuai kebutuhan operasional.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 flex-wrap">
                      <button
                        type="button"
                        onClick={expandAllPrivacySections}
                        className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
                      >
                        Buka Semua
                      </button>
                      <button
                        type="button"
                        onClick={collapseAllPrivacySections}
                        className="px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-950 hover:bg-slate-800 text-slate-300 text-xs font-semibold cursor-pointer transition-colors"
                      >
                        Tutup Semua
                      </button>
                      <button
                        type="button"
                        onClick={addPrivacySection}
                        className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <span>+</span> Tambah Pasal Baru
                      </button>
                    </div>
                  </div>

                  {/* List Pasal Accordion */}
                  <div className="space-y-3 pt-1">
                    {(privacyData.sections || []).map((sec, idx) => {
                      const isOpen = openPrivacySectionIndices.includes(idx)
                      const totalSec = (privacyData.sections || []).length

                      return (
                        <div
                          key={idx}
                          className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden transition-all duration-200"
                        >
                          {/* Accordion Header */}
                          <div
                            className="p-4 flex items-center justify-between gap-3 cursor-pointer select-none hover:bg-slate-900/60 transition-colors"
                            onClick={() => togglePrivacySection(idx)}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-1">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                                {idx + 1}
                              </span>
                              <div className="min-w-0 flex-1">
                                <span className="text-sm font-bold text-white truncate block">
                                  {sec.title || `Pasal #${idx + 1}`}
                                </span>
                                <span className="text-[11px] text-slate-500 truncate block mt-0.5">
                                  {sec.content ? sec.content.slice(0, 80) + '...' : '(Konten pasal masih kosong)'}
                                </span>
                              </div>
                            </div>

                            {/* Actions on Header */}
                            <div className="flex items-center gap-1.5 shrink-0" onClick={e => e.stopPropagation()}>
                              <button
                                type="button"
                                disabled={idx === 0}
                                onClick={() => movePrivacySection(idx, 'up')}
                                className="p-1 px-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-colors"
                                title="Pindah ke Atas"
                              >
                                ▲
                              </button>
                              <button
                                type="button"
                                disabled={idx === totalSec - 1}
                                onClick={() => movePrivacySection(idx, 'down')}
                                className="p-1 px-2 rounded bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed text-xs transition-colors"
                                title="Pindah ke Bawah"
                              >
                                ▼
                              </button>
                              <button
                                type="button"
                                onClick={() => deletePrivacySection(idx)}
                                className="p-1 px-2 rounded bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-400 text-xs transition-colors cursor-pointer"
                                title="Hapus Pasal"
                              >
                                🗑️
                              </button>
                              <button
                                type="button"
                                onClick={() => togglePrivacySection(idx)}
                                className="p-1 px-2 text-slate-400 hover:text-white text-xs font-bold"
                              >
                                {isOpen ? '▲' : '▼'}
                              </button>
                            </div>
                          </div>

                          {/* Accordion Body */}
                          {isOpen && (
                            <div className="p-4 pt-2 border-t border-slate-800/80 bg-slate-900/30 space-y-4">
                              <Field
                                label="Judul Pasal / Poin Kebijakan"
                                value={sec.title}
                                onChange={v => updatePrivacySection(idx, 'title', v)}
                                placeholder="Contoh: 1. Informasi yang Kami Kumpulkan"
                              />

                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Isi Ketentuan / Penjelasan Pasal
                                  </label>
                                  <span className="text-[11px] text-slate-500 font-mono">
                                    Mendukung format paragraf multi-baris & bullet point (•)
                                  </span>
                                </div>
                                <textarea
                                  rows={5}
                                  value={sec.content}
                                  onChange={e => updatePrivacySection(idx, 'content', e.target.value)}
                                  placeholder="Tuliskan uraian pasal kebijakan di sini..."
                                  className="w-full rounded-xl bg-slate-950 px-4 py-3 text-white border border-slate-800 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 transition-all font-medium text-sm resize-y leading-relaxed"
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Legal compliance alert banner */}
                <div className="rounded-2xl p-4 bg-blue-950/40 border border-blue-800/60 flex items-start gap-3">
                  <span className="text-xl">💡</span>
                  <div className="text-xs text-blue-200 leading-relaxed space-y-1">
                    <p className="font-bold text-white">Pedoman Kepatuhan UU Perlindungan Data Pribadi (UU PDP No. 27/2022):</p>
                    <p>
                      Pastikan klausul selalu transparan menyebutkan tujuan pengambilan data calon klien, hak klien atas data mereka, dan penegasan bahwa 100% aset dan source code adalah hak milik klien setelah serah terima proyek.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </div>
  )
}
