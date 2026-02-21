'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Is the service free for me?',
    answer:
      'Yes. Support Coordination is funded through your NDIS plan. You don\'t pay us directly.',
  },
  {
    question: 'Are you NDIS registered?',
    answer: 'No. We are an unregistered provider. This means we can support self-managed and plan-managed participants. We maintain the same quality standards as registered providers.',
  },
  {
    question: 'Who can use your service?',
    answer:
      'Self-managed and plan-managed NDIS participants in Melbourne and surrounds.',
  },
  {
    question: 'What if I am agency-managed?',
    answer:
      'We may still be able to help you. Contact us and we can discuss your options including changing your plan management type.',
  },
  {
    question: 'What does a Support Coordinator do?',
    answer:
      'We help you understand your plan, connect with providers, manage your budgets, and prepare for reviews.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'We respond within 1 business day and can typically begin within the same week.',
  },
  {
    question: 'What if I don\'t have an NDIS plan yet?',
    answer:
      'We can point you in the right direction to access the NDIS and start the process.',
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#FAFAF8]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between p-6 text-left font-bold text-slate-900"
              >
                <span>{faq.question}</span>
                <svg
                  className={`h-5 w-5 text-primary transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-600 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
