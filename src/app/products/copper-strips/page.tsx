import type { Metadata } from 'next';
import ProductLayout from '@/components/products/ProductLayout';

export const metadata: Metadata = {
  title: 'Copper Strips — Premium Grade | Power Cable',
  description:
    'Buy premium Copper Strips with 99.5%+ purity from Power Cable, Palghar. Ideal for electrical contacts, construction, and industrial applications. Get a quote today.',
  alternates: { canonical: 'https://www.powercable.co.in/products/copper-strips' },
};

export default function CopperStripsPage() {
  return (
    <ProductLayout
      name="Copper Strips"
      slug="copper-strips"
      tagline="Precision-rolled strips for electrical, industrial, and architectural excellence."
      intro="At us, we pride ourselves on producing premium-grade Copper Strips that meet the highest industry standards. Our Copper Strips are crafted with precision to serve diverse applications across multiple industries, ensuring both reliability and efficiency."
      heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop&q=80"
      steps={[
        { title: 'Scrap Selection', desc: 'Only the highest quality Birch copper scrap is selected, ensuring purity and performance.' },
        { title: 'Melting', desc: 'The copper scrap is melted at controlled temperatures to remove impurities and enhance material properties.' },
        { title: 'Rolling', desc: 'The molten copper is rolled into thin strips, ensuring uniform thickness and smooth surfaces.' },
        { title: 'Quality Testing', desc: 'Each strip is rigorously tested ensuring copper purity remains above 99.5%, suitable for all applications.' },
      ]}
      quality={[
        { title: 'Purity Above 99.5%', desc: 'Our strips guarantee superior electrical conductivity and resistance to corrosion.' },
        { title: 'Exceptional Durability', desc: 'State-of-the-art machinery ensures each strip is tested for strength, ideal for high-performance environments.' },
        { title: 'Custom Sizing', desc: 'Available in a variety of widths and thicknesses for large-scale industrial or specialized projects.' },
      ]}
      applications={[
        { sector: 'Electrical & Electronics', uses: 'Ideal for wiring, electrical contacts, and connectors due to their high conductivity.' },
        { sector: 'Construction & Architecture', uses: 'Used in roofing, flashing, and applications requiring excellent corrosion resistance and aesthetic appeal.' },
        { sector: 'Manufacturing', uses: 'Essential for creating electrical components, metal stamping, and industrial machinery.' },
      ]}
      whyUs={[
        { title: 'Sustainable Practices', desc: 'Eco-friendly manufacturing ensures minimal waste and energy-efficient production.' },
        { title: 'Competitive Pricing', desc: 'High-quality copper strips at competitive rates, the preferred choice for wholesalers and manufacturers.' },
        { title: 'Reliable Delivery', desc: 'Strong supply chain network guarantees on-time delivery and consistent quality.' },
      ]}
      ctaText="Choose us for superior Copper Strips that are engineered for excellence. Reach out today to get a quote!"
    />
  );
}
