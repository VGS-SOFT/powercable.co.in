import type { Metadata } from 'next';
import ProductLayout from '@/components/products/ProductLayout';

export const metadata: Metadata = {
  title: 'Copper Rod — Premium Grade | Power Cable',
  description:
    'Buy top-grade Copper Rods with 99.5%+ purity from Power Cable, Palghar. Known for superior purity, strength, and versatility. Get a quote today.',
  alternates: { canonical: 'https://www.powercable.co.in/products/copper-rod' },
};

export default function CopperRodPage() {
  return (
    <ProductLayout
      name="Copper Rod"
      slug="copper-rod"
      tagline="Top-grade rods built for strength, purity, and industrial versatility."
      intro="As a leading dealer of top-grade copper rods, we offer reliable solutions for various manufacturing and industrial applications. Our copper rods are known for their superior purity, strength, and versatility."
      heroImage="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&auto=format&fit=crop&q=80"
      steps={[
        { title: 'Scrap Selection', desc: 'Only the highest quality Birch copper scrap is selected, ensuring purity and performance.' },
        { title: 'Melting', desc: 'The copper scrap is melted at controlled temperatures to remove impurities and enhance material properties.' },
        { title: 'Rod Extrusion', desc: 'Molten copper is extruded through precision dies to form uniform, high-strength copper rods.' },
        { title: 'Quality Testing', desc: 'Each rod is rigorously tested for dimensional accuracy, tensile strength, and purity above 99.5%.' },
      ]}
      quality={[
        { title: 'Purity Above 99.5%', desc: 'Our rods guarantee superior electrical conductivity and long-lasting corrosion resistance.' },
        { title: 'High Mechanical Strength', desc: 'Produced with precision machinery, each rod is built to withstand demanding industrial environments.' },
        { title: 'Custom Dimensions', desc: 'Available in various diameters and lengths to suit large-scale industrial and specialized manufacturing needs.' },
      ]}
      applications={[
        { sector: 'Electrical & Electronics', uses: 'Used in busbars, earthing rods, electrical contacts, and high-current transmission systems.' },
        { sector: 'Construction & Architecture', uses: 'Used for grounding systems, structural connectors, and architectural copper work.' },
        { sector: 'Manufacturing & Industrial', uses: 'Essential raw material for producing copper wire, strips, and machined copper components.' },
      ]}
      whyUs={[
        { title: 'Sustainable Practices', desc: 'Eco-friendly manufacturing ensures minimal waste and energy-efficient production.' },
        { title: 'Competitive Pricing', desc: 'Top-grade copper rods at competitive rates, preferred by wholesalers and manufacturers alike.' },
        { title: 'Reliable Delivery', desc: 'Strong supply chain network guarantees on-time delivery and consistent quality.' },
      ]}
      ctaText="Choose us for superior Copper Rods that are engineered for excellence. Reach out today to get a quote!"
    />
  );
}
