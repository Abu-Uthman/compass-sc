import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wide">NDIS Support Coordinator</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              NDIS Support Coordination for Melbourne Participants
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Personalised, reliable support coordination to help you get the most from your NDIS plan.
            </p>
            <p className="text-base text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Compass SC provides Level 2 NDIS Support Coordination for self-managed and plan-managed participants across Melbourne. Our service is funded through your NDIS plan — there is no out-of-pocket cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-bold text-white hover:bg-primaryDark transition-all shadow-md"
              >
                <span>Get Started</span>
                <svg className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/ndis-info"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-8 py-4 text-base font-bold text-primary hover:bg-[#FAFAF8]/50 transition-all"
              >
                Learn About NDIS
              </Link>
            </div>
          </div>
          <div className="relative lg:h-full flex items-center justify-center">
            {/* Teal card with compass and text */}
            <div className="bg-[#0D7A5F] rounded-2xl p-8 shadow-xl w-full max-w-md">
              <div className="flex flex-col items-center text-center">
                {/* Compass Rose SVG */}
                <svg className="h-20 w-20 text-white mb-6" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
                  {/* North arrow */}
                  <path d="M50 10 L55 50 L50 45 L45 50 Z" fill="currentColor"/>
                  {/* East arrow */}
                  <path d="M90 50 L50 55 L45 50 L50 45 Z" fill="currentColor" opacity="0.7"/>
                  {/* South arrow */}
                  <path d="M50 90 L45 50 L50 55 L55 50 Z" fill="currentColor" opacity="0.5"/>
                  {/* West arrow */}
                  <path d="M10 50 L50 45 L55 50 L50 55 Z" fill="currentColor" opacity="0.7"/>
                  <circle cx="50" cy="50" r="8" fill="currentColor"/>
                </svg>
                <h3 className="text-2xl font-bold text-white mb-3">Your NDIS Journey, Simplified</h3>
                <p className="text-white/80 mb-6">Trusted support coordination for all Melbourne participants</p>
                <span className="bg-[#E8F5F1] text-[#0D7A5F] px-4 py-2 rounded-full text-sm font-semibold">
                  Level 2 Support Coordination
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
