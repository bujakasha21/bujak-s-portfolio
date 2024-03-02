import Image from "next/image";
import React, { Key } from "react";

import Typewriter from "typewriter-effect";

import SlideToRight from "../effects/SlideToRight";
import SlideToTop from "../effects/SlideToTop";

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
    <div id="home" className="w-full h-screen bg-mainCol">
      <div className="flex items-center w-11/12 md:w-4/5 h-full mx-auto">
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
              <p className="text-center md:text-left text-lg w-full md:w-3/5 text-secondaryCol font-medium pt-10">
                {item.paragraph}
              </p>
            </SlideToTop>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
