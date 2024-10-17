"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "./ui/TypeWriter";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import SocialIconComponent from "./ui/SocialIcon";

const words = [
  { text: "a", className: "text-[#8892b0]" },
  { text: "Next.js", className: "text-[#8892b0]" },
  { text: "Developer", className: "text-[#8892b0]" },
  { text: "based", className: "text-[#8892b0]" },
  { text: "in", className: "text-[#8892b0]" },
  { text: "Cambodia.", className: "text-cyan-400 dark:text-cyan-400" },
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3,
            },
          },
        }}
        className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-6 md:py-24"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div className="w-full mb-8 md:mb-0">
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-[#64ffda] dark:text-neutral-200 text-xl font-semibold mb-5 md:mb-0"
            >
              Hi, my name is{" "}
            </motion.p>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="font-bold text-[#ccd6f6] mb-1 text-4xl md:text-6xl lg:text-7xl"
            >
              Eng Bunseu 👋
            </motion.p>
            <TypewriterEffectSmooth words={words} />
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <p className="max-w-[540px] text-sm md:text-lg text-[#8892b0] mt-5 mb-10">
                I create beautiful, responsive, and user-friendly web
                applications. With 4 years of experience, I&#39;m passionate
                about turning ideas into reality through code.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <SocialIconComponent />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
