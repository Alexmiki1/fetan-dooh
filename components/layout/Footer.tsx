import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { contact } from "@/data/contact";

const footerLinks = {
  Services: [
    { label: "LED Screens", href: "/services#led" },
    { label: "Transit Branding", href: "/services#transit" },
    { label: "Event Branding", href: "/services#event" },
  ],
  Portfolio: [
    { label: "Recent Campaigns", href: "/portfolio" },
    { label: "Case Studies", href: "/portfolio" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Logo height={48} />
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xs">
              Premium outdoor advertising across Ethiopia. LED screens,
              transit branding, and event activations since 2016.
            </p>
            <a
              href={contact.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-white/40 text-sm hover:text-amber transition-colors"
            >
              {contact.address}
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="mt-2 block text-white/40 text-sm hover:text-amber transition-colors"
            >
              {contact.phoneDisplay}
            </a>
            <div className="mt-6 flex gap-4">
              {["facebook", "instagram", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-amber hover:border-amber/30 transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs uppercase font-mono">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-mono text-xs uppercase tracking-wider text-amber mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Fetan Outdoor Advertising. All rights reserved.
          </p>
          <a
            href="#"
            className="text-sm text-white/40 hover:text-amber transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
