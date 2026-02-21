import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  imageUrl?: string;
}
