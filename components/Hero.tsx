"use client";

import React from "react";
import { TypewriterEffectSmooth } from "./ui/TypeWriter";
import { motion } from "framer-motion";
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-14 md:px-6 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="w-full mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <p className="text-[#64ffda] dark:text-neutral-200 text-xl font-semibold mb-5 md:mb-0">
                Hi, my name is{" "}
              </p>
              <p
                className="font-bold text-[#ccd6f6] mb-1"
                style={{ fontSize: "clamp(40px, 8vw, 80px)" }}
              >
                Eng Bunseu 👋
              </p>
              <TypewriterEffectSmooth words={words} />
              <div>
                <p className="max-w-[540px] text-lg text-[#8892b0] mt-5 mb-10">
                  I create beautiful, responsive, and user-friendly web
                  applications. With 4 years of experience, I&#39;m passionate
                  about turning ideas into reality through code.
                </p>
              </div>
              <SocialIconComponent />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
