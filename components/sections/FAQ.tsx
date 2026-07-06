"use client";

import { useState } from "react";
import SectionHead from "@/components/ui/SectionHead";
import FAQItem from "@/components/ui/FAQItem";
import FadeIn from "@/components/ui/FadeIn";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-paper py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="FAQ"
            title="Frequently asked questions."
            center
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openId === faq.id}
                onToggle={() =>
                  setOpenId(openId === faq.id ? null : faq.id)
                }
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
