'use client';
import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredLanguage: string;
}

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle form submission here
    alert('Thank you for contacting Compass SC! We will respond to your message shortly.');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D7A5F] to-[#1a9d7d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-green-100">
            Let's discuss how we can help you navigate the NDIS system
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-4">Call Us</h3>
              <p className="text-2xl font-bold text-gray-900 mb-2">0432 405 388</p>
              <p className="text-gray-600">
                Available Monday to Friday, 9am to 5pm
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-4">Email Us</h3>
              <p className="text-lg font-medium text-gray-900 mb-2">info@compasssc.com.au</p>
              <p className="text-gray-600">
                We'll respond to your message within 24 hours
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-4">Visit Us</h3>
              <p className="text-lg font-medium text-gray-900 mb-2">Melbourne, VIC</p>
              <p className="text-gray-600">
                Meeting by appointment only
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0D7A5F] mb-8 text-center">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D7A5F] focus:border-transparent outline-none transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D7A5F] focus:border-transparent outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D7A5F] focus:border-transparent outline-none transition"
                    placeholder="04XX XXX XXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preferredLanguage"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Preferred Language
                  </label>
                  <select
                    id="preferredLanguage"
                    name="preferredLanguage"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D7A5F] focus:border-transparent outline-none transition"
                  >
                    <option value="">Select a language</option>
                    <option value="english">English</option>
                    <option value="somali">Somali</option>
                    <option value="arabic">Arabic</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  How Can We Help You? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0D7A5F] focus:border-transparent outline-none transition"
                  placeholder="Please tell us about your needs and how we can assist you..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#0D7A5F] text-white font-semibold rounded-lg hover:bg-[#0c6650] transition text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 bg-[#0D7A5F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">We Speak Your Language</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center">
              <span className="text-4xl mr-4">🇺🇸</span>
              <div className="text-left">
                <p className="font-semibold text-lg">English</p>
                <p className="text-green-100 text-sm">Full fluency</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-4">🇸🇴</span>
              <div className="text-left">
                <p className="font-semibold text-lg">Somali</p>
                <p className="text-green-100 text-sm">Native speaker</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className="text-4xl mr-4">🇸🇦</span>
              <div className="text-left">
                <p className="font-semibold text-lg">Arabic</p>
                <p className="text-green-100 text-sm">Conversational</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
