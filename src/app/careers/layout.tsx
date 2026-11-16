import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Careers & Internships — Join the Engineering Team',
  description:
    'Join MR.Engineers: explore hands-on internships and engineering career opportunities in industrial automation, IoT, embedded systems, electronics, and full-stack software in Tamil Nadu, India.',
  path: '/careers',
  image: '/images/logo.jpg',
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
