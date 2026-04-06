import type { Metadata } from 'next';
import ProductLayout from '@/components/products/ProductLayout';

export const metadata: Metadata = {
  title: 'Copper Ingots — Premium Grade | Power Cable',
  description:
    'Buy premium Copper Ingots with 99.5%+ purity from Power Cable, Palghar. Ideal for electrical, construction, and manufacturing applications. Get a quote today.',
  alternates: { canonical: 'https://www.powercable.co.in/products/copper-ingots' },
};

export default function CopperIngotsPage() {
  return (
    <ProductLayout
      name="Copper Ingots"
      slug="copper-ingots"
      tagline="Precision-cast ingots engineered for superior performance."
      intro="We pride ourselves on producing premium-grade Copper Ingots that meet the highest industry standards. Our Copper Ingots are crafted with precision to serve diverse applications across multiple industries, ensuring both reliability and efficiency."
      heroImage="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1200&auto=format&fit=crop&q=80"
      steps={[
        { title: 'Scrap Selection', desc: 'Only the highest quality Birch copper scrap is selected, ensuring purity and performance from the very start.' },
        { title: 'Melting', desc: 'The copper scrap is melted at controlled temperatures to remove impurities and enhance the material’s properties.' },
        { title: 'Casting', desc: 'The molten copper is poured into molds to form ingots, cooled and shaped into uniform, durable blocks.' },
        { title: 'Quality Testing', desc: 'Each ingot undergoes rigorous quality testing, ensuring copper purity remains above 99.5% for all applications.' },
      ]}
      quality={[
        { title: 'Purity Above 99.5%', desc: 'Our ingots guarantee superior electrical conductivity and resistance to corrosion.' },
        { title: 'Exceptional Durability', desc: 'Produced using state-of-the-art machinery, each ingot is tested for strength and durability for high-performance applications.' },
        { title: 'Custom Sizing', desc: 'Available in a variety of sizes and weights to meet the needs of large-scale industrial or specialized projects.' },
      ]}
      applications={[
        { sector: 'Electrical & Electronics', uses: 'High conductivity makes them perfect for wiring, transformers, and circuit boards.' },
        { sector: 'Construction & Architecture', uses: 'Used in roofing, plumbing, and aesthetic finishes due to excellent corrosion resistance.' },
        { sector: 'Manufacturing', uses: 'Essential for producing copper rods, wires, and sheets used across multiple sectors.' },
      ]}
      whyUs={[
        { title: 'Sustainable Practices', desc: 'Eco-friendly manufacturing ensures minimal waste and energy-efficient production.' },
        { title: 'Competitive Pricing', desc: 'High-quality copper ingots at competitive rates, preferred by wholesalers and manufacturers.' },
        { title: 'Reliable Delivery', desc: 'Strong supply chain network guarantees on-time delivery and consistent quality.' },
      ]}
      ctaText="Choose us for superior Copper Ingots that are engineered for excellence. Reach out today to get a quote!"
    />
  );
}
