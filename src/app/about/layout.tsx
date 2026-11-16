import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'About Us — Engineering Beyond Boundaries',
  description:
    'Discover MR.Engineers: our vision, mission, engineering philosophy, and the hands-on technical drive behind our industrial automation and IoT solutions based in Tamil Nadu, India.',
  path: '/about',
  image: '/images/logo.jpg',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
