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
  const initialService = searchParams.get('service') || '';
  const initialProject = searchParams.get('project') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    serviceRequired: initialService,
    budget: '',
    details: initialProject ? `Regarding Project Architecture: ${initialProject}\n\n` : '',
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const budgetRanges = [
    'Not Specified / Flexible',
    'Under ₹50,000 (Rapid Prototype / Sensor Testing)',
    '₹50,000 – ₹2,00,000 (Small Automation / Custom PCB)',
    '₹2,00,000 – ₹5,00,000 (Medium Industrial Setup / IoT Network)',
    '₹5,00,000+ (Turnkey Industrial Automation / Full-Stack)',
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

    if (!formData.name || !formData.email || !formData.serviceRequired || !formData.details) {
      setFormStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Service, and Details).');
      return;
    }

    try {
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1400));
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        serviceRequired: '',
        budget: '',
        details: '',
      });
    } catch {
      setFormStatus('error');
      setErrorMessage('Submission failed. Please write directly to contact@mrengineers.in.');
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
              Based in Tamil Nadu&apos;s manufacturing &amp; engineering industrial corridor. We
              welcome technical project discussions, site automation audits, and prototype
              consultations.
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
                  <span className="text-[11px] text-text-muted block">(Placeholder / Update in constants)</span>
                </div>
              </div>
            </div>

            {/* Social channels */}
            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-wider text-text-secondary block mb-3 font-semibold">
                OFFICIAL CHANNELS
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 hover:border-accent/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-accent" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 hover:border-[#FFBE1A]/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FFBE1A]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-black/40 border border-white/10 hover:border-red-500/40 text-xs font-mono text-text-secondary hover:text-white flex items-center gap-2 transition-colors"
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
              <span className="text-white font-semibold block mb-0.5">Prompt Engineering Response</span>
              All project specifications and inquiries receive initial technical scoping from our core team within 24–48 hours.
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
                ENGINEERING INQUIRY FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Describe Your Project Requirements
              </h2>
              <p className="text-text-secondary text-sm mt-1">
                Provide as much context as possible regarding your system goals, sensors, or
                automation parameters.
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
                <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto">
                  Thank you for reaching out to MR.Engineers. Our technical team is reviewing your
                  specifications and will respond with preliminary technical scoping shortly.
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
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Company / Organization (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g. Apex Manufacturing Industries"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    />
                  </div>

                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Primary Service Required <span className="text-accent">*</span>
                    </label>
                    <select
                      name="serviceRequired"
                      value={formData.serviceRequired}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                    >
                      <option value="">Select an Engineering Discipline</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other / Cross-Discipline">Other / Custom Integration</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                    Estimated Project Budget (Optional)
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

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                    Project Scope &amp; Specifications <span className="text-accent">*</span>
                  </label>
                  <textarea
                    name="details"
                    rows={5}
                    value={formData.details}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your operational requirement, input/output constraints, timeline expectations, or existing machinery..."
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
                        <span>Transmit Project Specifications</span>
                        <Send className="w-4 h-4 ml-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-text-muted font-mono">
              <span>SECURITY: CONFIDENTIAL TRANSMISSION</span>
              <span>TAMIL NADU, INDIA</span>
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
            <Send className="w-3.5 h-3.5" /> Direct Communications
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
            want to explore a technical collaboration, our engineers are ready.
          </motion.p>
        </div>

        <Suspense fallback={<div className="text-center py-20 font-mono text-sm text-text-muted">Loading inquiry console...</div>}>
          <ContactFormInner />
        </Suspense>
      </div>
    </div>
  );
}
