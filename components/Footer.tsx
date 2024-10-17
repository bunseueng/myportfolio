"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { IconLocation } from "@tabler/icons-react";
import { useScrollAnimation } from "./Tech";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const y = useScrollAnimation(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(scrollYProgress, springConfig);
  const titleOpacity = useTransform(y, [0, 0.1, 0.9, 1], [0, 1, 1, 1]);
  const titleY = useTransform(
    y,
    [0, 0.1, 0.9, 1],
    ["30px", "0px", "0px", "-30px"]
  );

  return (
    <footer
      className="relative w-full flex flex-col items-center justify-center overflow-hidden py-20 z-1"
      id="contact"
      ref={ref}
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #64ffda 1px, transparent 1px), linear-gradient(to bottom, #64ffda 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          x,
        }}
      />
      <div className="max-w-6xl mx-auto w-full px-4 z-50">
        <div className="w-full">
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="max-w-[600px] mx-auto text-center mb-20"
          >
            <motion.h2 className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
              Get In Touch
            </motion.h2>
            <motion.p className="text-center text-md text-gray-400 uppercase font-semibold my-10 md:my-0">
              I&#39;m currently looking for any new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&#39;ll try my best to get back to you!
            </motion.p>
            <a href="mailto:bunseueng@gmail.com">
              <MagicButton
                title="Let's get in touch"
                icon={<IconLocation />}
                position="right"
              />
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-x-4">
          <p className="text-[#8892b0]">Copyright @ 2024 Bunseu</p>
          <div className="text-sm text-center mt-5">
            <p className="text-[#8892b0]">
              Built with Next.js, Tailwind CSS, and Framer Motion.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
