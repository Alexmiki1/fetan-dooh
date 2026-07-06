import Link from "next/link";
import SectionHead from "@/components/ui/SectionHead";
import ServiceCard from "@/components/ui/ServiceCard";
import FadeIn, { FadeInStagger } from "@/components/ui/FadeIn";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Our Services"
            title="Outdoor advertising, every format."
            description="From dynamic LED screens to transit wraps — we place your brand where Ethiopia looks."
          />
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-dim transition-colors font-medium"
          >
            View all services →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
