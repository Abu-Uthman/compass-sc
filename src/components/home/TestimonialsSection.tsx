export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Melbourne',
      quote: "Compass SC helped us understand every part of my daughter's NDIS plan. We finally know what she's entitled to and how to use it.",
    },
    {
      name: 'David K.',
      role: 'Melbourne',
      quote: "Navigating the NDIS alone was overwhelming. Compass SC broke it down into simple steps and connected me with the right providers quickly.",
    },
    {
      name: 'Jenny R.',
      role: 'Melbourne',
      quote: "They prepared us thoroughly for our plan review. We came out with more funding and a clear support structure. Highly recommend.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Trusted by the Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FAFAF8] p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-slate-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
