import type { Metadata } from "next";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services — Fetan Outdoor Advertising",
  description:
    "LED screens, transit branding, event activations, digital campaigns, and creative services across Ethiopia.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionHead
              eyebrow="Our Services"
              title="Every format. Every corridor."
              description="Five ways to put your brand in front of Ethiopia's audiences."
              center
            />
          </FadeIn>

          <div className="space-y-16">
            {services.map((service, i) => (
              <FadeIn key={service.id} delay={i * 0.05}>
                <div
                  id={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start scroll-mt-28"
                >
                  <div>
                    <span className="font-mono text-sm text-amber tracking-wider">
                      {service.number}
                    </span>
                    <h2 className="font-display text-4xl uppercase text-night tracking-wide mt-2">
                      {service.title}
                    </h2>
                    <p className="text-night/60 leading-relaxed mt-4">
                      {service.description}
                    </p>
                    <Button href="/contact" className="mt-6">
                      Request Quote
                    </Button>
                  </div>
                  <ul className="bg-white rounded-2xl p-8 shadow-card space-y-3">
                    {service.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-night/70 text-sm"
                      >
                        <span className="text-amber mt-0.5">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
