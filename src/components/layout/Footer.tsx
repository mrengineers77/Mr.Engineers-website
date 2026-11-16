import Link from 'next/link';
import { BRAND, NAV_LINKS, SERVICES, SOCIAL_LINKS, FOUNDERS } from '@/lib/constants';
import { BrandLogo, LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/ui';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#06080D] relative overflow-hidden text-sm">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-accent/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (col-span-2) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <BrandLogo size="lg" showTagline={true} />
              </Link>
              <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-sm">
                Engineering the Future. Bridging industrial automation, embedded architectures, IoT
                telemetry, and software platforms for real-world enterprise operations.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 text-text-muted text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{BRAND.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#FFBE1A] shrink-0" />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                    {BRAND.email}
                  </a>
                </div>
              </div>

              {/* Founders Tag */}
              <div className="mt-4 pt-4 border-t border-white/[0.06] text-xs text-text-muted">
                <span>Co-Founders: </span>
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

          {/* Column 2: Company */}
          <div>
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

          {/* Column 3: Solutions & Projects */}
          <div>
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

          {/* Column 4: Academy & Collaborations */}
          <div>
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
                  Internship Programs
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

            <div className="mt-6 pt-4 border-t border-white/[0.06]">
              <span className="text-[11px] font-mono text-text-muted block">
                TAMIL NADU • INDUSTRIAL CORRIDOR
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <div>
            © {currentYear} {BRAND.name}. All rights reserved.
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
