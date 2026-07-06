import SectionHead from "@/components/ui/SectionHead";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  return (
    <section id="about" className="bg-night py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn>
              <SectionHead
                eyebrow="About Us"
                title="Helping brands grow through visibility."
                light
              />
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-white/60 leading-relaxed mb-6">
                Founded in 2016, Fetan Outdoor Advertising has grown from a
                single LED placement on Bole Road to Ethiopia&apos;s leading outdoor
                media network — with 85+ locations, 400+ campaigns, and 230+
                clients across telecom, finance, FMCG, and more.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                We believe every brand deserves to be seen. Our team combines
                local market knowledge with world-class creative and technology
                to deliver campaigns that drive real business results.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-l-2 border-amber pl-4 py-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-amber mb-2">
                  Mission
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Connect brands with audiences through premium outdoor media
                  placements across Ethiopia.
                </p>
              </div>
              <div className="border-l-2 border-amber pl-4 py-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-amber mb-2">
                  Vision
                </h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Become East Africa&apos;s most trusted outdoor advertising
                  partner by 2030.
                </p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="relative bg-violet-panel rounded-2xl min-h-[400px] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,138,30,0.1)_0%,transparent_70%)]" />
              <span className="font-display text-[100px] md:text-[140px] text-white/[0.06] uppercase tracking-wider select-none">
                EST. 2016
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
