export default function FounderSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Avatar */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl scale-95 group-hover:scale-105 transition-transform duration-500"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gray-100 mx-auto md:mx-0">
              <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <svg className="h-24 w-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Story */}
          <div className="flex flex-col text-center md:text-left">
            <div className="inline-flex items-center justify-center md:justify-start gap-2 mb-4">
              <span className="h-px w-8 bg-accent"></span>
              <span className="text-accent font-bold uppercase tracking-widest text-xs">Meet The Founder</span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Awale's Journey</h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                I started my career in enterprise IT and healthcare systems, where I learned what it means to navigate complex bureaucracy. When I encountered people struggling to get the NDIS support they were entitled to — confused by the jargon, overwhelmed by the process — I decided to do something about it.
              </p>
              <p>
                I founded <span className="font-bold text-primary">Compass SC</span> to simplify the NDIS for Melbourne participants so they can focus on living their lives, not paperwork.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
