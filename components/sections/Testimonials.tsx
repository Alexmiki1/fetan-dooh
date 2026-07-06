import SectionHead from "@/components/ui/SectionHead";
import TestimonialCard from "@/components/ui/TestimonialCard";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Testimonials"
            title="What our clients say."
            center
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
