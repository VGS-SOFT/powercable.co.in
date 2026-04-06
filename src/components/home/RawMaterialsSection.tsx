import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeader from '@/components/ui/SectionHeader';
import { RAW_MATERIALS } from '@/lib/constants';

export default function RawMaterialsSection() {
  return (
    <SectionWrapper id="our-purchasing" withGrid>
      <SectionHeader
        label="Raw Materials"
        title="Our Copper"
        highlight="Purchasing"
        description="We actively source and process high-grade copper scrap and refined materials, converting them into premium copper products while supporting sustainability."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RAW_MATERIALS.map((material, index) => (
          <div
            key={material.slug}
            className="group card-dark rounded-2xl overflow-hidden hover:border-copper-700 hover:shadow-copper transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative overflow-hidden h-52">
              <Image
                src={material.image}
                alt={material.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-100/90 via-dark-100/30 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-copper-500/90 text-white text-xs font-semibold rounded-full">
                  #{index + 1} Raw Material
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-copper-400 transition-colors">
                {material.name}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                {material.shortDesc}
              </p>
              <Link
                href={`/raw-materials/${material.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-copper-700 text-copper-400 text-sm font-semibold rounded-full hover:bg-copper-500 hover:text-white hover:border-copper-500 transition-all duration-300"
              >
                View Our Purchasing
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
