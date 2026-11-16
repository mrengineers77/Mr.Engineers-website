'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  Cpu,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  Sparkles,
  Camera,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection } from '@/lib/animations';
import { PROJECTS } from '@/lib/constants';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Completed' | 'Concept'>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Completed') return p.statusType === 'completed';
    if (selectedFilter === 'Concept') return p.statusType === 'concept';
    return true;
  });

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
            HERO SECTION
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
            <span className="gradient-text">Engineered Systems</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            An accurate portfolio of our specialized automation installations and future
            architectural concepts across Tamil Nadu. Every project status is reported with complete
            engineering integrity.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            STATUS FILTER TABS
           ════════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {(['All', 'Completed', 'Concept'] as const).map((filter) => {
            const count =
              filter === 'All'
                ? PROJECTS.length
                : filter === 'Completed'
                ? PROJECTS.filter((p) => p.statusType === 'completed').length
                : PROJECTS.filter((p) => p.statusType === 'concept').length;

            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-accent text-black shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                    : 'bg-[#10151D] text-text-secondary hover:text-white border border-white/[0.08]'
                }`}
              >
                {filter === 'All'
                  ? `All Deployments (${count})`
                  : filter === 'Completed'
                  ? `Completed & Commissioned (${count})`
                  : `Concepts & Future R&D (${count})`}
              </button>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            PROJECTS DETAILED LIST
           ════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-16 mb-24">
          {filteredProjects.map((project, idx) => {
            const isExpanded = expandedProjectId === project.id;
            const isCompleted = project.statusType === 'completed';
            const isPhoto =
              project.imageSlot.endsWith('.jpg') || project.imageSlot.endsWith('.png');

            return (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <div
                  id={project.id}
                  className="rounded-3xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Visual / Image Slot Area */}
                    <div className="lg:col-span-5 p-6 sm:p-8">
                      <div
                        className={`relative rounded-2xl bg-[#090D14] border border-white/10 flex flex-col items-center justify-center min-h-[280px] sm:min-h-[340px] overflow-hidden group ${
                          isPhoto ? 'p-0' : 'p-6'
                        }`}
                      >
                        <Image
                          src={project.imageSlot}
                          alt={project.title}
                          width={480}
                          height={340}
                          className={
                            isPhoto
                              ? 'w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-[280px] sm:min-h-[340px]'
                              : 'w-full h-auto object-contain filter drop-shadow-[0_0_25px_rgba(0,212,255,0.18)] group-hover:scale-105 transition-transform duration-500'
                          }
                        />

                        {isPhoto && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />
                        )}

                        {/* Image Slot Badge */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[11px] font-mono text-text-muted z-10">
                          <span
                            className={`flex items-center gap-1.5 ${
                              isPhoto ? 'text-emerald-400 font-semibold' : 'text-accent'
                            }`}
                          >
                            <Camera className="w-3.5 h-3.5" />{' '}
                            {isPhoto ? 'Verified Site Photo' : 'Project Visual Slot'}
                          </span>
                          <span>{isPhoto ? 'Real Installation' : 'Schematic Ready'}</span>
                        </div>

                        <div className="absolute top-4 left-4 z-10">
                          <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-black/85 backdrop-blur-md border border-white/10 text-white font-medium">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-7 p-6 sm:p-8 lg:pl-0 space-y-6">
                      <div>
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider ${
                              isCompleted
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                                : 'bg-amber-500/10 text-[#FFBE1A] border border-amber-500/30'
                            }`}
                          >
                            ● {project.status}
                          </span>
                          <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-accent" /> {project.location}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                          {project.title}
                        </h2>

                        <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                          {project.overview}
                        </p>
                      </div>

                      {/* Problem & Solution Accordion */}
                      <div className="space-y-3 pt-2">
                        <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06]">
                          <span className="text-xs font-mono text-[#FFBE1A] font-semibold block mb-1">
                            PROBLEM SPECIFICATION:
                          </span>
                          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                            {project.problem}
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-black/40 border border-accent/20">
                          <span className="text-xs font-mono text-accent font-semibold block mb-1">
                            ENGINEERED SOLUTION:
                          </span>
                          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                          TECHNOLOGY STACK:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                            <TechBadge key={t} text={t} />
                          ))}
                        </div>
                      </div>

                      {/* Action Links */}
                      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-text-muted">
                            ID: {project.id} //
                          </span>
                          {'liveUrl' in project && project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-mono text-accent hover:underline inline-flex items-center gap-1"
                            >
                              <span>Live Platform</span>
                              <span>↗</span>
                            </a>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          {'detailUrl' in project && project.detailUrl && (
                            <Link
                              href={project.detailUrl}
                              className="btn-secondary text-xs py-2 px-4 group"
                            >
                              <span>Case Study</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-accent" />
                            </Link>
                          )}
                          <Link
                            href={`/contact?service=${encodeURIComponent(
                              project.category.includes('Marketplace')
                                ? 'Web & Application Development'
                                : 'Cinema Automation'
                            )}&project=${encodeURIComponent(project.title)}`}
                            className="btn-primary text-xs py-2 px-4 group"
                          >
                            <span>Inquire Solution</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            TRANSPARENCY DISCLAIMER
           ════════════════════════════════════════════════════════════════════ */}
        <AnimatedSection>
          <div className="p-6 rounded-2xl border border-white/10 bg-[#10151D]/60 flex items-start gap-4 max-w-3xl mx-auto mb-20 text-xs text-text-muted">
            <div className="p-2 rounded-lg bg-white/[0.05] text-[#FFBE1A] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-white block font-semibold mb-1">
                ENGINEERING ACCURACY COMMITMENT
              </span>
              <p className="leading-relaxed text-text-secondary">
                MR.Engineers maintains complete transparency regarding completed versus conceptual
                architectures. Verified site facility photographs for Royal Theater (Pallipalayam) and
                Sangeetha Multiplex (Karumattampatti) have been integrated into our live archive, while
                Vijayan Cinemas site photography is scheduled for integration upon client sign-off.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════════════════════════════
            BOTTOM CTA
           ════════════════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-r from-[#10151D] via-[#0E131C] to-[#10151D] text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Have a Similar Installation in Your Facility?
            </h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              Whether you manage a single-screen cinema or an industrial factory line, we can design
              an automated control system customized to your exact physical layout.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton href="/contact" icon={ArrowRight}>
                Discuss Your Engineering Needs
              </GradientButton>
              <OutlineButton href="/services">Review All 9 Services</OutlineButton>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
