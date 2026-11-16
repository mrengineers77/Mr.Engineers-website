'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import {
  SectionHeading,
  GlassCard,
  GradientButton,
  OutlineButton,
  TechBadge,
  BrandLogo,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
} from '@/components/ui';
import { AnimatedSection } from '@/lib/animations';
import { BRAND, SERVICES, SOCIAL_LINKS } from '@/lib/constants';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialIntent = searchParams.get('intent') || 'project';
  const initialService = searchParams.get('service') || '';
  const initialProject = searchParams.get('project') || '';

  const [inquiryType, setInquiryType] = useState<string>(
    initialIntent === 'rnd'
      ? 'R&D / Co-Development'
      : initialIntent === 'founder_meeting'
      ? 'Founder Consultation'
      : initialIntent === 'training'
      ? 'Academy Training'
      : 'Project Engineering'
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceRequired: initialService,
    budget: '',
    details: initialProject ? `Regarding Project Architecture: ${initialProject}\n\n` : '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const inquiryTypes = [
    'Project Engineering',
    'General Enquiry',
    'Academy Training',
    'Internship Inquiry',
    'College Partnership',
    'R&D / Co-Development',
  ];

  const budgetRanges = [
    'Not Specified / Flexible',
    'Under ₹50,000 (Rapid Prototyping / Module Testing)',
    '₹50,000 – ₹2,00,000 (Small Automation / Custom Hardware)',
    '₹2,00,000 – ₹5,00,000 (Full Cinema Control / Industrial Panel)',
    '₹5,00,000+ (Multi-Screen Multiplex / Plant Automation)',
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

    if (!formData.name || !formData.email || !formData.details) {
      setFormStatus('error');
      setErrorMessage('Please complete all required fields (Name, Email, and Project Details).');
      return;
    }

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: inquiryType,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.serviceRequired,
          budget: formData.budget,
          message: formData.details,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit inquiry');

      setReferenceId(data.referenceId || `MR-${Date.now().toString().slice(-6)}`);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        serviceRequired: '',
        budget: '',
        details: '',
      });
    } catch (err: any) {
      setFormStatus('error');
      setErrorMessage(
        err.message || 'Submission failed. Please email mrengineers.contact@gmail.com directly.'
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* ── Left Column: Contact Channels & Credentials ────────────────────── */}
      <div className="lg:col-span-5 space-y-6">
        <AnimatedSection>
          <div className="p-8 rounded-3xl border border-white/10 bg-[#10151D] shadow-xl relative overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-2">Corporate Headquarters</h3>
            <p className="text-sm text-text-secondary mb-6 leading-relaxed">
              Based in Erode, Tamil Nadu. We welcome industrial automation inquiries, prototype
              feasibility discussions, and academic collaborations across India.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted block">LOCATION</span>
                  <span className="text-sm text-white font-medium">{BRAND.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFBE1A]/10 border border-[#FFBE1A]/20 flex items-center justify-center text-[#FFBE1A] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted block">EMAIL INQUIRIES</span>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-sm text-white hover:text-accent font-medium transition-colors"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 border border-accent-secondary/20 flex items-center justify-center text-accent-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-text-muted block">TELEPHONE</span>
                  <span className="text-sm text-white font-medium">{BRAND.phone}</span>
                  <span className="text-[11px] text-text-muted block">(Configurable Placeholder)</span>
                </div>
              </div>
            </div>

            {/* Official Social channels */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-3 font-semibold">
                OFFICIAL SOCIAL CHANNELS
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-accent/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-accent" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-[#FFBE1A]/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FFBE1A]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-black/40 border border-white/10 hover:border-red-500/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
                >
                  <YoutubeIcon className="w-4 h-4 text-red-500" />
                  <span>YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Engineering Response SLA badge */}
        <AnimatedSection delay={0.1}>
          <div className="p-6 rounded-2xl border border-white/[0.06] bg-[#10151D]/60 flex items-start gap-4">
            <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <div className="text-xs text-text-secondary">
              <span className="text-white font-semibold block mb-0.5">Prompt Engineering Scoping</span>
              All project specifications and partnership inquiries receive technical scoping from
              our founders and engineering team within 24–48 hours.
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* ── Right Column: Project Inquiry Form ─────────────────────────────── */}
      <div className="lg:col-span-7">
        <AnimatedSection delay={0.1}>
          <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D] shadow-2xl relative overflow-hidden">
            <div className="mb-8 pb-6 border-b border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-1">
                MULTI-PURPOSE COMMUNICATIONS CONSOLE
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Transmit Your Requirements
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Select your inquiry classification and provide your operational constraints.
              </p>

              {/* Inquiry Type Pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInquiryType(type)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                      inquiryType === type
                        ? 'bg-accent text-black font-semibold'
                        : 'bg-black/30 border border-white/10 text-text-secondary hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
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
                <h3 className="text-2xl font-bold text-white">Transmission Recorded!</h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  Thank you for reaching out to MR.Engineers. Your inquiry reference ID is{' '}
                  <strong className="text-accent font-mono">{referenceId}</strong>. Our engineering
                  team will respond with technical scoping shortly.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="btn-secondary text-xs mt-4"
                >
                  Send Another Inquiry
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
                  {/* Name */}
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
                      placeholder="e.g. Senthil Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Email */}
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
                      placeholder="senthil@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Organization / Institution (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Cinema / Factory / College Name"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Discipline / Domain Focus
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select an Engineering Discipline</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Cinema Automation System">Cinema Automation System</option>
                      <option value="Academy Training / Internship">Academy Training / Internship</option>
                      <option value="College MoU / Workshop">College MoU / Workshop</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Budget Bracket (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select an estimated budget range</option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                    Scope &amp; Functional Specifications <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="details"
                    rows={5}
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your operational requirements, physical site constraints, sensors involved, or project timeline..."
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
                      <span>Transmitting Inquiry to Engineering...</span>
                    ) : (
                      <>
                        <span>Transmit Specifications to Engineering</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted font-mono">
              <span>CONFIDENTIAL TRANSMISSION // ENCRYPTED</span>
              <span>ERODE, TAMIL NADU</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-accent/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 -left-40 w-[600px] h-[600px] bg-[#7C5CFC]/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border border-white/10 bg-[#10151D] text-accent mb-6"
          >
            <Send className="w-3.5 h-3.5" /> Communications Console
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Let&apos;s Build <br />
            <span className="gradient-text">What&apos;s Next.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            Whether you have an automation requirement, need custom embedded hardware developed, or
            want to explore a technical collaboration, our engineers and founders are ready.
          </motion.p>
        </div>

        <Suspense fallback={<div className="text-center py-20 font-mono text-sm text-text-muted">Loading communications console...</div>}>
          <ContactFormInner />
        </Suspense>
      </div>
    </div>
  );
}
