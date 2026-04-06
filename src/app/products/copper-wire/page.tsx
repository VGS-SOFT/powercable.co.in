import type { Metadata } from 'next';
import ProductLayout from '@/components/products/ProductLayout';

export const metadata: Metadata = {
  title: 'Copper Wire — Premium Grade | Power Cable',
  description:
    'Buy high-quality Copper Wire with 99.5%+ purity from Power Cable, Palghar. Trusted by professionals for superior conductivity and reliability. Get a quote today.',
  alternates: { canonical: 'https://www.powercable.co.in/products/copper-wire' },
};

export default function CopperWirePage() {
  return (
    <ProductLayout
      name="Copper Wire"
      slug="copper-wire"
      tagline="High-conductivity wire trusted by professionals across industries."
      intro="As one of the top dealers of high-quality copper wire, we supply durable and efficient solutions for electrical and industrial needs. Our copper wires are trusted by professionals for their superior conductivity and reliability."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80"
      steps={[
        { title: 'Scrap Selection', desc: 'Only the highest quality Birch copper scrap is selected, ensuring purity and performance.' },
        { title: 'Melting', desc: 'The copper scrap is melted at controlled temperatures to remove impurities and enhance material properties.' },
        { title: 'Wire Drawing', desc: 'Molten copper is drawn through precision dies to achieve consistent diameter and superior conductivity.' },
        { title: 'Quality Testing', desc: 'Each wire batch is rigorously tested for conductivity, tensile strength, and purity above 99.5%.' },
      ]}
      quality={[
        { title: 'Purity Above 99.5%', desc: 'Guarantees superior electrical conductivity and minimal resistance loss in all applications.' },
        { title: 'High Tensile Strength', desc: 'Engineered for durability, our copper wire withstands mechanical stress in demanding environments.' },
        { title: 'Custom Specifications', desc: 'Available in various gauges and lengths to meet precise industrial and electrical requirements.' },
      ]}
      applications={[
        { sector: 'Electrical & Electronics', uses: 'Ideal for power transmission, wiring harnesses, motors, and transformers.' },
        { sector: 'Telecommunications', uses: 'Used in signal cables, data transmission lines, and communication infrastructure.' },
        { sector: 'Manufacturing & Industrial', uses: 'Essential for winding coils, solenoids, and various electromechanical components.' },
      ]}
      whyUs={[
        { title: 'Sustainable Practices', desc: 'Eco-friendly manufacturing ensures minimal waste and energy-efficient production.' },
        { title: 'Competitive Pricing', desc: 'High-quality copper wire at competitive rates, the preferred choice for wholesalers and manufacturers.' },
        { title: 'Reliable Delivery', desc: 'Strong supply chain network guarantees on-time delivery and consistent quality.' },
      ]}
      ctaText="Choose us for superior Copper Wire that is engineered for excellence. Reach out today to get a quote!"
    />
  );
}
