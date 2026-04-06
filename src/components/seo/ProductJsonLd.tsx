import { SITE_URL } from '@/lib/constants';

type ProductJsonLdProps = {
  name: string;
  description: string;
  image: string;
  slug: string;
};

export default function ProductJsonLd({ name, description, image, slug }: ProductJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    image,
    url: `${SITE_URL}/products/${slug}`,
    brand: {
      '@type': 'Brand',
      name: 'Power Cable',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Power Cable',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: {
        '@type': 'Organization',
        name: 'Power Cable',
      },
      areaServed: 'IN',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Purity',
        value: '99.5%+',
      },
      {
        '@type': 'PropertyValue',
        name: 'Origin',
        value: 'Palghar, Maharashtra, India',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
