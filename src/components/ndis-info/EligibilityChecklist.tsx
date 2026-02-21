export default function EligibilityChecklist() {
  const criteria = [
    {
      title: 'Age Requirement',
      description: 'You must be under 65 years of age when you first apply for the scheme.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Residency',
      description: 'You must be an Australian citizen, permanent resident, or hold a Protected Special Category Visa.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Disability',
      description: 'You must have a permanent and significant disability that affects your ability to take part in everyday activities.',
      icon: (
        <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-[#FAFAF8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Am I Eligible?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            To access the NDIS, you generally need to meet the following three main criteria.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {criteria.map((criterion, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow"
            >
              <div className="size-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {criterion.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{criterion.title}</h3>
              <p className="text-slate-600">{criterion.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">Not sure? Our team can help assess your situation.</p>
        </div>
      </div>
    </section>
  );
}
