import React, { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="hidden md:flex">
      {backToTop && (
        <button
          onClick={scrollUp}
          className="fixed rounded-md bottom-10 right-10 px-4 py-2 w-[50px] h-[50px] border-2 opacity-40 hover:opacity-100 transition-all ease-in border-darkerCol"
        >
          <FaArrowUp className="text-darkerCol" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
