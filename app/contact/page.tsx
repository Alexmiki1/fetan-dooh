import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Fetan Outdoor Advertising",
  description:
    "Get in touch with Fetan Outdoor Advertising for LED and transit branding campaigns.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Contact />
    </div>
  );
}
