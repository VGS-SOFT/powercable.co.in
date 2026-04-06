import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { PRODUCTS } from '@/lib/constants';

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function ProductsSection() {
  return (
    <SectionWrapper id="product-section" className="bg-dark-300/50">
      <SectionHeader
        label="What We Offer"
        title="Our Premium"
        highlight="Copper Products"
        description="We supply industry-leading copper products crafted with precision, purity above 99.5%, and built for electrical, industrial, and construction applications."
        centered
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group card-dark rounded-2xl overflow-hidden hover:border-copper-700 hover:shadow-copper transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-copper-400 transition-colors">
                {product.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {product.shortDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-copper-400 text-sm font-semibold group-hover:gap-3 transition-all">
                See Details <ArrowIcon />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
