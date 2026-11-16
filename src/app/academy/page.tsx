'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Cpu,
  Settings,
  CircuitBoard,
  Wifi,
  Layers,
  Zap,
  Globe,
  Wrench,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Clock,
  Send,
  Users,
  Briefcase,
  Terminal,
  BookOpen,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection, staggerContainer, staggerItem } from '@/lib/animations';
import { ACADEMY_DOMAINS, INTERNSHIP_ROLES } from '@/lib/constants';

export default function AcademyPage() {
  const [activeTab, setActiveTab] = useState<'training' | 'internships'>('training');

  // Interactive Form State for Registration / Inquiry
  const [formType, setFormType] = useState<'training' | 'internship'>('training');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    qualification: '',
    program: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFeedbackMsg('');

    if (!formData.name || !formData.email || !formData.phone || !formData.program) {
      setFormStatus('error');
      setFeedbackMsg('Please complete all mandatory fields (Name, Email, Phone, and Program).');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: formType === 'training' ? 'academy_training' : 'academy_internship',
          ...formData,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        institution: '',
        qualification: '',
        program: '',
        message: '',
      });
    } catch {
      setFormStatus('error');
      setFeedbackMsg('Unable to submit at this moment. Please email mrengineers.contact@gmail.com directly.');
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#FFBE1A]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ════════════════════════════════════════════════════════════════════
            HERO SECTION
           ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-[#FFBE1A]/30 bg-[#FFBE1A]/5 text-[#FFBE1A] mb-6"
          >
            <GraduationCap className="w-3.5 h-3.5" /> Technical Skill Development
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Learn. Build. <br />
            <span className="text-[#FFBE1A]">Engineer.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            Bridging academia and industrial reality. MR.Engineers Academy provides hands-on,
            prototype-driven technical training and project-based internship tracks for students and
            aspiring engineers.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            AICTE ACCREDITATION BANNER
           ════════════════════════════════════════════════════════════════════ */}
        <AnimatedSection className="mb-14">
          <div className="p-6 sm:p-8 rounded-3xl border border-[#FFBE1A]/30 bg-gradient-to-r from-[#10151D] via-[#161D28] to-[#10151D] relative overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFBE1A]/10 border border-[#FFBE1A]/30 flex items-center justify-center text-[#FFBE1A] shrink-0 mt-1">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-[11px] font-mono uppercase tracking-wider bg-[#FFBE1A]/10 text-[#FFBE1A] border border-[#FFBE1A]/30 mb-2">
                    Official Recognition // Govt. of India
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    AICTE Registered Internship Provider
                  </h3>
                  <p className="mt-1.5 text-text-secondary text-sm max-w-2xl leading-relaxed">
                    MR.Engineers is registered on the <strong>AICTE Internship Portal</strong> (All India Council for Technical Education, Ministry of Education, Govt. of India). All completed internship certificates are verified and recognized for university academic credits, curricular semester requirements, and institutional evaluations.
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <a
                  href="#register"
                  onClick={() => {
                    setActiveTab('internships');
                    setFormType('internship');
                  }}
                  className="btn-primary text-xs py-3 px-5 text-center font-bold"
                >
                  Apply for AICTE Internship
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════════════════════════════
            TAB SELECTOR: Training Domains vs. Internship Programs
           ════════════════════════════════════════════════════════════════════ */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#10151D] border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab('training')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'training'
                  ? 'bg-accent text-black shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              8 Training Domains
            </button>
            <button
              onClick={() => setActiveTab('internships')}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === 'internships'
                  ? 'bg-[#FFBE1A] text-black shadow-[0_0_20px_rgba(255,190,26,0.3)]'
                  : 'text-text-secondary hover:text-white'
              }`}
            >
              6 Internship Tracks
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            TAB CONTENT 1: 8 TRAINING DOMAINS
           ════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'training' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {ACADEMY_DOMAINS.map((domain, idx) => (
              <AnimatedSection key={domain.title} delay={idx * 0.06}>
                <div className="p-6 rounded-2xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-md h-full flex flex-col justify-between group hover:border-accent/40 transition-all">
                  <div>
                    <span className="text-xs font-mono text-accent block mb-2 font-semibold">
                      TRACK 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {domain.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted block mb-2 font-semibold">
                      KEY COMPETENCIES:
                    </span>
                    <div className="flex flex-wrap gap-1 pt-2 border-t border-white/[0.04]">
                      {domain.skills.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.06] text-text-secondary"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            TAB CONTENT 2: 6 INTERNSHIP ROLES
           ════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'internships' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24" id="internships">
            {INTERNSHIP_ROLES.map((role, idx) => (
              <AnimatedSection key={role.role} delay={idx * 0.08}>
                <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-md h-full flex flex-col justify-between group hover:border-[#FFBE1A]/40 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#FFBE1A]/10 border border-[#FFBE1A]/30 text-[#FFBE1A] font-semibold uppercase">
                        INTERNSHIP TRACK
                      </span>
                      <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {role.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFBE1A] transition-colors">
                      {role.role}
                    </h3>

                    <div className="mb-4">
                      <span className="text-[11px] font-mono text-text-muted uppercase block">
                        ELIGIBILITY:
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        {role.eligibility}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-text-muted uppercase block">
                        PRACTICAL FOCUS:
                      </span>
                      <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                        {role.focus}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.04]">
                    <button
                      onClick={() => {
                        setFormType('internship');
                        setFormData((prev) => ({ ...prev, program: role.role }));
                        const element = document.getElementById('academy-form');
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-[#FFBE1A] hover:underline flex items-center gap-1"
                    >
                      <span>Apply For This Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        )}

        {/* ════════════════════════════════════════════════════════════════════
            TRANSPARENT PROGRAM POLICY
           ════════════════════════════════════════════════════════════════════ */}
        <AnimatedSection>
          <div className="p-6 rounded-2xl border border-white/10 bg-[#10151D]/60 flex items-start gap-4 max-w-3xl mx-auto mb-20 text-xs text-text-muted">
            <div className="p-2 rounded-lg bg-white/[0.05] text-[#FFBE1A] shrink-0">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-white block font-semibold mb-1">
                ACADEMY &amp; INTERNSHIP POLICY
              </span>
              <p className="leading-relaxed text-text-secondary">
                MR.Engineers Academy programs and internships focus strictly on practical, hands-on
                technical learning. We do not promise artificial corporate accreditation, guaranteed
                placements, or government certifications. Admission is based on technical curiosity,
                foundational knowledge, and project capacity.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ════════════════════════════════════════════════════════════════════
            INTERACTIVE APPLICATION / INQUIRY FORM
           ════════════════════════════════════════════════════════════════════ */}
        <div id="academy-form" className="max-w-4xl mx-auto mb-20 scroll-mt-28">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D] shadow-2xl relative overflow-hidden">
              <div className="mb-8 pb-6 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#FFBE1A] font-semibold block mb-1">
                    ACADEMY REGISTRATION CONSOLE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white">
                    Enroll or Inquire for a Track
                  </h2>
                </div>

                <div className="inline-flex p-1 rounded-xl bg-black/40 border border-white/10">
                  <button
                    type="button"
                    onClick={() => setFormType('training')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      formType === 'training'
                        ? 'bg-accent text-black font-semibold'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    Training Inquiry
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType('internship')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      formType === 'internship'
                        ? 'bg-[#FFBE1A] text-black font-semibold'
                        : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    Internship Application
                  </button>
                </div>
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
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto">
                    Thank you for applying to MR.Engineers Academy. Our mentors will review your
                    profile and reach out with batch schedules and onboarding details.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="btn-secondary text-xs mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-400 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{feedbackMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Arun Kumar"
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
                        placeholder="arun@domain.com"
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
                        College / Institution
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        placeholder="e.g. Kongu Engineering College"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Educational Qualification
                      </label>
                      <input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        placeholder="e.g. 3rd Year B.E. EEE / Diploma"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Selected Program / Track <span className="text-accent">*</span>
                      </label>
                      <select
                        name="program"
                        value={formData.program}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      >
                        <option value="">Select a Program</option>
                        {formType === 'training' ? (
                          <>
                            {ACADEMY_DOMAINS.map((d) => (
                              <option key={d.title} value={`Training: ${d.title}`}>
                                {d.title} (Training)
                              </option>
                            ))}
                          </>
                        ) : (
                          <>
                            {INTERNSHIP_ROLES.map((r) => (
                              <option key={r.role} value={`Internship: ${r.role}`}>
                                {r.role} (Internship)
                              </option>
                            ))}
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Technical Interests / Prior Projects
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share what hardware, circuits, or coding tools you have explored so far..."
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
                        <span>Submitting to Academy Admissions...</span>
                      ) : (
                        <>
                          <span>Submit Academy Application</span>
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
