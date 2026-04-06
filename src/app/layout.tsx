import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import OrganizationJsonLd from '@/components/seo/OrganizationJsonLd';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.powercable.co.in'),
  title: {
    default: 'Power Cable \u2014 Premium Copper Products',
    template: '%s | Power Cable',
  },
  description:
    'Power Cable is a leading dealer and manufacturer of premium-grade copper products including Copper Ingots, Copper Strips, Copper Wire, and Copper Rods. Based in Palghar, Maharashtra.',
  keywords: [
    'copper products',
    'copper ingots',
    'copper strips',
    'copper wire',
    'copper rod',
    'copper scrap',
    'copper supplier India',
    'Power Cable Palghar',
    'copper manufacturer Maharashtra',
    'copper dealer India',
    'buy copper ingots',
    'copper scrap birch',
    'copper druid',
  ],
  authors: [{ name: 'Power Cable' }],
  creator: 'Power Cable',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.powercable.co.in',
    siteName: 'Power Cable',
    title: 'Power Cable \u2014 Premium Copper Products',
    description:
      'Leading dealer of premium copper products \u2014 Ingots, Strips, Wire, and Rods. Superior purity, competitive pricing, reliable delivery.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Power Cable \u2014 Premium Copper Products',
    description: 'Leading dealer of premium copper products in Maharashtra, India.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'add-your-google-search-console-token-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // data-scroll-behavior="smooth" tells Next.js 16 not to remove smooth scrolling
    // during route transitions — fixes the console warning.
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} data-scroll-behavior="smooth">
      <body className="bg-dark-400 text-white antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
