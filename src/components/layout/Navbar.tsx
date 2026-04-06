'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { PRODUCTS, RAW_MATERIALS } from '@/lib/constants';

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={cn('w-4 h-4 transition-transform duration-200', open && 'rotate-180')}
    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

/* Copper wordmark SVG logo — no image dependency */
const WordmarkLogo = () => (
  <svg
    viewBox="0 0 200 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Power Cable"
    className="h-8 w-auto"
  >
    {/* Copper bolt/wave accent mark */}
    <path
      d="M6 4 L14 4 L10 16 L17 16 L8 32 L12 20 L5 20 Z"
      fill="url(#copperGrad)"
    />
    {/* POWER text */}
    <text
      x="22"
      y="22"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="16"
      fontWeight="700"
      letterSpacing="2"
      fill="#e8c49a"
    >
      POWER
    </text>
    {/* CABLE text — slightly lighter */}
    <text
      x="22"
      y="33"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="10"
      fontWeight="400"
      letterSpacing="5"
      fill="#c8935a"
    >
      CABLE
    </text>
    <defs>
      <linearGradient id="copperGrad" x1="5" y1="4" x2="17" y2="32" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#e8c49a" />
        <stop offset="50%" stopColor="#c8753a" />
        <stop offset="100%" stopColor="#8b4513" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled]           = useState(false);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [productsOpen, setProductsOpen]   = useState(false);
  const [materialsOpen, setMaterialsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setMaterialsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-dark-400/95 backdrop-blur-md border-b border-copper-900/50 shadow-card'
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Wordmark Logo — no image file needed */}
          <Link href="/" className="group hover:opacity-90 transition-opacity">
            <WordmarkLogo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/'
                  ? 'text-copper-400 bg-copper-900/30'
                  : 'text-white/80 hover:text-copper-400 hover:bg-copper-900/20'
              )}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname.startsWith('/products')
                    ? 'text-copper-400 bg-copper-900/30'
                    : 'text-white/80 hover:text-copper-400 hover:bg-copper-900/20'
                )}
              >
                Products <ChevronIcon open={productsOpen} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-dark-100 border border-copper-900 rounded-xl shadow-card overflow-hidden">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block px-4 py-3 text-sm text-white/80 hover:text-copper-400 hover:bg-copper-900/30 transition-colors border-b border-copper-900/50 last:border-0"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Raw Materials Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMaterialsOpen(true)}
              onMouseLeave={() => setMaterialsOpen(false)}
            >
              <button
                className={cn(
                  'flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                  pathname.startsWith('/raw-materials')
                    ? 'text-copper-400 bg-copper-900/30'
                    : 'text-white/80 hover:text-copper-400 hover:bg-copper-900/20'
                )}
              >
                Raw Materials <ChevronIcon open={materialsOpen} />
              </button>
              {materialsOpen && (
                <div className="absolute top-full left-0 mt-1 w-52 bg-dark-100 border border-copper-900 rounded-xl shadow-card overflow-hidden">
                  {RAW_MATERIALS.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/raw-materials/${m.slug}`}
                      className="block px-4 py-3 text-sm text-white/80 hover:text-copper-400 hover:bg-copper-900/30 transition-colors border-b border-copper-900/50 last:border-0"
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/about'
                  ? 'text-copper-400 bg-copper-900/30'
                  : 'text-white/80 hover:text-copper-400 hover:bg-copper-900/20'
              )}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
                pathname === '/contact'
                  ? 'text-copper-400 bg-copper-900/30'
                  : 'text-white/80 hover:text-copper-400 hover:bg-copper-900/20'
              )}
            >
              Contact Us
            </Link>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Button href="/contact" size="sm" className="hidden lg:inline-flex">
              Get a Quote
            </Button>
            <button
              className="lg:hidden text-white/80 hover:text-copper-400 transition-colors p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-dark-100/98 backdrop-blur-md border-t border-copper-900/50">
          <div className="container-custom py-4 flex flex-col gap-1">
            <Link href="/" className="px-4 py-3 text-white/80 hover:text-copper-400 rounded-lg hover:bg-copper-900/20 transition-colors">
              Home
            </Link>

            {/* Mobile Products */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-copper-400 rounded-lg hover:bg-copper-900/20 transition-colors"
                onClick={() => setProductsOpen(!productsOpen)}
              >
                Products <ChevronIcon open={productsOpen} />
              </button>
              {productsOpen && (
                <div className="ml-4 border-l border-copper-900/50 pl-4">
                  {PRODUCTS.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="block py-2 text-sm text-white/60 hover:text-copper-400 transition-colors"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Raw Materials */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-white/80 hover:text-copper-400 rounded-lg hover:bg-copper-900/20 transition-colors"
                onClick={() => setMaterialsOpen(!materialsOpen)}
              >
                Raw Materials <ChevronIcon open={materialsOpen} />
              </button>
              {materialsOpen && (
                <div className="ml-4 border-l border-copper-900/50 pl-4">
                  {RAW_MATERIALS.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/raw-materials/${m.slug}`}
                      className="block py-2 text-sm text-white/60 hover:text-copper-400 transition-colors"
                    >
                      {m.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="px-4 py-3 text-white/80 hover:text-copper-400 rounded-lg hover:bg-copper-900/20 transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="px-4 py-3 text-white/80 hover:text-copper-400 rounded-lg hover:bg-copper-900/20 transition-colors">
              Contact Us
            </Link>
            <div className="pt-2 pb-1">
              <Button href="/contact" className="w-full justify-center">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
