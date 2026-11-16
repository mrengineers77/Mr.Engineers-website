'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cpu,
  Settings,
  CircuitBoard,
  Wifi,
  Zap,
  Globe,
  Smartphone,
  Wrench,
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  PhoneCall,
  Terminal,
  Activity,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
  SectionDivider,
} from '@/components/ui';
import { AnimatedSection, staggerContainer, staggerItem } from '@/lib/animations';
import { SERVICES } from '@/lib/constants';

// Mapping icons for each service id
const serviceIcons: Record<string, { icon: any; color: string }> = {
  'industrial-automation': { icon: Settings, color: '#00D4FF' },
  'plc-scada': { icon: Cpu, color: '#7C5CFC' },
  'esp32-arduino': { icon: CircuitBoard, color: '#FFBE1A' },
  'iot-development': { icon: Wifi, color: '#00D4FF' },
  'embedded-systems': { icon: Layers, color: '#7C5CFC' },
  'electrical-electronics': { icon: Zap, color: '#FFBE1A' },
  'web-development': { icon: Globe, color: '#00D4FF' },
  'app-development': { icon: Smartphone, color: '#7C5CFC' },
  'technical-projects': { icon: Wrench, color: '#FFBE1A' },
};

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'automation', label: 'Automation & PLC' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'electrical', label: 'Electrical & Hardware' },
    { id: 'software', label: 'Web & Applications' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'automation') {
      return service.id === 'industrial-automation' || service.id === 'plc-scada';
    }
    if (activeFilter === 'iot') {
      return (
        service.id === 'esp32-arduino' ||
        service.id === 'iot-development' ||
        service.id === 'embedded-systems'
      );
    }
    if (activeFilter === 'electrical') {
      return service.id === 'electrical-electronics' || service.id === 'technical-projects';
    }
    if (activeFilter === 'software') {
      return service.id === 'web-development' || service.id === 'app-development';
    }
    return true;
  });

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#FFBE1A]/5 blur-[160px] pointer-events-none rounded-full" />

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
            <Settings className="w-3.5 h-3.5" /> Technical Capabilities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Full-Spectrum <br />
            <span className="gradient-text">Engineering Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            We deliver complete technical solutions across 9 core engineering disciplines — uniting
            shop-floor automation, microcontroller firmware, and modern web software.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            FILTER PILLS
           ════════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === cat.id
                  ? 'bg-accent text-black font-semibold shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'bg-[#10151D] text-text-secondary hover:text-white border border-white/[0.08]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            DETAILED SERVICES LIST
           ════════════════════════════════════════════════════════════════════ */}
        <div className="space-y-16">
          {filteredServices.map((service, index) => {
            const meta = serviceIcons[service.id] || { icon: Cpu, color: '#00D4FF' };
            const Icon = meta.icon;
            const isEven = index % 2 === 0;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-28"
              >
                <AnimatedSection>
                  <div className="rounded-3xl border border-white/[0.08] bg-[#10151D]/80 p-8 sm:p-12 backdrop-blur-xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
                    {/* Top ambient color bar */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background: `linear-gradient(90deg, ${meta.color}, transparent)`,
                      }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                      {/* Left Header & Technical Intro */}
                      <div className="lg:col-span-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-4 mb-6">
                            <div
                              className="w-14 h-14 rounded-2xl flex items-center justify-center border shadow-lg"
                              style={{
                                backgroundColor: `${meta.color}15`,
                                borderColor: `${meta.color}35`,
                                color: meta.color,
                              }}
                            >
                              <Icon className="w-7 h-7" />
                            </div>
                            <div>
                              <span className="text-xs font-mono text-text-muted">
                                DISCIPLINE // 0{index + 1}
                              </span>
                              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                                {service.title}
                              </h2>
                            </div>
                          </div>

                          <p className="text-text-secondary text-base leading-relaxed mb-6">
                            {service.shortDescription}
                          </p>

                          <div>
                            <span className="text-xs font-mono text-white uppercase tracking-wider block mb-3 font-semibold">
                              KEY TECHNOLOGIES INVOLVED:
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech) => (
                                <TechBadge key={tech} text={tech} />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between">
                          <GradientButton
                            href={`/contact?service=${encodeURIComponent(service.title)}`}
                            icon={ArrowRight}
                            className="text-xs py-2.5 px-5"
                          >
                            Inquire About This Service
                          </GradientButton>
                        </div>
                      </div>

                      {/* Right: Applications & Real-World Use Cases */}
                      <div className="lg:col-span-7 lg:border-l lg:border-white/[0.08] lg:pl-10 space-y-8">
                        {/* Applications */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Activity className="w-4 h-4 text-accent" />
                            <h3 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
                              Industrial &amp; Commercial Applications
                            </h3>
                          </div>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-text-secondary">
                            {service.applications.map((app, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 p-3 rounded-lg bg-black/30 border border-white/[0.04]"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                <span>{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Use Cases */}
                        <div className="p-6 rounded-2xl bg-black/40 border border-white/[0.06]">
                          <div className="flex items-center gap-2 mb-3">
                            <Terminal className="w-4 h-4 text-[#FFBE1A]" />
                            <h3 className="text-xs font-mono uppercase tracking-wider text-[#FFBE1A] font-semibold">
                              Representative Engineering Use Cases
                            </h3>
                          </div>
                          <div className="space-y-2.5 text-xs sm:text-sm text-text-secondary">
                            {service.useCases.map((uc, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <span className="text-text-muted font-mono">{i + 1}.</span>
                                <span className="text-white/90">{uc}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </section>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            BOTTOM CTA
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mt-24 p-8 sm:p-12 rounded-3xl border border-white/10 bg-gradient-to-r from-[#10151D] via-[#0E131C] to-[#10151D] text-center">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Need a Custom Cross-Discipline Solution?
            </h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base max-w-xl mx-auto">
              Most complex systems combine multiple domains — such as ESP32 telemetry feeding a PLC
              panel that interfaces with a Next.js control web dashboard. We excel at combined
              implementations.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <GradientButton href="/contact" icon={ArrowRight}>
                Consult Our Engineering Team
              </GradientButton>
              <OutlineButton href="/projects">Explore Projects</OutlineButton>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </div>
  );
}
