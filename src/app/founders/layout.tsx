import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo';

export const metadata: Metadata = generatePageMetadata({
  title: 'Meet Our Founders — Hariprasath J & Santhosh M M',
  description:
    'Meet the founders behind MR.Engineers: Hariprasath J and Santhosh M M. Learn about their engineering vision, hands-on industrial focus, and technology roadmap based in Tamil Nadu, India.',
  path: '/founders',
  image: '/images/logo.jpg',
});

export default function FoundersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
