'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { BrandLogo } from '@/components/ui';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B10]/85 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center">
              <BrandLogo size="md" showTagline={false} />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.06] bg-[#10151D]/60 backdrop-blur-lg px-4 py-1.5 shadow-inner">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                      active
                        ? 'text-white'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1.5">
                      {active && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="btn-primary text-sm py-2 px-5 group shadow-[0_0_20px_rgba(0,212,255,0.15)]"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-white bg-white/[0.04] border border-white/[0.08]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0C1017] border-l border-white/[0.08] z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <BrandLogo size="sm" showTagline={false} />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-text-secondary hover:text-white rounded-lg bg-white/[0.05]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                          active
                            ? 'bg-accent/10 text-accent border border-accent/20'
                            : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {active && <span className="w-2 h-2 rounded-full bg-accent" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-8 border-t border-white/[0.08] flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary justify-center w-full py-3"
                >
                  <span>Let&apos;s Work Together</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="text-xs text-center text-text-muted">
                  Tamil Nadu, India • contact@mrengineers.in
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
