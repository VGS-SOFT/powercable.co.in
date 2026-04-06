import type { Metadata } from 'next';
import RawMaterialLayout from '@/components/raw-materials/RawMaterialLayout';

export const metadata: Metadata = {
  title: 'All Copper Scrap — 100% Recyclable Raw Material | Power Cable',
  description:
    'Power Cable purchases All Copper Scrap — 100% recyclable raw material for sustainable copper manufacturing. Reliable supply, competitive pricing. Get a quote today.',
  alternates: { canonical: 'https://www.powercable.co.in/raw-materials/all-copper-scrap' },
};

export default function AllCopperScrapPage() {
  return (
    <RawMaterialLayout
      name="All Copper Scrap"
      slug="all-copper-scrap"
      tagline="100% recyclable — sustainable copper for a circular economy."
      intro="All Copper Scrap refers to a valuable and recyclable raw material used across various industries. With its excellent conductivity, durability, and versatility, recycled copper plays a crucial role in manufacturing and industrial applications worldwide."
      heroImage="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&auto=format&fit=crop&q=80"
      characteristics={[
        { icon: '♻️', title: 'High Recyclability', desc: 'All Copper Scrap is 100% recyclable, making it an eco-friendly and cost-effective raw material for various industries.' },
        { icon: '⚡', title: 'Excellent Conductivity', desc: 'Retains superior electrical conductivity, making it ideal for reuse in electrical wiring, busbars, and industrial applications.' },
        { icon: '🛡️', title: 'Durability & Corrosion Resistance', desc: 'Naturally resistant to corrosion, ensuring long-lasting performance in manufacturing and construction environments.' },
      ]}
      whyWePurchase={[
        { title: 'Commitment to Sustainability', desc: 'By acquiring and recycling All Copper Scrap, we reduce waste and actively support a circular economy.' },
        { title: 'Cost-Effective Processing', desc: 'Recycling copper scrap allows us to maintain quality while significantly lowering production costs.' },
      ]}
      benefits={[
        { title: 'Reliable Supply', desc: 'We ensure a steady and consistent supply of recycled copper for various industrial needs at all times.' },
        { title: 'Cost Savings', desc: 'Recycling All Copper Scrap reduces raw material costs, offering highly competitive pricing to our customers.' },
        { title: 'Versatile Applications', desc: 'Reprocessed copper scrap is widely used in Electrical & Electronics, Construction & Infrastructure, and Manufacturing.' },
      ]}
      qualityControl={[
        { title: 'Rigorous Sorting & Processing', desc: 'We employ advanced sorting and refining techniques to ensure optimal copper purity and quality in every batch.' },
        { title: 'Sustainable Sourcing', desc: 'We collaborate with responsible suppliers and recycling facilities that adhere to industry standards.' },
      ]}
      ecoFriendly={[
        { title: 'Sustainable Recycling Initiatives', desc: 'We actively participate in recycling programs that reduce environmental impact and promote resource efficiency.' },
        { title: 'Waste Reduction', desc: 'Recycling All Copper Scrap minimizes landfill waste and conserves natural resources for future generations.' },
      ]}
      ctaHeadline="Ready to Source All Copper Scrap?"
      ctaDesc="Let us know how we can assist you. Our team is ready to provide tailored solutions, competitive pricing, and reliable customer support for all your copper scrap sourcing needs."
    />
  );
}
