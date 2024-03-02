import React from "react";
import Links from "../icons-links/Links";

const Footer = () => {
  return (
    <div className="w-full bg-lighterCol">
      <div className="flex flex-col items-center justify-center p-10 gap-y-6">
        <h3 className="text-md md:text-xl font-bold text-center text-mainCol">
          Copyright &copy; 2024. All rights reserved
        </h3>
        <div className="w-[8rem]">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Footer;
