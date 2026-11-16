import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Raven Media Works — Creative Digital Asset Marketplace',
  description:
    'Case study: Raven Media Works. An India-oriented creative digital asset marketplace for visual effects, Photoshop templates, video transitions, and graphic assets designed and developed by MR.Engineers.',
  path: '/projects/raven-media-works',
  image: '/projects/placeholder-raven.svg',
});

export default function RavenMediaWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
