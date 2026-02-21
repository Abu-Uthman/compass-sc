import Link from 'next/link';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0D7A5F] to-[#1a9d7d] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Compass SC
          </h1>
          <p className="text-xl md:text-2xl text-green-100">
            Culturally sensitive NDIS support coordination for Melbourne's CALD community
          </p>
        </div>
      </section>

      {/* About Awale */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gray-100 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-[#0D7A5F] mb-4">Hi, I'm Awale</h2>
                <p className="text-gray-600 mb-4">
                  I'm a Muslim/Somali support coordinator passionate about helping
                  my community navigate the NDIS system with confidence and dignity.
                </p>
                <p className="text-gray-600 mb-4">
                  Growing up in the CALD community, I understand the unique
                  challenges many families face when accessing disability support.
                  My lived experience combined with professional training allows
                  me to provide truly culturally sensitive support.
                </p>
                <p className="text-gray-600">
                  I'm fluent in English, Somali, and Arabic, and I'm committed to
                  ensuring every participant feels understood, respected, and
                  supported throughout their NDIS journey.
                </p>
              </div>
            </div>
            <div className="bg-[#0D7A5F] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">My Professional Background</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#D4A017]">Disability Support Worker</h4>
                  <p className="text-sm text-green-100">2020 - Present</p>
                  <p className="text-green-50 mt-1">
                    Supporting individuals with various disabilities in home and
                    community settings
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#D4A017]">NDIS Support Coordinator</h4>
                  <p className="text-sm text-green-100">2022 - Present</p>
                  <p className="text-green-50 mt-1">
                    Specializing in culturally responsive support coordination
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#D4A017]">Community Engagement Officer</h4>
                  <p className="text-sm text-green-100">2018 - 2020</p>
                  <p className="text-green-50 mt-1">
                    Connecting CALD communities with disability services and support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compass SC is built on a foundation of respect, cultural understanding,
              and genuine care for our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">Compassion</h3>
              <p className="text-gray-600">
                We approach every interaction with empathy, understanding, and
                genuine care for your well-being and success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">Cultural Understanding</h3>
              <p className="text-gray-600">
                We respect and honor your cultural background, traditions, values,
                and religious beliefs in every aspect of our support.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
              <div className="w-16 h-16 bg-[#0D7A5F] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D7A5F] mb-3">Empowerment</h3>
              <p className="text-gray-600">
                We believe in empowering you to make informed decisions and take
                control of your NDIS journey and life goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D7A5F] mb-8 text-center">
            Why Choose Compass SC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#D4A017] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D7A5F] mb-2">Bilingual Support</h3>
                <p className="text-gray-600">
                  Fluent in English, Somali, and Arabic. Communication is always clear
                  and culturally appropriate, ensuring you fully understand your options.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#D4A017] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D7A5F] mb-2">Community Focus</h3>
                <p className="text-gray-600">
                  Deeply rooted in the Muslim and Somali communities. I understand
                  the unique challenges and strengths of our community.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#D4A017] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D7A5F] mb-2">Trusted Advisor</h3>
                <p className="text-gray-600">
                  I act as your trusted advisor, helping you navigate the NDIS
                  system and make decisions that align with your values and goals.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-[#D4A017] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D7A5F] mb-2">Reliable Support</h3>
                <p className="text-gray-600">
                  Consistent, dependable support throughout your NDIS journey.
                  I'm committed to your success and long-term well-being.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
