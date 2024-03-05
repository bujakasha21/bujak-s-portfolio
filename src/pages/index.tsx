import Biography from "@/components/biography/Biography";
import ContactUs from "@/components/contact-me/ContactMe";
import HeroSection from "@/components/hero-section/HeroSection";
import Icons from "@/components/icons-links/Icons";
import Projects from "@/components/projects/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bujak Davor - Personal Website</title>
        <meta
          name="description"
          content="Explore my projects and skills. Welcome to my portfolio website, where I showcase my projects and skills in the world of software development."
        />
        <meta
          name="keywords"
          content="Bujak Davor, personal website, personal portfolio, next js and typescript project"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Bujak Davor - Personal Website" />
        <meta
          property="og:description"
          content="Explore my projects and skills. Welcome to my portfolio website, where I showcase my projects and skills in the world of software development."
        />
        <meta property="og:image" content="/src/assets/images/portfolio.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <Icons />
      <Biography />
      <Projects />
      <ContactUs />
    </>
  );
}
