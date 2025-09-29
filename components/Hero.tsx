"use client";

import React from "react";
import SocialIconComponent from "./ui/SocialIcon";
import { IconChevronDown } from "@tabler/icons-react";

const MemoizedSocialIconComponent = React.memo(SocialIconComponent);

export default function Hero() {
  const scrollToContent = () => {
    const ele = document.getElementById("about");
    if (ele) {
      ele.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute bottom-4 flex items-center animate-bounce transform duration-100">
        <button
          type="button"
          className="flex flex-col justify-center items-center"
          onClick={scrollToContent}
        >
          <IconChevronDown size={50} className="text-cyan-400" />
          Scroll to explore
        </button>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-6 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full mb-8 md:mb-0">
            <p className="text-[#64ffda] dark:text-neutral-200 text-xl font-semibold mb-5 md:mb-0">
              Hi, my name is{" "}
            </p>
            <h1 className="font-bold text-[#ccd6f6] mb-1 text-4xl md:text-6xl lg:text-7xl">
              Eng Bunseu 👋
            </h1>
            <h1 className="text-animation text-[#8892b0] text-base sm:text-xl md:text-3xl font-bold text-center my-4">
              a Junior Fullstack Developer based in{" "}
              <span className="text-cyan-400">Cambodia.</span>
            </h1>
            <p className="max-w-[540px] text-sm md:text-lg text-[#8892b0] mt-5 mb-10">
              I create beautiful, responsive, and user-friendly web
              applications. With 4 years of experience of builing personal
              projects, I&#39;m passionate about turning ideas into reality
              through code.
            </p>
            <MemoizedSocialIconComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
