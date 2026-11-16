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
  Users,
  CheckCircle2,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection, staggerContainer, staggerItem } from '@/lib/animations';
import { BRAND, FOUNDERS, PROCESS_STEPS } from '@/lib/constants';

export default function AboutPage() {
  const coreValues = [
    {
      title: 'Practical Craftsmanship',
      desc: 'We value working systems over abstract slides. If code or a circuit doesn’t operate reliably under field conditions, it isn’t finished.',
      icon: Wrench,
      color: '#00D4FF',
    },
    {
      title: 'Continuous Mastery (Learn)',
      desc: 'Engineering protocols and semiconductor architectures evolve daily. We constantly master modern chips, frameworks, and communication buses.',
      icon: Cpu,
      color: '#FFBE1A',
    },
    {
      title: 'Relentless Iteration (Repeat)',
      desc: 'Building a prototype is only step one. We refine schematics, optimize loop timings, eliminate noise, and harden enclosures until industrial perfection is achieved.',
      icon: Activity,
      color: '#7C5CFC',
    },
    {
      title: 'Integrity & Transparency',
      desc: 'We never misrepresent project readiness, inflate client figures, or invent fake claims. Our work stands on verified engineering merits.',
      icon: ShieldCheck,
      color: '#00D4FF',
    },
  ];

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
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
            <Compass className="w-3.5 h-3.5" /> Corporate Profile
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
            MR.Engineers is an engineering and technology company founded by Hariprasath J and
            Santhosh M M in Erode, Tamil Nadu. We transform practical engineering ideas into
            functional industrial technology.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            OUR STORY & WHO WE ARE
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="text-xs font-mono uppercase text-[#FFBE1A] tracking-wider block font-semibold">
                  OUR STORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  Born in the Industrial Heart of Tamil Nadu.
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed text-base">
                  <p>
                    MR.Engineers began with a fundamental realization: modern manufacturing,
                    commercial facilities, and educational institutions often struggle with a
                    disconnect between heavy electrical machinery and modern software systems.
                  </p>
                  <p>
                    Founders <strong className="text-white">Hariprasath J</strong> (Chief Engineer &amp; Manager) and{' '}
                    <strong className="text-white">Santhosh M M</strong> (Chief Electrical Engineer) founded MR.Engineers in
                    Erode to bridge this gap. Starting with cinema auditorium lighting automation
                    panels and rapid microcontroller prototypes, the company expanded into full-scale
                    industrial automation, PLC/SCADA architecture, wireless IoT networks, and the
                    MR.Engineers Academy.
                  </p>
                  <p>
                    Today, our work spans commercial cinema automation installations, custom
                    embedded control boards, research roadmaps, and structured engineering training
                    for the next generation of builders.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="p-8 rounded-2xl border border-white/10 bg-[#10151D]/90 shadow-2xl relative overflow-hidden">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.08]">
                    <div className="p-2 rounded-xl bg-black border border-white/10">
                      <Image
                        src="/images/logo.jpg"
                        alt="MR.Engineers"
                        width={56}
                        height={56}
                        className="rounded-lg object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">MR.Engineers</h4>
                      <p className="text-xs font-mono text-[#FFBE1A]">{BRAND.statement}</p>
                    </div>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">REGISTRATION:</span>
                      <span className="text-emerald-400 font-semibold">{BRAND.registration.udyamNumber}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">GOVT. ACCREDITATION:</span>
                      <span className="text-[#FFBE1A] font-semibold">AICTE Registered Provider</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">LOCATION:</span>
                      <span className="text-white font-medium">{BRAND.location}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">REGISTERED OFFICE:</span>
                      <span className="text-white text-right max-w-[200px] truncate">{BRAND.registeredOffice.fullAddress}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">FOUNDERS:</span>
                      <span className="text-accent font-medium">Hariprasath J &amp; Santhosh M M</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-white/[0.04]">
                      <span className="text-text-muted">DISCIPLINES:</span>
                      <span className="text-white font-medium">Automation • IoT • Software</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-text-muted">TAGLINE:</span>
                      <span className="text-[#FFBE1A] font-semibold">{BRAND.tagline}</span>
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
                  Engineering the Future of Practical Technology
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  To become a recognized international technology powerhouse known for practical,
                  reliable industrial automation, cutting-edge embedded systems, and empowering the
                  next generation of engineers with real prototyping skills.
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
                  Transforming Engineering Ideas into Working Reality
                </h3>
                <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                  To engineer dependable, high-efficiency systems through continuous learning,
                  disciplined experimentation, and uncompromising craftsmanship — bridging
                  electrical, embedded, and digital engineering without shortcuts.
                </p>
              </GlassCard>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            CORE VALUES
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32">
          <SectionHeading
            eyebrow="Ethos"
            title="Our Core Values"
            description="The foundational principles that guide every circuit we solder and every line of code we deploy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 0.08}>
                  <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-md h-full flex flex-col justify-between">
                    <div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center border mb-4"
                        style={{
                          backgroundColor: `${v.color}15`,
                          borderColor: `${v.color}35`,
                          color: v.color,
                        }}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white mb-2">{v.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            ENGINEERING PHILOSOPHY: LEARN • BUILD • REPEAT
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32 p-8 sm:p-14 rounded-3xl border border-white/10 bg-gradient-to-b from-[#10151D] to-[#0A0E15]">
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
            GOVERNMENT ACCREDITATIONS & CORPORATE REGISTRATION
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-24 lg:mb-32">
          <SectionHeading
            eyebrow="Official Credentials"
            title="Registered Enterprise & National Accreditations"
            description="MR.Engineers operates as a legally incorporated, government-recognized technology enterprise and certified academic internship partner."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Udyam MSME Certificate Card */}
            <AnimatedSection delay={0.1}>
              <div className="p-8 rounded-3xl border border-emerald-500/30 bg-[#10151D]/90 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold block mb-1">
                    GOVT. OF INDIA MSME
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Udyam Registration Certificate
                  </h3>
                  <div className="my-3 px-3 py-2 rounded-xl bg-black/60 border border-white/10 font-mono text-sm font-bold text-white inline-block">
                    {BRAND.registration.udyamNumber}
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mt-2">
                    Certified Micro Enterprise (Services) under the Ministry of Micro, Small and
                    Medium Enterprises, Government of India. Operating through District Industries
                    Centre, Erode and MSME-DFO, Chennai.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-text-muted flex justify-between">
                  <span>INCORPORATION: 02/05/2026</span>
                  <span className="text-emerald-400">ACTIVE &amp; VERIFIED</span>
                </div>
              </div>
            </AnimatedSection>

            {/* AICTE Internship Partner Card */}
            <AnimatedSection delay={0.2}>
              <div className="p-8 rounded-3xl border border-[#FFBE1A]/30 bg-[#10151D]/90 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFBE1A]/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FFBE1A]/10 border border-[#FFBE1A]/20 flex items-center justify-center text-[#FFBE1A] mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-[#FFBE1A] font-semibold block mb-1">
                    MINISTRY OF EDUCATION
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    AICTE Registered Internship Provider
                  </h3>
                  <div className="my-3 px-3 py-2 rounded-xl bg-black/60 border border-white/10 font-mono text-sm font-bold text-[#FFBE1A] inline-block">
                    AICTE Internship Portal
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mt-2">
                    Officially registered on the All India Council for Technical Education (AICTE)
                    Internship Portal. All technical training certifications and student internship
                    credits satisfy university curriculum standards.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-text-muted flex justify-between">
                  <span>ACADEMIC CREDITS: VALIDATED</span>
                  <span className="text-[#FFBE1A]">OFFICIALLY LISTED</span>
                </div>
              </div>
            </AnimatedSection>

            {/* National Industry Classification Scope */}
            <AnimatedSection delay={0.3}>
              <div className="p-8 rounded-3xl border border-accent/20 bg-[#10151D]/90 h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none" />
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                    <Activity className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-accent font-semibold block mb-1">
                    OFFICIAL OPERATIONAL SCOPE
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">
                    National Industry Codes (NIC)
                  </h3>
                  <div className="mt-3 space-y-1.5 font-mono text-[11px] text-text-secondary">
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
                      <strong className="text-white">NIC 71100:</strong> Engineering &amp; Technical Consultancy
                    </div>
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
                      <strong className="text-white">NIC 62011-13:</strong> Software &amp; Web Development
                    </div>
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
                      <strong className="text-white">NIC 85499:</strong> Technical Training &amp; Education
                    </div>
                    <div className="p-1.5 rounded bg-black/40 border border-white/[0.04]">
                      <strong className="text-white">NIC 72100:</strong> R&amp;D on Engineering Sciences
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] text-[11px] font-mono text-text-muted">
                  <span>REGISTERED OFFICE: BHAVANI, ERODE</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            OUR 4-STEP APPROACH
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Methodology"
            title="Our Engineering Approach"
            description="A disciplined execution framework that guarantees reliable field deployment."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <AnimatedSection key={step.number} delay={idx * 0.1}>
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#10151D]/70 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-3xl font-mono font-black text-white/10 block mb-4">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.04]">
                    <span className="text-[10px] font-mono text-text-muted">STAGE {step.number} // EXECUTION</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-12 text-center">
            <GradientButton href="/founders" icon={ArrowRight}>
              Meet Our Founders
            </GradientButton>
          </div>
        </section>
      </div>
    </div>
  );
}
