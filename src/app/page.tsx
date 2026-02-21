import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import HowItWorks from '@/components/home/HowItWorks';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Compass SC | NDIS Support Coordination Melbourne',
  description: 'Level 2 NDIS Support Coordination in Melbourne. We help self-managed and plan-managed participants understand their NDIS plans, connect with providers, and maximise their funding. Free service covered by your NDIS plan.',
};

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
