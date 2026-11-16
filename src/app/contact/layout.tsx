import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact MR.Engineers — Start an Engineering Project',
  description:
    'Get in touch with MR.Engineers for your industrial automation, PLC & SCADA, IoT systems, electronics prototyping, or software development projects based in Erode, Tamil Nadu, India.',
  path: '/contact',
  image: '/images/logo.jpg',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
