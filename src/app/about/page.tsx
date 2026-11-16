'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Target,
  Compass,
  Cpu,
  Layers,
  Wrench,
  Sparkles,
  ArrowRight,
  Terminal,
  Activity,
  Award,
  Zap,
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
import { BRAND } from '@/lib/constants';

export default function AboutPage() {
  const differentiators = [
    {
      icon: Wrench,
      title: 'Hands-On Engineering Depth',
      desc: 'We do not sit behind theoretical diagrams. We wire the control cabinets, program the microcontrollers, troubleshoot signals with oscilloscopes, and commission directly on the field.',
      color: '#00D4FF',
    },
    {
      icon: Cpu,
      title: 'Unified Hardware & Software',
      desc: 'Most agencies either only understand software or only assemble electrical panels. We merge both worlds seamlessly, connecting low-level hardware directly to cloud telemetry.',
      color: '#FFBE1A',
    },
    {
      icon: ShieldCheck,
      title: 'Practical, Problem-First Design',
      desc: 'We avoid over-engineering or vanity features. Every capacitor, relay, API route, and database index is chosen to solve a concrete operational problem reliably.',
      color: '#7C5CFC',
    },
    {
      icon: Layers,
      title: 'End-to-End Accountability',
      desc: 'From initial requirement discovery and proof-of-concept testing to final fabrication and deployment, we own the full life cycle with rigorous engineering standards.',
      color: '#00D4FF',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background glow elements */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-accent/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 bg-[#FFBE1A]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ════════════════════════════════════════════════════════════════════
            PAGE HERO
           ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto text-center mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-white/10 bg-[#10151D] text-accent mb-6"
          >
            <Compass className="w-3.5 h-3.5" /> Company Profile
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Built by Engineers. <br />
            <span className="gradient-text">Driven by Purpose.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            MR.Engineers is an emerging engineering and technology enterprise based in Tamil Nadu,
            India. We bridge the critical gap between heavy industrial physical hardware and modern
            digital systems.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            WHO WE ARE
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="text-xs font-mono uppercase text-[#FFBE1A] tracking-wider block font-semibold">
                  WHO WE ARE
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  An Engineering Collective Creating Practical Technology.
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed text-base">
                  <p>
                    Founded in the energetic industrial belt of Erode, Tamil Nadu,{' '}
                    <strong className="text-white">MR.Engineers</strong> was established with a
                    distinct conviction: that the future of automation belongs to those who
                    understand both electrical circuits and digital code with equal clarity.
                  </p>
                  <p>
                    We operate at the convergence of industrial automation, embedded computing,
                    wireless IoT communication, and modern application development. Rather than
                    offering generic consultancy, we actively design, solder, program, wire, and
                    commission solutions that work flawlessly in demanding operational environments.
                  </p>
                  <p>
                    From cinema hall automation systems to cloud-monitored IoT sensors and custom
                    control panels, our work reflects pragmatic engineering execution built for
                    continuous reliability.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="p-8 rounded-2xl border border-white/10 bg-[#10151D]/90 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="p-2.5 rounded-xl bg-black border border-white/10">
                      <Image
                        src="/images/logo.jpg"
                        alt="MR.Engineers"
                        width={60}
                        height={60}
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">MR.Engineers</h4>
                      <p className="text-xs font-mono text-[#FFBE1A]">{BRAND.taglineFormatted}</p>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">LOCATION:</span>
                      <span className="text-white font-medium">{BRAND.location}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">CORE DOMAINS:</span>
                      <span className="text-accent font-medium">Automation • IoT • Software</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">SPECIALTY:</span>
                      <span className="text-white font-medium">Hardware-Software Interfacing</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-text-muted">COMMUNICATION:</span>
                      <span className="text-emerald-400 font-medium">Active Inquiries Open</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            VISION & MISSION
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <GlassCard className="h-full p-8 sm:p-10 border-accent/20">
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-2 font-semibold">
                  OUR VISION
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Democratizing Advanced Industrial &amp; Embedded Technology
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  To become a globally respected engineering powerhouse known for transforming
                  complex technical concepts into robust, accessible, and scalable automation and
                  IoT systems that empower industries, businesses, and learners.
                </p>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <GlassCard className="h-full p-8 sm:p-10 border-[#FFBE1A]/20">
                <div className="w-12 h-12 rounded-xl bg-[#FFBE1A]/10 border border-[#FFBE1A]/30 flex items-center justify-center text-[#FFBE1A] mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-[#FFBE1A] uppercase tracking-wider block mb-2 font-semibold">
                  OUR MISSION
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Engineering Practical Solutions For Tangible Real-World Impact
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  To engineer dependable, high-efficiency systems through continuous learning,
                  rigorous experimentation, and uncompromised craftsmanship — bridging electrical,
                  mechanical, electronic, and software engineering.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            OUR PHILOSOPHY: LEARN • BUILD • REPEAT
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32 p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-[#10151D] to-[#0A0E15]">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFBE1A] font-semibold block mb-2">
                FOUNDATIONAL PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
                Learn • Build • Repeat
              </h2>
              <p className="mt-4 text-text-secondary text-base">
                Engineering excellence is not an accident. It is an intentional, iterative flywheel
                built upon three disciplined stages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-3xl font-mono font-black text-[#FFBE1A] mb-3">01</div>
                <h4 className="text-xl font-bold text-white mb-2">LEARN</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Deeply investigating system constraints, studying communication protocols,
                  examining component data sheets, and understanding the core physics of every
                  problem.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-3xl font-mono font-black text-accent mb-3">02</div>
                <h4 className="text-xl font-bold text-white mb-2">BUILD</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Moving promptly from concept to physical implementation. Fabricating circuit
                  boards, programming deterministic logic, assembling enclosures, and deploying
                  code.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-black/40 border border-white/[0.06]">
                <div className="text-3xl font-mono font-black text-accent-secondary mb-3">03</div>
                <h4 className="text-xl font-bold text-white mb-2">REPEAT</h4>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Stress testing, monitoring edge behaviors, benchmarking latency, refining user
                  interactions, and hardening the system for production longevity.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            WHAT MAKES US DIFFERENT
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32">
          <SectionHeading
            eyebrow="Distinct Edge"
            title="What Makes MR.Engineers Different"
            description="Our approach breaks away from standard agency templates to deliver real engineering integrity."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <AnimatedSection key={diff.title} delay={idx * 0.1}>
                  <GlassCard className="h-full p-8 flex items-start gap-5">
                    <div
                      className="p-3.5 rounded-xl border shrink-0"
                      style={{
                        backgroundColor: `${diff.color}15`,
                        borderColor: `${diff.color}40`,
                        color: diff.color,
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">{diff.title}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{diff.desc}</p>
                    </div>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            FOUNDER SECTION
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D] relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="relative w-44 h-44 rounded-2xl overflow-hidden border-2 border-white/10 bg-black shadow-2xl p-2 flex items-center justify-center">
                    <Image
                      src="/images/logo.jpg"
                      alt="MR.Engineers Leadership"
                      width={160}
                      height={160}
                      className="rounded-xl object-contain"
                    />
                  </div>
                  <h4 className="mt-5 text-xl font-bold text-white">The Person Behind MR.Engineers</h4>
                  <span className="text-xs font-mono text-[#FFBE1A] tracking-wider mt-1">
                    FOUNDER &amp; LEAD ENGINEER
                  </span>
                  <div className="mt-4 flex items-center gap-2">
                    <TechBadge text="Industrial Automation" />
                    <TechBadge text="IoT Architect" />
                  </div>
                </div>

                <div className="lg:col-span-8 lg:border-l lg:border-white/[0.08] lg:pl-10 space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-accent uppercase tracking-wider">
                    <Terminal className="w-3.5 h-3.5" /> Entrepreneurial Engineering
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Driven by Curiosity, Hands-on Prototyping, and Practical Building.
                  </h3>
                  <div className="space-y-3 text-text-secondary text-sm sm:text-base leading-relaxed">
                    <p>
                      MR.Engineers was created from a passionate commitment to hands-on engineering.
                      Starting from curious experimentation with microcontrollers, relay boards, and
                      control circuits, the journey grew into building production-grade industrial
                      automation and software systems.
                    </p>
                    <p>
                      The driving philosophy has always remained rooted in practical execution:
                      diving directly into schematics, understanding edge firmware constraints, and
                      writing clean, maintainable software that interfaces seamlessly with the physical
                      world.
                    </p>
                    <p className="text-white font-medium italic pt-2">
                      &ldquo;True engineering isn&apos;t about buzzwords. It&apos;s about building
                      something that operates reliably day after day on the factory floor or in the
                      field.&rdquo;
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <GradientButton href="/contact" icon={ArrowRight}>
                      Start a Project Together
                    </GradientButton>
                    <OutlineButton href="/careers">Join the Team</OutlineButton>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
