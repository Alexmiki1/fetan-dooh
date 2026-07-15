import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { contact } from "@/data/contact";

const footerLinks = {
  Services: [
    { label: "LED Screens", href: "/services#led" },
    { label: "Digital Campaigns", href: "/services#digital" },
    { label: "Creative Services", href: "/services#creative" },
  ],
  Portfolio: [
    { label: "Recent Campaigns", href: "/portfolio" },
    { label: "Case Studies", href: "/portfolio" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Locations", href: "/locations" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  Socials: [
    { label: "Facebook", href: "https://web.facebook.com/fetanads" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/fetanadvertising/" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UC5fVeNbFLlSAp7UuUN5UE4w" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <Logo className="h-12" />
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
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-white/40 hover:text-amber transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-sm text-white/40 hover:text-amber transition-colors">Terms of Service</Link>
            <a href="#" className="text-sm text-white/40 hover:text-amber transition-colors">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
