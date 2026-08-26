"use client";

import Image from "next/image";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn, { FadeInStagger, fadeInChild } from "@/components/ui/FadeIn";
import { partners } from "@/data/partners";
import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section id="partners" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Our Partners"
            title="Trusted by leading brands."
            description="We've helped Ethiopia's top companies reach millions through outdoor advertising."
            center
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={fadeInChild}
              className="group flex items-center justify-center h-28 md:h-32 transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={160}
                height={64}
                style={partner.scale ? { transform: `scale(${partner.scale})` } : undefined}
                className="max-w-[120px] md:max-w-[160px] max-h-16 md:max-h-20 w-auto object-contain grayscale opacity-70"
              />
            </motion.div>
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
