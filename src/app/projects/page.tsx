'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  ArrowRight,
  Filter,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection } from '@/lib/animations';
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/constants';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[#7C5CFC]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ════════════════════════════════════════════════════════════════════
            PAGE HERO
           ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-white/10 bg-[#10151D] text-accent mb-6"
          >
            <Layers className="w-3.5 h-3.5" /> Engineering Portfolio
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Proven Projects &amp; <br />
            <span className="gradient-text">Engineered Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            A curated showcase of our engineering initiatives across cinema automation, industrial
            control systems, IoT telemetry, and web dashboards.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            CATEGORY FILTER TABS
           ════════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-accent text-black font-semibold shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'bg-[#10151D] text-text-secondary hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            PROJECTS GRID
           ════════════════════════════════════════════════════════════════════ */}
        <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <AnimatePresence>
            {filteredProjects.map((project) => {
              const isExpanded = expandedProjectId === project.id;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  id={project.id}
                  className="scroll-mt-28"
                >
                  <div className="rounded-3xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full group">
                    {/* Visual Schematics / Image Header */}
                    <div className="relative h-60 sm:h-72 bg-[#090D14] flex items-center justify-center p-6 border-b border-white/[0.06] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={420}
                        height={280}
                        className="w-full h-full object-contain filter drop-shadow-[0_0_25px_rgba(0,212,255,0.18)] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-md text-xs font-mono bg-black/70 backdrop-blur-md border border-white/10 text-accent font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">
                          VERIFIED ARCHITECTURE
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                      <div>
                        <h2 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                          {project.title}
                        </h2>
                        <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                          {project.overview}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <TechBadge key={tech} text={tech} />
                          ))}
                        </div>

                        {/* Expandable Technical Deep-Dive */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-6 pt-6 border-t border-white/[0.08] space-y-4 overflow-hidden"
                            >
                              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                                <div className="flex items-center gap-2 text-xs font-mono text-[#FFBE1A] font-semibold mb-1">
                                  <AlertCircle className="w-4 h-4" /> PROBLEM SPECIFICATION
                                </div>
                                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                                  {project.problem}
                                </p>
                              </div>

                              <div className="p-4 rounded-xl bg-black/40 border border-accent/20">
                                <div className="flex items-center gap-2 text-xs font-mono text-accent font-semibold mb-1">
                                  <CheckCircle2 className="w-4 h-4" /> ENGINEERED RESOLUTION
                                </div>
                                <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                                  {project.solution}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Footer Actions */}
                      <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="text-xs font-mono text-text-secondary hover:text-white flex items-center gap-1.5 py-1 px-3 rounded-lg bg-white/[0.04] border border-white/[0.06] transition-colors"
                        >
                          <span>{isExpanded ? 'Hide Architecture' : 'View Architecture'}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <Link
                          href={`/contact?project=${encodeURIComponent(project.title)}`}
                          className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                        >
                          <span>Inquire Similar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ════════════════════════════════════════════════════════════════════
            DOCUMENTATION TRANSPARENCY NOTICE
           ════════════════════════════════════════════════════════════════════ */}
        <AnimatedSection>
          <div className="p-6 rounded-2xl border border-white/10 bg-[#10151D]/60 flex items-start gap-4 max-w-3xl mx-auto mb-20 text-xs text-text-muted">
            <div className="p-2 rounded-lg bg-white/[0.05] text-[#FFBE1A] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-white block font-semibold mb-1">
                ENGINEERING DOCUMENTATION INTEGRITY
              </span>
              <p className="leading-relaxed text-text-secondary">
                To respect proprietary industrial installations and non-disclosure agreements with
                manufacturing facilities, project imagery above utilizes technical architectural
                schematics. Project inquiries can be supplemented with technical diagrams upon mutual
                consultation.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════════════════════════════
            BOTTOM CTA
           ════════════════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#10151D] via-[#0D121A] to-[#10151D] text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Have a Similar Requirement in Your Facility?
            </h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              Our engineering team is ready to analyze your site specifications and develop a tailored
              automation or embedded solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton href="/contact" icon={ArrowRight}>
                Discuss Your Engineering Needs
              </GradientButton>
              <OutlineButton href="/services">Review All Services</OutlineButton>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
