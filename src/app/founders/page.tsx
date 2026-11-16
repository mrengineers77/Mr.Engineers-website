'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  Cpu,
  Zap,
  CircuitBoard,
  Settings,
  ArrowRight,
  Sparkles,
  Terminal,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
  InstagramIcon,
  LinkedinIcon,
} from '@/components/ui';
import { AnimatedSection } from '@/lib/animations';
import { FOUNDERS, BRAND } from '@/lib/constants';

export default function FoundersPage() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#FFBE1A]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ════════════════════════════════════════════════════════════════════
            HERO SECTION
           ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-white/10 bg-[#10151D] text-accent mb-6"
          >
            <Users className="w-3.5 h-3.5" /> Company Leadership
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            The People Behind <br />
            <span className="gradient-text">The Vision.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            MR.Engineers is founded and led by practicing engineers with a mutual passion for
            hands-on industrial automation, embedded computing, electrical design, and technical
            education.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            FOUNDERS INDIVIDUAL PROFILES
           ════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-16 mb-24">
          {FOUNDERS.map((founder, idx) => {
            const isFirst = idx === 0;

            return (
              <AnimatedSection key={founder.id}>
                <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D]/90 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Portrait Slot & Details */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center">
                      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-white/10 bg-black shadow-2xl p-2 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                        <Image
                          src={founder.imageSlot}
                          alt={founder.name}
                          width={220}
                          height={220}
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/80 backdrop-blur-md border border-white/10 text-[#FFBE1A] font-semibold">
                            FOUNDER
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {founder.name}
                      </h3>
                      <span className="text-xs font-mono text-[#FFBE1A] tracking-wider mt-1 font-semibold uppercase">
                        {founder.title}
                      </span>

                      {/* Official Social Link */}
                      <div className="mt-5 flex items-center gap-3">
                        <a
                          href={founder.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-[#FFBE1A]/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
                        >
                          <InstagramIcon className="w-4 h-4 text-[#FFBE1A]" />
                          <span>Instagram Profile</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Column: Bio & Core Areas of Responsibility */}
                    <div className="lg:col-span-8 lg:border-l lg:border-white/[0.08] lg:pl-10 space-y-6">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold block mb-2">
                          EXECUTIVE BIO &amp; FOCUS
                        </span>
                        <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
                          {founder.bio}
                        </p>
                      </div>

                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold block mb-3">
                          AREAS OF RESPONSIBILITY &amp; TECHNICAL OVERSIGHT:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
                          {founder.focusAreas.map((area, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2.5 p-3 rounded-xl bg-black/30 border border-white/[0.04]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span className="text-white/90 text-xs sm:text-sm font-medium">
                                {area}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted font-mono">
                        <span>BASED IN ERODE, TAMIL NADU</span>
                        <span className="text-accent">MR.ENGINEERS CORE LEADERSHIP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            FOUNDERS' SHARED PHILOSOPHY
           ════════════════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-r from-[#10151D] via-[#0D121B] to-[#10151D]">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFBE1A] font-semibold block mb-2">
                FOUNDER COMMITMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                &ldquo;We Engineer What We Believe In.&rdquo;
              </h2>
              <p className="mt-6 text-text-secondary text-base leading-relaxed">
                As founders, we stay connected to every project. We don&apos;t operate as detached
                managers; we review the wiring layouts, inspect ladder logic, test edge firmware, and
                stand in the projection booth or on the factory floor during system commissioning.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <GradientButton href="/contact?intent=founder_meeting" icon={ArrowRight}>
                  Connect with the Founders
                </GradientButton>
                <OutlineButton href="/projects">
                  Explore Engineered Projects
                </OutlineButton>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
