import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Compass SC | NDIS Support Coordination Melbourne',
  description: 'Professional Level 2 NDIS Support Coordination for Melbourne participants. Self-managed and plan-managed welcome. Get help understanding your plan, connecting with providers, and maximising your NDIS funding.',
  keywords: 'NDIS support coordination, NDIS Melbourne, Level 2 support coordinator, NDIS plan management, NDIS participant support, Melbourne NDIS provider',
  authors: [{ name: 'Compass SC' }],
  openGraph: {
    title: 'Compass SC | NDIS Support Coordination Melbourne',
    description: 'Professional Level 2 NDIS Support Coordination for Melbourne participants. Self-managed and plan-managed welcome.',
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
    serviceType: 'NDIS Support Coordination',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
