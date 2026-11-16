import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'MR.Engineers Academy — Learn. Build. Engineer.',
  description:
    'Dedicated engineering education and practical skill development platform: hands-on training and internship tracks in Industrial Automation, PLC programming, ESP32, Embedded Systems, IoT, and Web Development.',
  path: '/academy',
  image: '/images/logo.jpg',
});

export default function AcademyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
