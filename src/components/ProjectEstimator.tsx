import { useState, useId } from 'react'
import type { LandingPageContent } from './AdminPanel'

interface ProjectCategory {
  id: string
  title: string
  icon: string
  tag: string
  description: string
  defaultFeatures: string[]
  recommendedStack: string[]
}

const CATEGORIES: ProjectCategory[] = [
  {
    id: 'webapp',
    title: 'Aplikasi Web & Cloud SaaS',
    icon: '💻',
    tag: 'Web & Cloud',
    description: 'Portal enterprise, platform SaaS multi-tenant, dashboard interaktif, dan microservices berkinerja tinggi.',
    defaultFeatures: [
      'Frontend Responsif Next.js / React',
      'API Gateway RESTful / GraphQL',
      'Otentikasi Multi-Tenant & RBAC',
      'Integrasi Payment Gateway / Invoice',
      'Audit Trail Keamanan & Enkripsi',
      'Automated CI/CD & Cloud Container',
    ],
    recommendedStack: ['React 19 / Next.js', 'Node.js / FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 'iot',
    title: 'Sistem Telemetri IoT & Hardware',
    icon: '📡',
    tag: 'Internet of Things',
    description: 'Integrasi mikrokontroler hardware, sensor telemetri waktu-nyata, dan sistem peringatan otomatis.',
    defaultFeatures: [
      'Firmware ESP32 / STM32 / Raspberry Pi',
      'Protokol Telemetri Ringan MQTT & WebSockets',
      'Dashboard Monitoring Sensor Real-Time',
      'Sistem Peringatan Ambang Batas (Alerting)',
      'Manajemen Remote Firmware (OTA Update)',
      'Penyimpanan Riwayat Telemetri Time-Series',
    ],
    recommendedStack: ['C++ / FreeRTOS', 'MQTT Broker (EMQX)', 'TimescaleDB / InfluxDB', 'WebSockets', 'Grafana UI'],
  },
  {
    id: '3d',
    title: 'Simulasi 3D & Digital Twin WebGL',
    icon: '🧊',
    tag: '3D & WebGL',
    description: 'Visualisasi 3D interaktif di peramban web tanpa plugin, simulasi fasilitas pabrik, dan digital twin spasial.',
    defaultFeatures: [
      'Rendering WebGL 60 FPS (Three.js)',
      'Navigasi Kamera Spasial & Orbit Interaktif',
      'Sinkronisasi Status Mesin Real-Time',
      'Kompresi & Optimasi Aset 3D (GLTF/Draco)',
      'Overlay Data & Anotasi Titik Kritis',
      'Dukungan Multi-Device & Mobile WebGL',
    ],
    recommendedStack: ['Three.js', 'WebGL / WebGPU', 'GLTF/Draco', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'ai',
    title: 'Automatisasi AI & Agentic Workflow',
    icon: '⚡',
    tag: 'Artificial Intelligence',
    description: 'Implementasi AI agents, ekstraksi dokumen cerdas (OCR), dan otomatisasi alur kerja berulang.',
    defaultFeatures: [
      'Ekstraksi Dokumen & Invoice Cerdas (OCR)',
      'Multi-Step Agentic LLM Workflow',
      'Private Knowledge Base (RAG & Vector DB)',
      'Integrasi Webhook Otomatis ke ERP / CRM',
      'Deteksi Anomali Data & Forecasting',
      'Audit Keamanan & Isolasi Data Privat',
    ],
    recommendedStack: ['Python', 'FastAPI', 'LangChain / LlamaIndex', 'Qdrant / Chroma', 'Hugging Face'],
  },
  {
    id: 'fullstack',
    title: 'Ekosistem Rekayasa Terpadu (All-in-One)',
    icon: '🏢',
    tag: 'Integrated Engineering',
    description: 'Kombinasi komprehensif aplikasi web portal, jaringan telemetri IoT, visualisasi 3D, dan otomasi AI.',
    defaultFeatures: [
      'Arsitektur Terdistribusi High-Availability',
      'Gateway Terpadu Web + IoT + Model AI',
      'Visualisasi Digital Twin 3D Sinkron IoT',
      'Otomatisasi Laporan Cerdas Berbasis AI',
      'Dashboard Sentral Kontrol & Manajemen SLA',
      'Infrastruktur Cloud Hybrid & Auto-Scaling',
    ],
    recommendedStack: ['Next.js', 'ESP32 / MQTT', 'Three.js', 'FastAPI / PyTorch', 'Kubernetes'],
  },
]

interface TimelineOption {
  id: string
  label: string
  desc: string
  badge: string
}

const TIMELINE_OPTIONS: TimelineOption[] = [
  {
    id: 'sprint',
    label: 'Rapid MVP Sprint',
    desc: '3 – 5 Minggu kerja (Fokus rilis cepat validasi pasar)',
    badge: 'Fast Delivery',
  },
  {
    id: 'standard',
    label: 'Standard Production Architecture',
    desc: '6 – 10 Minggu kerja (Arsitektur lengkap skala industri)',
    badge: 'Recommended',
  },
  {
    id: 'enterprise',
    label: 'Dedicated Squad & Managed SLA',
    desc: 'Kemitraan berkesinambungan dengan tim engineer khusus & SLA 24/7',
    badge: 'Enterprise',
  },
]

export default function ProjectEstimator({ content }: { content: LandingPageContent }) {
  const [selectedCatId, setSelectedCatId] = useState<string>('webapp')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'Frontend Responsif Next.js / React',
    'API Gateway RESTful / GraphQL',
    'Otentikasi Multi-Tenant & RBAC',
    'Audit Trail Keamanan & Enkripsi',
  ])
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard')
  const [copied, setCopied] = useState<boolean>(false)

  const featureIdPrefix = useId()

  const currentCategory = CATEGORIES.find(c => c.id === selectedCatId) || CATEGORIES[0]
  const currentTimeline = TIMELINE_OPTIONS.find(t => t.id === selectedTimeline) || TIMELINE_OPTIONS[1]

  const handleCategoryChange = (catId: string) => {
    setSelectedCatId(catId)
    const targetCat = CATEGORIES.find(c => c.id === catId)
    if (targetCat) {
      // Pick first 4 features as default selection
      setSelectedFeatures(targetCat.defaultFeatures.slice(0, 4))
    }
  }

  const toggleFeature = (feature: string) => {
    setSelectedFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  // Generate formatted blueprint summary text
  const blueprintSummary = `*RINGKASAN BLUEPRINT REKAYASA TEKNIS*
----------------------------------------
*Kategori Solusi:* ${currentCategory.title}
*Brand / Partner:* ${content.brandName || 'TEKNOFLASE'}
*Model Timeline:* ${currentTimeline.label} (${currentTimeline.desc})

*Daftar Fitur Terpilih (${selectedFeatures.length}):*
${selectedFeatures.map((f, i) => `${i + 1}. ${f}`).join('\n')}

*Rekomendasi Stack:* ${currentCategory.recommendedStack.join(', ')}
----------------------------------------
Halo Tim Engineering ${content.brandName || 'TEKNOFLASE'}, saya ingin mendiskusikan implementasi proyek dengan spesifikasi arsitektur di atas. Mohon informasi ketersediaan jadwal konsultasi teknis.`

  const handleCopy = () => {
    navigator.clipboard.writeText(blueprintSummary)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const whatsappNumber = content.contact?.whatsapp || '6281234567890'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(blueprintSummary)}`

  return (
    <section id="estimator" className="py-20 sm:py-28 bg-slate-50/60 border-b border-slate-200/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Kalkulator Arsitektur & Estimasi Proyek
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Rancang kebutuhan sistem Anda dalam beberapa klik. Pilih spesifikasi teknis dan dapatkan estimasi arsitektur serta konsultasi langsung dengan Principal Engineer {content.brandName || 'TEKNOFLASE'}.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Selector (7 cols) */}
          <div className="lg:col-span-7 space-y-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
            
            {/* Step 1: Category Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
                  Langkah 01
                </span>
                <span className="text-xs font-medium text-slate-500">Pilih 1 Kategori</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Pilih Kategori Solusi Sistem
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CATEGORIES.map(cat => {
                  const isSelected = cat.id === selectedCatId
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-blue-50/60 border-blue-600 ring-2 ring-blue-600/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{cat.icon}</span>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 leading-snug">{cat.title}</span>
                          <span className="text-[11px] font-semibold text-blue-700 font-mono">{cat.tag}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mt-1">
                        {cat.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Feature Checklist */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
                  Langkah 02
                </span>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                  {selectedFeatures.length} Fitur Terpilih
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Pilih Fitur & Spesifikasi Teknis
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Pilih komponen arsitektur yang ingin diimplementasikan ke dalam sistem Anda:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentCategory.defaultFeatures.map((feat, idx) => {
                  const isChecked = selectedFeatures.includes(feat)
                  const checkboxId = `${featureIdPrefix}-${idx}`
                  return (
                    <label
                      key={idx}
                      htmlFor={checkboxId}
                      className={`flex items-start gap-3 p-3 rounded-xl border transition-all duration-150 cursor-pointer text-xs font-medium ${
                        isChecked
                          ? 'bg-blue-50/40 border-blue-400 text-slate-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50/30'
                      }`}
                    >
                      <input
                        id={checkboxId}
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleFeature(feat)}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer shrink-0"
                      />
                      <span className="leading-snug">{feat}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Timeline & Engagement Model */}
            <div className="pt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider font-mono">
                  Langkah 03
                </span>
                <span className="text-xs font-medium text-slate-500">Estimasi Target</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Model Delivery & Skema Kolaborasi
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINE_OPTIONS.map(opt => {
                  const isSelected = opt.id === selectedTimeline
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedTimeline(opt.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                          : 'bg-white border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div>
                        <span className={`inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded-full mb-2 ${
                          isSelected ? 'bg-emerald-400 text-slate-950' : 'bg-slate-100 text-slate-700'
                        }`}>
                          {opt.badge}
                        </span>
                        <div className="text-xs font-bold leading-tight">{opt.label}</div>
                      </div>
                      <p className={`text-[11px] leading-relaxed mt-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {opt.desc}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Live Blueprint Result Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <div className="bg-slate-900 text-white border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-xl">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 font-black text-sm">
                    {content.brandName ? content.brandName.charAt(0).toUpperCase() : 'T'}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white leading-tight">Architecture Blueprint</span>
                    <span className="text-[10px] text-emerald-400 font-mono">Live Generated Estimate</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  title="Salin ringkasan blueprint ke clipboard"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 font-bold">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>

              {/* Blueprint Meta Summary */}
              <div className="space-y-4 text-xs">
                
                {/* Category & Timeline info */}
                <div className="bg-slate-950/80 rounded-2xl p-4 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Solusi Sistem:</span>
                    <span className="font-bold text-white text-right">{currentCategory.title}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Model Timeline:</span>
                    <span className="font-bold text-emerald-400 text-right">{currentTimeline.label}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Total Fitur Terpilih:</span>
                    <span className="font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded">
                      {selectedFeatures.length} Komponen
                    </span>
                  </div>
                </div>

                {/* Selected Features Preview */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    Rangkuman Spesifikasi Fitur:
                  </span>
                  {selectedFeatures.length === 0 ? (
                    <p className="text-xs text-slate-500 italic py-2">
                      Belum ada fitur yang dipilih. Silakan centang fitur di sebelah kiri.
                    </p>
                  ) : (
                    <ul className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                      {selectedFeatures.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-300">
                          <span className="text-emerald-400 font-bold shrink-0">✓</span>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Recommended Tech Stack Badges */}
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                    Rekomendasi Arsitektur Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentCategory.recommendedStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-4 text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Konsultasikan Blueprint via WhatsApp</span>
                </a>

                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 pt-1">
                  <span>🔒 Kerahasiaan NDA Terjamin</span>
                  <span>⚡ Respon Cepat Tim Engineer</span>
                </div>
              </div>

            </div>

            {/* Micro Benefit / Assurance Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 flex items-center gap-3 shadow-2xs">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold shrink-0">
                💡
              </div>
              <p className="leading-relaxed">
                Butuh spesifikasi kustom yang tidak ada di daftar? Diskusikan langsung kebutuhan arsitektur Anda dengan tim kami.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
