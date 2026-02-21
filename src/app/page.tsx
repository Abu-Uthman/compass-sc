import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import HowItWorks from '@/components/home/HowItWorks';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
}
