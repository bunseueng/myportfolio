/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useRef, useCallback } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/MovingBorder";
import { workExperience } from "@/app/constants/data";

const WorkExperience = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 1]
  );
  const titleY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["50px", "0px", "0px", "-50px"]
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

  const renderWorkExperience = useCallback(() => {
    return workExperience.map((w) => (
      <Button
        key={w.id}
        duration={15000}
        borderRadius="1.75rem"
        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
      >
        <motion.div
          variants={itemVariants}
          className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
        >
          <Image
            src={w.img}
            alt="experience img"
            width={200}
            height={200}
            quality={100}
            className="lg:w-32 md:w-20 w-16"
          />
          <div className="lg:ms-5">
            <h1 className="text-start text-xl md:text-2xl font-bold">
              {w.title}
            </h1>
            <div
              className="text-start text-white-100 mt-3 font-semibold"
              dangerouslySetInnerHTML={{ __html: w.desc }}
            />
          </div>
        </motion.div>
      </Button>
    ));
  }, [itemVariants]);

  return (
    <section
      id="experience"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto w-full px-4 overflow-hidden">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="mb-10"
        >
          <p className="text-md text-gray-400 uppercase font-semibold">
            Experiences
          </p>
          <h2 className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
            My work experience
          </h2>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="w-full grid md:grid-cols-4 grid-cols-1 gap-10 mt-12"
        >
          {renderWorkExperience()}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
