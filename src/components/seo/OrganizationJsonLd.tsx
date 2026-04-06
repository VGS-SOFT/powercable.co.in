import { CONTACT, SITE_NAME, SITE_URL } from '@/lib/constants';

export default function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Power Cable is a leading dealer and manufacturer of premium-grade copper products including Copper Ingots, Copper Strips, Copper Wire, and Copper Rods. Based in Palghar, Maharashtra, India.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ground Floor, 1183/2, Nirmal Yash Apartment, Wada \u2013 Bhiwandi Road',
      addressLocality: 'Kudus, Palghar',
      addressRegion: 'Maharashtra',
      postalCode: '421312',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT.phone,
      contactType: 'sales',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '18:00',
      },
    },
    email: CONTACT.email,
    taxID: CONTACT.gstin,
    areaServed: 'India',
    knowsAbout: [
      'Copper Ingots',
      'Copper Strips',
      'Copper Wire',
      'Copper Rod',
      'Copper Scrap',
      'Copper Druid',
      'Copper Scrap Birch',
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
