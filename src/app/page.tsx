import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function Home() {
  const features = [
    {
      title: 'Culturally Sensitive Support',
      description:
        'As a Muslim/Somali support coordinator, I understand your values, traditions, and cultural needs.',
      icon: (
        <svg className="w-12 h-12 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Bilingual Support',
      description:
        'Fluently speak English, Somali, and Arabic. Communication is clear and culturally appropriate.',
      icon: (
        <svg className="w-12 h-12 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
    },
    {
      title: 'Personalized Navigation',
      description:
        'Your NDIS journey is unique. I help you find the right supports and navigate the system with confidence.',
      icon: (
        <svg className="w-12 h-12 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
        </svg>
      ),
    },
  ];

  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description:
        'Let us discuss your NDIS goals and current situation. We listen first to understand your needs.',
    },
    {
      number: 2,
      title: 'Plan Development',
      description:
        'We help you develop a comprehensive NDIS plan that reflects your goals and aspirations.',
    },
    {
      number: 3,
      title: 'Ongoing Support',
      description:
        'We provide continuous support to help you implement your plan and make adjustments as needed.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0D7A5F] to-[#1a9d7d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            NDIS Support Coordination That Speaks Your Language
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-green-100">
            Culturally sensitive support for Muslim and Somali communities in Melbourne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-[#D4A017] text-white font-semibold rounded-lg hover:bg-[#b38814] transition"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-white text-[#0D7A5F] font-semibold rounded-lg hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-4">
              Why Choose Compass SC?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with cultural understanding to help you navigate the NDIS
              system with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Three simple steps to get the support you need and deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                <div className="absolute -left-4 top-0 w-8 h-8 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D7A5F]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Take the Next Step?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Call us today to schedule a free consultation. We're here to help you navigate the NDIS
            system and get the support you need.
          </p>
          <a
            href="tel:0432405388"
            className="inline-block px-8 py-3 bg-[#D4A017] text-white font-semibold rounded-lg hover:bg-[#b38814] transition text-xl"
          >
            0432 405 388
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
