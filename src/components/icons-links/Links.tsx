import Image, { StaticImageData } from "next/image";
import React, { Key } from "react";

import GitHub from "@/assets/icons/github.png";
import Instagram from "@/assets/icons/instagram.png";
import LinkedIn from "@/assets/icons/linkedin-logo.png";

import SlideToRight from "../effects/SlideToRight";
import Link from "next/link";

type Img = {
  id: Key;
  icons: StaticImageData;
  link: string;
};

const IconVector: Img[] = [
  {
    id: 1,
    icons: GitHub,
    link: "https://github.com/bujakasha21",
  },
  {
    id: 2,
    icons: Instagram,
    link: "https://www.instagram.com/bujakdavor.jj/",
  },
  {
    id: 3,
    icons: LinkedIn,
    link: "https://www.linkedin.com/in/davor-bujak-aa9286290/",
  },
];

const Links = () => {
  return (
    <div className="w-full h-fit">
      <div className="flex items-center justify-center md:justify-end gap-x-5 w-full">
        {IconVector.map((icon) => (
          <div key={icon.id}>
            <Link href={icon.link}>
              <Image
                className="w-8 md:w-10 md:hover:w-14 transition-all ease-in"
                src={icon.icons}
                alt="icons"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
