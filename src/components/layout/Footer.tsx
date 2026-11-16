import Link from 'next/link';
import { BRAND, NAV_LINKS, SERVICES, SOCIAL_LINKS, FOUNDERS } from '@/lib/constants';
import { BrandLogo, LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/ui';
import { MapPin, Mail, Phone, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080D] relative overflow-hidden text-sm">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-accent/5 blur-[140px] pointer-events-none" />

      {/* ── Official Government & Accreditation Trust Banner ──────────────── */}
      <div className="border-b border-white/[0.08] bg-[#090D14]/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2 text-emerald-400 font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GOVT. OF INDIA MSME REGISTERED:</span>
              <strong className="text-white bg-black/60 px-2 py-0.5 rounded border border-white/10 font-mono">
                {BRAND.registration.udyamNumber}
              </strong>
            </div>

            <div className="hidden sm:inline text-white/20">•</div>

            <div className="flex items-center gap-2 text-accent font-mono">
              <Award className="w-4 h-4 text-accent shrink-0" />
              <span>GOVT. REGISTERED ENTERPRISE</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-text-muted font-mono text-[11px]">
            <span>ESTD. 2026</span>
            <span>•</span>
            <span>ERODE, TAMIL NADU</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <BrandLogo size="lg" showTagline={true} />
              </Link>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-md">
                Engineering the Future. Bridging industrial automation, embedded architectures, IoT
                telemetry, and software platforms for real-world enterprise operations.
              </p>

              {/* Registered Contact & Address */}
              <div className="mt-6 flex flex-col gap-2.5 text-text-secondary text-xs">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    <strong>Registered Office:</strong> {BRAND.registeredOffice.fullAddress}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href={`tel:${BRAND.phone}`}
                    className="hover:text-white transition-colors font-mono"
                  >
                    {BRAND.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#FFBE1A] shrink-0" />
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="hover:text-white transition-colors font-mono"
                  >
                    {BRAND.email}
                  </a>
                </div>
              </div>

              {/* Founders Tag */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-text-muted">
                <span>Founders: </span>
                <Link href="/founders" className="text-white hover:text-accent font-medium">
                  {FOUNDERS[0].name}
                </Link>
                <span> &amp; </span>
                <Link href="/founders" className="text-white hover:text-accent font-medium">
                  {FOUNDERS[1].name}
                </Link>
              </div>
            </div>

            {/* Official Social Channels */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all"
                aria-label="MR.Engineers LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-[#FFBE1A]/40 hover:bg-[#FFBE1A]/10 transition-all"
                aria-label="MR.Engineers Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all"
                aria-label="MR.Engineers YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Company (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-white transition-colors text-sm">
                  About Us &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/founders" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Meet Our Founders
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Careers &amp; Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Contact &amp; Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions & Projects (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Solutions &amp; R&amp;D
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Engineering Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link href="/innovation" className="text-accent hover:underline inline-flex items-center gap-1 text-sm">
                  <span>Innovation &amp; R&amp;D</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/services#industrial-automation" className="text-text-secondary hover:text-white transition-colors text-xs truncate block pt-1">
                  • Industrial Automation
                </Link>
              </li>
              <li>
                <Link href="/services#esp32-arduino" className="text-text-secondary hover:text-white transition-colors text-xs truncate block">
                  • ESP32 &amp; Arduino
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Academy & Accreditation (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Education &amp; Outreach
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/academy" className="text-text-secondary hover:text-white transition-colors text-sm">
                  MR.Engineers Academy
                </Link>
              </li>
              <li>
                <Link href="/academy#internships" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Technical Internships
                </Link>
              </li>
              <li>
                <Link href="/collaborations" className="text-text-secondary hover:text-white transition-colors text-sm">
                  College Partnerships
                </Link>
              </li>
              <li>
                <Link href="/collaborations#workshops" className="text-text-secondary hover:text-white transition-colors text-sm">
                  Technical Workshops
                </Link>
              </li>
            </ul>

            <div className="mt-6 pt-4 border-t border-white/[0.06] space-y-2">
              <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] text-xs">
                <span className="font-mono text-emerald-400 font-semibold block text-[11px]">
                  GOVT. RECOGNITION
                </span>
                <span className="text-text-secondary text-[11px] block mt-0.5">
                  MSME Micro Enterprise • UDYAM-TN-07-0161474
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {currentYear} {BRAND.name} (UDYAM-TN-07-0161474). All rights reserved.
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] text-text-muted">
            <span>LEARN</span>
            <span>•</span>
            <span>BUILD</span>
            <span>•</span>
            <span>REPEAT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
