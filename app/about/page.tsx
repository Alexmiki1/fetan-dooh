import type { Metadata } from "next";
import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About — Fetan Outdoor Advertising",
  description:
    "Learn about Fetan Outdoor Advertising — Ethiopia's leading outdoor media company since 2016.",
};

const timeline = [
  { year: "2016", event: "Founded with first LED screen placement on Bole Road" },
  { year: "2018", event: "Expanded to 20 locations across Addis Ababa" },
  { year: "2019", event: "Launched LED screen network at major intersections" },
  { year: "2021", event: "Introduced transit branding with bus fleet partnerships" },
  { year: "2023", event: "Reached 60+ locations and 300+ campaigns" },
  { year: "2025", event: "Opened regional offices in Hawassa and Bahir Dar" },
];

const team = [
  { name: "Abebe Kebede", role: "Founder & CEO", initials: "AK" },
  { name: "Meron Assefa", role: "Head of Operations", initials: "MA" },
  { name: "Yonas Tesfaye", role: "Creative Director", initials: "YT" },
  { name: "Sara Haile", role: "Client Relations", initials: "SH" },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="bg-night py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionHead
              eyebrow="Our Story"
              title="A decade of visibility."
              description="From one LED screen to Ethiopia's most connected outdoor media network."
              light
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-3xl space-y-6 text-white/60 leading-relaxed">
              <p>
                Fetan Outdoor Advertising was born from a simple observation: in a
                city as vibrant and fast-growing as Addis Ababa, the brands that
                thrive are the ones people see every day. Since 2016, we&apos;ve
                built the infrastructure to make that visibility accessible to
                businesses of every size.
              </p>
              <p>
                What started as a single LED screen on Bole Road has evolved into
                a network of 10+ placements spanning LED displays, transit wraps,
                and event activations. We&apos;ve powered campaigns for
                Ethiopia&apos;s largest brands — Ethio Telecom, Dashen Bank,
                Habesha Brewery — and hundreds of growing businesses.
              </p>
              <p>
                Our team of 40+ professionals combines deep local market
                knowledge with international best practices in outdoor media
                planning, creative design, and campaign analytics.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-paper py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionHead eyebrow="Timeline" title="Our journey." center />
          </FadeIn>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.05}>
                <div className="flex gap-6 pb-8 border-l-2 border-amber/30 pl-8 relative">
                  <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-amber" />
                  <div>
                    <span className="font-mono text-sm text-amber">{item.year}</span>
                    <p className="text-night/70 mt-1">{item.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-night py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <SectionHead eyebrow="Team" title="The people behind the placements." light center />
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4">
                    <span className="font-mono text-lg text-amber font-bold">
                      {member.initials}
                    </span>
                  </div>
                  <h3 className="font-medium text-white">{member.name}</h3>
                  <p className="text-white/50 text-sm mt-1">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
