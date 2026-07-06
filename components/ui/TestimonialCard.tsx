import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-lg transition-shadow duration-300">
      <span className="font-display text-6xl text-amber leading-none select-none">
        &ldquo;
      </span>
      <p className="mt-4 text-night/70 leading-relaxed text-sm">
        {testimonial.quote}
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
          <span className="font-mono text-xs text-amber font-bold">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="font-medium text-night text-sm">{testimonial.name}</p>
          <p className="text-night/50 text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
