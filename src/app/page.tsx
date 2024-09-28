import HeroSection from './_components/HeroSection';
import ContactSection from './_components/ContactSection';
import ServicesSection from './_components/ServicesSection';
import TestimonialsSection from './_components/TestimonialsSection';
import PortfolioSection from './_components/PortfolioSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
