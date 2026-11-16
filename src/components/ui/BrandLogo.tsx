'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  withImage?: boolean;
}

export function BrandLogo({
  className = '',
  size = 'md',
  showTagline = false,
  withImage = true,
}: BrandLogoProps) {
  const sizeMap = {
    sm: { img: 32, text: 'text-lg', dot: 'text-sm' },
    md: { img: 40, text: 'text-xl lg:text-2xl', dot: 'text-base' },
    lg: { img: 56, text: 'text-2xl lg:text-3xl', dot: 'text-lg' },
    xl: { img: 80, text: 'text-4xl lg:text-5xl', dot: 'text-2xl' },
  };

  const current = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {withImage && (
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-black shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/images/logo.jpg"
            alt="MR.Engineers Logo"
            width={current.img}
            height={current.img}
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="flex flex-col">
        <div className={`font-bold tracking-tight ${current.text} leading-none flex items-baseline`}>
          <span className="text-white">MR</span>
          <span className="text-[#FFBE1A] mx-0.5 font-black">.</span>
          <span className="text-white">Engineers</span>
        </div>
        {showTagline && (
          <span className="text-xs text-[#FFBE1A] tracking-wider mt-1 font-medium italic">
            — Learn • Build • Repeat —
          </span>
        )}
      </div>
    </div>
  );
}

// Monogram SVG with exact gear inside R for ultra-sharp vector rendering
export function MonogramSvg({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="120" height="120" rx="20" fill="#080B10" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
      {/* White 'M' */}
      <path
        d="M24 88V32H38L52 64L66 32H80V88H68V52L56 78H48L36 52V88H24Z"
        fill="#FFFFFF"
      />
      {/* Yellow 'R' with Gear in counter */}
      <path
        d="M66 32H90C98.8 32 105 38.2 105 47C105 53.6 100.8 59 95 61.2L107 88H93L82.5 63H77V88H66V32ZM77 43V53H89C92.2 53 94.5 50.8 94.5 48C94.5 45.2 92.2 43 89 43H77Z"
        fill="#FFBE1A"
      />
      {/* Gear teeth inside R */}
      <g transform="translate(86, 48) scale(0.65)">
        <circle cx="0" cy="0" r="11" fill="#080B10" />
        <circle cx="0" cy="0" r="4.5" fill="#FFBE1A" />
        <rect x="-2" y="-14" width="4" height="28" rx="1.5" fill="#080B10" />
        <rect x="-14" y="-2" width="28" height="4" rx="1.5" fill="#080B10" />
        <rect x="-2" y="-14" width="4" height="28" rx="1.5" fill="#080B10" transform="rotate(45)" />
        <rect x="-2" y="-14" width="4" height="28" rx="1.5" fill="#080B10" transform="rotate(-45)" />
        <circle cx="0" cy="0" r="4" fill="#FFBE1A" />
      </g>
    </svg>
  );
}
