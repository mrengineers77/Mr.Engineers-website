'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  Settings,
  CircuitBoard,
  Wifi,
  Zap,
  Globe,
  ArrowRight,
  Code2,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
  SectionDivider,
  BrandLogo,
} from '@/components/ui';
import { AnimatedSection, staggerContainer, staggerItem } from '@/lib/animations';
import { BRAND, PROCESS_STEPS, PROJECTS, SERVICES } from '@/lib/constants';

// Technical icons mapping for capabilities
const capabilityIcons = [
  { id: 'industrial-automation', icon: Settings, color: '#00D4FF' },
  { id: 'esp32-arduino', icon: CircuitBoard, color: '#FFBE1A' },
  { id: 'iot-development', icon: Wifi, color: '#00D4FF' },
  { id: 'plc-scada', icon: Cpu, color: '#7C5CFC' },
  { id: 'electrical-electronics', icon: Zap, color: '#FFBE1A' },
  { id: 'web-development', icon: Globe, color: '#00D4FF' },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* ── Background Grid & Subtle Tech Glows ───────────────────────────────── */}
      <div className="absolute inset-0 grid-background pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/10 blur-[150px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[400px] bg-[#7C5CFC]/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-[80%] left-10 w-[450px] h-[350px] bg-[#FFBE1A]/5 blur-[130px] pointer-events-none -z-10 rounded-full" />

      {/* ════════════════════════════════════════════════════════════════════════
          HERO SECTION
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto w-full text-center relative z-10">
          {/* Top Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/10 bg-[#10151D]/80 backdrop-blur-md mb-8 shadow-lg"
          >
            <div className="w-2 h-2 rounded-full bg-[#FFBE1A] animate-ping" />
            <span className="text-xs sm:text-sm font-mono tracking-wider text-text-secondary uppercase">
              {BRAND.taglineFormatted}
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-2 sm:space-y-4"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] uppercase">
              <span className="block text-white">ENGINEERING IDEAS.</span>
              <span className="block gradient-text">BUILDING WHAT&apos;S NEXT.</span>
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-base sm:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed font-normal"
          >
            We engineer intelligent solutions at the intersection of industrial automation,
            electronics, IoT and software — transforming ideas into practical innovations.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <GradientButton
              href="/services"
              icon={ArrowRight}
              className="w-full sm:w-auto text-base py-3.5 px-8"
            >
              Explore Our Capabilities
            </GradientButton>
            <OutlineButton
              href="/contact"
              icon={ArrowUpRight}
              className="w-full sm:w-auto text-base py-3.5 px-8"
            >
              Start a Project
            </OutlineButton>
          </motion.div>

          {/* Tech Spec Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto"
          >
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-xs font-mono text-accent block">DISCIPLINES</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">
                Industrial &amp; Embedded
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-xs font-mono text-[#FFBE1A] block">CONNECTIVITY</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">
                IoT, MQTT &amp; Cloud
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-xs font-mono text-accent-secondary block">CONTROLLERS</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">
                PLCs, ESP32, STM32
              </span>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
              <span className="text-xs font-mono text-white block">EXECUTION</span>
              <span className="text-sm font-semibold text-white mt-0.5 block">
                Turnkey Implementation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          COMPANY INTRODUCTION: Engineering Beyond Boundaries
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Heading & Narrative */}
            <div className="lg:col-span-7">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-[#FFBE1A]/30 bg-[#FFBE1A]/5 text-[#FFBE1A] mb-4">
                  <Activity className="w-3.5 h-3.5" />
                  Engineering Perspective
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                  Engineering Beyond <span className="gradient-text">Boundaries.</span>
                </h2>
                <div className="mt-6 space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
                  <p>
                    Modern industrial challenges do not fit into rigid technical silos. A smart
                    factory requires robust electrical circuits, dependable PLC logic, agile edge
                    microcontrollers, secure wireless telemetry, and intuitive web dashboards.
                  </p>
                  <p>
                    <strong className="text-white font-medium">MR.Engineers</strong> bridges this
                    gap. Headquartered in Tamil Nadu&apos;s industrial manufacturing belt, we unite
                    hands-on hardware prototyping with modern full-stack software architecture. We
                    don&apos;t just design schematics on paper — we build, test, program, and
                    commission practical, real-world systems.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <TechBadge text="Hardware-Software Co-Design" highlight={true} />
                  <TechBadge text="Deterministic Automation" />
                  <TechBadge text="Telemetry & Edge Compute" />
                  <TechBadge text="Industrial Grade Panels" />
                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: High-Tech Architectural Visual */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="relative rounded-2xl border border-white/10 bg-[#10151D]/90 p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
                  <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-mono text-xs text-text-muted">system-matrix // active</span>
                  </div>

                  <div className="mt-6 space-y-4 font-mono text-xs">
                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
                      <span className="text-text-secondary flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-accent" /> Logic Controller
                      </span>
                      <span className="text-emerald-400 font-semibold">ONLINE (0.2ms loop)</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
                      <span className="text-text-secondary flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-[#FFBE1A]" /> Edge IoT Gateway
                      </span>
                      <span className="text-emerald-400 font-semibold">MQTT Broker 1883</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
                      <span className="text-text-secondary flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-accent-secondary" /> Cloud Dashboard
                      </span>
                      <span className="text-emerald-400 font-semibold">WebSocket Sync</span>
                    </div>
                    <div className="p-3 rounded-lg bg-black/40 border border-white/[0.06] flex items-center justify-between">
                      <span className="text-text-secondary flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400" /> Power Distribution
                      </span>
                      <span className="text-text-secondary font-semibold">415V 3-Phase</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-text-muted block">ENGINEERING CORE</span>
                      <span className="text-sm font-semibold text-white">Full-Spectrum Execution</span>
                    </div>
                    <Link
                      href="/about"
                      className="text-xs text-accent hover:underline flex items-center gap-1 font-mono"
                    >
                      Our Philosophy <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          CORE CAPABILITIES (6 Services)
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#0C1017] relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Core Capabilities"
            title="Engineered For Industrial Performance"
            description="Six specialized disciplines delivered with engineering precision — from shop-floor automation to modern web applications."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {SERVICES.slice(0, 6).map((service, index) => {
              const capMeta = capabilityIcons.find((c) => c.id === service.id) || {
                icon: Cpu,
                color: '#00D4FF',
              };
              const Icon = capMeta.icon;

              return (
                <motion.div key={service.id} variants={staggerItem}>
                  <GlassCard className="h-full flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: `${capMeta.color}15`,
                            borderColor: `${capMeta.color}35`,
                            color: capMeta.color,
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono text-text-muted">
                          0{index + 1} //
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-text-secondary text-sm leading-relaxed mb-6">
                        {service.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {service.technologies.slice(0, 4).map((tech) => (
                          <TechBadge key={tech} text={tech} />
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                      <Link
                        href={`/services#${service.id}`}
                        className="text-xs font-semibold text-text-secondary group-hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <span>Explore Technical Specs</span>
                        <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="mt-14 text-center">
            <OutlineButton href="/services" icon={ArrowRight}>
              View All 9 Engineering Services
            </OutlineButton>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FEATURED PROJECTS SHOWCASE
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-accent/20 bg-accent/5 text-accent mb-3">
                <Layers className="w-3.5 h-3.5" />
                Proven Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Featured Projects
              </h2>
              <p className="mt-3 text-text-secondary text-base max-w-xl">
                Actual solution frameworks and completed implementations spanning cinema
                automation, industrial IoT, and embedded electronics.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-secondary text-sm self-start md:self-end shrink-0"
            >
              Browse Complete Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <AnimatedSection key={project.id} delay={idx * 0.1}>
                <div className="rounded-2xl border border-white/[0.08] bg-[#10151D]/70 overflow-hidden hover:border-white/20 transition-all duration-300 group flex flex-col h-full">
                  {/* Schematic / Project visual header */}
                  <div className="relative h-56 sm:h-64 bg-[#090D14] flex items-center justify-center border-b border-white/[0.06] overflow-hidden p-6">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={260}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,212,255,0.15)] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-md text-xs font-mono bg-black/60 backdrop-blur-md border border-white/10 text-accent font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-3 text-text-secondary text-sm leading-relaxed">
                        {project.overview}
                      </p>

                      <div className="mt-5 space-y-3 pt-5 border-t border-white/[0.06] text-xs font-mono">
                        <div>
                          <span className="text-[#FFBE1A] font-semibold block mb-1">
                            PROBLEM IDENTIFIED:
                          </span>
                          <span className="text-text-secondary font-sans leading-normal">
                            {project.problem}
                          </span>
                        </div>
                        <div>
                          <span className="text-accent font-semibold block mb-1">
                            ENGINEERED SOLUTION:
                          </span>
                          <span className="text-text-secondary font-sans leading-normal">
                            {project.solution}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((t) => (
                          <TechBadge key={t} text={t} />
                        ))}
                      </div>
                      <Link
                        href={`/projects#${project.id}`}
                        className="text-xs text-white hover:text-accent flex items-center gap-1 font-mono shrink-0 pl-2"
                      >
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          OUR APPROACH (4-Step Process)
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-[#090D14] border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Methodology"
            title="Rigorous Engineering Process"
            description="From initial feasibility to shop-floor commissioning, every project follows a disciplined engineering workflow."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.number} delay={idx * 0.1}>
                <div className="relative p-6 sm:p-8 rounded-xl border border-white/[0.08] bg-[#10151D]/60 backdrop-blur-md h-full flex flex-col justify-between group hover:border-accent/40 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl sm:text-5xl font-mono font-black text-white/10 group-hover:text-accent/30 transition-colors">
                        {step.number}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-mono text-text-muted group-hover:border-accent group-hover:text-accent transition-colors">
                        ✓
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.04]">
                    <span className="text-[11px] font-mono text-text-muted">
                      PHASE {step.number} // EXECUTION
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          BRAND PHILOSOPHY: LEARN • BUILD • REPEAT
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-radial-gradient from-[#FFBE1A]/10 via-transparent to-transparent opacity-60 pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            {/* Logo Emblem Display */}
            <div className="flex justify-center mb-8">
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-white/20 via-[#FFBE1A]/40 to-transparent shadow-[0_0_40px_rgba(255,190,26,0.2)]">
                <div className="rounded-xl overflow-hidden bg-black p-3">
                  <Image
                    src="/images/logo.jpg"
                    alt="MR.Engineers Official Logo"
                    width={110}
                    height={110}
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
            </div>

            <span className="text-xs sm:text-sm font-mono tracking-widest text-[#FFBE1A] uppercase block mb-3 font-semibold">
              OUR GUIDING ETHOS
            </span>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase">
              LEARN<span className="text-[#FFBE1A]">.</span> BUILD<span className="text-accent">.</span> REPEAT<span className="text-accent-secondary">.</span>
            </h2>

            <p className="mt-8 text-base sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Engineering is not a static trade — it is an active discipline of curiosity,
              experimentation, and relentless iteration. We master modern tools, build real working
              prototypes, and refine them until they exceed industrial expectations.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-mono text-text-secondary">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFBE1A]" />
                <span>Hands-on Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Industrial Rigor</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-secondary" />
                <span>Modern Software Architecture</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════════
          FINAL CTA
         ════════════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] relative">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-b from-[#10151D] to-[#0A0D13] shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFBE1A]/10 rounded-full blur-3xl pointer-events-none" />

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Have an idea? <br className="hidden sm:inline" />
                <span className="gradient-text">Let&apos;s engineer it.</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
                Whether you need a custom PLC control panel, an IoT monitoring gateway, or a
                specialized web dashboard, we are ready to build it.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <GradientButton
                  href="/contact"
                  icon={ArrowRight}
                  className="w-full sm:w-auto text-base py-3.5 px-8"
                >
                  Start a Conversation
                </GradientButton>
                <OutlineButton
                  href="/projects"
                  icon={ArrowUpRight}
                  className="w-full sm:w-auto text-base py-3.5 px-8"
                >
                  Explore Portfolio
                </OutlineButton>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-text-muted font-mono">
                BASED IN TAMIL NADU, INDIA • SERVING INDUSTRIAL &amp; COMMERCIAL CLIENTS
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
