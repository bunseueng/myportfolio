"use client";

import React, { useRef } from "react";
import { motion, useInView, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconLocation } from "@tabler/icons-react";
import { PinContainer } from "./ui/PinCard";
import { useScrollAnimation } from "./Tech";
import { recentProjects } from "@/app/constants/data";

const RecentProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const y = useScrollAnimation(ref);

  const titleOpacity = useTransform(y, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(
    y,
    [0, 0.2, 0.8, 1],
    ["50px", "0px", "0px", "-50px"]
  );

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="project"
      className="relative w-full min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto w-full px-4">
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="mb-10"
        >
          <p className="text-md text-gray-400 uppercase font-semibold">
            A small selection of
          </p>
          <h2 className="text-purple-300 font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins">
            recent projects.
          </h2>
        </motion.div>
        <motion.div
          className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {recentProjects.map((item) => (
            <motion.div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              variants={itemVariants}
              key={item.id}
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image
                      src="/assets/project/bg.png"
                      alt="bgimg"
                      fill
                      quality={75}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    fill
                    quality={75}
                    style={{ objectFit: "cover" }}
                    className="z-10 absolute bottom-0 rounded-xl"
                  />
                </div>

                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon5"
                          className="p-2"
                          fill
                          quality={75}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    ))}
                  </div>

                  <Link
                    href={item.link}
                    target={"_blank"}
                    className="flex justify-center items-center"
                  >
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <IconLocation className="ms-3" color="#CBACF9" />
                  </Link>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentProjects;
