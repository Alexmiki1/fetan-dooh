"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contact } from "@/data/contact";
import SectionHead from "@/components/ui/SectionHead";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { services } from "@/data/services";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-amber/50 transition-colors text-sm";

  return (
    <section id="contact" className="bg-night py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn>
          <SectionHead
            eyebrow="Contact"
            title="Let's talk about your campaign."
            description="Tell us about your goals and we'll recommend the best placements."
            light
          />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("name")}
                    placeholder="Name *"
                    className={inputClass}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("company")}
                    placeholder="Company"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email *"
                    className={inputClass}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone")}
                    placeholder="Phone *"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div>
                <select
                  {...register("service")}
                  className={`${inputClass} appearance-none`}
                  defaultValue=""
                >
                  <option value="" disabled className="bg-night">
                    Select a service *
                  </option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title} className="bg-night">
                      {s.title}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1">{errors.service.message}</p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  placeholder="Tell us about your campaign *"
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>

              {status === "success" && (
                <p className="text-green-400 text-sm">
                  Thank you! We&apos;ll be in touch within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-amber mb-2">
                    Phone
                  </h4>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-white/70 hover:text-amber transition-colors"
                  >
                    {contact.phoneDisplay}
                  </a>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-amber mb-2">
                    Email
                  </h4>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-white/70 hover:text-amber transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-amber mb-2">
                    Address
                  </h4>
                  <a
                    href={contact.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-amber transition-colors"
                  >
                    {contact.address}
                  </a>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                <iframe
                  src={contact.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Fetan Office Location"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
