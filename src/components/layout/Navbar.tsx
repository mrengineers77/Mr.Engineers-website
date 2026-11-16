'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Cpu,
  GraduationCap,
  Users,
  Briefcase,
  Layers,
  Wrench,
  Compass,
} from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { BrandLogo } from '@/components/ui';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const ecosystemLinks = [
    {
      title: 'Innovation & R&D',
      href: '/innovation',
      desc: 'Future technology roadmap & planned industrial systems',
      icon: Sparkles,
      color: '#00D4FF',
    },
    {
      title: 'MR.Engineers Academy',
      href: '/academy',
      desc: 'Practical technical training & internship curriculum',
      icon: GraduationCap,
      color: '#FFBE1A',
    },
    {
      title: 'Collaborations',
      href: '/collaborations',
      desc: 'College partnerships, workshops & final year projects',
      icon: Users,
      color: '#7C5CFC',
    },
  ];

  const companyLinks = [
    {
      title: 'Our Story & Vision',
      href: '/about',
      desc: 'Who we are, our mission, and core values',
      icon: Compass,
      color: '#00D4FF',
    },
    {
      title: 'Meet the Founders',
      href: '/founders',
      desc: 'Hariprasath J & Santhosh M M',
      icon: Users,
      color: '#FFBE1A',
    },
    {
      title: 'Careers & Recruitment',
      href: '/careers',
      desc: 'Engineering roles & internship applications',
      icon: Briefcase,
      color: '#7C5CFC',
    },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080B10]/90 backdrop-blur-md border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.6)] py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center shrink-0">
              <BrandLogo size="md" showTagline={false} />
            </Link>

            {/* Desktop Navigation */}
            <nav
              ref={dropdownRef}
              className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#10151D]/75 backdrop-blur-xl px-4 py-1.5 shadow-inner"
            >
              <Link
                href="/"
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  pathname === '/' ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {pathname === '/' && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Home</span>
              </Link>

              {/* Company Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'company' ? null : 'company')
                  }
                  className={`flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                    pathname.startsWith('/about') ||
                    pathname.startsWith('/founders') ||
                    pathname.startsWith('/careers')
                      ? 'text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'company' ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'company' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-3 w-72 rounded-2xl border border-white/10 bg-[#0E131C] p-3 shadow-2xl backdrop-blur-2xl z-50"
                    >
                      {companyLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                          >
                            <div
                              className="p-2 rounded-lg shrink-0 border"
                              style={{
                                backgroundColor: `${item.color}15`,
                                borderColor: `${item.color}30`,
                                color: item.color,
                              }}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-text-muted leading-tight mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct Links */}
              <Link
                href="/services"
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive('/services') ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {isActive('/services') && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Services</span>
              </Link>

              <Link
                href="/projects"
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive('/projects') ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {isActive('/projects') && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Projects</span>
              </Link>

              {/* Ecosystem & Innovation Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'ecosystem' ? null : 'ecosystem')
                  }
                  className={`flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                    pathname.startsWith('/innovation') ||
                    pathname.startsWith('/academy') ||
                    pathname.startsWith('/collaborations')
                      ? 'text-white'
                      : 'text-text-secondary hover:text-white'
                  }`}
                >
                  <span>Innovation &amp; Academy</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === 'ecosystem' ? 'rotate-180 text-accent' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'ecosystem' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full right-0 mt-3 w-80 rounded-2xl border border-white/10 bg-[#0E131C] p-3 shadow-2xl backdrop-blur-2xl z-50"
                    >
                      {ecosystemLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.05] transition-colors group"
                          >
                            <div
                              className="p-2 rounded-lg shrink-0 border"
                              style={{
                                backgroundColor: `${item.color}15`,
                                borderColor: `${item.color}30`,
                                color: item.color,
                              }}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-accent transition-colors">
                                {item.title}
                              </div>
                              <div className="text-xs text-text-muted leading-tight mt-0.5">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={`relative px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive('/contact') ? 'text-white' : 'text-text-secondary hover:text-white'
                }`}
              >
                {isActive('/contact') && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.12]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Contact</span>
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact?intent=project"
                className="btn-primary text-sm py-2 px-5 group shadow-[0_0_20px_rgba(0,212,255,0.18)]"
              >
                <span>Start a Project</span>
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

      {/* Mobile Drawer Menu (Full 10 Pages Cleanly Listed) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#0A0D14] border-l border-white/[0.08] z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
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

                <div className="mt-6 flex flex-col gap-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-text-muted px-3 py-1">
                    PRIMARY NAVIGATION
                  </span>
                  {NAV_LINKS.map((link) => {
                    const active = isActive(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          active
                            ? 'bg-accent/10 text-accent border border-accent/20'
                            : 'text-text-secondary hover:text-white hover:bg-white/[0.04]'
                        }`}
                      >
                        <span>{link.label}</span>
                        {active && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary justify-center w-full py-3 text-sm"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <p className="text-[11px] text-center text-text-muted font-mono">
                  ERODE, TAMIL NADU • MR.ENGINEERS
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
