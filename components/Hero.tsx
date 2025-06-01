"use client";

import React, { lazy, Suspense } from "react";
import { TypewriterEffectSmooth } from "./ui/TypeWriter";
import SocialIconComponent from "./ui/SocialIcon";

const BackgroundBeams = lazy(() =>
  import("./ui/BackgroundBeams").then((mod) => ({
    default: mod.BackgroundBeams,
  }))
);

const words = [
  { text: "a", className: "text-[#8892b0]" },
  { text: "Front-end", className: "text-[#8892b0]" },
  { text: "Developer", className: "text-[#8892b0]" },
  { text: "based", className: "text-[#8892b0]" },
  { text: "in", className: "text-[#8892b0]" },
  { text: "Cambodia.", className: "text-cyan-400 dark:text-cyan-400" },
];

const MemoizedSocialIconComponent = React.memo(SocialIconComponent);

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <BackgroundBeams className="absolute inset-0" />
      </Suspense>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-6 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full mb-8 md:mb-0">
            <p className="text-[#64ffda] dark:text-neutral-200 text-xl font-semibold mb-5 md:mb-0">
              Hi, my name is{" "}
            </p>
            <h1 className="font-bold text-[#ccd6f6] mb-1 text-4xl md:text-6xl lg:text-7xl">
              Eng Bunseu 👋
            </h1>
            <TypewriterEffectSmooth words={words} />
            <p className="max-w-[540px] text-sm md:text-lg text-[#8892b0] mt-5 mb-10">
              I create beautiful, responsive, and user-friendly web
              applications. With 4 years of experience, I&#39;m passionate about
              turning ideas into reality through code.
            </p>
            <MemoizedSocialIconComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
