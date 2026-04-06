import Link from 'next/link';
import { CONTACT, PRODUCTS, RAW_MATERIALS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-dark-200 border-t border-copper-900/50">
      {/* Main footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-copper-gradient flex items-center justify-center shadow-copper">
                <span className="text-white font-bold text-sm">PC</span>
              </div>
              <span className="font-display font-bold text-white text-lg">
                POWER CABLE
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Leading dealer of premium copper products. Superior purity, competitive pricing, reliable delivery.
            </p>
            <p className="text-copper-600 text-xs font-mono">
              GSTIN: {CONTACT.gstin}
            </p>
          </div>

          {/* Products column */}
          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Products
            </h3>
            <ul className="space-y-2">
              {PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-white/50 text-sm hover:text-copper-400 transition-colors"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-display text-white font-semibold mt-6 mb-4 text-sm uppercase tracking-widest">
              Raw Materials
            </h3>
            <ul className="space-y-2">
              {RAW_MATERIALS.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/raw-materials/${m.slug}`}
                    className="text-white/50 text-sm hover:text-copper-400 transition-colors"
                  >
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location column */}
          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Location
            </h3>
            <div className="flex gap-3">
              <div className="mt-0.5 shrink-0">
                <svg className="w-4 h-4 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">{CONTACT.address}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <div className="mt-0.5 shrink-0">
                <svg className="w-4 h-4 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white/50 text-sm">{CONTACT.hours}</p>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-copper-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${CONTACT.phone}`} className="text-white/50 text-sm hover:text-copper-400 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-copper-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="text-white/50 text-sm hover:text-copper-400 transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-copper-500 hover:bg-copper-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-copper hover:shadow-copper-lg hover:-translate-y-0.5"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-copper-900/30">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            All Copyright Reserved | 2024 Power Cable
          </p>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white/30 text-xs hover:text-copper-500 transition-colors">Home</Link>
            <Link href="/about" className="text-white/30 text-xs hover:text-copper-500 transition-colors">About</Link>
            <Link href="/contact" className="text-white/30 text-xs hover:text-copper-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
