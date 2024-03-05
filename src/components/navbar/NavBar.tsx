import Link from "next/link";
import React, { Key, useState } from "react";
import MobileNavBar from "./MobileNavBar";

export type Links = {
  id: Key;
  link: string;
  path: string;
};

export const navLinks: Links[] = [
  {
    id: 1,
    link: "Home",
    path: "#home",
  },
  {
    id: 2,
    link: "About me",
    path: "#about-me",
  },
  {
    id: 3,
    link: "Projects",
    path: "#projects",
  },
  {
    id: 4,
    link: "Contact me",
    path: "#contact-me",
  },
];

const NavBar = () => {
  return (
    <nav className="fixed w-full h-fit bg-secondaryCol z-10 shadow-md">
      <div className="w-11/12 md:w-4/5 flex items-center justify-between mx-auto py-6 md:py-8">
        <Link href="#">
          <h2 className="text-xl font-bold text-darkerCol">{`<bujak.davor />`}</h2>
        </Link>

        {/*Mobile*/}
        <MobileNavBar />
        {/*Desktop*/}
        <div className="hidden md:flex items-center gap-x-20">
          {navLinks.map((link) => (
            <div key={link.id}>
              <Link href={link.path}>
                <h2 className="text-lg font-medium text-mainCol hover:text-darkerCol transition-all ease-in">
                  {link.link}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
