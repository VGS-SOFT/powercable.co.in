import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { RAW_MATERIALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Raw Materials — Copper Druid, Scrap Birch & All Copper Scrap',
  description:
    'Power Cable purchases and processes high-grade raw copper materials including Copper Druid, Copper Scrap Birch, and All Copper Scrap. Sustainable sourcing, competitive pricing.',
  alternates: { canonical: 'https://www.powercable.co.in/raw-materials' },
};

export default function RawMaterialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative grid-bg pt-32 pb-16 overflow-hidden">
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
              What We Source
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Our <span className="text-copper-gradient">Raw Materials</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We actively purchase and process high-grade copper raw materials, transforming them into premium products while championing sustainable, eco-friendly practices.
            </p>
          </div>
        </section>
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RAW_MATERIALS.map((material) => (
              <Link
                key={material.slug}
                href={`/raw-materials/${material.slug}`}
                className="group card-dark rounded-2xl overflow-hidden hover:border-copper-700 hover:shadow-copper transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image src={material.image} alt={material.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 via-dark-100/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-xl font-bold text-white mb-2 group-hover:text-copper-400 transition-colors">{material.name}</h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{material.shortDesc}</p>
                  <span className="inline-flex items-center gap-2 text-copper-400 text-sm font-semibold group-hover:gap-3 transition-all">
                    View Details →
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
