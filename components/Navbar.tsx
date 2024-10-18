"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";

export default function Navbar() {
  return (
    <nav className="relative">
      <div className="absolute inset-0 max-w-6xl mx-auto py-5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="z-[9999]"
          >
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src="/favicon.svg"
                alt="Logo"
                width={20}
                height={20}
                className="w-10 h-10 md:w-20 md:h-20"
              />
              <h1 className="text-xs md:text-xl font-bold text-cyan-400">
                Bunseu
              </h1>
            </Link>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-x-3 font-bold text-gray-200 cursor-pointer z-[9999]"
          >
            <li className="hover:text-white md:pr-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/bunseujjy"
                className="flex items-center md:space-x-2"
              >
                <IconBrandGithub />
                <span className="text-xs md:text-base">Github</span>
              </a>
            </li>
            <li className="hover:text-white cursor-pointer">
              <Link href="/resume" className="flex items-center md:space-x-2">
                <Image src="/resume.png" alt="resume" width={22} height={22} />
                <span className="text-xs md:text-base">Resume</span>
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
}
