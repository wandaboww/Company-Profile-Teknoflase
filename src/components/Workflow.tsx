import { useRef, useEffect, useState } from 'react'
import type { LandingPageContent } from './AdminPanel'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function Workflow({ content }: { content: LandingPageContent }) {
  const { ref, isVisible } = useInView(0.1)

  const stepIcons = [
    (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    (
      <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  ]

  const steps = content.workflowSteps || []

  return (
    <section id="workflow" className="workflow-section section-workflow py-20 sm:py-28 bg-white border-b border-slate-200/80 transition-colors duration-200">
      <div className="workflow-container mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="workflow-header mx-auto max-w-3xl text-center mb-16 flex flex-col items-center">
          <h2 className="workflow-title text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Metodologi Rekayasa Sistem yang Terukur
          </h2>
          <p className="workflow-description mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
            Dari formulasi arsitektur spesifikasi hingga pengujian beban hardware dan deployment cloud, setiap tahap dikawal dengan standar engineering industri.
          </p>
        </div>

        {/* Clean Responsive Step Grid */}
        <div ref={ref} className="workflow-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`workflow-card flex flex-col items-start bg-slate-50/70 border border-slate-200/90 p-6 rounded-2xl transition-all duration-300 shadow-xs hover:border-slate-300 hover:shadow-md hover:bg-white ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Header Badge Row */}
              <div className="workflow-card-badge-row w-full flex justify-between items-center mb-5">
                {/* Step Number Badge */}
                <div className="workflow-step-badge flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-extrabold text-sm shadow-xs">
                  {step.no}
                </div>

                {/* Step Visual Icon container */}
                <div className="workflow-step-icon-box flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 border border-blue-100">
                  {stepIcons[idx]}
                </div>
              </div>

              {/* Step Title */}
              <h3 className="workflow-step-title text-base font-bold text-slate-900">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="workflow-step-desc mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


