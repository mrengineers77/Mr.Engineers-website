'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  GraduationCap,
  Send,
  CheckCircle2,
  AlertCircle,
  FileText,
  Upload,
  Cpu,
  Terminal,
  Activity,
  Sparkles,
  ArrowRight,
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

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    roleInterest: 'General Engineering Application',
    institution: '',
    qualification: '',
    resumeLink: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const roles = [
    {
      category: 'Engineering Roles',
      title: 'Industrial Automation Engineer',
      type: 'Full-Time / Project-Based',
      status: 'No Active Openings (Accepting General Profiles)',
      description: 'Hands-on PLC ladder programming, control cabinet wiring, and on-site cinema/factory commissioning.',
    },
    {
      category: 'Engineering Roles',
      title: 'Embedded Systems & IoT Hardware Engineer',
      type: 'Full-Time / Project-Based',
      status: 'No Active Openings (Accepting General Profiles)',
      description: 'ESP32/STM32 firmware architecture, schematic capture, PCB layout, and wireless sensor integration.',
    },
    {
      category: 'Software Roles',
      title: 'Full-Stack Web & Dashboard Developer',
      type: 'Full-Time / Project-Based',
      status: 'No Active Openings (Accepting General Profiles)',
      description: 'Building high-performance Next.js telemetry interfaces, WebSocket streams, and backend REST APIs.',
    },
    {
      category: 'Internship Opportunities',
      title: 'MR.Engineers Academy Technical Interns',
      type: 'Internship (1–3 Months)',
      status: 'Batches Enrolling via Academy',
      description: 'Hands-on training and real project exposure in Automation, IoT, and Embedded Electronics.',
      isInternship: true,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    if (!formData.fullName || !formData.email || !formData.phone || !formData.roleInterest) {
      setFormStatus('error');
      setErrorMessage('Please complete all mandatory fields.');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'career_application',
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          qualification: formData.qualification,
          institution: formData.institution,
          department: formData.roleInterest,
          message: `${formData.message}\n\nPortfolio/Resume Link: ${formData.resumeLink}`,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setFormStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        roleInterest: 'General Engineering Application',
        institution: '',
        qualification: '',
        resumeLink: '',
        message: '',
      });
    } catch {
      setFormStatus('error');
      setErrorMessage('Failed to submit application. Please email your resume to contact@mrengineers.in.');
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Ambient background glows */}
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
            <Briefcase className="w-3.5 h-3.5" /> Career Opportunities
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Build With <br />
            <span className="gradient-text">MR.Engineers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            Join a technical team where hands-on engineering, physical prototyping, and real-world
            client deployments define our everyday work.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            CURRENT OPPORTUNITIES & STATUS
           ════════════════════════════════════════════════════════════════════ */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono uppercase text-accent tracking-wider font-semibold block">
                OPPORTUNITY STATUS
              </span>
              <h2 className="text-2xl font-bold text-white">Current Openings</h2>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-text-secondary">
              Updated for 2026
            </span>
          </div>

          <div className="space-y-4 mb-8">
            {roles.map((r, i) => (
              <AnimatedSection key={r.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#10151D]/70 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-white/20 transition-all">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono text-accent">{r.category}</span>
                      <span className="text-xs font-mono text-text-muted">• {r.type}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{r.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary">{r.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
                    <span
                      className={`text-xs font-mono px-3 py-1 rounded-full ${
                        r.isInternship
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold'
                          : 'bg-white/[0.04] text-text-muted border border-white/[0.08]'
                      }`}
                    >
                      {r.status}
                    </span>
                    {r.isInternship ? (
                      <Link href="/academy#internships" className="btn-primary text-xs py-2 px-4">
                        View Academy Tracks
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, roleInterest: r.title }));
                          const form = document.getElementById('career-form');
                          form?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-secondary text-xs py-2 px-4"
                      >
                        Submit General Profile
                      </button>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Transparent Notice */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center gap-3 text-xs text-text-secondary">
            <Info className="w-4 h-4 text-accent shrink-0" />
            <span>
              <strong>Note on Hiring:</strong> While there are currently no immediate vacant full-time
              positions, we maintain an active talent pool. High-aptitude candidates who submit their
              profiles are prioritized as new client deployments scale.
            </span>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════════════════
            GENERAL APPLICATION FORM
           ════════════════════════════════════════════════════════════════════ */}
        <div id="career-form" className="max-w-4xl mx-auto scroll-mt-28 mb-20">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D] shadow-2xl relative overflow-hidden">
              <div className="mb-8 pb-6 border-b border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFBE1A] font-semibold block mb-1">
                  CANDIDATE TALENT POOL
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Submit a General Application
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Show us what you love to build. Share your background, GitHub, or portfolio link.
                </p>
              </div>

              {formStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Recorded!</h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto">
                    Thank you for applying. We have registered your profile in our engineering talent
                    records and will reach out when project requirements match your skill set.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary text-xs mt-4"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Vignesh R"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Email Address <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="vignesh@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Phone Number <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Area of Interest <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="roleInterest"
                        value={formData.roleInterest}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. PLC Automation / ESP32 Hardware / Full-Stack"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        College / Institution
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        placeholder="e.g. Coimbatore Institute of Technology"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Resume / Portfolio URL (Google Drive / GitHub)
                      </label>
                      <input
                        type="url"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        placeholder="https://github.com/... or Drive link"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Technical Notes / Projects Built
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details of any hardware circuits, microcontrollers, or web tools you have personally worked with..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="btn-primary w-full justify-center py-4 text-base font-semibold"
                    >
                      {formStatus === 'submitting' ? (
                        <span>Submitting Profile...</span>
                      ) : (
                        <>
                          <span>Submit General Application</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
