import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FounderSection from '@/components/about/FounderSection';
import ValuesGrid from '@/components/about/ValuesGrid';
import CTABanner from '@/components/CTABanner';

const mission = {
  title: 'Our Mission',
  text:
    'To ensure no one in Melbourne misses out on NDIS support because of complex systems or lack of understanding.',
};

export const metadata: Metadata = {
  title: 'About Us | Compass SC - NDIS Support Coordination Melbourne',
  description: 'Learn about Compass SC\'s mission to help Melbourne NDIS participants navigate their NDIS plans with professional Level 2 support coordination.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full max-w-[960px] px-4 pt-16 pb-12 md:pt-24 md:pb-16 text-center mx-auto">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Our Story</h1>
        <p className="text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
          Bridging the gap for all Melbourne NDIS participants, ensuring access to quality support coordination for everyone.
        </p>
      </section>

      <FounderSection />

      {/* Mission Banner */}
      <section className="w-full bg-primary py-20 px-4 relative overflow-hidden">
        <div className="max-w-[960px] mx-auto text-center relative z-10">
          <svg className="text-white/40 text-6xl mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.6729 16 22.017 14.6559 22.017 13V6C22.017 4.34406 20.6729 3 19.017 3H15.017C13.3611 3 12.017 4.34406 12.017 6V8M12.017 21L12.017 15M6.0166 21L6.0166 18C6.0166 16.8954 6.91203 16 8.0166 16H11.0166C12.6725 16 14.0166 14.6559 14.0166 13V6C14.0166 4.34406 12.6725 3 11.0166 3H7.0166C5.36072 3 4.0166 4.34406 4.0166 6V13C4.0166 14.6559 5.36072 16 7.0166 16H7.5166" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight md:leading-snug">
            "{mission.text}"
          </h2>
          <div className="mt-8 w-16 h-1 bg-accent mx-auto rounded-full"></div>
        </div>
      </section>

      <ValuesGrid />

      {/* CTA Section */}
      <section className="w-full py-20 px-4 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-14 gap-8">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-slate-900">Ready to work together?</h2>
              <p className="text-slate-600 text-lg">Let's build a support plan that truly understands you.</p>
            </div>
            <a
              href="/contact"
              className="flex-shrink-0 min-w-[160px] h-12 px-8 bg-accent hover:bg-accentHover text-white text-base font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Contact Us</span>
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
