import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function NdisInfoPage() {
  const faqs = [
    {
      question: 'What is an NDIS Support Coordinator?',
      answer:
        'A Support Coordinator helps you understand your NDIS plan, connect with service providers, and build your support network. They assist you to implement your plan and achieve your goals.',
    },
    {
      question: 'How do I know if I need a Support Coordinator?',
      answer:
        'You may benefit from a Support Coordinator if you find it challenging to understand your NDIS plan, find and manage service providers, or coordinate multiple supports.',
    },
    {
      question: 'What is the cost of Support Coordination?',
      answer:
        'Support Coordination is funded through your NDIS plan under the "Core" support category. There is no out-of-pocket cost if it is included in your plan. We can help you request this funding.',
    },
    {
      question: 'How long does it take to get Support Coordination approved?',
      answer:
        'The approval process varies. We can help you request Support Coordination in your NDIS plan and work with the NDIA to get it approved based on your needs.',
    },
    {
      question: 'Can I change Support Coordinators if I\'m not satisfied?',
      answer:
        'Yes, you have the right to change Support Coordinators at any time. If you\'re not satisfied with the service, you can contact us to discuss your concerns.',
    },
    {
      question: 'What happens during a plan review?',
      answer:
        'During a plan review, we help you assess your progress, identify any changes in your needs, and prepare for your NDIA plan review meeting to ensure your plan continues to meet your goals.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D7A5F] to-[#1a9d7d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            NDIS Information
          </h1>
          <p className="text-xl md:text-2xl text-green-100">
            Everything you need to know about the NDIS and Support Coordination
          </p>
        </div>
      </section>

      {/* What is NDIS */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-8">
            What is the NDIS?
          </h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              The <strong>National Disability Insurance Scheme (NDIS)</strong> is a
              government program in Australia that provides support for people
              with permanent and significant disability. It gives participants
              choice and control over how their disability support funding is
              used.
            </p>
            <p className="mb-6">
              The NDIS aims to help people with disability achieve their goals,
              including participation in community, employment, and independent
              living. It provides funding for reasonable and necessary supports
              that are related to your disability.
            </p>
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-4">
                Key Principles of the NDIS
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-[#D4A017] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Early intervention approach</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-[#D4A017] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Person-centered planning</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-[#D4A017] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Funding for reasonable and necessary supports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-[#D4A017] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Choice and control for participants</span>
                </li>
                <li className="flex items-start">
                  <span className="w-5 h-5 rounded-full bg-[#D4A017] text-white flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>Long-term support and investment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-8">
            Am I Eligible for the NDIS?
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">
                Age Requirements
              </h3>
              <p className="text-gray-600">
                You must be under 65 years old when you first apply to join the
                NDIS. There is no age limit for existing participants.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">
                Disability Requirements
              </h3>
              <p className="text-gray-600">
                You must have a permanent and significant disability that
                affects your ability to function daily. This includes
                intellectual, cognitive, neurological, sensory, or physical
                impairments.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">
                Residency Requirements
              </h3>
              <p className="text-gray-600">
                You must be an Australian citizen, permanent resident, or hold a
                special category visa. Some temporary visa holders may also be
                eligible under specific circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Support Coordinator */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-8">
            What Does a Support Coordinator Do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0D7A5F] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Implementation Support</h3>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Understand your NDIS plan and goals</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Connect with service providers</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Coordinate multiple supports</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Build your support network</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#0D7A5F] rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Coordination Support</h3>
              <ul className="space-y-2 text-green-100">
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Manage service provider contracts</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Monitor support quality</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Resolve support issues</span>
                </li>
                <li className="flex items-start">
                  <span className="w-4 h-4 rounded-full border-2 border-[#D4A017] text-[#D4A017] flex items-center justify-center mr-2 text-xs mt-1">•</span>
                  <span>Plan reviews and adjustments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <summary className="cursor-pointer font-semibold text-[#0D7A5F] text-xl mb-2">
                  {faq.question}
                </summary>
                <p className="text-gray-600 mt-4">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
