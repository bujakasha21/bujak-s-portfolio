import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";

import BujakDavor from "@/assets/images/DAVOR-AA1.png";
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
    <div
      id="about-me"
      className="w-full h-[155vh] sm:h-[170vh] md:h-screen bg-secondaryCol overflow-hidden"
    >
      <div className="h-full w-11/12 md:w-4/5 flex flex-col gap-y-16 items-center mx-auto">
        <div className="flex items-center justify-center md:justify-end w-full pt-[7rem] md:pt-[10rem]">
          <h1 className="font-bold text-xl md:text-4xl text-darkerCol">{`<About me />`}</h1>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-y-10 sm:gap-y-0 items-center justify-between">
          <div className="flex items-center justify-center h-full w-full md:w-1/2">
            <Image
              src={BujakDavor}
              className="w-full h-full sm:h-[20rem] sm:w-[20rem] lg:h-[40rem] lg:w-[40rem]"
              alt="bujakdavor"
            />
          </div>
          <div className="flex flex-col justify-end w-full lg:w-1/2 xl:w-2/5">
            <p className="text-mainCol text-sm lg:text-2xl text-center sm:text-right font-medium pb-10 md:pb-16">
              Hey there, I&apos;m Davor Bujak, a Front-End Developer from
              Sarajevo, Bosnia and Herzegovina, where Development and Design
              fuel my passion. But my journey doesn&apos;t end there. Beyond the
              realm of pixels and code, I&apos;m also deeply immersed in the
              world of Ju-Jitsu, where I hold the esteemed title of World
              Vice-Champion. This ancient martial art isn&apos;t just a sport
              for me, it&apos;s a way of life — a discipline that teaches me
              perseverance, resilience, and the importance of constant growth.
              Each pursuit, whether it&apos;s coding or combat, fuels my passion
              for excellence and my relentless pursuit of mastery. Join me in
              this exciting blend of creativity, coding, and combat as I strive
              for excellence in every arena.
            </p>
            <div className="flex items-center justify-center">
              <Links />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
