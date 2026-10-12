import { useState } from 'react'
import type { FormEvent } from 'react'
import type { LandingPageContent } from './AdminPanel'

export default function CTA({ content }: { content: LandingPageContent }) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <section className="py-20 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative Blob */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-indigo-500/5 dark:bg-primary-500/5 blur-[120px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8">
        <div className="rounded-3xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-violet-800 p-8 sm:p-16 text-center text-white shadow-xl shadow-indigo-600/10">
          <div className="mx-auto max-w-2xl">
            {/* Title */}
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {content.ctaTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-indigo-100/90 leading-relaxed">
              {content.ctaDescription}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan alamat email bisnis Anda"
                className="w-full rounded-xl bg-white/10 px-5 py-3.5 text-white placeholder-indigo-200/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto shrink-0 rounded-xl bg-white px-6 py-3.5 font-bold text-indigo-700 shadow-md hover:bg-indigo-50 transition-all duration-200 active:scale-[0.98] cursor-pointer"
              >
                Konsultasi Gratis
              </button>
            </form>

            {/* Feedback Message */}
            {submitted && (
              <p className="mt-4 text-sm font-semibold text-emerald-300 animate-fade-in-up">
                ✓ Terima kasih! Tim kami akan segera menghubungi Anda melalui email.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
