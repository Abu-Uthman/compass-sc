import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] pt-16 pb-24 lg:pt-32 lg:pb-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary w-fit mx-auto lg:mx-0">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold uppercase tracking-wide">NDIS Registered Provider</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              NDIS Support Coordination That Speaks Your Language
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Culturally sensitive support for the Melbourne Muslim, Somali, and CALD communities. We help you navigate the NDIS with understanding, respect, and care.
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
            {/* Abstract blob background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-3xl -z-10"></div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl ring-1 ring-slate-900/5">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 p-2 rounded-full text-primary">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">Community Focused</p>
                      <p className="text-xs text-slate-500">Serving Melbourne's CALD community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
