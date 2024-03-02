import React, { useEffect, useRef } from "react";
//framer-motion
import { motion, useAnimation, useInView } from "framer-motion";

type Effect = {
  children: React.ReactNode;
};

const SlideToBottom = ({ children }: Effect) => {
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
          start: { opacity: 0, y: -100 },
          end: { opacity: 1, y: 0 },
        }}
        initial="start"
        animate={animation}
        transition={{ duration: 0.7, delay: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideToBottom;
