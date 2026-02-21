export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Free Consultation',
      description: 'We meet to understand your needs and explain how we can help, obligation-free.',
    },
    {
      number: 2,
      title: 'Personalised Planning',
      description: 'Together, we build a support plan that respects your culture and maximises your budget.',
    },
    {
      number: 3,
      title: 'Ongoing Support',
      description: 'We stay by your side, coordinating services and advocating for you as your needs evolve.',
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Journey With Us</h2>
            <p className="text-slate-600 mb-8">
              We've simplified the process to get you the support you need quickly. Here is how we work together to build your independence.
            </p>
            <a
              href="/contact"
              className="text-primary font-bold flex items-center hover:underline"
            >
              Start the process today
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <div className="w-full md:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 relative">
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left group">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {steps[0].number}
                </div>
                {/* Mobile vertical connector */}
                <div className="md:hidden absolute left-1/2 -bottom-6 transform -translate-x-1/2 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{steps[0].title}</h4>
                <p className="text-sm text-slate-600">{steps[0].description}</p>
              </div>
              
              {/* Connector 1→2 */}
              <div className="hidden md:flex absolute top-8 left-[16%] items-center -translate-x-1/2">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left group mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {steps[1].number}
                </div>
                {/* Mobile vertical connector */}
                <div className="md:hidden absolute left-1/2 -bottom-6 transform -translate-x-1/2 text-primary">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{steps[1].title}</h4>
                <p className="text-sm text-slate-600">{steps[1].description}</p>
              </div>
              
              {/* Connector 2→3 */}
              <div className="hidden md:flex absolute top-8 left-[50%] items-center -translate-x-1/2">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left group mt-8 md:mt-0">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-xl shadow-sm mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {steps[2].number}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{steps[2].title}</h4>
                <p className="text-sm text-slate-600">{steps[2].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
