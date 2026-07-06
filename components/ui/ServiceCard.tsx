"use client";

import { motion } from "framer-motion";
import { fadeInChild } from "./FadeIn";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], React.ReactNode> = {
  led: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="3" y="3" width="18" height="14" rx="2" />
      <circle cx="8" cy="10" r="1" fill="currentColor" />
      <circle cx="12" cy="10" r="1" fill="currentColor" />
      <circle cx="16" cy="10" r="1" fill="currentColor" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  transit: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="4" y="6" width="16" height="10" rx="2" />
      <circle cx="8" cy="18" r="2" />
      <circle cx="16" cy="18" r="2" />
      <line x1="4" y1="10" x2="20" y2="10" />
    </svg>
  ),
  event: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M4 8h16M4 8v12h16V8M4 8l2-4h12l2 4" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  ),
  digital: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 8l3 3-3 3" />
      <line x1="12" y1="14" x2="16" y2="14" />
    </svg>
  ),
  creative: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
    </svg>
  ),
};

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInChild}
      className="group bg-white/60 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-sm text-amber tracking-wider">
          {service.number}
        </span>
        <span className="text-amber/60 group-hover:text-amber transition-colors">
          {icons[service.icon]}
        </span>
      </div>
      <h3 className="font-display text-2xl uppercase text-night tracking-wide mb-3">
        {service.title}
      </h3>
      <p className="text-night/60 leading-relaxed text-sm">
        {service.description}
      </p>
    </motion.div>
  );
}
