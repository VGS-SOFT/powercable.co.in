import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import RawMaterialsSection from '@/components/home/RawMaterialsSection';
import WhyUsSection from '@/components/home/WhyUsSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import CtaBanner from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Power Cable — Premium Copper Products Dealer in Maharashtra',
  description:
    'Power Cable is a trusted dealer of premium copper products including Copper Ingots, Copper Strips, Copper Wire, and Copper Rods. 99.5%+ purity, competitive pricing, pan-India delivery. Based in Palghar, Maharashtra.',
  alternates: {
    canonical: 'https://www.powercable.co.in',
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductsSection />
        <RawMaterialsSection />
        <WhyUsSection />
        <ReviewsSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
