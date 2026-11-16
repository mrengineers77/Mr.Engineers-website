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
    default: 'MR.Engineers — Engineering Ideas. Building What’s Next.',
    template: '%s | MR.Engineers',
  },
  description:
    'Engineering intelligent solutions at the intersection of industrial automation, electronics, IoT and software — transforming ideas into practical innovations based in Tamil Nadu, India.',
  keywords: [
    'Industrial Automation',
    'PLC SCADA Services',
    'ESP32 Arduino Development',
    'IoT Solutions India',
    'Embedded Systems',
    'Cinema Automation Systems',
    'Electrical Panel Fabrication',
    'Engineering Services Tamil Nadu',
    'Erode Technology Company',
    'Custom Electronics Prototyping',
    'MR.Engineers',
  ],
  authors: [{ name: 'MR.Engineers' }],
  creator: 'MR.Engineers',
  metadataBase: new URL('https://mrengineers.in'),
  openGraph: {
    title: 'MR.Engineers — Engineering Ideas. Building What’s Next.',
    description:
      'Industrial automation, IoT, embedded systems, and software engineering solutions.',
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
