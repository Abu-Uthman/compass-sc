export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Fatima A.',
      role: 'Melbourne Resident',
      quote: "Compass SC made the NDIS easy for my family. They explained everything in a way we could understand and respected our home.",
    },
    {
      name: 'Ahmed M.',
      role: 'Parent & Carer',
      quote: "Finally, support workers who understand our culture. I don't have to explain why we do things certain ways, they just know.",
    },
    {
      name: 'Hassan Y.',
      role: 'NDIS Participant',
      quote: "Professional, kind, and always available to help. The team at Compass SC has been a blessing for my brother's care plan.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Trusted by the Community</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#FAFAF8] p-8 rounded-2xl relative"
            >
              <svg
                className="absolute top-6 right-6 text-4xl text-primary/20"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
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
