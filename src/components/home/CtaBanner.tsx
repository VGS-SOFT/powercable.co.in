import Link from 'next/link';

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-20 bg-dark-200">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-copper-900/40 via-copper-800/20 to-copper-900/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-copper-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 text-center">
        <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
          Ready to Source Premium Copper?
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          Invest in Quality That{' '}
          <span className="text-copper-gradient">Lasts</span>
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
          Partner with us for tailored copper solutions, competitive pricing, and reliable customer support. Our team is ready to assist you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-copper-500 hover:bg-copper-400 text-white text-lg font-semibold rounded-full transition-all duration-300 shadow-copper-lg hover:-translate-y-0.5"
          >
            Get a Quote Today
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-copper-600 text-copper-400 text-lg font-semibold rounded-full hover:bg-copper-500 hover:text-white hover:border-copper-500 transition-all duration-300 hover:-translate-y-0.5"
          >
            View All Products
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {[
            { icon: '✅', text: 'GSTIN Verified' },
            { icon: '📍', text: 'Palghar, Maharashtra' },
            { icon: '📞', text: '(+91) 99879 94910' },
          ].map((badge) => (
            <div key={badge.text} className="flex items-center gap-2 text-white/40 text-sm">
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
