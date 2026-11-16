import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'MR.Engineers — Engineering the Future.',
    template: '%s | MR.Engineers',
  },
  description:
    'From industrial automation to intelligent IoT solutions, MR.Engineers transforms engineering ideas into practical technology based in Erode, Tamil Nadu, India.',
  keywords: [
    'MR.Engineers',
    'Hariprasath J',
    'Santhosh M M',
    'Industrial Automation Tamil Nadu',
    'Cinema Automation Systems',
    'Vijayan Cinemas Automation',
    'Royal Theater Lighting Control',
    'PLC SCADA Services India',
    'ESP32 Arduino Prototyping',
    'IoT Solutions Erode',
    'MR.Engineers Academy',
    'Engineering College Collaborations',
    'Custom Panel Fabrication',
  ],
  authors: [{ name: 'MR.Engineers' }, { name: 'Hariprasath J' }, { name: 'Santhosh M M' }],
  creator: 'MR.Engineers',
  metadataBase: new URL('https://mrengineers.in'),
  openGraph: {
    title: 'MR.Engineers — Engineering the Future.',
    description:
      'From industrial automation to intelligent IoT solutions, MR.Engineers transforms engineering ideas into practical technology.',
    url: 'https://mrengineers.in',
    siteName: 'MR.Engineers',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'MR.Engineers Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MR.Engineers — Engineering Ideas. Building What’s Next.',
    description:
      'Intelligent industrial automation, IoT, embedded systems, and software solutions.',
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/images/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#080B10',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#080B10] text-[#F5F7FA] antialiased selection:bg-accent/20 selection:text-white flex flex-col justify-between overflow-x-hidden">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
