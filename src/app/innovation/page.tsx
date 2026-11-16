'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  Cpu,
  Layers,
  Activity,
  ArrowRight,
  ShieldCheck,
  Zap,
  Terminal,
  Radio,
  Clock,
  Compass,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection, staggerContainer, staggerItem } from '@/lib/animations';
import { RND_ROADMAP } from '@/lib/constants';

export default function InnovationPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Building Infrastructure',
    'Industrial Edge',
    'Energy & Power',
    'Intelligent Systems',
    'Deterministic Control',
    'Hardware Design',
    'Software Infrastructure',
    'Specialized Systems',
  ];

  const filteredRoadmap =
    activeCategory === 'All'
      ? RND_ROADMAP
      : RND_ROADMAP.filter((item) => item.category === activeCategory);

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#7C5CFC]/5 blur-[160px] pointer-events-none rounded-full" />

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
            <Sparkles className="w-3.5 h-3.5" /> Research &amp; Future Engineering
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Building What <br />
            <span className="gradient-text">Comes Next.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            Our active research &amp; development roadmap. These are planned exploratory initiatives
            designed to push the boundaries of embedded hardware, telemetry, and intelligent
            automation in India.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            TRANSPARENCY NOTICE
           ════════════════════════════════════════════════════════════════════ */}
        <AnimatedSection>
          <div className="p-6 rounded-2xl border border-white/10 bg-[#10151D]/60 flex items-start gap-4 max-w-3xl mx-auto mb-16 text-xs text-text-muted">
            <div className="p-2 rounded-lg bg-white/[0.05] text-[#FFBE1A] shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-white block font-semibold mb-1">
                R&amp;D INTEGRITY &amp; SCOPE DISCLAIMER
              </span>
              <p className="leading-relaxed text-text-secondary">
                The initiatives detailed below represent planned laboratory research, schematic
                studies, and architectural prototypes currently under investigation by MR.Engineers.
                They are presented transparently as future development horizons rather than existing
                off-the-shelf commercial products.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════════════════════════════
            CATEGORY FILTER
           ════════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-accent text-black font-semibold shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'bg-[#10151D] text-text-secondary hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            ROADMAP GRID
           ════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {filteredRoadmap.map((item, idx) => (
            <AnimatedSection key={item.id} delay={idx * 0.08}>
              <div className="p-8 rounded-3xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-xl h-full flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-accent/10 border border-accent/20 text-accent font-medium">
                      {item.phase}
                    </span>
                    <span className="text-xs font-mono text-text-muted">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                    EXPLORATORY TECH STACK:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                    {item.technologies.map((t) => (
                      <TechBadge key={t} text={t} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            COLLABORATE ON R&D
           ════════════════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-r from-[#10151D] via-[#0E131C] to-[#10151D] text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Interested in Co-Developing or Testing Prototypes?
            </h2>
            <p className="mt-4 text-text-secondary text-base max-w-xl mx-auto">
              We collaborate with industrial manufacturing plants and academic research labs to test
              proof-of-concept hardware under authentic operating conditions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton href="/contact?intent=rnd" icon={ArrowRight}>
                Initiate an R&amp;D Consultation
              </GradientButton>
              <OutlineButton href="/collaborations">
                Institutional Partnerships
              </OutlineButton>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
