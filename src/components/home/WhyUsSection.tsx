import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';

const features = [
  {
    icon: '🏆',
    title: 'Superior Quality',
    desc: 'Copper purity above 99.5% — certified and tested to meet international quality standards for every batch.',
  },
  {
    icon: '♻️',
    title: 'Sustainable Practices',
    desc: 'Eco-friendly manufacturing with minimal waste. We actively participate in copper recycling programs.',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    desc: 'Bulk purchasing power lets us offer the most competitive rates for wholesalers and manufacturers.',
  },
  {
    icon: '🚚',
    title: 'Reliable Delivery',
    desc: 'Strong supply chain network guarantees on-time delivery with consistent quality, pan-India.',
  },
  {
    icon: '🔬',
    title: 'Rigorous Testing',
    desc: 'Each batch undergoes thorough purity and performance testing before dispatch to ensure standards.',
  },
  {
    icon: '🤝',
    title: 'Customer-Centric',
    desc: 'Our clients are at the heart of everything we do — tailored solutions and responsive support.',
  },
];

export default function WhyUsSection() {
  return (
    <SectionWrapper withGrid>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <SectionHeader
            label="Why Choose Us"
            title="The Power Cable"
            highlight="Difference"
            description="We don't just supply copper — we deliver trust, quality, and excellence in every connection. Here's what sets us apart from the rest."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-copper-500 hover:bg-copper-400 text-white font-semibold rounded-full transition-all duration-300 shadow-copper hover:shadow-copper-lg hover:-translate-y-0.5"
            >
              Get a Quote
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border border-copper-700 text-copper-400 font-semibold rounded-full hover:bg-copper-500 hover:text-white hover:border-copper-500 transition-all duration-300"
            >
              Learn About Us
            </a>
          </div>
        </div>

        {/* Right — feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="card-dark rounded-xl p-5 hover:border-copper-700 hover:shadow-copper transition-all duration-300 group"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-display text-base font-bold text-white mb-1.5 group-hover:text-copper-400 transition-colors">
                {f.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
