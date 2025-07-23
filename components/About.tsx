"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

export default function OptimizedAbout() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.2,
      },
    },
  };

  const technologies = [
    "React.js",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "MongoDB",
    "Prisma",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center pb-20 overflow-hidden"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasAnimated ? "visible" : "hidden"}
      >
        <motion.div className="mb-20">
          <motion.p
            className="text-md text-gray-400 uppercase font-semibold"
            variants={itemVariants}
          >
            Introducing
          </motion.p>
          <motion.h2
            className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins"
            variants={itemVariants}
          >
            About Me.
          </motion.h2>
        </motion.div>
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              className="w-full md:w-[50%] text-[#8892b0]"
              variants={containerVariants}
            >
              <motion.p variants={itemVariants} className="text-lg mb-4">
                I&#39;m Eng Bunseu, a{" "}
                <span className="text-[#64ffda]">passionate</span> web developer
                with 4 years of experience in creating{" "}
                <span className="text-[#64ffda]">
                  stunning and user-friendly websites
                </span>
                . My journey in web development started with a{" "}
                <span className="text-[#64ffda]">
                  love for solving complex problems
                </span>{" "}
                through code, and that passion continues to drive me today.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg mb-4">
                I specialize in building responsive, modern web applications
                using{" "}
                <span className="text-[#64ffda]">
                  technologies like React, Next.js, Tailwind CSS and Node.js
                </span>
                . I enjoy{" "}
                <span className="text-[#64ffda]">collaborating with teams</span>{" "}
                to create functional and aesthetically pleasing user
                experiences. When I&#39;m not coding, you can find me{" "}
                <span className="text-[#64ffda]">
                  exploring the latest web development trends
                </span>{" "}
                or contributing to{" "}
                <span className="text-[#64ffda]">open-source projects</span>.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg mb-8">
                I&#39;m always eager to take on{" "}
                <span className="text-[#64ffda]">new challenges</span> and bring
                ideas to life through{" "}
                <span className="text-[#64ffda]">
                  creative coding solutions
                </span>
                .
              </motion.p>
              <motion.p variants={itemVariants}>
                Here are a few technologies I&#34;ve been working with recently:
              </motion.p>
              <motion.ul
                variants={containerVariants}
                className="grid grid-cols-2 list-disc text-sm pl-3 pt-3"
              >
                {technologies.map((tech) => (
                  <motion.li key={tech} variants={itemVariants}>
                    <span className="text-[#64ffda]">{tech}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              className="w-full md:w-[50%] flex justify-center md:justify-end mt-20 md:mt-0"
              variants={containerVariants}
            >
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.97, transition: { duration: 0.2 } }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl"
                  animate={{
                    scale: [1.03, 1.05, 1.03],
                    rotate: [2, 3, 2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <Image
                  src="/myphoto.jpg"
                  alt="Eng Bunseu"
                  fill
                  sizes="(max-width: 768px) 256px, 320px"
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
