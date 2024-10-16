"use client";

import React, { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useTransform,
  useScroll,
  useSpring,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "./Tech";

export default function Component() {
  const ref = useRef<HTMLElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const y = useScrollAnimation(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleOpacity = useTransform(y, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(
    y,
    [0, 0.2, 0.8, 1],
    ["50px", "0px", "0px", "-50px"]
  );

  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20"
    >
      <motion.div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, #64ffda 1px, transparent 1px), linear-gradient(to bottom, #64ffda 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          x: x,
        }}
      />
      <div className="max-w-6xl mx-auto w-full px-4 relative z-10">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="mb-20"
        >
          <motion.p className="text-md text-gray-400 uppercase font-semibold">
            Introducing
          </motion.p>
          <motion.h2 className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
            About Me.
          </motion.h2>
        </motion.div>
        <div className="max-w-6xl mx-auto mt-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={controls}
              className="w-full md:w-[50%] text-[#8892b0]"
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
                </span>
                through code, and that passion continues to drive me today.
              </motion.p>
              <motion.p variants={itemVariants} className="text-lg mb-4">
                I specialize in building responsive, modern web applications
                using{" "}
                <span className="text-[#64ffda]">
                  technologies like React, Next.js, and Node.js
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
                variants={itemVariants}
                className="grid grid-cols-2 list-disc text-sm pl-3 pt-3"
              >
                <li>
                  <span className="text-[#64ffda]">Next.js</span>
                </li>
                <li>
                  <span className="text-[#64ffda]">Tailwind CSS</span>
                </li>
                <li>
                  <span className="text-[#64ffda]">Node.js</span>
                </li>
                <li>
                  <span className="text-[#64ffda]">TypeScript</span>
                </li>
                <li>
                  <span className="text-[#64ffda]">MongoDB</span>
                </li>
                <li>
                  <span className="text-[#64ffda]">Prisma</span>
                </li>
              </motion.ul>
            </motion.div>

            <div className="w-full md:w-[50%] flex justify-center md:justify-end mt-20 md:mt-0">
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80"
                variants={itemVariants}
                initial="hidden"
                animate={controls}
                style={{
                  y: imageY,
                  rotate: imageRotate,
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl transform rotate-6 scale-105"
                  animate={{
                    scale: [1.05, 1.08, 1.05],
                    rotate: [6, 8, 6],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
                <Image
                  src="/myphoto.jpg"
                  alt="Eng Bunseu"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
