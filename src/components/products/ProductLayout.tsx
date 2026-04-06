import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { PRODUCTS } from '@/lib/constants';

type Step = { title: string; desc: string };
type Feature = { title: string; desc: string };
type Application = { sector: string; uses: string };

type ProductLayoutProps = {
  name: string;
  slug: string;
  tagline: string;
  intro: string;
  heroImage: string;
  steps: Step[];
  quality: Feature[];
  applications: Application[];
  whyUs: Feature[];
  ctaText: string;
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ProductLayout({
  name, slug, tagline, intro, heroImage,
  steps, quality, applications, whyUs, ctaText,
}: ProductLayoutProps) {
  const related = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[60vh] flex items-end grid-bg overflow-hidden pt-20">
          <div className="absolute inset-0">
            <Image src={heroImage} alt={name} fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-dark-400/70 to-dark-400/30" />
          </div>
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
          <div className="container-custom relative z-10 pb-16 pt-8">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-copper-400 transition-colors">Products</Link>
              <span>/</span>
              <span className="text-copper-400">{name}</span>
            </nav>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
              Premium Copper Product
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {name}
            </h1>
            <p className="text-copper-300 text-xl mb-6 font-display italic">{tagline}</p>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Get a Quote</Button>
              <Button href="/products" variant="outline" size="lg">All Products</Button>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <SectionWrapper className="bg-dark-300/50">
          <SectionHeader
            label="How We Make It"
            title="Manufacturing"
            highlight="Process"
            description="We utilize cutting-edge technology to convert Birch Copper Scrap into superior copper products through a rigorous multi-step refining process."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.title} className="card-dark rounded-2xl p-6 hover:border-copper-700 hover:shadow-copper transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-copper-gradient flex items-center justify-center font-bold text-white text-sm mb-4 shadow-copper">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Quality + Applications side by side */}
        <SectionWrapper withGrid>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quality */}
            <div>
              <SectionHeader label="Quality Assurance" title="Our Quality" highlight="Standards" />
              <ul className="space-y-4">
                {quality.map((q) => (
                  <li key={q.title} className="flex gap-3 card-dark rounded-xl p-4 hover:border-copper-700 transition-all">
                    <CheckIcon />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{q.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{q.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Applications */}
            <div>
              <SectionHeader label="Where It's Used" title="Industry" highlight="Applications" />
              <div className="space-y-4">
                {applications.map((a) => (
                  <div key={a.sector} className="card-dark rounded-xl p-4 hover:border-copper-700 transition-all">
                    <p className="text-copper-400 font-semibold text-sm mb-1">{a.sector}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{a.uses}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Why Choose Us */}
        <SectionWrapper className="bg-dark-300/50">
          <SectionHeader label="Why Choose Us" title="The Power Cable" highlight="Advantage" centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="card-dark rounded-2xl p-6 text-center hover:border-copper-700 hover:shadow-copper transition-all duration-300">
                <div className="copper-divider mx-auto mb-4" />
                <h3 className="font-display text-base font-bold text-white mb-2">{w.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-white/60 italic mb-6 max-w-xl mx-auto">&ldquo;{ctaText}&rdquo;</p>
            <Button href="/contact" size="lg">Reach Out Today</Button>
          </div>
        </SectionWrapper>

        {/* CTA Banner */}
        <section className="relative overflow-hidden py-16 bg-dark-200">
          <div className="absolute inset-0 bg-gradient-to-r from-copper-900/40 via-copper-800/20 to-copper-900/40" />
          <div className="container-custom relative z-10">
            <div className="card-dark rounded-2xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  Ready to Elevate Your Projects with{' '}
                  <span className="text-copper-gradient">Superior {name}?</span>
                </h2>
                <p className="text-white/50">Trusted by industries worldwide for Purity, Durability &amp; Versatility.</p>
              </div>
              <div className="flex gap-4 shrink-0">
                <Button href="/contact" size="lg">Get a Quote</Button>
                <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <SectionWrapper>
          <SectionHeader label="Explore More" title="Related" highlight="Products" centered />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group card-dark rounded-2xl overflow-hidden hover:border-copper-700 hover:shadow-copper transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-copper-400 transition-colors mb-1">{p.name}</h3>
                  <p className="text-white/40 text-xs">{p.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-copper-400 text-xs font-semibold mt-3 group-hover:gap-2 transition-all">
                    Get Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
