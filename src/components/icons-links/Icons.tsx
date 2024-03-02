import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";

import Marquee from "react-fast-marquee";

import Html from "@/assets/icons/html.png";
import Css from "@/assets/icons/css-3.png";
import Js from "@/assets/icons/java-script.png";
import ReactI from "@/assets/icons/atom-(1).png";
import Typescript from "@/assets/icons/typescript.png";
import Photoshop from "@/assets/icons/photoshop.png";
import Illustrator from "@/assets/icons/illustrator.png";
import Figma from "@/assets/icons/figma.png";
import Wordpress from "@/assets/icons/wordpress-logo.png";

type Img = {
  id: Key;
  icons: StaticImageData;
};

const IconVector: Img[] = [
  {
    id: 1,
    icons: Html,
  },
  {
    id: 2,
    icons: Css,
  },
  {
    id: 3,
    icons: Js,
  },
  {
    id: 4,
    icons: ReactI,
  },
  {
    id: 5,
    icons: Typescript,
  },
  {
    id: 6,
    icons: Photoshop,
  },
  {
    id: 7,
    icons: Illustrator,
  },
  {
    id: 8,
    icons: Figma,
  },
  {
    id: 9,
    icons: Wordpress,
  },
];

const Icons = () => {
  return (
    <div className="w-full h-fit bg-lighterCol">
      <div className="flex items-center">
        <Marquee speed={50} direction="right">
          {IconVector.map((icon) => (
            <div key={icon.id} className="w-full p-6 md:p-10">
              <Image className="w-10 md:w-16" src={icon.icons} alt="icons" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Icons;
