import Image from "next/image";
import React, { Key } from "react";

import Bujakasha from "@/assets/images/DAVOR-ss.png";

import Typewriter from "typewriter-effect";

import SlideToRight from "../effects/SlideToRight";
import SlideToTop from "../effects/SlideToTop";
import Link from "next/link";

type Props = {
  id: Key;
  heading: string;
  paragraph: string;
};

const Header: Props[] = [
  {
    id: "1",
    heading: "<Hello World />",
    paragraph:
      "Coding enthusiast and graphic design fanatic here! As a Junior Frontend Developer, I've devoted myself to mastering a diverse array of frontend technologies, each contributing to my growth and proficiency in the field.. Dive into my portfolio to witness the fusion of creativity and code, where I craft immersive digital experiences that captivate and inspire.",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[140vh] lg:h-screen bg-mainCol"
    >
      <div className="absolute inset-0 items-center w-11/12 md:w-4/5 pt-[10rem] h-fit mx-auto">
        {Header.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center md:items-start gap-y-12 w-full"
          >
            <SlideToRight>
              <h4 className="text-xl font-bold md:text-4xl text-darkerCol">
                {item.heading}
              </h4>
            </SlideToRight>
            <h1 className="text-4xl text-center md:text-left font-bold md:text-8xl text-secondaryCol">
              I&apos;m <span className="text-lighterCol">Bujak Davor</span>
              .
              <br />
              <Typewriter
                options={{
                  strings: ["FrontEnd Developer.", "Graphic Designer."],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <SlideToTop>
              <div className="flex flex-col items-start justify-start gap-y-20">
                <p className="text-center md:text-left text-md md:text-xl lg:text-2xl w-full md:w-3/5 text-secondaryCol font-medium pt-10">
                  {item.paragraph}
                </p>
                <div className="flex flex-col items-center w-full md:flex-row gap-y-6 gap-x-10">
                  <Link
                    href="#contact-me"
                    className="rounded bg-lighterCol py-2 md:py-4 px-8 md:px-10 text-xl text-mainCol hover:text-mainCol hover:px-10 transition-all ease-in focus:outline-none"
                  >
                    My Projects
                  </Link>
                  <Link
                    href="#projects"
                    className="rounded border border-lighterCol bg-transparent py-2 md:py-4 px-8 md:px-10 text-xl text-lighterCol hover:px-10 transition-all ease-in focus:outline-none"
                  >
                    Hire me
                  </Link>
                </div>
              </div>
            </SlideToTop>
          </div>
        ))}
      </div>
      <div className="hidden md:flex items-end justify-end h-screen w-full">
        <Image src={Bujakasha} className="h-full w-[550px] opacity-15" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
