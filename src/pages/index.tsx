import Biography from "@/components/biography/Biography";
import ContactUs from "@/components/contact-me/ContactMe";
import HeroSection from "@/components/hero-section/HeroSection";
import Icons from "@/components/icons-links/Icons";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Icons />
      <Biography />
      <Projects />
      <ContactUs />
    </>
  );
}
