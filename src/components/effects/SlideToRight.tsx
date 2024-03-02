import React, { useEffect, useRef } from "react";
//framer-motion
import { motion, useAnimation, useInView } from "framer-motion";

type Effect = {
  children: React.ReactNode;
};

const SlideToRight = ({ children }: Effect) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start("end");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="overflow-hidden relative w-fit">
      <motion.div
        variants={{
          start: { opacity: 0, x: -100 },
          end: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate={animation}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideToRight;
