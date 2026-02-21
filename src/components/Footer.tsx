import Link from 'next/link';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D7A5F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <svg className="h-8 w-8 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
              </svg>
              <span className="text-xl font-bold">Compass SC</span>
            </div>
            <p className="text-[#fafbfc] text-sm leading-relaxed">
              Culturally responsive NDIS Support Coordination for Melbourne's diverse communities.
            </p>
            <div className="flex gap-4 mt-2">
              {['FB', 'IG', 'LI'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A017] transition-colors text-xs font-semibold"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A017]">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#d1d5db] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A017]">Contact Us</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#d1d5db]">
              <li className="flex items-start gap-3">
                <svg className="h-5 w-5 text-[#D4A017] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  123 Community St,<br />
                  Melbourne VIC 3000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="h-5 w-5 text-[#D4A017]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{SITE_CONFIG.email}</span>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#D4A017]">Contact Info</h4>
            <ul className="flex flex-col gap-3 text-sm text-[#d1d5db]">
              <li className="text-xs text-[#9ca3af]">Unregistered NDIS provider</li>
              <li className="text-xs text-[#9ca3af]">Serving Melbourne-wide</li>
              <li className="text-xs text-[#9ca3af]">Working with self-managed & plan-managed participants</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#9ca3af]">
          <p>&copy; {currentYear} Compass Support Coordination. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <p className="text-[10px] text-[#6b7280] max-w-3xl mx-auto">
            We acknowledge the Traditional Custodians of the land on which we work and live,
            and recognize their continuing connection to land, water and community. We pay
            respect to Elders past, present and emerging.
          </p>
        </div>
      </div>
    </footer>
  );
}
