import type { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://mrengineers.in';

export function generatePageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.png',
}: SEOProps): Metadata {
  const url = `${BASE_URL}${path}`;
  const fullTitle = path === '' ? `MR.Engineers — Learn • Build • Repeat` : `${title} | MR.Engineers`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: 'MR.Engineers',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}
