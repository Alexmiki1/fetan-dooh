import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Locations from "@/components/sections/Locations";
import Portfolio from "@/components/sections/Portfolio";
import Partners from "@/components/sections/Partners";
import StatsBanner from "@/components/sections/StatsBanner";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Locations />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Partners />
      <StatsBanner />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
