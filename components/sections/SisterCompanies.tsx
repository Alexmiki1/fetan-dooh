"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn, { FadeInStagger, fadeInChild } from "@/components/ui/FadeIn";

const companies = [
  {
    id: "fetan-advertising",
    name: "Fetan Advertising",
    subtitle: "Creative Excellence",
    description: "Our sister company specializing in full-service advertising, brand strategy, and creative campaigns that leave a lasting impact.",
    link: "https://www.fetanadvertising.com/",
    theme: "bg-gradient-to-br from-dusk to-night border-dusk",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: "fetan-led",
    name: "Fetan LED",
    subtitle: "Premium Hardware Supply",
    description: "The leading supplier of high-quality LED screens and digital signage hardware in Ethiopia. Building the foundation of DOOH.",
    link: "https://www.fetanled.com/",
    theme: "bg-night border-night shadow-amber-lg",
    icon: (
      <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function SisterCompanies() {
  return (
    <section className="bg-paper py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(252,178,22,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(30,42,74,0.05),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <FadeIn>
          <SectionHead
            eyebrow="The Fetan Ecosystem"
            title="Explore our sister companies."
            description="Fetan DOOH is part of a larger network dedicated to transforming the advertising and technology landscape in Ethiopia."
            center
          />
        </FadeIn>

        <FadeInStagger className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {companies.map((company) => (
            <motion.div key={company.id} variants={fadeInChild}>
              <Link 
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block relative p-8 md:p-12 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${company.theme}`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber/0 via-amber/0 to-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 group-hover:bg-amber/20 transition-all duration-500">
                    {company.icon}
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl text-white mb-2 group-hover:text-amber transition-colors">
                    {company.name}
                  </h3>
                  
                  <p className="font-mono text-xs uppercase tracking-widest text-amber mb-6">
                    {company.subtitle}
                  </p>
                  
                  <p className="text-white/70 leading-relaxed mb-8">
                    {company.description}
                  </p>
                  
                  <div className="flex items-center text-white/50 group-hover:text-amber transition-colors font-medium text-sm">
                    Visit Website
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
