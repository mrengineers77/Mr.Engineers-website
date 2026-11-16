import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Engineering Services — Industrial Automation, IoT & Software',
  description:
    'Explore MR.Engineers full-spectrum engineering capabilities: Industrial Automation, PLC & SCADA, ESP32 & Arduino, IoT Development, Embedded Systems, Electrical & Electronics, and Software Development.',
  path: '/services',
  image: '/images/logo.jpg',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
