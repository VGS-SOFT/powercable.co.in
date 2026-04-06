import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="grid-bg min-h-screen flex items-center justify-center">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container-custom relative z-10 text-center py-20">
          <p className="font-display text-[8rem] lg:text-[12rem] font-bold leading-none text-copper-gradient opacity-20 select-none">
            404
          </p>
          <div className="-mt-8 relative z-10">
            <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
              Page Not Found
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Oops! This Page Doesn&apos;t Exist
            </h1>
            <p className="text-white/50 text-lg max-w-md mx-auto mb-10">
              The page you&apos;re looking for may have been moved, deleted, or never existed. Let&apos;s get you back on track.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-copper-500 hover:bg-copper-400 text-white font-semibold rounded-full transition-all duration-300 shadow-copper hover:-translate-y-0.5"
              >
                ← Back to Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-copper-600 text-copper-400 font-semibold rounded-full hover:bg-copper-500 hover:text-white hover:border-copper-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-copper-600 text-copper-400 font-semibold rounded-full hover:bg-copper-500 hover:text-white hover:border-copper-500 transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
