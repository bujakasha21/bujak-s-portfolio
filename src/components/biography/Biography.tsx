import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";

import BujakDavor from "@/assets/images/500.png";
import SlideToRight from "../effects/SlideToRight";
import Links from "../icons-links/Links";

type Items = {
  id: Key;
  header: string;
  photo: StaticImageData;
};

const Description: Items[] = [
  {
    id: 1,
    header: "<About me />",
    photo: BujakDavor,
  },
];

const Biography = () => {
  return (
    <div id="about-me" className="w-full h-screen bg-secondaryCol">
      <div className="flex items-center w-11/12 md:w-4/5 h-full mx-auto">
        {Description.map((desc) => (
          <div
            key={desc.id}
            className="flex flex-col md:flex-row-reverse items-center justify-evenly md:justify-between w-full h-full"
          >
            <SlideToRight>
              <div className="flex flex-col text-center md:text-right gap-y-5 md:gap-y-16 w-full pt-10 md:pt-0">
                <h1 className="text-xl md:text-4xl text-darkerCol font-bold">
                  {desc.header}
                </h1>

                <p className="text-mainCol text-md md:text-lg font-medium">
                  Hey there, I&apos;m Davor Bujak, a Front-End Developer from
                  Sarajevo, Bosnia and Herzegovina, where Development and Design
                  fuel my passion. But my journey doesn&apos;t end there. Beyond
                  the realm of pixels and code, I&apos;m also deeply immersed in
                  the world of Ju-Jitsu, where I hold the esteemed title of
                  World Vice-Champion. This ancient martial art isn&apos;t just
                  a sport for me, it&apos;s a way of life — a discipline that
                  teaches me perseverance, resilience, and the importance of
                  constant growth. Each pursuit, whether it&apos;s coding or
                  combat, fuels my passion for excellence and my relentless
                  pursuit of mastery. Join me in this exciting blend of
                  creativity, coding, and combat as I strive for excellence in
                  every arena.
                </p>
              </div>
              <div className="py-10 w-full">
                <Links />
              </div>
            </SlideToRight>
            <div className="w-1/2">
              <Image
                src={desc.photo}
                className="rounded-full"
                width={1500}
                height={1500}
                alt="bujakdavor"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biography;
