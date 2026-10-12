import type { LandingPageContent } from './AdminPanel'

export default function Features({ content }: { content: LandingPageContent }) {
  return (
    // Set background to #f7f7f7 and borders to slate-200, transition remains
    <section id="features" className="py-20 bg-white border-b border-slate-100 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center mb-16 flex flex-col items-center group">
          {/* Minimalist Isometric Cube Icon with #7DD8B5 Accent and Micro-interaction */}
          <div className="mb-4 inline-flex items-center justify-center p-3.5 rounded-2xl bg-[#7DD8B5]/10 text-[#7DD8B5] border border-[#7DD8B5]/20 transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-lg group-hover:shadow-[#7DD8B5]/10">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>
          {/* Heading - Removed dark mode white text override */}
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Dirancang untuk <span className="text-[#7DD8B5]">Web Modern</span>
          </h2>
          {/* Description - Removed dark mode light text override */}
          <p className="fungsi mt-4 text-base text-slate-600 leading-relaxed">
            {content.featuresDescription}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {content.featuresItems && content.featuresItems.map((item, index) => (
            <div
              key={index}
              // Card background remains white, removed dark mode background/border overrides
              className="relative group overflow-hidden rounded-2xl border border-[#7DD8B5]/40 bg-white p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7DD8B5]"
            >
              {/* Icon Container with Gradient Backdrop */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr ${item.gradient} text-white font-bold text-xl shadow-md`}>
                {item.icon}
              </div>

              {/* Card Contents - Removed dark mode text overrides */}
              <h3 className="mt-6 text-lg font-bold text-slate-900 group-hover:text-[#7DD8B5] transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
