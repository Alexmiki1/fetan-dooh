"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";

const reasons = [
  {
    title: "Prime Locations",
    description:
      "10+ placements on Ethiopia's highest-traffic corridors, Bole, Meskel Square, CMC, and beyond.",
  },
  {
    title: "End-to-End Service",
    description:
      "From creative design to installation and maintenance, one team, one point of contact.",
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

          <FadeIn delay={0.2} className="h-full">
            <div className="relative rounded-2xl overflow-hidden h-full min-h-[400px] lg:min-h-[600px] shadow-2xl">
              <Image
                src="/images/emirates-billboard.png"
                alt="Why choose Fetan Outdoor Advertising"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-night/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="font-display text-[80px] md:text-[120px] text-white/10 leading-none select-none block mb-4">
                  F
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-amber/80">
                  // visibility.engineered
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
