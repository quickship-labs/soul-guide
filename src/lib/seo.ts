import type { Metadata } from 'next';
import { siteConfig } from './config';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
}

export function generateSEO({ title, description, keywords = [], path = '' }: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
