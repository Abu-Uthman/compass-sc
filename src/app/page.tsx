import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FeatureCards from '@/components/home/FeatureCards';
import HowItWorks from '@/components/home/HowItWorks';
import CTABanner from '@/components/CTABanner';

import { PROVIDER_LINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Compass SC | NDIS Support Coordination Melbourne',
  description: `Level 2 NDIS Support Coordination in Melbourne. ${PROVIDER_LINE} We help NDIA-managed, plan-managed and self-managed participants understand their NDIS plans, connect with providers, and maximise their funding. Free service covered by your NDIS plan.`,
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureCards />
      <HowItWorks />
      <CTABanner />
    </div>
  );
}
