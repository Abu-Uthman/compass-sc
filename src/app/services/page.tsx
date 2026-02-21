import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function ServicesPage() {
  const services = [
    {
      title: 'Support Coordination',
      description:
        'We help you understand your NDIS plan, connect with providers, and build your support network.',
      features: [
        'Implement your NDIS plan',
        'Connect with reliable service providers',
        'Build your support network',
        'Coordinate multiple services',
        'Regular plan reviews',
      ],
      price: 'Starting from $75/hour',
    },
    {
      title: 'Specialist Support Coordination',
      description:
        'For participants with complex needs who require intensive support coordination.',
      features: [
        'High-intensity support coordination',
        'Crisis support and intervention',
        'Complex case management',
        'Advocacy and representation',
        'Collaboration with multiple stakeholders',
      ],
      price: 'Custom quote available',
    },
    {
      title: 'Plan Management',
      description:
        'We manage your NDIS funding, process claims, and ensure your budget is used effectively.',
      features: [
        'Manage your NDIS budget',
        'Process claims with service providers',
        'Financial reporting and tracking',
        'Budget monitoring and advice',
        'GST-compliant invoicing',
      ],
      price: '5% of plan management budget',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D7A5F] to-[#1a9d7d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100">
            Comprehensive NDIS support coordination services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition"
              >
                <div className="bg-[#0D7A5F] text-white p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-[#D4A017] font-semibold">{service.price}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h4 className="font-semibold text-[#0D7A5F] mb-3">
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-[#D4A017] mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6">
                  <Link
                    href="/contact"
                    className="w-full block text-center bg-[#0D7A5F] text-white py-3 px-6 rounded-lg hover:bg-[#0c6650] transition font-semibold"
                  >
                    Contact Us for More Info
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-8 text-center">
            Am I Eligible?
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 mb-6">
              To be eligible for NDIS Support Coordination, you must:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-[#0D7A5F] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  1
                </span>
                <span className="text-gray-700">
                  Have a permanent and significant disability that affects your
                  ability to function daily
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-[#0D7A5F] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  2
                </span>
                <span className="text-gray-700">
                  Be under 65 years old when first accessing the NDIS
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-[#0D7A5F] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  3
                </span>
                <span className="text-gray-700">
                  Be an Australian citizen, permanent resident, or special
                  category visa holder
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-[#0D7A5F] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                  4
                </span>
                <span className="text-gray-700">
                  Require support coordination to help implement your NDIS plan
                </span>
              </li>
            </ul>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Not sure if you're eligible?</p>
              <Link
                href="/contact"
                className="inline-block bg-[#0D7A5F] text-white py-3 px-8 rounded-lg hover:bg-[#0c6650] transition font-semibold"
              >
                Contact Us for a Free Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
