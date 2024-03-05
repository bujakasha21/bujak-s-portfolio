import Image from "next/image";
import React, { Key } from "react";

import Bujakasha from "@/assets/images/DAVOR-ss.png";

import Typewriter from "typewriter-effect";

import SlideToRight from "../effects/SlideToRight";
import SlideToTop from "../effects/SlideToTop";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen sm:h-[100vw] md:h-screen bg-mainCol overflow-hidden"
    >
      <div className="absolute inset-0 w-11/12 md:w-4/5 mt-[8rem] mb-8 lg:mt-[12rem] h-full mx-auto">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-8 sm:gap-y-2 md:gap-y-10 w-full">
          <SlideToRight>
            <h4 className="text-xl font-bold md:text-4xl text-darkerCol">
              {`<Hello World />`}
            </h4>
          </SlideToRight>
          <h1 className="text-4xl md:text-6xl text-center md:text-left font-bold lg:text-8xl text-secondaryCol h-0 md:h-[5rem]">
            I&apos;m <span className="text-lighterCol">Bujak Davor</span>
            .
            <br />
            <Typewriter
              options={{
                strings: ["Frontend Developer.", "Graphic Designer."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <SlideToTop>
            <div className="flex flex-col items-start justify-start pt-20 lg:pt-[8rem] gap-y-14">
              <p className="text-center md:text-left text-md md:text-xl lg:text-2xl w-full md:w-3/5 text-secondaryCol font-normal pt-10 sm:pt-5 md:pt-0">
                Hello there, I&apos;m a passionate React Frontend Developer and
                Graphic Designer based in Sarajevo, BiH.{" "}
              </p>
              <div className="flex flex-col items-center justify-center md:justify-start w-full sm:flex-row gap-y-6 gap-x-10">
                <Link
                  href="#projects"
                  className="flex rounded border-0 bg-lighterCol py-2 md:py-4  px-8 md:px-10 text-lg font-medium text-mainCol hover:text-mainCol hover:px-12 transition-all ease-in focus:outline-none"
                >
                  My Projects
                </Link>
                <Link
                  href="#contact-me"
                  className="rounded border border-lighterCol bg-transparent py-2 md:py-4 px-8 md:px-10 text-xl text-lighterCol font-medium hover:px-12 transition-all ease-in focus:outline-none"
                >
                  Hire me
                </Link>
              </div>
            </div>
          </SlideToTop>
        </div>
      </div>
      <div className="hidden md:flex items-end justify-end h-screen w-full">
        <Image src={Bujakasha} className="h-full w-[550px] opacity-15" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
