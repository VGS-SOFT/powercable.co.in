import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { PRODUCTS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Copper Products — Ingots, Strips, Wire & Rod',
  description:
    'Explore our premium range of copper products including Copper Ingots, Copper Strips, Copper Wire, and Copper Rods. 99.5%+ purity, competitive pricing.',
  alternates: { canonical: 'https://www.powercable.co.in/products' },
};

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative grid-bg pt-32 pb-16 overflow-hidden">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
          <div className="container-custom relative z-10 text-center">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
              Our Range
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Premium <span className="text-copper-gradient">Copper Products</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Industry-leading copper products crafted with 99.5%+ purity, built for electrical, industrial, and construction applications.
            </p>
          </div>
        </section>
        <SectionWrapper>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {PRODUCTS.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group card-dark rounded-2xl overflow-hidden hover:border-copper-700 hover:shadow-copper transition-all duration-300 hover:-translate-y-1 flex flex-col sm:flex-row"
              >
                <div className="relative w-full sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-100/50" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="font-display text-xl font-bold text-white mb-2 group-hover:text-copper-400 transition-colors">{product.name}</h2>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{product.shortDesc}</p>
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
