import HeroSection from '@/components/home/HeroSection';
import ServiceCard from '@/components/services/ServiceCard';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

const services = [
  {
    title: 'Support Coordination',
    description:
      'Helping you navigate your NDIS plan — connecting to providers, managing your plan budget, and advocating for your needs. Funded under your NDIS Support Coordination budget.',
    features: [
      'Implement your NDIS plan',
      'Connect with reliable service providers',
      'Manage your plan budget effectively',
      'Coordinate multiple supports',
      'Regular plan reviews',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
      </svg>
    ),
  },
  {
    title: 'Specialist Support Coordination',
    description:
      'For participants with complex needs or in crisis. Higher-intensity, more hands-on coordination. Funded under Specialist Support Coordination budget.',
    features: [
      'High-intensity support coordination',
      'Crisis support and intervention',
      'Complex case management',
      'Advocacy and representation',
      'Collaboration with multiple stakeholders',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Plan Management (Referral)',
    description:
      'We don\'t provide plan management directly, but we\'ll connect you with trusted plan management partners who work with our community.',
    features: [
      'Connect you with trusted partners',
      'Ensure your funding is handled with care',
      'Efficient and transparent management',
      'GST-compliant invoicing',
      'Budget monitoring and advice',
    ],
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FAFAF8] px-6 py-20">
        <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-xs font-bold uppercase tracking-wide text-primary">
              Comprehensive Care
            </span>
          </div>
          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="max-w-2xl text-lg text-slate-600 sm:text-xl sm:leading-relaxed">
            Culturally sensitive support coordination tailored to your unique journey and community needs.
            We understand the nuances of the NDIS and your community.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Together */}
      <section className="bg-[#FAFAF8]/50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-black text-slate-900 sm:text-4xl">
              How We Work Together
            </h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Our approach is built on three core pillars designed to support your journey with respect and clarity.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: 'Cultural Understanding',
                description:
                  'We respect and understand your cultural background to provide truly personalized care that honors your values.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: 'Empowerment',
                description:
                  'We give you the tools, confidence, and knowledge to take control of your NDIS plan and your future.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'Transparent Communication',
                description:
                  'Clear, honest, and open communication every step of the way. No jargon, just straight talk.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  {item.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
