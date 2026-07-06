"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { stats } from "@/data/stats";

function CountUp({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      animate(motionVal, value, { duration: 2, ease: "easeOut" });
    }
  }, [inView, motionVal, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="bg-amber-gradient py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-5xl md:text-6xl lg:text-7xl text-white">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/70 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
