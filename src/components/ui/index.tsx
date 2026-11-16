'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AnimatedSection, scaleOnHover } from '@/lib/animations';
import { LucideIcon } from 'lucide-react';
export { BrandLogo, MonogramSvg } from './BrandLogo';
export { LinkedinIcon, InstagramIcon, YoutubeIcon } from './SocialIcons';

// ─── Section Heading ────────────────────────────────────────────────────────────

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  gradientTitle?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  gradientTitle = true,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <AnimatedSection className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-mono tracking-wider uppercase border border-accent/20 bg-accent/5 text-accent ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          gradientTitle ? 'gradient-text-white' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-text-secondary leading-relaxed ${
            isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}

// ─── Glass Card ────────────────────────────────────────────────────────────────

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { scale: 1.02 } : undefined}
      whileTap={hoverEffect ? { scale: 0.98 } : undefined}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      onClick={onClick}
      className={`glass-card rounded-xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden ${
        glow ? 'hover:border-accent/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.12)]' : ''
      } ${className}`}
    >
      <div className="relative z-10">{children}</div>
      {/* Subtle corner light reflection */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/[0.04] to-transparent rounded-bl-full pointer-events-none" />
    </motion.div>
  );
}

// ─── Gradient Button (Primary CTA) ─────────────────────────────────────────────

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'cyan' | 'yellow';
}

export function GradientButton({
  children,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
  variant = 'cyan',
}: ButtonProps) {
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  const bgStyle =
    variant === 'yellow'
      ? 'bg-gradient-to-r from-[#FFBE1A] to-[#FF9E00] text-black hover:shadow-[0_0_25px_rgba(255,190,26,0.35)]'
      : 'btn-primary';

  if (href) {
    return (
      <Link href={href} className={`${bgStyle} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${bgStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {content}
    </motion.button>
  );
}

// ─── Outline Button (Secondary CTA) ───────────────────────────────────────────

export function OutlineButton({
  children,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`btn-secondary ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`btn-secondary ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {content}
    </motion.button>
  );
}

// ─── Tech Badge ────────────────────────────────────────────────────────────────

export function TechBadge({
  text,
  className = '',
  highlight = false,
}: {
  text: string;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-mono tracking-wide border transition-all duration-200 ${
        highlight
          ? 'border-accent/40 bg-accent/10 text-accent font-medium'
          : 'border-white/10 bg-[#161D28]/80 text-text-secondary hover:text-white hover:border-white/20'
      } ${className}`}
    >
      {text}
    </span>
  );
}

// ─── Section Divider ───────────────────────────────────────────────────────────

export function SectionDivider({ className = '' }: { className?: string }) {
  return <div className={`section-divider my-16 sm:my-24 w-full ${className}`} />;
}
