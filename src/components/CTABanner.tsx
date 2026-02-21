import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">
          Ready to navigate your NDIS journey together?
        </h2>
        <p className="text-[#fafbfc] text-lg mb-8 max-w-2xl mx-auto">
          Whether you're new to the NDIS or looking for better support coordination, we're here to help. Self-managed and plan-managed participants welcome.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#D4A017] px-8 py-4 text-base font-bold text-white hover:bg-[#b88a14] transition-all shadow-lg hover:shadow-xl min-h-11"
          >
            <span className="mr-2">Contact Us Today</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5l6 6m0 0l-6 6m6-6H5" />
            </svg>
          </Link>
          <a
            href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
            className="inline-flex items-center justify-center rounded-lg border-2 border-[#fafbfc] bg-transparent px-8 py-4 text-base font-bold text-[#fafbfc] hover:bg-[#fafbfc]/10 transition-all min-h-11"
          >
            {SITE_CONFIG.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
