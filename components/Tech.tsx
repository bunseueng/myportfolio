"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TechSkills } from "@/app/constants/data";
import { IconDatabaseCog, IconFolderCode, IconTool } from "@tabler/icons-react";
import AnimationCounter from "./AnimationCounter";

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

  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       type: "spring",
  //       stiffness: 300,
  //       damping: 25,
  //     },
  //   },
  // };

  return (
    <section
      id="skill"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full px-4">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="mb-10"
        >
          <motion.p className="text-md text-gray-400 uppercase font-semibold">
            My skills
          </motion.p>
          <motion.h2 className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
            Technologies.
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap items-center justify-center md:justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* {technologies.map((technology) => (
            <motion.div
              className="w-28 h-28"
              key={technology.name}
              variants={itemVariants}
            >
              <BallCanvas icon={technology.icon} />
            </motion.div>
          ))} */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-cyan-500 rounded-md p-4">
              <div className="flex items-center space-x-4">
                <IconFolderCode />
                <h1 className="text-lg font-semibold">Frontend</h1>
              </div>
              {TechSkills.frontend.map((front, frontIndex) => (
                <div className="flex flex-col mt-3.5" key={frontIndex}>
                  <div className="flex items-center justify-between">
                    <h1>{front.name}</h1>
                    <h2 className="text-white">
                      <AnimationCounter from={0} to={front.percentage} />%
                    </h2>
                  </div>
                  <div className="relative w-full h-3 rounded-full border border-cyan-400">
                    <motion.div
                      initial={{ width: "0px" }}
                      animate={{
                        width: isInView ? `${front.percentage}%` : "",
                      }}
                      transition={{ duration: 2.5 }}
                      className="absolute inset-0 h-inherit bg-cyan-500 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex-1 border border-cyan-500 rounded-md p-4 mb-4">
                <div className="flex items-center space-x-4">
                  <IconDatabaseCog stroke={2} />
                  <h1 className="text-lg font-semibold">Backend</h1>
                </div>
                {TechSkills.backend.map((back, backIndex) => (
                  <div className="flex flex-col mt-3.5" key={backIndex}>
                    <div className="flex items-center justify-between">
                      <h1>{back.name}</h1>
                      <h2 className="text-white">
                        <AnimationCounter from={0} to={back.percentage} />%
                      </h2>
                    </div>
                    <div className="relative w-full h-3 rounded-full border border-cyan-400">
                      <motion.div
                        initial={{ width: "0px" }}
                        animate={{
                          width: isInView ? `${back.percentage}%` : "",
                        }}
                        transition={{ duration: 2.5 }}
                        className="absolute inset-0 h-inherit bg-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex-1 border border-cyan-500 rounded-md p-4">
                <div className="flex items-center space-x-4">
                  <IconTool stroke={2} />
                  <h1 className="text-lg font-semibold">Tools</h1>
                </div>
                {TechSkills.tools.map((tool, toolIndex) => (
                  <div className="flex flex-col mt-3.5" key={toolIndex}>
                    <div className="flex items-center justify-between">
                      <h1>{tool.name}</h1>
                      <h2 className="text-white">
                        <AnimationCounter from={0} to={tool.percentage} />%
                      </h2>
                    </div>
                    <div className="relative w-full h-3 rounded-full border border-cyan-400">
                      <motion.div
                        initial={{ width: "0px" }}
                        animate={{
                          width: isInView ? `${tool.percentage}%` : "",
                        }}
                        transition={{ duration: 2.5 }}
                        className="absolute inset-0 h-inherit bg-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
