export default function HowToStart() {
  const steps = [
    {
      number: 1,
      title: 'Initial Contact',
      description: 'Reach out to us via phone or our website to express interest.',
    },
    {
      number: 2,
      title: 'Free Consultation',
      description: 'We discuss your needs, eligibility, and answer your questions.',
    },
    {
      number: 3,
      title: 'Plan Assessment',
      description: 'We review your current NDIS plan (if any) or help you start the access request.',
    },
    {
      number: 4,
      title: 'Develop Your Plan',
      description: 'Together, we identify your goals and the supports you need.',
    },
    {
      number: 5,
      title: 'Start Support',
      description: 'We help you implement your plan and connect with providers.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">How to Get Started</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Your journey to better support is simple. We guide you every step of the way.
          </p>
        </div>
        {/* Desktop Timeline */}
        <div className="hidden lg:flex justify-between items-start relative">
          <div className="absolute top-8 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center w-64 text-center">
              <div className="size-16 rounded-full bg-accent border-4 border-white flex items-center justify-center text-white font-black text-xl shadow-lg mb-6">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
        {/* Mobile Timeline */}
        <div className="flex lg:hidden flex-col gap-8 relative pl-6 border-l-2 border-slate-200 ml-4">
          {steps.map((step) => (
            <div key={step.number} className="relative pl-8">
              <div className="absolute -left-[2.1rem] top-0 size-10 rounded-full bg-accent flex items-center justify-center text-white font-bold border-4 border-white">
                {step.number}
              </div>
              <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}