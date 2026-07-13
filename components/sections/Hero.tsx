"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { stats } from "@/data/stats";
import { marqueeLocations } from "@/data/locations";

const words = ["Reach", "Thousands", "Every", "Day", "with", "Premium", "Outdoor", "Advertising."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-paper hero-grid overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,138,30,0.12)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <div className="relative rounded-lg p-8 md:p-12 lg:p-16 max-w-4xl mx-auto border border-amber/20 shadow-amber">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.05] tracking-wide text-night text-center">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className={`inline-block mr-[0.3em] ${
                  word === "Premium" ? "text-amber" : ""
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-8 text-center text-night/60 text-lg max-w-2xl mx-auto leading-relaxed"
        >
          Premium digital LED billboards and DOOH advertising across Addis Ababa and Ethiopia&apos;s busiest corridors. Reach thousands every day with high impact outdoor media.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/contact" className="!bg-night !text-white !shadow-none hover:!bg-night/90">Request Quote</Button>
          <Button href="/locations" variant="ghost" className="!text-night !border-night hover:!bg-night/10">
            See Locations →
          </Button>
        </motion.div>

        <div className="mt-16 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeLocations, ...marqueeLocations].map((loc, i) => (
              <span
                key={i}
                className="font-mono text-xs uppercase tracking-[0.2em] text-night mx-8"
              >
                {loc}
                <span className="text-amber mx-4">◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative border-t border-night/10 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl text-night">
                {stat.value}
                <span className="text-amber">{stat.suffix}</span>
              </p>
              <p className="font-mono text-xs uppercase tracking-wider text-night/50 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
