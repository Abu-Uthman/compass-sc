export default function FeatureCards() {
  const features = [
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      ),
      title: 'We Know the NDIS',
      description: 'Navigating the NDIS is complex. We simplify it so you can focus on your goals.',
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'We Understand Your Needs',
      description: 'Every participant is different. We take time to understand your situation and what matters to you.',
    },
    {
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
        </svg>
      ),
      title: 'We Navigate the NDIS',
      description: 'Expert coordination to help you get the most out of your NDIS plan. We handle the paperwork and advocacy so you can focus on achieving your goals.',
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Compass SC?</h2>
          <p className="text-slate-600 text-lg">
            We bridge the gap between complex NDIS systems and your personal needs with a deeply human approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#FAFAF8] p-8 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow group"
            >
              <div className="w-14 h-14 bg-[#E8F5F1] rounded-full flex items-center justify-center text-[#0D7A5F] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
