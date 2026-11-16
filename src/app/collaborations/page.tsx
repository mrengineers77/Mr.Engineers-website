'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  GraduationCap,
  Wrench,
  Briefcase,
  Cpu,
  Settings,
  Zap,
  CheckCircle2,
  AlertCircle,
  Send,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
} from '@/components/ui';
import { AnimatedSection } from '@/lib/animations';
import { COLLABORATION_OFFERINGS } from '@/lib/constants';

const iconsMap: Record<string, any> = {
  GraduationCap,
  Wrench,
  Briefcase,
  Cpu,
  Settings,
  Zap,
};

export default function CollaborationsPage() {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    email: '',
    phone: '',
    institutionName: '',
    collaborationType: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const collaborationTypes = [
    'College Academic Partnership / MoU',
    'Technical Hands-On Workshop (1–3 Days)',
    'Structured Student Internship Batches',
    'Final Year Project Mentorship',
    'Industrial Automation Consultancy',
    'On-Campus Technology Demonstration Lab',
    'Faculty Development Program (FDP)',
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

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.institutionName ||
      !formData.collaborationType
    ) {
      setFormStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'collaboration_inquiry',
          ...formData,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setFormStatus('success');
      setFormData({
        name: '',
        designation: '',
        email: '',
        phone: '',
        institutionName: '',
        collaborationType: '',
        message: '',
      });
    } catch {
      setFormStatus('error');
      setErrorMessage('Unable to submit inquiry at this moment. Please email mrengineers.contact@gmail.com.');
    }
  };

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
            <Users className="w-3.5 h-3.5" /> Institutional &amp; Industry Partnerships
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Let&apos;s Build The Next <br />
            <span className="gradient-text">Generation of Engineers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            We collaborate with engineering colleges, polytechnics, and industrial enterprises to
            foster practical engineering skills through workshops, internships, and joint project
            development.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            6 COLLABORATION OFFERINGS
           ════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {COLLABORATION_OFFERINGS.map((item, idx) => {
            const Icon = iconsMap[item.icon] || Users;
            return (
              <AnimatedSection key={item.title} delay={idx * 0.08}>
                <div className="p-8 rounded-3xl border border-white/[0.08] bg-[#10151D]/80 backdrop-blur-md h-full flex flex-col justify-between group hover:border-white/20 transition-all">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.04]">
                    <button
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          collaborationType: item.title,
                        }));
                        const form = document.getElementById('collab-form');
                        form?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-xs font-semibold text-accent hover:underline flex items-center gap-1"
                    >
                      <span>Inquire for {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            COLLABORATION ENQUIRY FORM
           ════════════════════════════════════════════════════════════════════ */}
        <div id="collab-form" className="max-w-4xl mx-auto scroll-mt-28">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D] shadow-2xl relative overflow-hidden">
              <div className="mb-8 pb-6 border-b border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                  INSTITUTIONAL PARTNERSHIP CONSOLE
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Initiate a College or Industry Collaboration
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Fill in the details below. Our leadership will review your request and schedule a
                  preliminary discussion.
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
                  <h3 className="text-2xl font-bold text-white">Collaboration Inquiry Dispatched!</h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto">
                    Thank you for reaching out. Our engineering operations team will review your
                    institution&apos;s request and respond within 24–48 hours.
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
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Dr. P. Ramesh / Prof. Priya"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleInputChange}
                        placeholder="e.g. HOD – EEE / Placement Coordinator / Director"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Official Email <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="hod.eee@college.edu.in"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Phone / Contact Number <span className="text-accent">*</span>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        College / Enterprise Name <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="institutionName"
                        value={formData.institutionName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Bannari Amman Institute of Technology"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Collaboration Scope <span className="text-accent">*</span>
                      </label>
                      <select
                        name="collaborationType"
                        value={formData.collaborationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      >
                        <option value="">Select Collaboration Type</option>
                        {collaborationTypes.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Specific Requirements, Proposed Dates, or Student Count
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share details on department, expected batch size, preferred topic (PLC, ESP32, IoT), or MoU guidelines..."
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
                        <span>Transmitting Collaboration Proposal...</span>
                      ) : (
                        <>
                          <span>Transmit Collaboration Proposal</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-text-muted font-mono flex items-center justify-between">
                <span>INSTITUTIONAL PARTNERSHIP CELL</span>
                <span>ERODE, TAMIL NADU</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
