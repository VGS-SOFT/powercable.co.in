import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Us \u2014 Power Cable | Premium Copper Products',
  description:
    'Learn about Power Cable \u2014 a trusted dealer and manufacturer of premium copper products based in Palghar, Maharashtra. Our vision, mission, and commitment to quality.',
  alternates: { canonical: 'https://www.powercable.co.in/about' },
};

const values = [
  {
    icon: '\ud83c\udfc6',
    title: 'Superior Quality',
    desc: 'We adhere to international quality standards to provide cables and copper products that guarantee safety and efficiency in every application.',
  },
  {
    icon: '\ud83d\udd2c',
    title: 'Innovation & Technology',
    desc: 'We leverage advanced manufacturing techniques to produce copper products that meet evolving industry needs and performance standards.',
  },
  {
    icon: '\ud83c\udf0d',
    title: 'Wide Range of Applications',
    desc: 'From industrial projects to residential wiring, we offer copper products suitable for virtually every application and sector.',
  },
  {
    icon: '\ud83e\udd1d',
    title: 'Customer-Centric Approach',
    desc: 'Our clients are at the heart of our business. We strive to provide exceptional service, tailored solutions, and responsive support.',
  },
];

const stats = [
  { value: '99.5%+', label: 'Copper Purity' },
  { value: '4+',     label: 'Product Categories' },
  { value: '3+',     label: 'Raw Material Types' },
  { value: '100%',   label: 'GSTIN Verified' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative grid-bg pt-32 pb-20 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-copper-700/10 rounded-full blur-3xl pointer-events-none" />
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-copper-400">About Us</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
                  Who We Are
                </span>
                <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  About <span className="text-copper-gradient">Power Cable</span>
                </h1>
                <p className="text-white/60 text-lg leading-relaxed mb-6">
                  At Power Cable, we are dedicated to delivering high-quality, durable, and efficient copper products that ensure seamless connectivity for industries, businesses, and households.
                </p>
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  With years of expertise in the industry, we specialize in manufacturing and supplying premium-grade copper products designed to meet the highest safety and performance standards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button href="/products" size="lg">Our Products</Button>
                  <Button href="/contact" variant="outline" size="lg">Contact Us</Button>
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="card-dark rounded-2xl p-6 text-center hover:border-copper-700 hover:shadow-copper transition-all">
                    <p className="font-display text-3xl font-bold text-copper-gradient mb-2">{s.value}</p>
                    <p className="text-white/50 text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <SectionWrapper className="bg-dark-300/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-copper-800/50 shadow-copper-lg">
                <Image
                  src="/images/about-commitment.jpg"
                  alt="Power Cable \u2014 premium copper manufacturing"
                  width={600}
                  height={400}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-400/40 to-transparent rounded-2xl" />
              </div>
              <div className="absolute -bottom-5 -right-5 card-dark px-5 py-4 rounded-2xl">
                <p className="text-copper-gradient font-display text-xl font-bold">Est. Maharashtra</p>
                <p className="text-white/50 text-xs mt-0.5">Palghar \u2014 Pan-India Delivery</p>
              </div>
            </div>
            <div>
              <SectionHeader
                label="Our Commitment"
                title="Quality, Innovation"
                highlight="& Sustainability"
              />
              <p className="text-white/60 leading-relaxed mb-6">
                We understand that reliable power transmission is crucial for modern infrastructure. That\u2019s why we prioritize quality, innovation, and sustainability in all our products.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Our copper products are engineered to withstand extreme conditions, ensuring long-lasting performance and safety across all industrial and residential applications.
              </p>
              <div className="flex items-center gap-3 p-4 card-dark rounded-xl border-copper-700">
                <span className="text-2xl">\ud83d\udccd</span>
                <div>
                  <p className="text-white font-semibold text-sm">Ground Floor, 1183/2, Nirmal Yash Apartment</p>
                  <p className="text-white/50 text-xs">Wada \u2013 Bhiwandi Road, Kudus, Palghar, Maharashtra \u2013 421312</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Why Choose Us */}
        <SectionWrapper withGrid>
          <SectionHeader
            label="Why Choose Us"
            title="The Power Cable"
            highlight="Advantage"
            centered
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card-dark rounded-2xl p-6 hover:border-copper-700 hover:shadow-copper transition-all duration-300 group text-center">
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-display text-base font-bold text-white mb-2 group-hover:text-copper-400 transition-colors">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </SectionWrapper>

        {/* Vision & Mission */}
        <SectionWrapper className="bg-dark-300/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card-dark rounded-2xl p-8 hover:border-copper-700 hover:shadow-copper transition-all">
              <div className="w-12 h-12 rounded-full bg-copper-gradient flex items-center justify-center mb-4 shadow-copper">
                <span className="text-white text-xl">\ud83d\udc41\ufe0f</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Our <span className="text-copper-gradient">Vision</span></h2>
              <div className="copper-divider mb-4" />
              <p className="text-white/60 leading-relaxed">
                To be a globally recognized leader in copper product solutions, driving innovation and sustainability while delivering unparalleled value to our customers and communities.
              </p>
            </div>
            <div className="card-dark rounded-2xl p-8 hover:border-copper-700 hover:shadow-copper transition-all">
              <div className="w-12 h-12 rounded-full bg-copper-gradient flex items-center justify-center mb-4 shadow-copper">
                <span className="text-white text-xl">\ud83c\udfaf</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-4">Our <span className="text-copper-gradient">Mission</span></h2>
              <div className="copper-divider mb-4" />
              <p className="text-white/60 leading-relaxed">
                To manufacture and supply high-performance copper products that empower industries and communities with safe, reliable, and sustainable electrical solutions.
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* Closing CTA */}
        <SectionWrapper withGrid>
          <div className="text-center max-w-3xl mx-auto">
            <div className="copper-divider mx-auto mb-6" />
            <blockquote className="font-display text-2xl lg:text-3xl text-white italic mb-8 leading-relaxed">
              &ldquo;At Power Cable, we don&apos;t just provide copper products &mdash; we deliver{' '}
              <span className="text-copper-gradient">trust, quality, and excellence</span>{' '}
              in every connection.&rdquo;
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" size="lg">Get in Touch</Button>
              <Button href="/products" variant="outline" size="lg">Explore Products</Button>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
