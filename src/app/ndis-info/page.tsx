import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import FAQAccordion from '@/components/ndis-info/FAQAccordion';
import EligibilityChecklist from '@/components/ndis-info/EligibilityChecklist';
import HowToStart from '@/components/ndis-info/HowToStart';
import CTABanner from '@/components/CTABanner';

const ndisInfo = [
  {
    title: 'What is the NDIS?',
    description:
      'The National Disability Insurance Scheme (NDIS) is a way for the Australian government to support people with a permanent and significant disability. It is designed to give you more choice and control over the support you receive in your daily life.',
    points: [
      'Provides funding directly to you (or your nominee)',
      'Allows you to choose the providers and services that best meet your needs',
      'Focuses on helping you achieve your goals — employment, skills, independence',
    ],
  },
  {
    title: 'What does a Support Coordinator do?',
    description:
      'We act as your partner in the NDIS journey. Our job is to help you implement your plan and connect you with the right services.',
    points: [
      'Finding trusted service providers',
      'Managing your budget and ensuring it lasts',
      'Advocating for your needs during plan reviews and meetings',
      'Providing immediate assistance if your circumstances change',
    ],
  },
];

const resources = [
  { title: 'NDIS official website', url: 'https://www.ndis.gov.au' },
  { title: 'NDIS myplace portal', url: 'https://my.ndis.gov.au' },
  { title: 'NDIS Access Checklist', url: 'https://www.ndis.gov.au/applying-access-ndis/am-i-eligible' },
  { title: 'Find a support coordinator', url: 'https://www.ndis.gov.au/participants/working-providers/find-registered-provider' },
  { title: 'Disability Gateway', url: 'https://www.disabilitygateway.gov.au' },
];

export const metadata: Metadata = {
  title: 'NDIS Information Guide | Compass SC Melbourne',
  description: 'Learn about the NDIS, eligibility requirements, and how support coordination can help you maximise your NDIS plan funding in Melbourne.',
};

export default function NDISInfoPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="relative w-full bg-[#fafbfc] px-6 py-16 lg:py-24 overflow-hidden">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              NDIS Education
            </div>
            <h1 className="text-slate-900 text-4xl lg:text-6xl font-black leading-tight tracking-tight">
              Understanding the <span className="text-primary">NDIS</span>
            </h1>
            <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-xl">
              We are dedicated to making the National Disability Insurance Scheme simple and accessible for all participants across Melbourne.
            </p>
          </div>
        </div>
      </section>

      {/* What is NDIS Section */}
      <section className="w-full bg-white px-6 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl border-2 border-primary/20 shadow-xl shadow-primary/5 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8"></div>
            {ndisInfo.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {section.title}
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-6">{section.description}</p>
                {section.points && (
                  <ul className="space-y-3">
                    {section.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EligibilityChecklist />

      <HowToStart />

      <FAQAccordion />

      {/* Useful Resources */}
      <section className="w-full bg-[#FAFAF8] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Useful Resources</h2>
            <p className="text-slate-600">
              Helpful links to learn more about the NDIS and find additional support.
            </p>
          </div>
          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-6 bg-white rounded-xl border border-slate-200 hover:border-primary transition-colors group"
              >
                <span className="text-slate-700 font-medium group-hover:text-primary transition-colors">
                  {resource.title}
                </span>
                <svg className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FAQAccordion />

      <CTABanner />
    </div>
  );
}
