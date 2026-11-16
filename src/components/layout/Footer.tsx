import Link from 'next/link';
import { BRAND, NAV_LINKS, SERVICES, SOCIAL_LINKS } from '@/lib/constants';
import { BrandLogo, LinkedinIcon, InstagramIcon, YoutubeIcon } from '@/components/ui';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#07090E] relative overflow-hidden text-sm">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Brand Info (col-span-2) */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-4">
                <BrandLogo size="lg" showTagline={true} />
              </Link>
              <p className="mt-4 text-text-secondary text-sm leading-relaxed max-w-sm">
                Engineering intelligent solutions at the intersection of industrial automation,
                electronics, IoT and software. Built for real-world industrial reliability.
              </p>
              <div className="mt-6 flex flex-col gap-2.5 text-text-muted text-xs">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{BRAND.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent shrink-0" />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                    {BRAND.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-accent/40 hover:bg-accent/10 transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-[#FFBE1A]/40 hover:bg-[#FFBE1A]/10 transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-secondary hover:text-white hover:border-red-500/40 hover:bg-red-500/10 transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Capabilities */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Capabilities
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-text-secondary hover:text-white transition-colors text-sm truncate block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent hover:underline inline-flex items-center gap-1 text-xs font-mono mt-1"
                >
                  <span>All 9 Disciplines</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Inquiries */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Get In Touch
            </h3>
            <p className="text-text-secondary text-xs leading-relaxed mb-4">
              Ready to engineer your next automation or hardware project?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-accent hover:text-black border border-white/[0.1] text-xs font-medium text-white transition-all group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
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
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>ENGINEERING</span>
            <span>•</span>
            <span>AUTOMATION</span>
            <span>•</span>
            <span>IOT</span>
            <span>•</span>
            <span>SOFTWARE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
