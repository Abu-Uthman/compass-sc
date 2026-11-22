'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();
  // The menu counts as open only on the page where it was opened, so any navigation closes it.
  const [openOnPath, setOpenOnPath] = useState<string | null>(null);
  const menuOpen = openOnPath === pathname;
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setOpenOnPath(null);

  return (
    <header
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          closeMenu();
          menuButtonRef.current?.focus();
        }
      }}
      className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 7m0 13V7" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Compass SC</span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main" className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-white transition-all hover:bg-accentHover shadow-sm hover:shadow-md"
            >
              <span className="mr-1.5">Book Free Consultation</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              aria-label="Navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setOpenOnPath(menuOpen ? null : pathname)}
              className="text-slate-900 hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <nav id="mobile-navigation" aria-label="Mobile" hidden={!menuOpen} className="md:hidden border-t border-slate-100 py-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu} className="block py-2 text-sm font-medium text-slate-600 hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu} className="inline-flex rounded-lg bg-accent px-6 py-2.5 text-sm font-bold text-white hover:bg-accentHover">
            Book Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
