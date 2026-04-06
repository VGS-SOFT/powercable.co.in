import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { RAW_MATERIALS } from '@/lib/constants';

type Feature = { icon: string; title: string; desc: string };
type Benefit = { title: string; desc: string };

type RawMaterialLayoutProps = {
  name: string;
  slug: string;
  tagline: string;
  intro: string;
  heroImage: string;
  characteristics: Feature[];
  whyWePurchase: Benefit[];
  benefits: Benefit[];
  qualityControl: Benefit[];
  ecoFriendly: Benefit[];
  ctaHeadline: string;
  ctaDesc: string;
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function RawMaterialLayout({
  name, slug, tagline, intro, heroImage,
  characteristics, whyWePurchase, benefits,
  qualityControl, ecoFriendly, ctaHeadline, ctaDesc,
}: RawMaterialLayoutProps) {
  const related = RAW_MATERIALS.filter((m) => m.slug !== slug);

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
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
          <div className="container-custom relative z-10 pb-16 pt-8">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-6">
              <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/raw-materials" className="hover:text-copper-400 transition-colors">Raw Materials</Link>
              <span>/</span>
              <span className="text-copper-400">{name}</span>
            </nav>
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
              Raw Material Purchasing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">{name}</h1>
            <p className="text-copper-300 text-xl mb-6 font-display italic">{tagline}</p>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">{intro}</p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">Request a Quote</Button>
              <Button href="/raw-materials" variant="outline" size="lg">All Raw Materials</Button>
            </div>
          </div>
        </section>

        {/* Key Characteristics */}
        <SectionWrapper className="bg-dark-300/50">
          <SectionHeader
            label="What Makes It Special"
            title="Key"
            highlight="Characteristics"
            description="Understanding the properties that make this material essential for industrial and manufacturing applications."
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {characteristics.map((c) => (
              <div key={c.title} className="card-dark rounded-2xl p-6 hover:border-copper-700 hover:shadow-copper transition-all duration-300 group">
                <div className="text-3xl mb-4">{c.icon}</div>
                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-copper-400 transition-colors">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Why We Purchase + Benefits */}
        <SectionWrapper withGrid>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader label="Our Approach" title="Why We" highlight="Purchase This" />
              <ul className="space-y-4">
                {whyWePurchase.map((w) => (
                  <li key={w.title} className="flex gap-3 card-dark rounded-xl p-4 hover:border-copper-700 transition-all">
                    <CheckIcon />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{w.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader label="Customer Value" title="Benefits to" highlight="Our Customers" />
              <ul className="space-y-4">
                {benefits.map((b) => (
                  <li key={b.title} className="flex gap-3 card-dark rounded-xl p-4 hover:border-copper-700 transition-all">
                    <CheckIcon />
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">{b.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionWrapper>

        {/* Quality Control + Eco Friendly */}
        <SectionWrapper className="bg-dark-300/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader label="Our Standards" title="Quality" highlight="Control" />
              <div className="space-y-4">
                {qualityControl.map((q) => (
                  <div key={q.title} className="card-dark rounded-xl p-5 hover:border-copper-700 transition-all">
                    <p className="text-copper-400 font-semibold text-sm mb-1">{q.title}</p>
                    <p className="text-white/50 text-sm leading-relaxed">{q.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader label="Sustainability" title="Eco-Friendly" highlight="Practices" />
              <div className="space-y-4">
                {ecoFriendly.map((e) => (
                  <div key={e.title} className="card-dark rounded-xl p-5 hover:border-copper-700 transition-all flex gap-3">
                    <span className="text-xl shrink-0">♻️</span>
                    <div>
                      <p className="text-copper-400 font-semibold text-sm mb-1">{e.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Contact CTA */}
        <SectionWrapper withGrid>
          <div className="max-w-3xl mx-auto">
            <div className="card-dark rounded-2xl p-8 lg:p-12 text-center border-copper-800 hover:border-copper-600 transition-all">
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
                Get In Touch
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4">
                {ctaHeadline}
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">{ctaDesc}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact" size="lg">Contact Us</Button>
                <Button href="/contact" variant="outline" size="lg">Send a Message</Button>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Related Raw Materials */}
        <SectionWrapper className="bg-dark-300/50">
          <SectionHeader label="Explore More" title="Other Raw" highlight="Materials" centered />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {related.map((m) => (
              <Link
                key={m.slug}
                href={`/raw-materials/${m.slug}`}
                className="group card-dark rounded-2xl overflow-hidden hover:border-copper-700 hover:shadow-copper transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent" />
                </div>
                <div className="p-4">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-copper-400 transition-colors mb-1">{m.name}</h3>
                  <p className="text-white/40 text-xs mb-2">{m.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-copper-400 text-xs font-semibold group-hover:gap-2 transition-all">View Details →</span>
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
