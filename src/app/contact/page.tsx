import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ContactForm from './ContactForm';
import { CONTACT } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us — Power Cable | Get a Quote',
  description:
    'Contact Power Cable for premium copper products. Get a quote for Copper Ingots, Strips, Wire, and Rods. Located in Palghar, Maharashtra. Call (+91) 99879 94910.',
  alternates: { canonical: 'https://www.powercable.co.in/contact' },
};

const contactDetails = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Our Address',
    value: CONTACT.address,
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone Number',
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email Address',
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Office Hours',
    value: CONTACT.hours,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative grid-bg pt-32 pb-16 overflow-hidden">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-copper-800/20 rounded-full blur-3xl pointer-events-none" />
          <div className="container-custom relative z-10">
            <nav className="flex items-center gap-2 text-sm text-white/40 mb-8">
              <Link href="/" className="hover:text-copper-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-copper-400">Contact Us</span>
            </nav>
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-copper-400 bg-copper-900/30 border border-copper-800 rounded-full">
                Get In Touch
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Contact <span className="text-copper-gradient">Us</span>
              </h1>
              <p className="text-white/60 text-lg">
                Have a question? Need assistance? We’re here to help! Whether you need product information or assistance with an order, feel free to reach out.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Grid */}
        <SectionWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left — Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Let’s <span className="text-copper-gradient">Talk</span>
                </h2>
                <div className="copper-divider mb-4" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Our team is ready to assist you with tailored copper solutions, competitive pricing, and reliable support. Reach out through any channel below.
                </p>
              </div>

              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex gap-4 card-dark rounded-xl p-4 hover:border-copper-700 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-copper-900/50 border border-copper-800 flex items-center justify-center text-copper-400 shrink-0">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="text-white text-sm hover:text-copper-400 transition-colors leading-relaxed">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm leading-relaxed">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* GSTIN */}
              <div className="card-dark rounded-xl p-4 border-copper-800">
                <p className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1">GSTIN / UIN</p>
                <p className="text-copper-400 font-mono font-semibold">{CONTACT.gstin}</p>
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <div className="card-dark rounded-2xl p-6 lg:p-8">
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Send a <span className="text-copper-gradient">Message</span>
                </h2>
                <div className="copper-divider mb-6" />
                <p className="text-white/50 text-sm mb-6">
                  Let us know how we can assist you and we’ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </SectionWrapper>

        {/* Map placeholder */}
        <SectionWrapper className="bg-dark-300/50" withGrid>
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-bold text-white">
              Find Us on <span className="text-copper-gradient">the Map</span>
            </h2>
          </div>
          <div className="card-dark rounded-2xl overflow-hidden h-64 flex items-center justify-center border-copper-800">
            <div className="text-center">
              <span className="text-4xl mb-3 block">📍</span>
              <p className="text-white font-semibold">Kudus, Palghar, Maharashtra</p>
              <p className="text-white/40 text-sm mt-1">{CONTACT.address}</p>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-5 py-2 bg-copper-500 hover:bg-copper-400 text-white text-sm font-semibold rounded-full transition-all duration-300 shadow-copper"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </>
  );
}
