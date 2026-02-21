import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfoCard from '@/components/contact/ContactInfoCard';

export const metadata: Metadata = {
  title: 'Contact Us | Compass SC - NDIS Support Coordination Melbourne',
  description: 'Contact Compass SC for professional NDIS support coordination in Melbourne. Call 0432 405 388 or email info@compasssc.com.au. Free consultation available.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
            NDIS support coordination for all Melbourne participants. We are here to help you navigate your journey with confidence.
          </p>
          <div className="w-24 h-1.5 bg-accent mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          {/* Right Column: Info Cards */}
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>
        </div>
      </section>
    </div>
  );
}
