'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ExternalLink,
  ArrowLeft,
  Sparkles,
  Layers,
  Palette,
  Film,
  Video,
  FileCode,
  Globe,
  Server,
  CheckCircle2,
  Check,
  ArrowRight,
  ShieldAlert,
  Info,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection } from '@/lib/animations';

export default function RavenMediaWorksDetailPage() {
  const categories = [
    {
      id: 'fx-templates',
      title: 'FX TEMPLATES',
      subtitle: 'Visual Effects & Editing Assets',
      description:
        'Curated visual effects templates and creative editing presets tailored for video creators and visual storytellers.',
      icon: Film,
      color: '#7C5CFC',
      tag: 'VFX & Compositions',
    },
    {
      id: 'photoshop-templates',
      title: 'PHOTOSHOP TEMPLATES',
      subtitle: 'Creative PSD Design Resources',
      description:
        'Organized Photoshop-compatible graphic templates, mockup layouts, poster designs, and layered digital assets.',
      icon: Palette,
      color: '#00D4FF',
      tag: 'Layered PSD Resources',
    },
    {
      id: 'video-transitions',
      title: 'VIDEO TRANSITIONS',
      subtitle: 'Dynamic Scene Shifters',
      description:
        'Smooth, modern transition templates and motion effects built to elevate pacing and production value in video editing.',
      icon: Video,
      color: '#7C5CFC',
      tag: 'Motion Transitions',
    },
    {
      id: 'graphic-templates',
      title: 'GRAPHIC TEMPLATES',
      subtitle: 'Reusable Creative Visuals',
      description:
        'Graphic design resources, vector assets, digital promotional layouts, and multipurpose branding templates.',
      icon: Layers,
      color: '#FFBE1A',
      tag: 'Vector & Layouts',
    },
  ];

  const contributions = [
    {
      title: 'Website Design & Development',
      desc: 'Crafted a fast, modern digital web storefront focused on clean presentation, high visual contrast, and intuitive resource discovery.',
    },
    {
      title: 'Digital Marketplace Architecture',
      desc: 'Structured a logical catalog hierarchy tailored for creative asset categories, ensuring visitors can browse templates without friction.',
    },
    {
      title: 'Creative UI/UX Direction',
      desc: 'Developed a sophisticated creative-tech aesthetic combining dark charcoal canvases, vibrant category accents, and responsive typography.',
    },
    {
      title: 'Category Organization Strategy',
      desc: 'Segmented assets into 4 dedicated creative verticals (FX, Photoshop, Transitions, Graphics) to maintain razor-sharp user focus.',
    },
    {
      title: 'Responsive Web Experience',
      desc: 'Guaranteed seamless mobile, tablet, and desktop navigation, enabling creators to preview and evaluate assets on any device.',
    },
    {
      title: 'Hosting & Production Deployment',
      desc: 'Configured domain records, production asset delivery, and operational hosting infrastructure on GoDaddy.',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Ambient background glows (Creative Purple & Electric Cyan) */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-[#7C5CFC]/10 blur-[170px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 -left-40 w-[600px] h-[600px] bg-accent/10 blur-[170px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Breadcrumb Navigation ────────────────────────────────────────── */}
        <div className="mb-10">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Projects
          </Link>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            HERO SECTION
           ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              ● Successfully Completed
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-white/[0.04] text-[#7C5CFC] border border-[#7C5CFC]/30">
              Creative Digital Asset Marketplace
            </span>
            <span className="text-xs font-mono text-text-muted flex items-center gap-1.5">
              <Server className="w-3.5 h-3.5 text-accent" /> Hosted on GoDaddy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase leading-tight"
          >
            Creativity Meets <br />
            <span className="bg-gradient-to-r from-[#7C5CFC] via-[#A78BFA] to-accent bg-clip-text text-transparent">
              Digital Innovation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            An India-oriented creative digital asset marketplace designed to bring editing resources,
            visual effects templates and graphic design assets into one digital destination.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://www.ravenmediaworks.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-6 text-sm flex items-center gap-2 group"
            >
              <span>Visit Raven Media Works</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link href="/contact?project=Raven%20Media%20Works" className="btn-secondary py-3 px-6 text-sm">
              Inquire Similar Platform
            </Link>
          </motion.div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            MARKETPLACE VISUAL PREVIEW BANNER
           ════════════════════════════════════════════════════════════════════ */}
        <AnimatedSection className="mb-24">
          <div className="relative rounded-3xl border border-white/10 bg-[#0A0D15] p-6 sm:p-10 shadow-2xl overflow-hidden group">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#06080D] p-4 sm:p-8 flex items-center justify-center min-h-[320px] sm:min-h-[420px]">
              <Image
                src="/projects/placeholder-raven.svg"
                alt="Raven Media Works Platform Preview"
                width={650}
                height={400}
                className="w-full max-w-2xl h-auto object-contain filter drop-shadow-[0_0_35px_rgba(124,92,252,0.25)] group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-4 right-4">
                <a
                  href="https://www.ravenmediaworks.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-accent hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <span>ravenmediaworks.in</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-text-muted">
              <span>PROJECT IDENTITY: RAVEN MEDIA WORKS</span>
              <span className="text-[#7C5CFC]">DIGITAL PLATFORM DEVELOPMENT BY MR.ENGINEERS</span>
            </div>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════════════════════════════
            PROJECT OVERVIEW & OBJECTIVES
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#7C5CFC] font-semibold block">
                PROJECT CONTEXT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                A Unified Destination for Creative Digital Resources
              </h2>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                Raven Media Works was conceptualized and developed to address the fragmentation in
                the Indian creative asset landscape. Creators frequently look for quality templates
                across disconnected forums and personal storage links.
              </p>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                By designing an organized, brand-focused digital marketplace, MR.Engineers helped
                transform this vision into a centralized, live digital web presence.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-md">
                <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent" /> Project Objectives
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-mono">•</span>
                    <span>Create an India-oriented marketplace destination for discovering design resources.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-mono">•</span>
                    <span>Establish structured visual categorization across 4 core asset categories.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-mono">•</span>
                    <span>Deliver a high-performance, responsive user interface accessible across mobile and desktop.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-mono">•</span>
                    <span>Deploy and host production web infrastructure reliably on GoDaddy.</span>
                  </li>
                </ul>
              </div>

              {/* Scope Clarification */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-start gap-3 text-xs text-text-secondary">
                <Info className="w-4 h-4 text-[#FFBE1A] shrink-0 mt-0.5" />
                <span>
                  <strong>Clear Scope Definition:</strong> Raven Media Works is specifically a template
                  and creative digital asset marketplace (visual effects, PSD templates, video
                  transitions, graphic resources). It is not an audio library, music streaming app, or
                  short-form reels platform.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            CORE MARKETPLACE CATEGORIES (4 Pillars)
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Marketplace Structure"
            title="Core Asset Categories"
            description="The platform brings multiple creative asset disciplines together in one organized destination."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <AnimatedSection key={cat.id} delay={idx * 0.08}>
                  <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-md h-full flex flex-col justify-between group hover:border-white/20 transition-all">
                    <div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform"
                        style={{
                          backgroundColor: `${cat.color}15`,
                          borderColor: `${cat.color}35`,
                          color: cat.color,
                        }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                        {cat.tag}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-mono text-[#7C5CFC] block mb-3 font-semibold">
                        {cat.subtitle}
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {cat.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/[0.04]">
                      <span className="text-[11px] font-mono text-text-muted">
                        CATEGORY 0{idx + 1} // ASSET VERTICAL
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            MR.ENGINEERS CONTRIBUTION & ARCHITECTURE
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-br from-[#10151D] via-[#0D111A] to-[#10151D]">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
              ENGINEERING EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase">
              MR.Engineers Technical Contribution
            </h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed">
              This project demonstrates that MR.Engineers excels not only in physical automation
              cabinets and microcontrollers, but also in delivering responsive, high-aesthetic
              digital platforms and web products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributions.map((c, i) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-black/40 border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <h4 className="text-base font-bold text-white">{c.title}</h4>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            PROJECT OUTCOME & CALL TO ACTION
           ════════════════════════════════════════════════════════════════════ */}
        <section className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-r from-[#10151D] via-[#0E131C] to-[#10151D] text-center">
          <AnimatedSection>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold block mb-2">
              PROJECT OUTCOME
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Live &amp; Operational Digital Asset Marketplace
            </h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              Raven Media Works is live, serving creative assets and design templates to creators
              across India. Explore the live platform or discuss building your digital product with
              MR.Engineers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.ravenmediaworks.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-8 text-sm flex items-center gap-2"
              >
                <span>Launch Raven Media Works</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link href="/contact?intent=digital_platform" className="btn-secondary py-3.5 px-8 text-sm">
                Discuss a Digital Platform Project
              </Link>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
