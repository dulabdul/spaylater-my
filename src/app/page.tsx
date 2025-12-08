import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsapp from '@/components/layout/FloatingWhatsapp';
import Hero from '@/components/sections/Hero';
import AboutAndWhy from '@/components/sections/AboutAndWhy';
import Services from '@/components/sections/Services';
import Features from '@/components/sections/Features';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main className='min-h-screen flex flex-col font-sans'>
      <Navbar />

      <Hero />
      <AboutAndWhy />
      <Services />
      <Features />
      <Testimonials />
      <CTASection />

      <Footer />
      <FloatingWhatsapp />
    </main>
  );
}
