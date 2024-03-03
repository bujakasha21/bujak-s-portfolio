import React, { useState } from "react";
import { navLinks } from "./NavBar";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

const menuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const mobileLinkVariants = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.7,
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const MobileNavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive((preOpen) => !preOpen);
  };

  return (
    <>
      <div onClick={toggleMenu} className="flex md:hidden cursor-pointer">
        <div className="text-lg font-medium text-darkerCol">Menu</div>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full py-8 h-screen origin-top bg-lighterCol opacity-95 text-mainCol"
          >
            <div className="flex w-11/12 mx-auto h-full flex-col">
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold text-darkerCol">{`<bujak.davor />`}</h2>
                <p
                  onClick={toggleMenu}
                  className="text-lg font-medium text-mainCol"
                >
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVariants}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full items-center justify-center gap-8"
              >
                {navLinks.map((link) => (
                  <div key={link.id} className="overflow-hidden">
                    <motion.div variants={mobileLinkVariants}>
                      <Link href={link.path}>
                        <h2 className="text-3xl font-bold text-mainCol uppercase">
                          {link.link}
                        </h2>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavBar;
