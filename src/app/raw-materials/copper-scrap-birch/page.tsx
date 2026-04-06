import type { Metadata } from 'next';
import RawMaterialLayout from '@/components/raw-materials/RawMaterialLayout';

export const metadata: Metadata = {
  title: 'Copper Scrap Birch — High-Grade Copper Scrap | Power Cable',
  description:
    'Power Cable purchases Copper Scrap Birch — high-grade copper scrap with 94-96% copper content. Eco-friendly, cost-effective sourcing. Contact us for a quote.',
  alternates: { canonical: 'https://www.powercable.co.in/raw-materials/copper-scrap-birch' },
};

export default function CopperScrapBirchPage() {
  return (
    <RawMaterialLayout
      name="Copper Scrap Birch"
      slug="copper-scrap-birch"
      tagline="High-grade copper scrap driving sustainable manufacturing."
      intro="Copper Scrap Birch consists of high-grade copper scrap materials, primarily made from unalloyed copper wire or tubing. This product plays a crucial role in the recycling industry, helping to create refined copper products while supporting sustainable practices."
      heroImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&auto=format&fit=crop&q=80"
      characteristics={[
        { icon: '🥇', title: 'High Copper Content', desc: 'Typically contains 94-96% copper, making it ideal for recycling and refining processes into premium products.' },
        { icon: '♻️', title: 'Eco-Friendly Material', desc: 'Promotes sustainability by repurposing copper scrap, reducing the need for virgin copper extraction.' },
        { icon: '🏭', title: 'Versatile Uses', desc: 'Suitable for manufacturing copper ingots, production of rods, wires, sheets, and electrical applications.' },
      ]}
      whyWePurchase={[
        { title: 'Sustainability Commitment', desc: 'We prioritize sourcing Copper Scrap Birch to support eco-friendly practices and reduce waste in production.' },
        { title: 'Cost-Effective Solutions', desc: 'Purchasing scrap copper allows us to produce high-quality products at lower costs, benefiting our customers.' },
      ]}
      benefits={[
        { title: 'Quality Assurance', desc: 'Our rigorous quality control processes ensure that the Copper Scrap Birch we source meets high standards for purity.' },
        { title: 'Environmental Impact', desc: 'By choosing recycled copper, customers contribute to sustainability efforts and reduce their carbon footprint.' },
        { title: 'Competitive Pricing', desc: 'Our bulk purchasing strategy enables us to offer competitive rates for refined copper products from Copper Scrap Birch.' },
      ]}
      qualityControl={[
        { title: 'Testing Protocols', desc: 'Each batch of Copper Scrap Birch undergoes comprehensive testing to ensure it meets industry standards.' },
        { title: 'Responsible Sourcing', desc: 'We collaborate with trusted suppliers who adhere to strict quality and sustainability standards.' },
      ]}
      ecoFriendly={[
        { title: 'Recycling Initiatives', desc: 'Our processes for recycling Copper Scrap Birch minimize waste and support a circular economy.' },
        { title: 'Sustainable Partnerships', desc: 'We work with suppliers committed to eco-friendly practices, ensuring responsible sourcing of materials.' },
      ]}
      ctaHeadline="Looking to Source High-Quality Copper Scrap Birch?"
      ctaDesc="Contact us today for a quote or more information about our purchasing options. Our team is ready to assist with tailored solutions and competitive pricing for your manufacturing needs."
    />
  );
}
