import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'College & Industry Collaborations — Building the Next Generation',
  description:
    'Partner with MR.Engineers for academic MoUs, hands-on industrial automation workshops, final year project mentorship, faculty development, and industrial technology demonstrations.',
  path: '/collaborations',
  image: '/images/logo.jpg',
});

export default function CollaborationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
