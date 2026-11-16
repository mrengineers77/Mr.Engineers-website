import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Engineering Projects & Case Studies',
  description:
    'Explore engineering solutions engineered by MR.Engineers — Cinema Automation Systems, Smart Lighting Control, Industrial IoT Monitoring, and Custom Hardware Dashboards.',
  path: '/projects',
  image: '/images/logo.jpg',
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
