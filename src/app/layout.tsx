import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { PROVIDER, PROVIDER_LINE } from '@/lib/constants';

const description = `Level 2 NDIS Support Coordination for Melbourne participants, in English and Somali. Provided by ${PROVIDER.legalName}, a registered NDIS provider. NDIA-managed, plan-managed and self-managed participants welcome.`;

export const metadata: Metadata = {
  title: 'Compass SC | NDIS Support Coordination Melbourne',
  description: `${description} Get help understanding your plan, connecting with providers, and maximising your NDIS funding.`,
  keywords: 'NDIS support coordination, NDIS Melbourne, Level 2 support coordinator, NDIS participant support, NDIS support coordination Melbourne',
  authors: [{ name: 'Compass SC' }],
  openGraph: {
    title: 'Compass SC | NDIS Support Coordination Melbourne',
    description,
    url: 'https://www.compasssc.com.au',
    siteName: 'Compass SC',
    locale: 'en_AU',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Compass SC',
    description: PROVIDER_LINE,
    knowsLanguage: ['en', 'so'],
    telephone: '+61432405388',
    email: 'info@compasssc.com.au',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'City',
      name: 'Melbourne',
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        serviceType: 'NDIS Support Coordination',
        provider: {
          '@type': 'Organization',
          name: PROVIDER.legalName,
          taxID: PROVIDER.abn,
        },
      },
    },
    priceRange: '$$',
  };

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <div className="font-sans">
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
