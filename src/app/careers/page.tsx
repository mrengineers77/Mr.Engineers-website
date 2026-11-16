'use client';

import { useState } from 'react';
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
    institution: '',
    qualification: '',
    department: '',
    message: '',
  });

  const [fileName, setFileName] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const departments = [
    'Industrial Automation (PLC & SCADA)',
    'IoT Development (MQTT & Cloud)',
    'ESP32 & Arduino Embedded Systems',
    'Electrical & Panel Fabrication',
    'Web & Full-Stack Development',
    'Hardware Prototyping & PCB Design',
  ];

  const qualifications = [
    'B.E. / B.Tech (ECE / EEE / Mechatronics / CSE / IT)',
    'Diploma in Engineering',
    'M.E. / M.Tech',
    'B.Sc / M.Sc Electronics / CS',
    'Other Engineering Background',
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');

    // Form validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.department) {
      setFormStatus('error');
      setErrorMessage('Please complete all required fields.');
      return;
    }

    // Simulate backend processing with realistic delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        institution: '',
        qualification: '',
        department: '',
        message: '',
      });
      setFileName('');
    } catch {
      setFormStatus('error');
      setErrorMessage('Failed to submit application. Please reach us at contact@mrengineers.in.');
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      {/* Ambient background glows */}
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
            <Users className="w-3.5 h-3.5" /> Join The Movement
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase"
          >
            Engineer Your Future. <br />
            <span className="gradient-text">Build Real Hardware.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base sm:text-xl text-text-secondary leading-relaxed"
          >
            We are looking for engineers and interns who are genuinely passionate about hardware,
            automation, microcontrollers, and modern software architecture.
          </motion.p>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            WHY BUILD WITH US (3 Pillars)
           ════════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          <AnimatedSection delay={0.1}>
            <GlassCard className="h-full p-8 border-accent/20">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center text-accent mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Hands-On Prototyping</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                You will not be stuck writing boilerplate reports. You will hold real microcontrollers,
                solder circuits, program PLCs, wire industrial relays, and test live systems.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <GlassCard className="h-full p-8 border-[#FFBE1A]/20">
              <div className="w-12 h-12 rounded-xl bg-[#FFBE1A]/10 border border-[#FFBE1A]/30 flex items-center justify-center text-[#FFBE1A] mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Practical Mentorship</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Work shoulder-to-shoulder with practicing engineers who understand industrial field
                conditions, communication protocols, electrical safety, and modern software stacks.
              </p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <GlassCard className="h-full p-8 border-accent-secondary/20">
              <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 border border-accent-secondary/30 flex items-center justify-center text-accent-secondary mb-6">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-World Projects</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Contribute to real automation deployments, cinema controls, and industrial monitoring
                dashboards that operate on actual client premises in Tamil Nadu.
              </p>
            </GlassCard>
          </AnimatedSection>
        </div>

        {/* ════════════════════════════════════════════════════════════════════
            APPLICATION FORM SECTION
           ════════════════════════════════════════════════════════════════════ */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#10151D] shadow-2xl relative overflow-hidden">
              <div className="mb-8 pb-6 border-b border-white/[0.08]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFBE1A] font-semibold block mb-1">
                  APPLY FOR POSITION OR INTERNSHIP
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Submit Your Candidate Profile
                </h2>
                <p className="text-text-secondary text-sm mt-1">
                  Complete the form below. We review every application for technical curiosity and
                  practical problem-solving mindset.
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
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-text-secondary text-sm max-w-md mx-auto">
                    Thank you for applying to MR.Engineers. Our technical team will review your
                    background and contact you via email or phone regarding next steps.
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
                    {/* Full Name */}
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
                        placeholder="e.g. Karthik Raman"
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
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
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

                    {/* College / Institution */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        College / Institution
                      </label>
                      <input
                        type="text"
                        name="institution"
                        value={formData.institution}
                        onChange={handleInputChange}
                        placeholder="e.g. Government College of Technology"
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-text-muted text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Qualification */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Educational Qualification
                      </label>
                      <select
                        name="qualification"
                        value={formData.qualification}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      >
                        <option value="">Select Qualification</option>
                        {qualifications.map((q) => (
                          <option key={q} value={q}>
                            {q}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Interested Department */}
                    <div>
                      <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                        Interested Department <span className="text-accent">*</span>
                      </label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#090D14] border border-white/10 text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Resume / Portfolio Link or File
                    </label>
                    <div className="relative border-2 border-dashed border-white/10 hover:border-accent/40 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-black/20">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Upload className="w-6 h-6 text-text-muted" />
                        <span className="text-sm text-text-secondary">
                          {fileName ? (
                            <span className="text-accent font-mono font-medium">{fileName}</span>
                          ) : (
                            'Click or drag your resume (.PDF, .DOC, max 10MB)'
                          )}
                        </span>
                        <span className="text-[11px] text-text-muted">
                          Alternatively, you may share a GitHub or LinkedIn link in your message.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-text-secondary uppercase tracking-wider mb-2">
                      Cover Note / Technical Projects You Have Built
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about what you have built, which tools you love, or what you want to master at MR.Engineers..."
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
                        <span>Submitting Candidate Profile...</span>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <Send className="w-4 h-4 ml-1" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* Transparency Notice */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] text-xs text-text-muted space-y-1">
                <p>
                  <strong>Notice:</strong> Internship positions are practical project-based learning
                  opportunities with MR.Engineers. They are not accredited degree programs or
                  guaranteed corporate placements. Selection is based purely on technical aptitude,
                  curiosity, and mutual project alignment.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
