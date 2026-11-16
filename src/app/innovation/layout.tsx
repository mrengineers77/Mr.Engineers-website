import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Innovation & R&D — Building What Comes Next',
  description:
    'Explore the MR.Engineers future technology roadmap: planned research and development across smart building automation, advanced industrial IoT, AI-assisted diagnostics, and modular PLC stacks.',
  path: '/innovation',
  image: '/images/logo.jpg',
});

export default function InnovationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
