"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import dynamic from "next/dynamic";
import { useRef, useEffect, useState } from "react";
import { technologies } from "@/app/constants/data";

const BallCanvas = dynamic(() => import("./ui/CanvasBall"), { ssr: false });

export const useScrollAnimation = (ref: React.RefObject<HTMLElement>) => {
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    if (!ref.current) return;
    const setValues = () => {
      setElementTop(ref.current?.offsetTop ?? 0);
      setClientHeight(window.innerHeight);
    };
    setValues();
    window.addEventListener("resize", setValues);
    return () => window.removeEventListener("resize", setValues);
  }, [ref]);

  const initial = elementTop - clientHeight;
  const final = elementTop + 300;

  const yRange = useTransform(scrollY, [initial, final], [0, 1]);
  const y = useSpring(yRange, {
    stiffness: 1000,
    damping: 100,
    restDelta: 0.001,
  });

  return y;
};

export default function Component() {
  const ref = useRef<HTMLElement>(null);
  const y = useScrollAnimation(ref);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const titleOpacity = useTransform(y, [0, 0.1, 0.9, 1], [1, 1, 1, 0.5]);
  const titleY = useTransform(
    y,
    [0, 0.1, 0.9, 1],
    ["0px", "0px", "0px", "-30px"]
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        stiffness: 200,
        damping: 20,
      },
    },
  };

  const isInView = useInView(ref, { amount: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        // Scrolling down
        ref.current?.classList.remove("scroll-up");
        ref.current?.classList.add("scroll-down");
      } else {
        // Scrolling up
        ref.current?.classList.remove("scroll-down");
        ref.current?.classList.add("scroll-up");
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <section
      id="skill"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden transition-all duration-300"
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
          className="flex flex-wrap justify-center gap-10 mt-14"
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
