import React, { useState } from "react";

const MobileNavBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="flex md:hidden">
      <button className="block hamburger md:hidden focus:outline-none">
        <span className="hamburger-top"></span>
        <span className="hamburger-mid"></span>
        <span className="hamburger-bot"></span>
      </button>
    </div>
  );
};

export default MobileNavBar;
