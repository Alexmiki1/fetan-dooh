"use client";

import { motion } from "framer-motion";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  {
    title: "Prime Locations",
    description:
      "10+ placements on Ethiopia's highest-traffic corridors — Bole, Meskel Square, CMC, and beyond.",
  },
  {
    title: "End-to-End Service",
    description:
      "From creative design to installation and maintenance — one team, one point of contact.",
  },
  {
    title: "Transparent Reporting",
    description:
      "Monthly impression reports, play-count verification, and campaign performance analytics.",
  },
  {
    title: "Flexible Booking",
    description:
      "Weekly LED slots to annual outdoor contracts. Scale up or down as your campaign evolves.",
  },
  {
    title: "Local Expertise",
    description:
      "10+ years navigating Ethiopia's advertising landscape. We know what works and where.",
  },
  {
    title: "Creative Support",
    description:
      "In-house designers craft outdoor-ready artwork optimized for maximum visibility.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-night py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <SectionHead
                eyebrow="Why Fetan"
                title="Built for visibility that connects."
                light
              />
            </FadeIn>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="space-y-6"
            >
              {reasons.map((item) => (
                <motion.li
                  key={item.title}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                  }}
                  className="flex gap-4"
                >
                  <span className="text-amber mt-1 flex-shrink-0">→</span>
                  <div>
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="text-white/50 text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <FadeIn delay={0.2}>
            <div className="relative bg-violet-panel rounded-2xl p-12 min-h-[400px] flex items-end overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,138,30,0.15)_0%,transparent_60%)]" />
              <span className="absolute top-8 right-8 font-display text-[120px] text-white/[0.03] leading-none select-none">
                F
              </span>
              <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-amber/60">
                // visibility.engineered
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
