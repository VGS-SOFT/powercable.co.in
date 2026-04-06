import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main
        className="grid-bg min-h-screen flex items-center justify-center"
        style={{ paddingTop: '80px' }}
      >
        <div className="text-center">
          <h1 className="font-display text-5xl font-bold text-copper-gradient mb-4">
            Phase 2 Complete
          </h1>
          <p className="text-white/60 text-xl">Navbar &amp; Footer are ready 🚀</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
