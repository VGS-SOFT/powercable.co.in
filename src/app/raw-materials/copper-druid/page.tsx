import type { Metadata } from 'next';
import RawMaterialLayout from '@/components/raw-materials/RawMaterialLayout';

export const metadata: Metadata = {
  title: 'Copper Druid — High-Purity Refined Copper | Power Cable',
  description:
    'Power Cable purchases high-quality Copper Druid — refined copper with 99.9% purity. Ideal for electrical, construction, and manufacturing applications. Contact us today.',
  alternates: { canonical: 'https://www.powercable.co.in/raw-materials/copper-druid' },
};

export default function CopperDruidPage() {
  return (
    <RawMaterialLayout
      name="Copper Druid"
      slug="copper-druid"
      tagline="High-purity refined copper essential for industrial excellence."
      intro="Copper Druid refers to high-quality refined copper that is essential for various industrial applications. Its excellent conductivity and durability make it a preferred choice for manufacturers and industries worldwide."
      heroImage="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?w=1200&auto=format&fit=crop&q=80"
      characteristics={[
        { icon: '⚡', title: 'High Purity', desc: 'Contains a minimum of 99.9% copper content, ensuring optimal performance in electrical and industrial applications.' },
        { icon: '🔌', title: 'Excellent Conductivity', desc: 'Ideal for electrical applications due to superior conductivity, making it essential for wiring, busbars, and connectors.' },
        { icon: '🛡️', title: 'Corrosion Resistance', desc: 'Naturally resistant to corrosion, which increases longevity and reduces maintenance costs across applications.' },
      ]}
      whyWePurchase={[
        { title: 'Quality Assurance', desc: 'We partner with reputable suppliers to ensure we source only the highest quality Copper Druid available.' },
        { title: 'Efficiency in Production', desc: 'Direct access to premium Copper Druid allows for streamlined manufacturing, reducing lead times and costs.' },
      ]}
      benefits={[
        { title: 'Reliable Supply', desc: 'Our bulk purchasing ensures a consistent supply of Copper Druid, meeting our clients\' ongoing needs.' },
        { title: 'Cost Savings', desc: 'By purchasing in bulk, we offer competitive pricing on Copper Druid products, providing savings for customers.' },
        { title: 'Versatile Applications', desc: 'Suitable for Electrical & Electronics, Construction & Architecture, and Manufacturing & Industrial sectors.' },
      ]}
      qualityControl={[
        { title: 'Rigorous Testing', desc: 'Each batch of Copper Druid undergoes thorough testing for purity and performance to meet international quality standards.' },
        { title: 'Sourcing Practices', desc: 'We ensure that our sourcing partners adhere to stringent quality assurance protocols at every step.' },
      ]}
      ecoFriendly={[
        { title: 'Sustainable Sourcing', desc: 'Our commitment to sustainability means we prioritize sourcing Copper Druid from environmentally responsible suppliers.' },
        { title: 'Recycling Initiatives', desc: 'We actively participate in recycling programs that help minimize waste and support a circular economy.' },
      ]}
      ctaHeadline="Ready to Source High-Quality Copper Druid?"
      ctaDesc="Get in touch with us to request a quote or for more information about our purchasing options. Our team is ready to assist you with tailored solutions and competitive pricing."
    />
  );
}
