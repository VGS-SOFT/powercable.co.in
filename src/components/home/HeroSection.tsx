'use client';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-copper-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800/60 rounded-full">
              <span className="w-1.5 h-1.5 bg-copper-400 rounded-full animate-pulse" />
              Premium Copper Products · Maharashtra, India
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              India&apos;s Trusted{' '}
              <span className="text-copper-gradient">Copper</span>
              <br />
              Products Dealer
            </h1>

            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-lg">
              From Copper Ingots to Copper Wire — we supply premium-grade copper products with superior purity above 99.5%, competitive pricing, and reliable on-time delivery.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { value: '99.5%+', label: 'Copper Purity' },
                { value: '4+',     label: 'Product Types' },
                { value: '100%',   label: 'Recyclable Scrap' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-copper-400">{stat.value}</p>
                  <p className="text-white/40 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/products" size="lg">Explore Products</Button>
              <Button href="/contact" variant="outline" size="lg">Get a Quote</Button>
            </div>
          </div>

          {/* Right — Image card stack */}
          <div className="relative hidden lg:block">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden border border-copper-800/50 shadow-copper-lg">
              <Image
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80"
                alt="Premium copper products — copper wire and industrial copper"
                width={600}
                height={420}
                className="w-full h-[420px] object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-400/60 to-transparent" />
            </div>

            {/* Floating badge — purity */}
            <div className="absolute -bottom-5 -left-6 card-dark px-5 py-4 rounded-2xl">
              <p className="text-copper-gradient font-display text-2xl font-bold">99.5%+</p>
              <p className="text-white/50 text-xs mt-0.5">Copper Purity Guaranteed</p>
            </div>

            {/* Floating badge — location */}
            <div className="absolute -top-4 -right-4 card-dark px-4 py-3 rounded-xl flex items-center gap-2">
              <span className="text-copper-400 text-lg">📍</span>
              <div>
                <p className="text-white text-xs font-semibold">Palghar, Maharashtra</p>
                <p className="text-white/40 text-xs">Pan-India Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-400 to-transparent pointer-events-none" />
    </section>
  );
}
