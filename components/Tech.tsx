"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { technologies } from "@/app/constants/data";

const BallCanvas = dynamic(() => import("./ui/CanvasBall"), { ssr: false });

export const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const { scrollY } = useScroll();
  const [elementTop, setElementTop] = React.useState(0);
  const [clientHeight, setClientHeight] = React.useState(0);

  React.useEffect(() => {
    if (!ref.current) return;
    const setValues = () => {
      setElementTop(ref.current?.offsetTop ?? 0);
      setClientHeight(window.innerHeight);
    };
    setValues();
    document.addEventListener("scroll", setValues, { passive: true });
    window.addEventListener("resize", setValues, { passive: true });
    return () => {
      document.removeEventListener("scroll", setValues);
      window.removeEventListener("resize", setValues);
    };
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + 300;

  return useTransform(scrollY, [initial, final], [0, 1]);
};

export default function Tech() {
  const ref = useRef<HTMLElement>(null);
  const y = useScrollAnimation(ref);
  const isInView = useInView(ref, { amount: 0.1, once: true });

  const titleOpacity = useTransform(y, [0, 0.5, 1], [1, 1, 1]);
  const titleY = useTransform(y, [0, 0.5, 1], ["0px", "0px", "-30px"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
  };

  return (
    <section
      id="skill"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full px-4">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="mb-20"
        >
          <motion.p className="text-md text-gray-400 uppercase font-semibold">
            My skills
          </motion.p>
          <motion.h2 className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
            Technologies.
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-between gap-10 mt-14"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {technologies.map((technology) => (
            <motion.div
              className="w-28 h-28"
              key={technology.name}
              variants={itemVariants}
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
